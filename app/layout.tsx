"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
// import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {usePathname} from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const pathname = usePathname()

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black">
        <ToastContainer position="bottom-right" />

        <Providers>
            {/*{pages.includes(pathname)&&<Header />}*/}
            <Header />
          {children}
            {/*{pages.includes(pathname)&&<Footer />}*/}
            <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
