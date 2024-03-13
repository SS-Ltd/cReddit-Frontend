import redditLogo from '../../assets/reddit_logo.png';
import { Bars3Icon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, CursorArrowRippleIcon, PlusIcon, } from '@heroicons/react/24/outline'
import { useState, useEffect, useRef } from 'react';
import avatar from '../../assets/avatar.png';
import Searchbar from '../searchbar/Searchbar';
import Separator from '../sidebar/Nav-Icons/Separator';
import { Link } from 'react-router-dom';
import Setting from '../settings/Setting';


const Navbar = ({ setIsVisibleLeftSidebar, navbarRef }) => {

    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
    const profileMenuRef = useRef();
    const profileMenuRefExpanded = useRef();

    useEffect(() => {
        let closeDropdown = (e) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(e.target) && profileMenuRefExpanded.current && !profileMenuRefExpanded.current.contains(e.target)) {
                setIsOpenProfileMenu(false);
            }
        };
        document.addEventListener('click', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    });




const Navbar = ({isVisibleLeftSidebar, setIsVisibleLeftSidebar, navbarRef}) => {
    return (

        <div ref={navbarRef} className="flex z-20 fixed flex-col w-full no-select">

            <header className="flex w-full bg-reddit_navbar p-2 items-center">
                <div className='ml-2.5 hover:bg-reddit_search_light rounded-full min-w-9 w-9 h-9 flex xl:hidden justify-center items-center'>
                    <Bars3Icon onClick={() => setIsVisibleLeftSidebar((prev) => !prev)} className="h-8 w-7 text-white cursor-pointer" />

                </div>


                <div className="flex mr-4 xs:mr-1 relative left-3 xl:left-7 h-full items-center">

                    <a id='navbar_reddit' className='w-fit h-fit flex items-center' href="">
                        <img src={redditLogo} alt="Logo" className="w-8  h-8 min-w-8" />
                        <svg className="h-[22px] ml-2 hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 149" >
                            <g className=' fill-white'>
                                <path d="m71.62,45.92l-12.01,28.56c-1.51-.76-5.11-1.61-8.51-1.61s-6.81.85-10.12,2.46c-6.53,3.31-11.35,9.93-11.35,19.48v52.3H-.26V45.35h29.04v14.28h.57c6.81-9.08,17.21-15.79,30.74-15.79,4.92,0,9.65.95,11.54,2.08Z"></path>
                                <path d="m65.84,96.52c0-29.41,20.15-52.68,50.32-52.68,27.33,0,46.91,19.96,46.91,48.05,0,4.92-.47,9.55-1.51,14h-68.48c3.12,10.69,12.39,19.01,26.29,19.01,7.66,0,18.54-2.74,24.4-7.28l9.27,22.32c-8.61,5.86-21.75,8.7-33.29,8.7-32.25,0-53.91-20.81-53.91-52.11Zm26.67-9.36h43.03c0-13.05-8.89-19.96-19.77-19.96-12.3,0-20.62,7.94-23.27,19.96Z"></path>
                                <path d="m419.53-.37c10.03,0,18.25,8.23,18.25,18.25s-8.23,18.25-18.25,18.25-18.25-8.23-18.25-18.25S409.51-.37,419.53-.37Zm14.94,147.49h-29.89V45.35h29.89v101.77Z"></path>
                                <path d="m246,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.42,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z"></path>
                                <path d="m360.15,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.28,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z"></path>
                                <path d="m492.44,45.35h21.85v25.44h-21.85v76.33h-29.89v-76.33h-21.75v-25.44h21.75v-27.66h29.89v27.66Z"></path>
                            </g>
                        </svg>
                    </a>
                </div>

                <div className="flex xs:flex-grow ml-auto xs:ml-7 xl:ml-11% items-center">
                    <Searchbar />

                    <div className='flex items-center xs:ml-auto  mr-3 xl:mr-4'>

                        <a id='navbar_chat' href='' className="flex justify-center items-center w-fit h-fit">
                            <div className='hover:bg-reddit_search_light ml-0.5 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '>
                                <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-7 text-gray-300" />
                            </div>
                        </a>

                        <a id='navbar_create_post' href='' className="flex justify-center items-center w-fit h-fit">
                            <div className='hover:bg-reddit_search_light w-8 xs:w-24 h-10  rounded-full flex justify-center items-center cursor-pointer '>
                                <PlusIcon className="h-6.5 w-7  text-gray-300" />
                                <p className=' ml-1 mr-0.5 text-gray-300 hidden xs:block text-sm'>Create </p>
                            </div>
                        </a>

                        <a id='navbar_bell' href='' className="flex justify-center items-center w-fit h-fit">
                            <div className='hover:bg-reddit_search_light w-10 h-10 xs:ml-1 rounded-full flex justify-center items-center cursor-pointer '>
                                <BellIcon className="h-7 w-6 text-gray-300" />
                            </div>
                        </a>

                        <div className="flex justify-center items-center w-fit h-fit">
                            <div id='navbar_profile'  ref={profileMenuRef} onClick={(e) =>{ e.stopPropagation();  setIsOpenProfileMenu((prev) => !prev);}} className='hover:bg-reddit_search_light w-10 h-10 xs:ml-1.5 rounded-full flex justify-center items-center cursor-pointer '>
                                <div className=' bg-reddit_sky w-8 h-8 rounded-full'>
                                    <img src={avatar} alt="Open profile menu" style={{ filter: '', transform: 'scaleX(-1)' }} className="block" />
                                </div>
                            </div>

                            {isOpenProfileMenu && (<div ref={profileMenuRefExpanded} className=' w-62 mr-52 mt-104 h-88 bg-reddit_lightGreen absolute text-white text-sm pt-2.5 space-y-2 rounded-xl font-extralight flex flex-col'>

                                <div id="profile_view" href="" className=' w-full mb-2.5 mt-2 ml-2 pl-4 hover:bg-reddit_hover h-14 flex items-center cursor-pointer'>
                                    <div className='flex flex-row w-full'>

                                        <div className=' bg-reddit_sky w-9 h-9 rounded-full'>
                                            <img src={avatar} alt="Open profile menu" style={{ filter: '', transform: 'scaleX(-1)' }} className="block" />
                                        </div>

                                        <div className='ml-2.5 text-sm '>
                                            <p className='text-gray-200'>View Profile</p>
                                            <p className='text-xs -ml-1 text-gray-400'>u/MalekFickleElsaka</p>
                                        </div>

                                    </div>
                                </div>
                                <Separator />

                                <a id="profile_modmode" href="M" className='w-full pl-8 hover:bg-reddit_hover h-14 flex items-center cursor-pointer'>
                                    <svg rpl="" fill="currentColor" height="20" icon-name="mod-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20c-.101 0-.202-.014-.3-.04C8.249 19.554 1 17.277 1 12V3.187A1.122 1.122 0 0 1 1.846 2.1L9.73.108c.177-.044.363-.044.54 0L18.154 2.1A1.122 1.122 0 0 1 19 3.187V12c0 5.277-7.249 7.554-8.7 7.957A1.162 1.162 0 0 1 10 20ZM2.25 3.283V12c0 4.465 6.989 6.531 7.786 6.751.725-.22 7.714-2.286 7.714-6.751V3.283L10 1.33 2.25 3.283Z"></path>
                                    </svg>
                                    <p className='ml-3 no-select mr-10'>Mod Mode</p>
                                    <div className='-mt-7'>
                                        <Setting toggleButton={true} />
                                    </div>

                                </a>



                                <a id="profile_dark_mode" href="" className='w-full pl-8  hover:bg-reddit_hover h-14 flex items-center cursor-pointer'>
                                    <svg rpl="" fill="currentColor" height="20" icon-name="night-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.875 19a9.073 9.073 0 0 1-8.48-5.78 1.094 1.094 0 0 1 .247-1.191 1.145 1.145 0 0 1 1.232-.255c1.13.449 2.361.587 3.564.4A6.89 6.89 0 0 0 12.17 6.44a6.806 6.806 0 0 0-.394-3.564 1.148 1.148 0 0 1 .255-1.231 1.1 1.1 0 0 1 1.193-.248 9.082 9.082 0 0 1 5.746 9.254 9.184 9.184 0 0 1-8.32 8.32 11.93 11.93 0 0 1-.775.028Zm-7.206-5.967A7.871 7.871 0 1 0 13.033 2.668 8.116 8.116 0 0 1 2.669 13.033Z"></path>
                                    </svg>
                                    <p className='ml-3 no-select mr-10'>Dark Mode</p>
                                    <div className='-mt-7'>
                                        <Setting toggleButton={true} />
                                    </div>
                                </a>


                                <Link id="profile_settings" to="/settings" className='w-full pl-8  hover:bg-reddit_hover h-14 flex items-center cursor-pointer'>
                                    <svg rpl="" fill="currentColor" height="20" icon-name="settings-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 0 1-.992-1.137v-1.073a.97.97 0 0 0-.627-.878A.98.98 0 0 0 6.1 17l-.755.753a1.149 1.149 0 0 1-1.521.1 10.16 10.16 0 0 1-1.671-1.671 1.149 1.149 0 0 1 .1-1.523L3 13.906a.97.97 0 0 0 .176-1.069.98.98 0 0 0-.887-.649H1.216A1.145 1.145 0 0 1 .079 11.2a9.1 9.1 0 0 1 0-2.393 1.145 1.145 0 0 1 1.137-.992h1.073a.97.97 0 0 0 .878-.627A.979.979 0 0 0 3 6.1l-.754-.754a1.15 1.15 0 0 1-.1-1.522 10.16 10.16 0 0 1 1.673-1.676 1.155 1.155 0 0 1 1.522.1L6.1 3a.966.966 0 0 0 1.068.176.98.98 0 0 0 .649-.887V1.216A1.145 1.145 0 0 1 8.8.079a9.129 9.129 0 0 1 2.393 0 1.144 1.144 0 0 1 .991 1.137v1.073a.972.972 0 0 0 .628.878A.977.977 0 0 0 13.905 3l.754-.754a1.152 1.152 0 0 1 1.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 0 1-.1 1.522L17 6.1a.967.967 0 0 0-.176 1.068.98.98 0 0 0 .887.649h1.073a1.145 1.145 0 0 1 1.137.991 9.096 9.096 0 0 1 0 2.392 1.145 1.145 0 0 1-1.137.992h-1.073A1.041 1.041 0 0 0 17 13.905l.753.755a1.149 1.149 0 0 1 .1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 0 1-1.522-.1L13.906 17a.97.97 0 0 0-1.069-.176.981.981 0 0 0-.65.887v1.073a1.144 1.144 0 0 1-.99 1.137A9.431 9.431 0 0 1 10 20Zm-.938-1.307a7.638 7.638 0 0 0 1.875 0v-.982a2.292 2.292 0 0 1 3.853-1.6l.693.694a8.796 8.796 0 0 0 1.326-1.326l-.694-.694a2.29 2.29 0 0 1 1.6-3.851h.982a7.746 7.746 0 0 0 0-1.876h-.982a2.213 2.213 0 0 1-2.034-1.4 2.223 2.223 0 0 1 .438-2.451l.694-.693a8.76 8.76 0 0 0-1.327-1.326l-.692.694a2.22 2.22 0 0 1-2.434.445 2.221 2.221 0 0 1-1.419-2.041v-.979a7.638 7.638 0 0 0-1.875 0v.982a2.213 2.213 0 0 1-1.4 2.034 2.23 2.23 0 0 1-2.456-.438l-.693-.694a8.757 8.757 0 0 0-1.326 1.327l.694.692a2.216 2.216 0 0 1 .445 2.434 2.22 2.22 0 0 1-2.041 1.418h-.982a7.746 7.746 0 0 0 0 1.876h.982a2.213 2.213 0 0 1 2.034 1.4 2.223 2.223 0 0 1-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 0 1 2.433-.445 2.22 2.22 0 0 1 1.418 2.041v.983ZM10 13.229a3.23 3.23 0 1 1 0-6.458 3.23 3.23 0 0 1 0 6.458Zm0-5.208a1.979 1.979 0 1 0 0 3.958 1.979 1.979 0 0 0 0-3.958Z"></path>
                                    </svg>
                                    <p className='no-select ml-3 mr-14'>Settings</p>
                                </Link>



                                <a id="profile_logout" href="" className='w-full pl-7  hover:bg-reddit_hover h-14 flex items-center cursor-pointer rounded-b-lg'>
                                    <svg rpl="" fill="currentColor" height="20" icon-name="logout-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.991 10.625H1v-1.25h10.991l-1.933-1.933.884-.884 3 3a.624.624 0 0 1 0 .884l-3 3-.884-.884 1.933-1.933ZM15.375 1h-9.75A2.629 2.629 0 0 0 3 3.625v.792h1.25v-.792A1.377 1.377 0 0 1 5.625 2.25h9.75a1.377 1.377 0 0 1 1.375 1.375v12.75a1.377 1.377 0 0 1-1.375 1.375h-9.75a1.377 1.377 0 0 1-1.375-1.375v-.792H3v.792A2.63 2.63 0 0 0 5.625 19h9.75A2.63 2.63 0 0 0 18 16.375V3.625A2.63 2.63 0 0 0 15.375 1Z"></path>
                                    </svg>
                                    <p className='no-select ml-3'>Log Out</p>
                                </a>
                            </div>)}
                        </div>



                    </div>
                </div>
            </header>
            <div className='mt-14 px-4 fixed w-full'>
                <Separator />
            </div>
        </div>
    );
}

export default Navbar;
