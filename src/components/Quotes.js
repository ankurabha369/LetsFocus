import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import switchsound from "./dice.mp3";

const QuoteGenerator = () => {
  const [isFading, setIsFading] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [playClick] = useSound(switchsound);

  // Full list of quotes
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    {
      text: "You have as much laughter as you have faith.",
      author: "Martin Luther",
    },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    {
      text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
      author: "Brian Tracy",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      text: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
      author: "William Butler Yeats",
    },
    {
      text: "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein",
    },
    {
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman",
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      text: "Opportunities don't happen, you create them.",
      author: "Chris Grosser",
    },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    {
      text: "It’s not whether you get knocked down, it’s whether you get up.",
      author: "Vince Lombardi",
    },
    { text: "Limit your ‘always’ and your ‘nevers’.", author: "Amy Poehler" },
    {
      text: "Nothing is impossible, the word itself says 'I'm possible'!",
      author: "Audrey Hepburn",
    },
    {
      text: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    {
      text: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      text: "What we fear doing most is usually what we most need to do.",
      author: "Tim Ferriss",
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      author: "Roy T. Bennett",
    },
    {
      text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      author: "Roy T. Bennett",
    },
    {
      text: "It is never too late to be what you might have been.",
      author: "George Eliot",
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "The purpose of life is a life of purpose.",
      author: "Robert Byrne",
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
      author: "Roy T. Bennett",
    },
    {
      text: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      text: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard",
    },
    {
      text: "We accept the love we think we deserve.",
      author: "Stephen Chbosky",
    },
    {
      text: "You can't blame gravity for falling in love.",
      author: "Albert Einstein",
    },
    {
      text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha",
    },
    {
      text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
      author: "Buddha",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
    },
    {
      text: "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
      author: "Buddha",
    },
    {
      text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
      author: "Buddha",
    },
    {
      text: "The mind is everything. What you think, you become.",
      author: "Buddha",
    },
    {
      text: "Better than a thousand hollow words is one word that brings peace.",
      author: "Buddha",
    },
    {
      text: "You have the right to work, but never to the fruit of work.",
      author: "Bhagavad Gita",
    },
    {
      text: "Change is the law of the universe. You can be a millionaire, or a pauper in an instant.",
      author: "Bhagavad Gita",
    },
    {
      text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
      author: "Bhagavad Gita",
    },
    {
      text: "The mind acts like an enemy for those who do not control it.",
      author: "Bhagavad Gita",
    },
    {
      text: "We’re kept from our goal, not by obstacles, but by a clear path to a lesser goal.",
      author: "Bhagavad Gita",
    },
    {
      text: "Set your heart upon your work but never its reward.",
      author: "Bhagavad Gita",
    },
    {
      text: "Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.",
      author: "Bhagavad Gita",
    },
    {
      text: "You are what you believe in. You become that which you believe you can become.",
      author: "Bhagavad Gita",
    },
    {
      text: "We can only love because we are full of love; when we hate, we lose all love.",
      author: "Buddha",
    },
    {
      text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
      author: "Buddha",
    },
    {
      text: "Letting go gives us freedom, and freedom is the only condition for happiness.",
      author: "Buddha",
    },
    {
      text: "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
      author: "Buddha",
    },
    {
      text: "We are shaped by our thoughts; we become what we think.",
      author: "Buddha",
    },
    {
      text: "Holding onto anger is like drinking poison and expecting the other person to die.",
      author: "Buddha",
    },
    {
      text: "In this world, hate never yet dispelled hate. Only love dispels hate.",
      author: "Buddha",
    },
    { text: "A jug fills drop by drop.", author: "Buddha" },
    {
      text: "When the mind is pure, joy follows like a shadow that never leaves.",
      author: "Buddha",
    },
    { text: "True love is born from understanding.", author: "Buddha" },
    {
      text: "The past is already gone, the future is not yet here. There’s only one moment for you to live.",
      author: "Buddha",
    },
    {
      text: "Purity or impurity depends on oneself. No one can purify another.",
      author: "Buddha",
    },
    { text: "A disciplined mind brings happiness.", author: "Buddha" },
    { text: "You only lose what you cling to.", author: "Buddha" },
    {
      text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
      author: "Buddha",
    },
    {
      text: "Work out your own salvation. Do not depend on others.",
      author: "Buddha",
    },
    {
      text: "If you light a lamp for somebody, it will also brighten your path.",
      author: "Buddha",
    },
  ];

  // Pick a random quote
  const fetchQuote = () => {
    setIsFading(true); // Start fade-out effect

    // Wait 500ms for fade-out to complete before showing the new quote
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex].text);
      setAuthor(quotes[randomIndex].author);
      setIsFading(false); // Start fade-in effect
    }, 500);
  };

  const handleClick = () => {
    fetchQuote();
    playClick();
  };
  // Generate a quote when the component mounts
  React.useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className={`flex  justify-center rounded-lg p-4 bg-white/20 backdrop-blur-sm  md:w-[530px]`}
    >
      <div className={"text-center flex items-center "}>
        <div className={` ${isFading ? "fade" : ""}`}>
          <p className=" text-xm font-semibold  mb-2">"{quote}"</p>
          <h4 className="text-xm  font-bold">- {author}</h4>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="flex justify-center items-center absolute bottom-2 right-2 text-dark h-10 w-10 rounded-full px-4 py-2  dark:text-white active:bg-white transition-all"
      >
        <FontAwesomeIcon icon={faArrowsRotate} />{" "}
      </button>
    </div>
  );
};

export default QuoteGenerator;
