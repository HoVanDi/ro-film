"use client";
import { useEffect, useState } from "react";
import Header from "@/src/components/Header";
import Banner from "@/src/components/Banner/Banner";
import CardFilm from "@/src/components/NewFilm/page";
import CommentList from "@/src/components/CommentList/page";
import NewFilm from "@/src/components/Movies/New/page";
import TopFilm from "@/src/components/Movies/TopFilm/page";
import CinemaFilm from "@/src/components/Movies/Cinema/page";
import { movies } from "@/src/components/Movies/New/mockData";
import Footer from "@/src/components/Footer/page";
import AnimeTreasure from "@/src/components/animeTreasure/page";
import LoginPage from "@/src/components/Login/page";
export default function Home() {
  const [shrink, setShrink] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
        <Header setShowLogin={setShowLogin} />
        <h1 className="absolute -top-[9999px] -left-[9999px]">
          RoPhim - Phim hay cả rổ - Xem Phim Mới HD Online Vietsub
        </h1>
        <Banner />
        <div id="wrapper" className="wrapper-w-slide">
          <div className="fluid-gap">
            <div className="sspp-area is-wide">
              <div className="display-single is-demo">
                <a
                  href="https://lu88.com/khuyen-mai/vqmm?i=lu0a0001634&amp;utm_source=rophimme&amp;utm_medium=banner-wide-1200x110-1&amp;utm_campaign=cpd&amp;utm_term=phim&amp;referrer_domain=www.rophim.me"
                  className="is-image"
                  target="_blank"
                >
                  <img
                    alt=""
                    src="https://i.finallygotthexds.site/vpromolink/ba/c8/bac85ab2eaca287a331a2081b0722bd1/bac85ab2eaca287a331a2081b0722bd1.gif"
                  />
                </a>
              </div>
            </div>
            <div className="cards-row wide">
              <div className="row-header">
                <h3 className="category-name">Bạn đang quan tâm gì?</h3>
              </div>
              <div className="row-content">
                <div className="topics-list topics-grid topics-line mt-0">
                  <a className="row-topic" href="">
                    <div className="mask bg-[rgb(50,79,209)]"></div>
                    <div className="intro">
                      <div className="heading-md lim-2 mb-0">Marvel</div>
                      <div className="info">
                        <div className="btn btn-sm btn-outline">
                          <span>Xem chủ đề</span>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="row-topic" href="">
                    <div className="mask bg-[rgb(102,102,153)]"></div>
                    <div className="intro">
                      <div className="heading-md lim-2 mb-0">4K</div>
                      <div className="info">
                        <div className="btn btn-sm btn-outline">
                          <span>Xem chủ đề</span>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="row-topic" href="">
                    <div className="mask bg-[rgb(27,133,108)]"></div>
                    <div className="intro">
                      <div className="heading-md lim-2 mb-0">Sitcom</div>
                      <div className="info">
                        <div className="btn btn-sm btn-outline">
                          <span>Xem chủ đề</span>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="row-topic" href="">
                    <div className="mask bg-[rgb(119, 97, 180)]"></div>
                    <div className="intro">
                      <div className="heading-md lim-2 mb-0">
                        Lồng Tiếng Cực Mạnh
                      </div>
                      <div className="info">
                        <div className="btn btn-sm btn-outline">
                          <span>Xem chủ đề</span>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="row-topic" href="">
                    <div className="mask bg-[rgb(205, 126, 95)]"></div>
                    <div className="intro">
                      <div className="heading-md lim-2 mb-0">Xuyên Không</div>
                      <div className="info">
                        <div className="btn btn-sm btn-outline">
                          <span>Xem chủ đề</span>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="row-topic" href="">
                    <div className="mask bg-[rgb(167, 57, 57);"></div>
                    <div className="intro">
                      <div className="heading-md lim-2 mb-0">Cổ Trang</div>
                      <div className="info">
                        <div className="btn btn-sm btn-outline">
                          <span>Xem chủ đề</span>
                          <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="row-topic more-topic p-3" href="/chu-de">
                    <div className="mask bg-[rgb(46, 50, 69);"></div>
                    <div className="intro justify-content-center align-items-center">
                      <div className="heading-md mb-0">+4 chủ đề</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <CardFilm />
            <div className="sspp-area is-wide">
              <div className="display-single is-demo">
                <a
                  href="https://789.club/?a=e9c36ed07dc147022d4759c81636cef3&amp;utm_source=rophimme&amp;utm_medium=banner-wide-1200x110-2&amp;utm_campaign=cpd&amp;utm_term=phim&amp;referrer_domain=www.rophim.me"
                  className="is-image"
                  target="_blank"
                >
                  <img
                    alt=""
                    src="https://i.finallygotthexds.site/vpromolink/e9/ff/e9ffc9746a7b24c05be844e28105313f/e9ffc9746a7b24c05be844e28105313f.gif"
                  />
                </a>
              </div>
            </div>
            <CommentList />
            <div className="sspp-area is-wide">
              <div className="display-single is-demo">
                <a
                  href="https://man88.vip/khuyen-mai/the-loai/thuong-nap/?a=4e266a2f6ae4ecdf006bcdf723ff29e0&amp;utm_source=rophimme&amp;utm_medium=banner-wide-1200x110-3&amp;utm_campaign=cpd&amp;utm_term=phim&amp;referrer_domain=www.rophim.me"
                  className="is-image"
                  target="_blank"
                >
                  <img
                    alt=""
                    src="https://i.finallygotthexds.site/vpromolink/48/0d/480d231532a7d759a6abd4bc2793c591/480d231532a7d759a6abd4bc2793c591.gif"
                  />
                </a>
              </div>
            </div>
            {/* NewFilm */}
            <NewFilm />
            {/* TopFilm */}
            <TopFilm />
            {/* CinemaFilm */}
            <CinemaFilm />

            {/* SingleFilm */}
            <div className="effect-fade-in">
              <div>
                <div className="cards-row cards-slide wide">
                  <div className="row-header">
                    <h2 className="category-name">Top 10 phim bộ hôm nay</h2>
                    <div className="cat-more">
                      <a
                        className="line-center"
                        href="/c/phim-dien-anh-moi-coong.CGPoDx"
                      >
                        <span>Xem thêm</span>
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="row-content">
                    <div className="cards-slide-wrapper">
                      <div className="sw-navigation">
                        <button type="button" className="sw-button sw-next">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M5.66675 3.33341L10.3334 8.00008L5.66675 12.6667"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="swiper swiper-initialized swiper-horizontal">
                        <div className="swiper-wrapper translate-x-0 translate-y-0 transition-transform duration-300 ease-in-out">
                          {movies?.map((movie) => (
                            <div
                              key={movie.id}
                              className="swiper-slide swiper-slide-next !w-[198.667px] mr-4"
                            >
                              <div className="sw-item">
                                <a className="v-thumbnail" href={movie.href}>
                                  <div className="pin-new m-pin-new">
                                    {movie.labels.map((label) => (
                                      <div
                                        key={label}
                                        className="line-center line-pd"
                                      >
                                        {label}
                                      </div>
                                    ))}
                                  </div>
                                  <div>
                                    <img
                                      src={movie.img}
                                      alt={`Xem Phim ${movie.title} Vietsub HD Online - Rophim`}
                                      loading="lazy"
                                    />
                                  </div>
                                </a>
                                <div className="info">
                                  <h4 className="item-title lim-1">
                                    <a title={movie.title} href={movie.href}>
                                      {movie.title}
                                    </a>
                                  </h4>
                                  <h4 className="alias-title lim-1">
                                    <a title={movie.alias} href={movie.href}>
                                      {movie.alias}
                                    </a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AnimeTreasure />
            <div>
              <div className="v-loader-area">
                <div className="v-loader"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </>
  );
}
