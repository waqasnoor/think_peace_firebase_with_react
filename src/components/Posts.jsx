import React, { useEffect, useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import { firestore } from "../firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

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
    <section className="Posts">
      <AddPost />
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  );
};

export default Posts;
