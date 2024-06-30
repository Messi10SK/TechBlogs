import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
    return (
        <Footer container className='border-t-4 border-white dark:bg-gray-900'>
            <div className='w-full max-w-7xl mx-auto py-8'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to="/" className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                            <div className="flex items-center">
                                <img className="w-10 h-10 mr-3 rounded-full" src="https://t3.ftcdn.net/jpg/04/79/34/92/360_F_479349284_LoxSktHwUHiFsAuqxKxxPcrFraTAQnUx.jpg" alt="Logo" />
                                <span className='text-2xl dark:text-white'>TechBlogs</span>
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://sk-port-6e2m.vercel.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Satyam's Portfolio
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Satyam's TechBlogs
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.github.com/Messi10SK'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link href='discord'>Discord #satyamkanojiya11</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='#'
                        by="Satyam's TechBlogs"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} className='text-blue-600 hover:text-blue-800'/>
                        <Footer.Icon href='#' icon={BsInstagram} className='text-pink-500 hover:text-pink-700'/>
                        <Footer.Icon href='#' icon={BsTwitter} className='text-blue-400 hover:text-blue-600'/>
                        <Footer.Icon href='https://github.com' icon={BsGithub} className='text-gray-700 hover:text-black'/>
                        <Footer.Icon href='#' icon={BsDribbble} className='text-pink-400 hover:text-pink-600'/>
                    </div>
                </div>
            </div>
        </Footer>
    );
}
