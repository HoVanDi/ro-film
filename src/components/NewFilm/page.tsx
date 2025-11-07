import { useState } from "react";
import { mockChinaMovies, mockKoreaMovies, mockUSMovies } from "./mockData";
import { SwiperSlide, Swiper } from "swiper/react";

export default function CardFilm() {
  const [isReady, setIsReady] = useState(false);
  return (
    <div className="cards-row cards-slide wide effect-fade-in">
      <div className="topics-list single mt-0">
        <div id="collection-3KYr2v">
          <div className="row-topic">
            <div className="intro">
              <div className="heading-md text-gradient mb-0 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-700">
                Phim Hàn Quốc mới
              </div>
              <div className="info">
                <a className="line-center" href="/c/phim-han-quoc-moi.3KYr2v">
                  <span>Xem toàn bộ</span>
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
                  <button
                    type="button"
                    className="sw-button sw-prev swiper-button-disabled"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.3335 12.6667L5.66683 8.00004L10.3335 3.33337"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Swiper
                  onSwiper={() => setIsReady(true)}
                  className={`${
                    !isReady
                      ? "opacity-0"
                      : "opacity-100 transition-opacity duration-300"
                  }`}
                  loop={true}
                  observer
                  observeParents
                  spaceBetween={16}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 8,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 16,
                    },
                    1600: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {mockKoreaMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <div className="sw-cover single">
                        <a
                          className="v-thumbnail v-thumbnail-hoz"
                          href={movie.href}
                        >
                          <div className="pin-new m-pin-new">
                            {movie.pins.map((pin, i) => (
                              <div
                                key={i}
                                className={`line-center ${pin.type}`}
                              >
                                <span></span>
                                <strong>{pin.value}</strong>
                              </div>
                            ))}
                          </div>
                          <div>
                            <img
                              alt={`Xem Phim ${movie.title}`}
                              loading="lazy"
                              src={movie.img}
                            />
                          </div>
                        </a>
                        <div className="h-item">
                          <div className="info">
                            <h4 className="item-title lim-1">{movie.title}</h4>
                            <h4 className="alias-title lim-1">{movie.alias}</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div id="collection-m1YQvz">
          <div className="row-topic">
            <div className="intro">
              <div className="heading-md text-gradient mb-0 bg-gradient-to-br from-white to-[#f7a10b] bg-clip-text text-transparent">
                Phim Trung Quốc mới
              </div>
              <div className="info">
                <a className="line-center" href="/c/phim-trung-quoc-moi.m1YQvz">
                  <span>Xem toàn bộ</span>
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
                  <button
                    type="button"
                    className="sw-button sw-prev swiper-button-disabled"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.3335 12.6667L5.66683 8.00004L10.3335 3.33337"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Swiper
                  loop={true}
                  spaceBetween={16}
                  onSwiper={() => setIsReady(true)}
                  className={`${
                    !isReady
                      ? "opacity-0"
                      : "opacity-100 transition-opacity duration-300"
                  }`}
                  observer
                  observeParents
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 8,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 16,
                    },
                    1600: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {mockChinaMovies?.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <div className="sw-cover single">
                        <a
                          className="v-thumbnail v-thumbnail-hoz"
                          href={movie.href}
                        >
                          {/* Pins */}
                          <div className="pin-new m-pin-new">
                            {movie.pins.map((pin, i) => (
                              <div
                                key={i}
                                className={`line-center ${pin.type}`}
                              >
                                <span></span>
                                <strong>{pin.value}</strong>
                              </div>
                            ))}
                          </div>

                          {/* Image */}
                          <div>
                            <img
                              alt={`Xem Phim ${movie.title} Vietsub HD Online - Rophim`}
                              loading="lazy"
                              src={movie.img}
                            />
                          </div>
                        </a>

                        {/* Info */}
                        <div className="h-item">
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div id="collection-KcDGDD">
          <div className="row-topic">
            <div className="intro">
              <div className="heading-md text-gradient mb-0 bg-gradient-to-br from-white to-[#ff0099] bg-clip-text text-transparent">
                Phim US-UK mới
              </div>
              <div className="info">
                <a className="line-center" href="/c/phim-us-uk-moi.KcDGDD">
                  <span>Xem toàn bộ</span>
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
                  <button
                    type="button"
                    className="sw-button sw-prev swiper-button-disabled"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.3335 12.6667L5.66683 8.00004L10.3335 3.33337"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Swiper
                  onSwiper={() => setIsReady(true)}
                  className={`${
                    !isReady
                      ? "opacity-0"
                      : "opacity-100 transition-opacity duration-300"
                  }`}
                  observer
                  observeParents
                  loop={true}
                  spaceBetween={16}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 8,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 16,
                    },
                    1600: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {mockUSMovies?.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <div className="sw-cover single">
                        <a
                          className="v-thumbnail v-thumbnail-hoz"
                          href={movie.href}
                        >
                          {/* Pins */}
                          <div className="pin-new m-pin-new">
                            {movie.pins.map((pin, i) => (
                              <div
                                key={i}
                                className={`line-center ${pin.type}`}
                              >
                                <span></span>
                                <strong>{pin.value}</strong>
                              </div>
                            ))}
                          </div>

                          {/* Image */}
                          <div>
                            <img
                              alt={`Xem Phim ${movie.title} Vietsub HD Online - Rophim`}
                              loading="lazy"
                              src={movie.img}
                            />
                          </div>
                        </a>

                        {/* Info */}
                        <div className="h-item">
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
