import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full h-[450px] overflow-hidden rounded-xl sm:w-[350px] shadow-lg transition-transform transform hover:scale-105 duration-300 bg-gradient-to-r from-white to-gray-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900'>
      <Link to={`/post/${post.slug}`} className='block h-full'>
        <img
          src={post.image}
          alt='post cover'
          className='h-[280px] w-full object-cover   transition-transform duration-300 rounded-t-xl group-hover:scale-105'
        />
        <div className='p-5 flex flex-col gap-2'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white line-clamp-2'>{post.title}</h3>
          <span className='text-sm text-gray-500 dark:text-gray-400'>{post.category}</span>
        </div>
        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <Link
            to={`/post/${post.slug}`}
            className='border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 text-center py-2 px-5 rounded-full'
          >
            Read article
          </Link>
        </div>
      </Link>
    </div>
  );
}
