import { movies } from "../Movies/New/mockData";

export default function SingleFilmPage() {
  return (
    <div className="effect-fade-in">
      <div>
        <div className="cards-row cards-slide wide">
          <div className="row-header">
            <h2 className="category-name">Phim lẻ điện ảnh</h2>
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
