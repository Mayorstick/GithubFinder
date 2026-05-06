import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [repo, updateRepo] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[800px] flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">GitHub Profile Finder</h1>
        <p>Search any GitHub user</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-[46px] border rounded-[5px] px-4 flex items-center focus-within:border-black">
          <input
            className="w-full h-full outline-none"
            type="text"
            placeholder="Enter github repo"
            value={repo}
            onChange={(e) => updateRepo(e.target.value)}
          />
        </div>

        <button
          onClick={() => navigate(`/profile/${repo}`)}
          className="h-[46px] px-6 rounded-[16px] border border-blue-400 bg-blue-100 text-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
