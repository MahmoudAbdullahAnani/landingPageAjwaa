"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { usePathname } from "next/navigation";
import { Menu } from "@/types/menu";
import { PagesRoutes } from "../Common/ScrollUp";

function handleLogout() {
  localStorage.removeItem("userData");
  localStorage.removeItem("userIdDB");
  sessionStorage.removeItem("userData");
  sessionStorage.removeItem("userIdDB");
  window.location.reload();
  return;
}

const Header = () => {
  const pathname = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // User Data
  const [userLogin, setUserLogIn] = useState(false);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    // localStorage.getItem('userData')? :
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <header
        dir="rtl"
        className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-1 lg:py-2" : "py-2"
                } `}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-[81px] w-[105px] dark:hidden"
                />
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="hidden h-[81px] w-[105px] dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="mx-auto">
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute left-5 top-24 z-30 w-fit rounded border-[.5px] border-body-color/50 bg-white px-10 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul dir="ltr" className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem: Menu, index: number) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-[18px] font-semibold  group-hover:opacity-70 ${
                              pathname === menuItem.path
                            }  ${
                              pathname === menuItem.path
                                ? `${
                                    sticky
                                      ? "text-primary dark:text-primary" //  الاساسي  عند  الاسكرول
                                      : pathname === "/"
                                      ? "text-white dark:text-white"
                                      : "text-primary dark:text-primary" //  الاساسي  عند عدم الاسكرول
                                  }`
                                : `${
                                    sticky // الكل غير الاساسي عند الاسكرول
                                      ? PagesRoutes.includes(pathname)
                                        ? "text-black dark:text-white"
                                        : ""
                                      : pathname === "/" &&
                                        "text-white dark:text-white"
                                  }`
                            }  lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
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
                              className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {/* @ts-ignore */}
                              {menuItem.submenu.map((submenuItem: Menu) => (
                                <Link
                                  href={`${submenuItem.path}`}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="relative flex items-center justify-end pr-16 lg:pr-0">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-0 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
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
                {localStorage.getItem("userData") ||
                sessionStorage.getItem("userData") ? (
                  <>
                    <h3 className={`text-white `}>
                      {
                        JSON.parse(localStorage.getItem("userData") as string)
                          ?.firstName
                      }
                      {
                        JSON.parse(sessionStorage.getItem("userData") as string)
                          ?.firstName
                      }
                      {` `}
                      {
                        JSON.parse(localStorage.getItem("userData") as string)
                          ?.lastName
                      }
                      {
                        JSON.parse(sessionStorage.getItem("userData") as string)
                          ?.lastName
                      }
                    </h3>
                    {JSON.parse(
                      localStorage.getItem("userData") ||
                        (sessionStorage.getItem("userData") as string)
                    )?.avatar && (
                      <Image
                        src={`https://${
                          JSON.parse(
                            localStorage.getItem("userData") as string
                          )?.avatar.split("//")[1] || ""
                        }${
                          JSON.parse(
                            sessionStorage.getItem("userData") as string
                          )?.avatar.split("//")[1] || ""
                        }`}
                        width={100}
                        height={100}
                        alt="profile"
                        className={`rounded-full w-[48px] h-[48px] ms-2`}
                      />
                    )}
                    <button
                      className={`text-white mx-2 bg-[#952525] px-3 py-2 rounded-md hover:bg-[#952525a7]`}
                      onClick={handleLogout}
                    >
                      تسجيل خروج
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className={`hidden px-7 py-3 text-base font-bold   ${
                        sticky
                          ? ""
                          : pathname === "/"
                          ? "text-white"
                          : "text-black"
                      }  hover:opacity-70 dark:text-white md:block`}
                    >
                      تسجيل دخول
                    </Link>
                    <Link
                      href="/signup"
                      className="ease-in-up hidden rounded-md bg-yellow px-8 py-3 text-base font-bold text-black transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                    >
                      تسجيل
                    </Link>
                  </>
                )}
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
