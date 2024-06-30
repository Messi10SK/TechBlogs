import React from 'react'
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      // console.log(data)
      setPosts(data.posts);
      // console.log(data.posts)
    };
    fetchPosts();
  }, []);

  return (
    <div className='bg-gray-100 dark:bg-yellow'>
      <div className='flex flex-col items-center  bg-gradient-to-r from-blue-400 to-blue-600 dark:text-white bg-yellow text-white py-28 px-3 max-w-6xl mx-auto rounded-lg'>
        <h1 className='text-5xl font-bold lg:text-6xl font-tut text-center'>
          Delve Into The World Of Tech
        </h1>
        <p className='mt-4 text-white font-head text-xs sm:text-sm text-center max-w-2xl'>
          Discover the latest in technology, from groundbreaking innovations to the newest trends in the tech industry. Stay informed and inspired with our curated posts.
        </p>
      </div>

      <div className='max-w-6xl mx-auto p-6 flex flex-col gap-8 py-10'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center dark:text-white'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-white hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
