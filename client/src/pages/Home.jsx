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
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);



  return (
    <div className='bg-black'>
    <div className='flex flex-col  bg-black gap-6 p-28 px-3 max-w-6xl mx-auto '>
      <h1 className='text-3xl font-bold text lg:text-6xl font-robot'>TECH BLOGS</h1>
      <p className='text-white  text text-xs sm:text-sm'>
      Discover the latest in technology, from groundbreaking innovations to the newest trends in the tech industry. Stay informed and inspired with our curated posts.
      </p>
      <Link
        to='/search'
        className='text-xs sm:text-sm text-center  text-teal-500 font-bold hover:underline'
      >
        View all posts
      </Link>
    </div>
    {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
      <CallToAction />
    </div> */}

    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
      {posts && posts.length > 0 && (
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
          <div className='flex flex-wrap gap-4'>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <Link
            to={'/search'}
            className='text-lg text-teal-500 hover:underline text-center'
          >
            View all posts
          </Link>
        </div>
      )}
    </div>
  </div>
);
}