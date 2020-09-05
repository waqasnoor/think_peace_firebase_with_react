import React, { useState } from "react";
import { firestore } from "../firebase";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      title,
      content,
      user: {
        uid: "1122",
        displayName: "Waqas Noor ",
        email: "waqasn2c@gmail.com",
        photoURL: "http://placekitten.com/g/200/200",
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    };
    firestore.collection("posts").add(post);

    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit} className="AddPost">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        name="content"
        placeholder="Body"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <input className="create" type="submit" value="Create Post" />
    </form>
  );
};

export default AddPost;
