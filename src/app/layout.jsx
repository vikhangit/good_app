"use client";

import { ThemeProvider } from "@material-tailwind/react";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./../components/header/header";
import Footer from "./../components/footer/footer";
import { LexendDeca, open_sans } from "./font";
import { NextUIProvider } from "@nextui-org/react";
import { register } from 'swiper/element/bundle';
import { useEffect } from "react";import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const metadata = {
  metadataBase: new URL("https://jsonplaceholder.typicode.com"),
  title: "GOOD APP",
  description: "Description",
  verification: {
    google: "google-site-verification=87878787",
  },
};

export default function RootLayout({ children }) {
  useEffect(() => {
    register()
  }, [])
  return (
    <html lang="en" >
      <body className={LexendDeca.className}>
        <ThemeProvider>
          <NextUIProvider>
            <Header />
            <div className="mt-28">{children}</div>
            <Footer />
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
