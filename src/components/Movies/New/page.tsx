import { Swiper, SwiperSlide } from "swiper/react";
import { movies } from "./mockData";

export default function NewFilm() {
  return (
    <div className="effect-fade-in">
      <div>
        <div className="cards-row cards-slide wide">
          <div className="row-header">
            <h2 className="category-name">Phim Điện Ảnh Mới Coóng</h2>
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
                    slidesPerView: 3,
                    spaceBetween: 8,
                  },
                  766: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                  },
                  1400: {
                    slidesPerView: 6,
                    spaceBetween: 16,
                  },
                  1600: {
                    slidesPerView: 7,
                    spaceBetween: 16,
                  },
                  1800: {
                    slidesPerView: 8,
                    spaceBetween: 16,
                  },
                }}
              >
                {movies?.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <div className="sw-item">
                      <a className="v-thumbnail" href={movie.href}>
                        <div className="pin-new m-pin-new">
                          {movie.labels.map((label) => (
                            <div key={label} className="line-center line-pd">
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
