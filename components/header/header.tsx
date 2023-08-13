"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { UserButton,SignedOut, SignInButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'
import { useAuth } from "@clerk/nextjs";


const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const { userId } = useAuth();

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index : any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const pathname = usePathname()

  const [headerVisible, setheaderVisible] = useState(false);
  const [breadc, setBreadc] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    if(pathname === "/sign-in" || pathname === "/sign-up") {
      setheaderVisible(true)
    } else {
      setheaderVisible(false)
    }

    if(pathname === "/" || pathname === `/${userId}`) {
      setBreadc(true)
    } else {
      setBreadc(false)
    }

  },[pathname]);
  

  return (
    <>

      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${headerVisible ? "hidden" : "block"} 
        ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary2 dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                 // src="/images/logo/logo-2.svg"
                  src="/images/logo/nlogo-black.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                //  src="/images/logo/logo.svg"
                  src="/images/logo/nlogo-white.svg"
                  alt="logo"
                  width={140}
                  height={30}
          
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  {/* Button Collaps , Login */}
       
                  <ul className="block lg:flex lg:space-x-5">
       
       
  
      
                    {/* sub menu Toggle */}
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={navbarToggleHandler}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-2 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
 

                              {menuItem.submenu?.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path ? submenuItem.path : "#"}
                                  key={submenuItem.id}
                                  onClick={navbarToggleHandler}
                                  className="block rounded py-1 text-sm pl-2.5 text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}

                      <div className="flex items-center justify-center">
                        <SignedOut>
                          <SignInButton mode="modal">
                            <Link
                              href="#"
                              onClick={navbarToggleHandler}
                              className="ease-in-out duration-300  lg:hidden
                              rounded-xl bg-primary2
                              py-2 px-16 mt-3 mb-1 text-sm font-bold text-white text-center transition hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                            >
                              Sign In
                            </Link>
                          </SignInButton>
                        </SignedOut>
        

                    </div> 
                  </ul>
                </nav>
              </div>
              <div className="flex   items-center justify-end pr-16 lg:pr-0">
      
                 <UserButton 
                  userProfileMode="navigation"
                  afterSignOutUrl='/'
                  userProfileUrl={`/${userId}/profile`}
                 />
        
                
                <SignedOut>
                    <SignInButton mode="modal">
                      <Link
                        href="#"
             
                        className="hidden ease-in-out duration-300 
                        rounded-xl bg-primary2
                        py-3 px-8 text-sm font-bold text-white transition hover:bg-opacity-90 hover:shadow-signUp lg:block md:px-9 lg:px-6 xl:px-9"
                      >
                        Sign In
                      </Link>
                    </SignInButton>
         
                </SignedOut>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>

          <div className={`relative -mx-4 flex items-center justify-start ${breadc ? "hidden" : "block"}`}>  

            <div className="bg-gray-200 dark:bg-primary2/10 p-4 flex items-center flex-wrap w-full">
              <ul className="flex items-center">
              <li className="inline-flex items-center ">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                <svg className="w-5 h-auto fill-current mx-2 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>
                </a>

                <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-gray-200 hover:text-blue-500">
                Page 1
                </a>

                <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                Page 2
                </a>

                <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
              </li>

              <li className="inline-flex items-center">
                <a href="#" className="text-gray-600 hover:text-blue-500 text-blue-500">
                Page 3
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>



      </header>
    </>
  );
};

export default Header;
