import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [name, updateName] = useState("");
  //   const [username, updateUsername] = useState("");
  const [description, updateDescription] = useState("");
  const [userLocation, updateUserLocation] = useState("");
  const [joined, updateJoined] = useState("");
  const [blog, updateBlog] = useState("");
  const [repos, updateRepos] = useState("");
  const [followers, updateFollowers] = useState("");
  const [following, updateFollowing] = useState("");
  const [avatar, updateAvatar] = useState("");
  const navigate = useNavigate();

  const { username } = useParams();

  useEffect(() => {
    async function fetchProfile() {
      const reponse = await fetch(`https://api.github.com/users/${username}`);
      const data = await reponse.json();
      updateDescription(data.bio);
      updateName(data.name);
      updateUserLocation(data.location);
      updateJoined(
        new Date(data.created_at).toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
        })
      );
      updateBlog(data.blog);
      updateRepos(data.public_repos);
      updateFollowers(data.followers);
      updateFollowing(data.following);
      updateAvatar(data.avatar_url);
    }
    fetchProfile();
  }, [username]);
  return (
    <div className="max-w-[700px] bg-white shadow-lg shadow-gray-200 rounded-xl p-6  items-center gap-4">
      <button
        className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm mb-4"
        onClick={() => navigate("/")}
      >
        ← Back to Search
      </button>
      <img
        src={avatar}
        className="w-12 h-12 rounded-full"
        alt="profile image"
      />
      <div>
        <h1>{name}</h1>
        <p>{username}</p>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <h1 className="text-3xl font-bold">{repos}</h1>
          <p>Repositories</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <h1 className="text-3xl font-bold">{followers}</h1>
          <p>Followers</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <h1 className="text-3xl font-bold">{following}</h1>
          <p>Following</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-2">
        <label>Details:</label>
        <label>Location: {userLocation}</label>
        <label>Joined: {joined}</label>
        <label>Blog: {blog}</label>
      </div>
    </div>
  );
}

export default Profile;
