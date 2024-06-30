import React from 'react';

export default function About() {
  return (
    <div className='min-h-screen flex items-center bg-yellow justify-center'>
      <div className='max-w-4xl mx-auto p-8 text-center'>
        <div>
          <div className="flex justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIu1rmz-yUdYP5dGy3QpwS8jIUXnaVIRDQ2g&s" alt="Blog Creation" className="w-64 h-auto my-4 rounded-lg shadow-lg" />
          </div>
          <h1 className='text-4xl font-semibold text-center my-7'>
            About Tech Blogs Aim
          </h1>
          <div className='text-lg text-white flex flex-col gap-6'>
            <p>
              Welcome to Tech Blogs Aim! This platform is created by Satyam Kanojiya
              to share insights and knowledge about technology, coding, and related topics.
            </p>

            <p>
              Explore our weekly articles and tutorials covering various aspects of web development,
              software engineering, and programming languages. Stay updated with the latest trends and
              advancements in the tech industry.
            </p>

            <p>
              Join our community of learners by leaving comments and engaging with fellow readers.
              Together, we can foster a supportive environment where everyone can grow and improve
              their skills.
            </p>      
          </div>
        </div>
      </div>
    </div>
  );
}
