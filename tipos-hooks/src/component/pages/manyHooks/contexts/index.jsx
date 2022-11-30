import { PostsContext } from './context';
import React from 'react';
import P from 'prop-types';
import { useReducer } from 'react';
import { data } from './data';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider
      value={{ postState: postsState, postDispatch: postsDispatch }}
    >
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.prototype = {
  children: P.oneOfType([P.string, P.element, P.node]),
};
