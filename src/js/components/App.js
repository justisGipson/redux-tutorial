import React from "react";
import List from "../components/List";
import Form from "../components/Form";
import Post from "../components/Posts";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add new article</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);

export default App;
