import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import { loadPosts } from '../../contexts/actions';
import { PostsContext } from '../../contexts/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postState, postDispatch } = postsContext;
  console.log('{ isMounted }', isMounted.current);

  useEffect(() => {
    loadPosts(postDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postDispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {postState.loading && <p>Carregando</p>}
      {postState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
