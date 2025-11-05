"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner/Banner";
import CardFilm from "@/components/NewFilm/page";
import CommentList from "@/components/CommentList/page";
import NewFilm from "@/components/Movies/New/page";
import TopFilm from "@/components/Movies/TopFilm/page";
import CinemaFilm from "@/components/Movies/Cinema/page";
import AnimeTreasure from "@/components/AnimeTreasure/page";
import SuggestedContentPage from "@/components/SuggestedContent/page";
import SingleFilmPage from "@/components/SingleFilm/page";
export default function Home() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div id="body-load">
        <div className="bl-logo">
          <img src="https://www.rophim.li/images/logo.svg" alt="RoPhim" />
          <div className="text-h1 text-center">
            Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao Và Cập Nhật Liên Tục
          </div>
        </div>
      </div>
      <div id="app">
        <h1 className="absolute -top-[9999px] -left-[9999px]">
          RoPhim - Phim hay cả rổ - Xem Phim Mới HD Online Vietsub
        </h1>
        <Banner />
        <div id="wrapper" className="wrapper-w-slide">
          <div className="fluid-gap">
            {/* SuggestedContentPage */}
            <SuggestedContentPage />

            {/* CardFilm */}
            <CardFilm />

            {/* CommentList */}
            <CommentList />

            {/* NewFilm */}
            <NewFilm />

            {/* TopFilm */}
            <TopFilm />

            {/* CinemaFilm */}
            <CinemaFilm />

            {/* SingleFilm */}
            <SingleFilmPage />

            {/* AnimeTreasure */}
            <AnimeTreasure />
            <div>
              <div className="flex justify-center">
                <div className="v-loader"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
