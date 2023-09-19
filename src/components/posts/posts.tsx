import React from 'react';
import styles from './posts.module.scss';
import Post from '../post/post';

const Posts = () => {
  return (
    <div className={styles.posts_container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
