import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import CreateHelpRequest from "./components/CreateHelpRequest";
import HelpRequestList from "./components/HelpRequestList";

export default function App() {
  return (
    <div>
      <h1>Community Engagement</h1>
      <CreatePost />
      <hr />
      <PostList />
      <hr />
      <CreateHelpRequest />
      <hr />
      <HelpRequestList />
    </div>
  );
}