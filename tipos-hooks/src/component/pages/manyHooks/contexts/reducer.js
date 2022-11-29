import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log('action.type', action.type);
      return { ...state, posts: action.payload };
    }
    default:
      console.log('Error action.type', action.type);
      return { ...state };
  }
};
