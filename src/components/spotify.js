import React, { useState } from "react";

const SpotifyGrid = () => {
  // State to store playlists
  const [playlists, setPlaylists] = useState([
    {
      id: "playlist2",
      title: "Deep Focus",
      url: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0",
    },
    {
      id: "playlist4",
      title: "Brain Food",
      url: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXLeA8Omikj7?",
    },
    {
      id: "playlist4",
      title: "Lo-fi beats",
      url: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?",
    },
    {
      id: "playlist4",
      title: "Lo-fi Playlist",
      url: "https://open.spotify.com/embed/playlist/6YthLddKurotFE4obqvtTI?utm_source=generator",
    },
    {
      id: "playlist4",
      title: "Focus Flow",
      url: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZZbwlv3Vmtr?",
    },
    {
      id: "playlist1",
      title: "Peaceful Piano",
      url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator",
    },
    {
      id: "playlist4",
      title: "Instrumental Study",
      url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8?",
    },
    {
      id: "playlist4",
      title: "Workday Lounge",
      url: "https://open.spotify.com/embed/playlist/37i9dQZF1DWT5lkChsPmpy?",
    },
    {
      id: "playlist4",
      title: "Productive Morning",
      url: "https://open.spotify.com/embed/playlist/2wcwHrVSPVHdwKkBpqN4kI?",
    },
    {
      id: "playlist3",
      title: "Indie Pop Paradise",
      url: "https://open.spotify.com/embed/playlist/6CYnCks8KIZB6VcO9Yylc0?utm_source=generator",
    },
  ]);

  // State to handle form input for new playlist
  const [newPlaylist, setNewPlaylist] = useState({ title: "", url: "" });

  // Function to extract the playlist ID and generate embed URL
  const getEmbedUrl = (url) => {
    const playlistMatch = url.match(
      /https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)\?/
    );
    if (playlistMatch) {
      return `https://open.spotify.com/embed/playlist/${playlistMatch[1]}?utm_source=generator`;
    }

    const albumMatch = url.match(
      /https:\/\/open\.spotify\.com\/album\/([a-zA-Z0-9]+)\?/
    );
    if (albumMatch) {
      return `https://open.spotify.com/embed/album/${albumMatch[1]}?utm_source=generator`;
    }

    return "";
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlaylist((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to add new playlist
  const handleAddPlaylist = (e) => {
    e.preventDefault();
    if (newPlaylist.url) {
      const embedUrl = getEmbedUrl(newPlaylist.url);
      if (embedUrl) {
        const newPlaylistData = {
          id: `playlist-${Date.now()}`, // Unique ID using timestamp
          url: embedUrl,
          addedByUser: true, // Mark as user-added
        };

        setPlaylists((prev) => {
          const updatedPlaylists = [...prev, newPlaylistData];
          // Sort the playlists to put user-added playlists first
          updatedPlaylists.sort((a, b) => (a.addedByUser ? -1 : 1));
          return updatedPlaylists;
        });
        setNewPlaylist({ url: "" }); // Clear input fields
      } else {
        alert("Invalid Spotify URL!");
      }
    }
  };

  return (
    <div className="md:h-[83vh] h-[80vh] mt-8  overflow-y-scroll">
      {/* Form to add new playlist */}
      <div className="flex justify-center">
        <form
          onSubmit={handleAddPlaylist}
          className="flex gap-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg"
        >
          <input
            type="url"
            name="url"
            value={newPlaylist.url}
            onChange={handleInputChange}
            placeholder="Spotify Playlist/Album URL"
            className="p-2 text-black  rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Playlist
          </button>
        </form>
      </div>

      {/* Display Playlist Grid */}
      <div className="grid grid-cols-1 gap-2 mt-10  md:grid-cols-2 lg:grid-cols-3  md:gap-4  md:m-4">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="rounded-lg overflow-hidden ">
            <iframe
              className="w-full h-[200px] md:h-[380px]"
              src={playlist.url}
              allow="encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="animate-pulse py-1 bg-white/10 backdrop-blur-md px-4 rounded-lg font-dotgothic">
          Please LogIn with your Spotify account to this browser to enjoy the
          full song.
        </div>
      </div>
    </div>
  );
};

export default SpotifyGrid;
