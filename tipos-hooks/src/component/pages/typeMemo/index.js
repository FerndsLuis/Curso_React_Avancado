import { Header } from 'component/Header';
import React, { useEffect, useMemo, useState } from 'react';
import P from 'prop-types';

const Post = ({ post }) => {
  console.log('Filho redenrizou!');
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

export function TypeMemo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Principal redenrizou!');

  //component did mount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div>
      <Header />

      <div>
        <h1>UseMemo</h1>

        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

        {useMemo(() => {
          return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
        }, [posts])}

        {posts.length === 0 && <p>Carregando...</p>}
      </div>
    </div>
  );
}
