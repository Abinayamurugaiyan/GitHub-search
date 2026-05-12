import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (username) {
      return navigate(`/user/${username}`);
    }
  };

  return (
    <div className="w-full max-w-lg px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        GitHub User Search
      </h1>
      <div className="flex gap-2">
        <input
          type="search"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a GitHub username..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          onClick={handleClick}
          disabled={!username}
          className={`px-6 py-3 rounded-lg font-medium text-white ${
            username
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
