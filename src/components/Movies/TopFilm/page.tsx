import { topFilm } from "./mockData";

export default function TopFilm() {
  return (
    <div className="effect-fade-in">
      <div>
        <div className="cards-row cards-slide wide">
          <div className="row-header">
            <h2 className="category-name">Top 10 phim bộ hôm nay</h2>
          </div>
          <div className="row-content">
            <div className="cards-slide-wrapper top-up">
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
              <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div className="swiper-wrapper translate-x-0 translate-y-0 transition-transform duration-300 ease-in-out">
                  {topFilm?.map((movie) => (
                    <div
                      key={movie.id}
                      className="swiper-slide swiper-slide-active !w-[241.6px] mr-4"
                    >
                      <div className="sw-item">
                        <a className="v-thumbnail" href={movie.href}>
                          <div className="mask"></div>
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
                              alt={`Xem Phim ${movie.title} Vietsub HD Online - Rophim`}
                              loading="lazy"
                              src={movie.img}
                            />
                          </div>
                        </a>

                        <div className="info info-v w-chart">
                          <div className="number">{movie.number}</div>
                          <h4 className="item-title lim-1">
                            <a title={movie.title} href={movie.href}>
                              {movie.title}
                            </a>
                          </h4>
                          <div className="alias-title lim-1">{movie.alias}</div>

                          <div className="info-line">
                            {movie.tags.map((tag, i) => (
                              <div key={i} className="tag-small">
                                {i === 0 ? <strong>{tag}</strong> : tag}
                              </div>
                            ))}
                          </div>
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
