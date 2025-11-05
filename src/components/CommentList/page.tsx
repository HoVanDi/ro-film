import { commentsData } from "./MockData";

export default function CommentList() {
  return (
    <div id="community" className="effect-fade-in">
      <div className="cards-row wide">
        <div className="row-content">
          <div className="comm-wrap">
            <div className="top-discuss">
              <div className="comm-title line-center">
                <i className="fa-solid fa-medal ct-icon"></i>
                <span>Top bình luận</span>
              </div>
              <div className="td-list">
                <div id="id-top-discuss" className="top-discuss-wrapper">
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
                    <button type="button" className="sw-button sw-prev">
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

                  <div className="swiper swiper-initialized swiper-horizontal">
                    <div className="swiper-wrapper">
                      <div className="comment-slider">
                        <div className="comment-track">
                          {commentsData.map((comment, index) => (
                            <div
                              key={comment.id}
                              className="swiper-slide !w-[270.2px] mr-4"
                            >
                              <div className="d-item td-d-item">
                                <div className="di-poster">
                                  <img
                                    alt={`Poster ${comment.movie}`}
                                    loading="lazy"
                                    src={comment.poster}
                                  />
                                </div>
                                <div className="di-v">
                                  <div className="user-avatar">
                                    <img
                                      alt={comment.user}
                                      src={comment.avatar}
                                    />
                                  </div>
                                  <div className="info">
                                    <div className="comment-header">
                                      <div className="user-name line-center gr-free ">
                                        <span>
                                          {comment.user}{" "}
                                          <i className="fa-solid fa-infinity text-primary ms-2"></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="text lim-2">
                                      {comment.text}
                                    </div>
                                    <div className="comment-bottom line-center gap-3 d-flex">
                                      <div className="item item-up line-center">
                                        <i className="fa-solid fa-circle-up"></i>
                                        <span>1</span>
                                      </div>
                                      <div className="item item-down line-center">
                                        <i className="fa-solid fa-circle-down"></i>
                                        <span>1</span>
                                      </div>
                                      <div className="item item-rep line-center">
                                        <i className="fa-solid fa-message"></i>
                                        <span>14</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-thumb">
                                  <a
                                    className="v-thumbnail"
                                    title="Thủy Long Ngâm"
                                    href="/phim/thuy-long-ngam.lTaoogB3?cid=6908517b80501bdfbee83a90"
                                  >
                                    <img
                                      alt="Xem Phim Thủy Long Ngâm Vietsub HD Online - Rophim"
                                      loading="lazy"
                                      src="https://static.nutscdn.com/vimg/300-0/6946fb51134899d6f8b1f0385e72638b.jpg"
                                    />
                                  </a>
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
            <div className="irt-table">
              <div className="it-col this-01">
                <div className="comm-title line-center">
                  <i className="fa-solid fa-clapperboard ct-icon"></i>
                  <span className="flex-grow-1">Sôi nổi nhất</span>
                </div>
                <div className="chart-list">
                  <div className="item">
                    <div className="pos">1.</div>
                    <div className="dev dev-up">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <div className="v-thumbnail">
                      <img
                        alt="Xem Phim Thủy Long Ngâm Vietsub HD Online - Rophim"
                        loading="lazy"
                        src="https://static.nutscdn.com/vimg/300-0/6946fb51134899d6f8b1f0385e72638b.jpg"
                      />
                    </div>
                    <h4 className="name lim-1">
                      <a
                        title="Thủy Long Ngâm"
                        href="/phim/thuy-long-ngam.lTaoogB3"
                      >
                        Thủy Long Ngâm
                      </a>
                    </h4>
                  </div>
                  <div className="item">
                    <div className="pos">2.</div>
                    <div className="dev dev-stand">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="v-thumbnail">
                      <img
                        alt="Xem Phim Ám Hà Truyện Vietsub HD Online - Rophim"
                        loading="lazy"
                        src="https://static.nutscdn.com/vimg/300-0/6c9779087671f044479dec8f8e06ce28.jpg"
                      />
                    </div>
                    <h4 className="name lim-1">
                      <a
                        title="Ám Hà Truyện"
                        href="/phim/am-ha-truyen.sC2ZXcjc"
                      >
                        Ám Hà Truyện
                      </a>
                    </h4>
                  </div>
                  <div className="item">
                    <div className="pos">3.</div>
                    <div className="dev dev-up">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <div className="v-thumbnail">
                      <img
                        alt="Xem Phim Thiên Địa Kiếm Tâm Vietsub HD Online - Rophim"
                        loading="lazy"
                        src="https://static.nutscdn.com/vimg/300-0/fad026ae47cdc82b581d99177618faaa.jpg"
                      />
                    </div>
                    <h4 className="name lim-1">
                      <a
                        title="Thiên Địa Kiếm Tâm"
                        href="/phim/thien-dia-kiem-tam.5rQtY6RF"
                      >
                        Thiên Địa Kiếm Tâm
                      </a>
                    </h4>
                  </div>
                  <div className="item">
                    <div className="pos">4.</div>
                    <div className="dev dev-stand">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="v-thumbnail">
                      <img
                        alt="Xem Phim Gia Đình Bão Tố Vietsub HD Online - Rophim"
                        loading="lazy"
                        src="https://static.nutscdn.com/vimg/300-0/38c8329b9ba9387c5cece8f0b4f7d7bc.jpg"
                      />
                    </div>
                    <h4 className="name lim-1">
                      <a
                        title="Gia Đình Bão Tố"
                        href="/phim/gia-dinh-bao-to.M8jZud05"
                      >
                        Gia Đình Bão Tố
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="it-col this-01">
                <div className="comm-title line-center">
                  <i className="fa-solid fa-heart-circle-check ct-icon"></i>
                  <span className="flex-grow-1">Yêu thích nhất</span>
                </div>
                <div className="chart-list">
                  <div className="item">
                    <div className="pos">1.</div>
                    <div className="dev dev-stand">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="v-thumbnail">
                      <img
                        alt="Xem Phim Năm Ngón Tay Diệu Kỳ Vietsub HD Online - Rophim"
                        loading="lazy"
                        src="https://static.nutscdn.com/vimg/300-0/4fcb747209804d633c9725c1c499926c.jpg"
                      />
                    </div>
                    <h4 className="name lim-1">
                      <a
                        title="Năm Ngón Tay Diệu Kỳ"
                        href="/phim/nam-ngon-tay-dieu-ky.U0skPmay"
                      >
                        Năm Ngón Tay Diệu Kỳ
                      </a>
                    </h4>
                  </div>
                  <div className="item">
                    <div className="pos">2.</div>
                    <div className="dev dev-up">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <div className="v-thumbnail">
                      <img
                        alt="Xem Phim Phỏng Vấn Sát Nhân Vietsub HD Online - Rophim"
                        loading="lazy"
                        src="https://static.nutscdn.com/vimg/300-0/5f261cec91a138a7201f4ed9fb991c67.jpg"
                      />
                    </div>
                    <h4 className="name lim-1">
                      <a
                        title="Phỏng Vấn Sát Nhân"
                        href="/phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        Phỏng Vấn Sát Nhân
                      </a>
                    </h4>
                  </div>
                  <div className="item">
                    <div className="pos">3.</div>
                    <div className="dev dev-up">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                    </div>
                    <div className="v-thumbnail">
                      <img
                        alt="Xem Phim Mùa Hạ Cuối Vietsub HD Online - Rophim"
                        loading="lazy"
                        src="https://static.nutscdn.com/vimg/300-0/3aebf45a93ac035d51f14b514ec131ab.jpg"
                      />
                    </div>
                    <h4 className="name lim-1">
                      <a title="Mùa Hạ Cuối" href="/phim/mua-ha-cuoi.RK7npPvY">
                        Mùa Hạ Cuối
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="it-col this-03">
                <div className="comm-title line-center">
                  <i className="fa-solid fa-folder-plus ct-icon"></i>
                  <span className="flex-grow-1">Thể loại Hot</span>
                </div>
                <div className="chart-list">
                  <div className="item">
                    <div className="pos">1.</div>
                    <div className="dev dev-stand">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="topic-color bg-[rgb(116, 45, 75)]">
                      <a href="/the-loai/chinh-kich.1gOywM">Chính Kịch</a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pos">2.</div>
                    <div className="dev dev-stand">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <div className="topic-color bg-[rgb(116, 45, 75)]">
                      <a href="/the-loai/tinh-cam.4RxsoY">Tình Cảm</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="it-col this-05">
                <div className="comm-title line-center">
                  <i className="fa-solid fa-bolt ct-icon"></i>
                  <span>Bình luận mới</span>
                </div>

                <div className="release-list">
                  <div id="latest-comment" className="comment-slide-wrapper">
                    <div className="swiper swiper-initialized swiper-vertical sw-comment-slide">
                      <div className="swiper-wrapper">
                        {/* Slide 1 */}
                        <div className="swiper-slide !mb-[4px]">
                          <a
                            className="re-item"
                            href="/phim/chad-powers.KwvZlA4g?cid=6908a5c50aee734bbe66f008"
                          >
                            <div className="user-avatar">
                              <img
                                alt="Love Rock"
                                src="/images/avatars/pack1/09.jpg"
                              />
                            </div>
                            <div className="user-comment flex items-center gap-2">
                              <div className="user-name line-center gr-free shrink-0">
                                <span>
                                  Love Rock{" "}
                                  <i className="fa-solid fa-infinity text-primary ms-2"></i>
                                </span>
                              </div>
                              <div className="subject grow">
                                <div className="lim-1">này gọi là smurf :</div>
                              </div>
                            </div>
                            <div className="for line-center gap-1 flex items-center">
                              <small className="me-1">
                                <i className="fa-solid fa-play"></i>
                              </small>
                              <span className="lim-1">Chad Powers</span>
                            </div>
                          </a>
                        </div>

                        <div
                          className="swiper-slide swiper-slide-active !h-[67.5px] !mb-[4px]"
                          data-swiper-slide-index="0"
                        >
                          <div className="swiper-slide">
                            <a
                              className="re-item"
                              href="/phim/ngay-xua-ngay-xua.SZWi6xZT?cid=6909becea3820befe28e6bb7"
                            >
                              <div className="user-avatar">
                                <img
                                  alt="Margaret Qualley"
                                  src="/images/avatars/pack1/04.jpg"
                                />
                              </div>
                              <div className="user-comment d-flex align-items-center gap-2">
                                <div className="user-name line-center gr-free flex-shrink-0">
                                  <span>
                                    Margaret Qualley{" "}
                                    <i className="fa-solid fa-infinity text-primary ms-2"></i>
                                  </span>
                                </div>
                                <div className="subject flex-grow-1">
                                  <div className="lim-1">
                                    Hồi mấytập trước cúi ss1khi chị Emma xuốglấy
                                    lọ thuốc để cứu Henry đã giết chết con Rồg
                                    tưởgbà Maleficent đi bụi rồi nào ngờ bả sốg
                                    dai thật&amp;bị biến thàh đủ thứ🤣bà chị Đen
                                    Regina chơi với bạn tốt ghê☹️☹️
                                  </div>
                                </div>
                              </div>
                              <div className="for line-center gap-1">
                                <small className="me-1">
                                  <i className="fa-solid fa-play"></i>
                                </small>
                                <span className="lim-1">Ngày Xửa Ngày Xưa</span>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* ...và các slide còn lại tương tự */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
