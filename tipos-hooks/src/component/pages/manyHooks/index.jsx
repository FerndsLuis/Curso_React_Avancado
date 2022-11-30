import { Header } from 'component/Header';
import React from 'react';
import { Posts } from './components/posts';
import { PostsProvider } from './contexts';

export function ManyHooks() {
  return (
    <div>
      <Header />

      <div>
        <h1>Many Hooks</h1>

        <PostsProvider>
          <div>
            <Posts />
          </div>
        </PostsProvider>
      </div>
    </div>
  );
}
