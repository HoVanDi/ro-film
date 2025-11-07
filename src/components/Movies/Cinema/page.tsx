import { Swiper, SwiperSlide } from "swiper/react";
import { cinemaMovies } from "./mockData";

export default function CinemaFilm() {
  return (
    <div className="effect-fade-in">
      <div>
        <div className="cards-row cards-slide wide">
          <div className="row-header">
            <h2 className="category-name">Mãn Nhãn với Phim Chiếu Rạp</h2>
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
              <Swiper
                loop={true}
                spaceBetween={16}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                  },
                  1600: {
                    slidesPerView: 4,
                    spaceBetween: 8,
                  },
                }}
              >
                {cinemaMovies?.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <div className="sw-cover">
                      <a
                        className="v-thumbnail v-thumbnail-hoz"
                        href={movie.href}
                      >
                        <div className="pin-new m-pin-new">
                          <div className="line-center line-pd">P.Đề</div>
                        </div>
                        <div>
                          <img
                            alt={movie.title}
                            loading="lazy"
                            src={movie.cover}
                          />
                        </div>
                      </a>
                      <div className="h-item">
                        <div className="v-thumb-m">
                          <a className="v-thumbnail" href={movie.href}>
                            <img
                              alt={`Xem Phim ${movie.title} Vietsub HD Online - Rophim`}
                              loading="lazy"
                              src={movie.thumb}
                            />
                          </a>
                        </div>
                        <div className="info">
                          <h4 className="item-title lim-1">
                            <a title={movie.title} href={movie.href}>
                              {movie.title}
                            </a>
                          </h4>
                          <h4 className="alias-title lim-1 mb-1">
                            <a title={movie.alias} href={movie.href}>
                              {movie.alias}
                            </a>
                          </h4>
                          <div className="info-line">
                            <div className="tag-small">
                              <strong>{movie.tag}</strong>
                            </div>
                            <div className="tag-small">{movie.year}</div>
                            <div className="tag-small">{movie.duration}</div>
                          </div>
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
  );
}
