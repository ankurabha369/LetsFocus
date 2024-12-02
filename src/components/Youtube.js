import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Youtube() {
  const [query, setQuery] = useState(""); // Store search query
  const [videos, setVideos] = useState([]); // Store fetched videos
  const [nextPageToken, setNextPageToken] = useState(null); // Token for next page of results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [darkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Fetch YouTube search results
  const searchYouTube = async (searchQuery, pageToken = "") => {
    setLoading(true);
    setError(null);

    const apiKey = "AIzaSyA6zOye_mJq9Eqs-nCrH3TvbKCF6LCStIk"; // Replace with your API Key
    const maxResults = 9; // Limit number of results per request
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=${maxResults}&key=${apiKey}&pageToken=${pageToken}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // If there's a nextPageToken, save it for the "Load More" button
      setNextPageToken(data.nextPageToken || null);

      // Append new results if pageToken exists (for Load More)
      setVideos((prevVideos) =>
        pageToken ? [...prevVideos, ...data.items] : data.items
      );
    } catch (error) {
      setError("Error fetching YouTube data.");
      console.error("Error fetching YouTube data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      searchYouTube(query);
    }
  };

  // Load more videos when the user clicks the button
  const handleLoadMore = () => {
    if (nextPageToken) {
      searchYouTube(query, nextPageToken);
    }
  };

  return (
    <div className="container  mt-4 p-2">
      {/* Search Form */}
      <div className="flex mb-10 w-full text-sm font-serif  ">
        <a
          className="cursor-pointer"
          target="_blank"
          href="https://www.youtube.com"
        >
          <p className="flex items-center bg-white rounded-md  ">
            <FontAwesomeIcon
              className="p-2 text-2xl rounded-md text-red-600"
              icon={faYoutube}
            />
            <p className="hidden text-black sm:block pr-4">YouTube</p>
          </p>
        </a>

        <form onSubmit={handleSubmit} className="flex justify-center w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for lo-fi music..."
            className="w-52 sm:w-1/2 py-2 px-4 text-[#2a2929]  rounded-lg shadow-lg"
          />
          <button
            type="submit"
            className="ml-3 p-2 h-10 w-10 bg-blue-500 text-white rounded-lg shadow-md"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <p className="text-center m-2">
          <FontAwesomeIcon icon={faSpinner} spinPulse />
        </p>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Display Search Results */}
      <div
        className="w-full h-[70vh]  p-4 rounded-lg  overflow-y-scroll scrollbar2"
        id="scrollbar2"
      >
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className={`p-2 bg-white/30 backdrop-blur-md ${
                darkMode ? "text-[#2a2929]" : "text-white"
              }  rounded-lg shadow-md`}
            >
              <iframe
                className="w-full rounded-md"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3 className="text-sm font-serif mt-3 ">
                {video.snippet.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {nextPageToken && !loading && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleLoadMore}
              className="bg-violet-500 text-white p-2 rounded-lg shadow-md"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Youtube;
