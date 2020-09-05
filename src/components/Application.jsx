import React, { useState, useEffect } from "react";

import Posts from "./Posts";
import { firestore } from "../firebase";

const Application = () => {
  const [posts, setPosts] = useState([]);
  const handleCreate = (post) => firestore.collection("posts").add(post);

  async function getPosts() {
    return firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        const { id } = doc;
        const data = doc.data();
        return { id, ...data };
      });

      setPosts(posts);
    });
  }
  useEffect(() => {
    const unsubscribe = getPosts();
    return () => unsubscribe();
  }, []);

  return (
    <main className="Application">
      <h1>Think Piece</h1>
      <Posts posts={posts} />
    </main>
  );
};

export default Application;
