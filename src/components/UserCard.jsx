import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserCard() {
  const { username } = useParams();

  const { data, loading, error } = useFetch(username);

  const navigate = useNavigate();

  if (loading) return <p>Loading..</p>;
  if (error)
    return (
      <div className="mx-auto max-w-sm mt-10 p-6 bg-red-50 border border-red-200 rounded-xl text-center">
        <h2 className="text-red-500 text-xl font-bold mb-2">User not found</h2>
        <p className="text-red-400 mb-4">
          "{username}" doesn't exist on GitHub
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Search again
        </button>
      </div>
    );
  return (
    <div className="mx-auto max-w-sm bg-white rounded-xl shadow-lg p-6">
      {/* Top row — avatar + name */}
      <div className="flex items-center gap-4 mb-4">
        <img src={data?.avatar_url} alt="" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {data?.name || data?.login}
          </h2>
          <p className="text-sm text-gray-500">@{data?.login}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 mb-4">
        {data?.bio || "No bio provided"}
      </p>

      {/* Stats */}
      <div className="flex gap-4 mb-4 text-center">
        <div>
          <p className="font-bold text-gray-800">{data?.followers}</p>
          <p className="text-xs text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-bold text-gray-800">{data?.following}</p>
          <p className="text-xs text-gray-500">Following</p>
        </div>
        <div>
          <p className="font-bold text-gray-800">{data?.public_repos}</p>
          <p className="text-xs text-gray-500">Repos</p>
        </div>
      </div>

      {/* Link */}

      <a
        href={`https://github.com/${data?.login}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
        className="block text-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 text-sm font-medium"
      >
        View Repositories
      </a>
    </div>
  );
}

export default UserCard;
