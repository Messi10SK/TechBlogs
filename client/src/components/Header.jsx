import React, { useEffect, useState } from 'react';
import { Button, Avatar, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
  const path = useLocation().pathname;
  // console.log(path)  
  // // useLocation hook from react-router-dom returns the current location object; path = useLocation().pathname gives the current URL path.
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    // console.log(urlParams)
    const searchTermFromUrl = urlParams.get('searchTerm');
    //  console.log(searchTermFromUrl)
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    // console.log(urlParams)
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    // console.log(searchQuery)
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border dark:bg-black">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <div className="flex items-center">
          <img
            className="w-9 h-9 mr-2"
            src="https://t3.ftcdn.net/jpg/04/79/34/92/360_F_479349284_LoxSktHwUHiFsAuqxKxxPcrFraTAQnUx.jpg"
            alt="Logo"
          />
          <span className="px-2 py-1 rounded-lg dark:text-white font-head">TechBlogs</span>
        </div>
      </Link>

   

      <Button
        className="w-12 h-10 lg:hidden"
        color="gray"
        circle
        onClick={() => setIsSearchVisible(!isSearchVisible)}
      >
        <AiOutlineSearch />
      </Button>

      {isSearchVisible && (
        <form onSubmit={handleSubmit} className="w-full p-4 absolute top-14 left-0  z-10 lg:hidden">
          <TextInput
            type="text"
            placeholder="Search blogs"
            rightIcon={AiOutlineSearch}
            className="text-black "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      )}

      <div className="flex gap-2 md:order-2">

      <form onSubmit={handleSubmit} className="hidden lg:block">
        <TextInput
          type="text"
          placeholder="Search blogs"
          rightIcon={AiOutlineSearch}
          className=" text-black font-head "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>


        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        {currentUser ? (
          <Dropdown arrowIcon={false} inline label={<Avatar alt="user" img={currentUser.profilePicture} rounded />}>
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>






      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as="div">
          <Link to="/" className ='font-head text-lg'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as="div">
          <Link to="/about" className ='font-head  text-lg'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/create-post'} as="div">
          <Link to={currentUser ? '/create-post' : '/sign-up'} className ='font-head  text-lg'>Write</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
