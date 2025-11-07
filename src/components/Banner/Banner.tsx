import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  return (
    <div id="top_slide">
      <div className="slide-wrapper top-slide-wrap">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 4000, // 4s mỗi slide
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={1000} // Tốc độ chuyển đổi slide
          className="top-slide-main top-slide-wrap"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slide-elements">
              <a
                className="slide-url"
                href="/phim/phong-van-sat-nhan.OYcjq79A"
              ></a>

              <div className="cover-fade">
                <div className="cover-image">
                  <img
                    className="fade-in visible"
                    loading="lazy"
                    title="Phỏng Vấn Sát Nhân"
                    src="https://static.nutscdn.com/vimg/1920-0/3c16e73b8dfcdc05592ca01a370fb957.jpg"
                  />
                </div>
              </div>
              <div className="safe-area">
                <div className="slide-content">
                  <div className="media-item">
                    <div className="media-title-image">
                      <a
                        title="Phỏng Vấn Sát Nhân"
                        href="/phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        <img
                          alt="Phỏng Vấn Sát Nhân"
                          src="https://static.nutscdn.com/vimg/0-260/ac7763367d0fba9e6bd9de5f45396180.png"
                        />
                      </a>
                    </div>
                    <h3 className="media-title hidden">
                      <a
                        title="Phỏng Vấn Sát Nhân"
                        href="/phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        Phỏng Vấn Sát Nhân
                      </a>
                    </h3>
                    <h3 className="media-alias-title">
                      <a
                        title="Murderer Report"
                        href="/phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        Murderer Report
                      </a>
                    </h3>
                    <div className="hl-tags">
                      <div className="tag-imdb">
                        <span>7.0</span>
                      </div>
                      <div className="tag-model">
                        <span className="last">
                          <strong>T18</strong>
                        </span>
                      </div>
                      <div className="tag-classic">
                        <span>2025</span>
                      </div>
                      <div className="tag-classic">
                        <span>1h 48m</span>
                      </div>
                    </div>
                    <div className="hl-tags mb-4">
                      <a
                        className="tag-topic"
                        href="/the-loai/chinh-kich.1gOywM"
                      >
                        Chính Kịch
                      </a>
                      <a
                        className="tag-topic"
                        href="/the-loai/chieu-rap.3679nF"
                      >
                        Chiếu Rạp
                      </a>
                      <a className="tag-topic" href="/the-loai/gay-can.3PP9q7">
                        Gay Cấn
                      </a>
                      <a className="tag-topic" href="/the-loai/hinh-su.IN1LmJ">
                        Hình Sự
                      </a>
                      <a className="tag-topic" href="/the-loai/bi-an.T6q81e">
                        Bí Ẩn
                      </a>
                      <a className="tag-topic" href="/the-loai/tam-ly.epV6Ny">
                        Tâm Lý
                      </a>
                    </div>
                    <div className="description lim-3">
                      Baek Sun-ju (CHO Yeo-jeong) – một nữ phóng viên đang tuyệt
                      vọng tìm kiếm một tin độc quyền, nhận được lời đề nghị
                      phỏng vấn rùng rợn từ bác sĩ tâm thần Lee Young-hoon (JUNG
                      Sung-il), người tự nhận mình là một kẻ giết người hàng
                      loạt và cảnh báo rằng một vụ án mạng khác sắp xảy ra. Sau
                      nhiều do dự, Sun-ju bắt đầu buổi phỏng vấn với tên sát
                      nhân trong một phòng khách sạn. Trong cuộc trò chuyện căng
                      thẳng đó, Young-hoon tiết lộ một sự thật gây sốc: những vụ
                      giết người của hắn bắt đầu như một cách để “chữa trị” cho
                      bệnh nhân của mình. Khi cuộc phỏng vấn tiếp diễn, Sun-ju
                      cảm nhận có điều gì đó vô cùng sai trái và cố gắng bỏ
                      chạy. Nhưng hắn lại tung ra một “quả bom” khác: nếu cô
                      dừng buổi phỏng vấn lại, sẽ có thêm một người chết. “Nếu
                      cuộc phỏng vấn này dừng lại, sẽ có người mất mạng.” Liệu
                      cuộc chạm trán định mệnh này sẽ kết thúc như thế nào?
                    </div>
                    <div className="touch">
                      <a
                        className="button-play"
                        href="/xem-phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                      <div className="touch-group">
                        <a className="item ">
                          <div className="inc-icon icon-20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_49_76)">
                                <path
                                  d="M10 18.1432L1.55692 9.82794C0.689275 8.97929 0.147406 7.85276 0.0259811 6.64517C-0.0954433 5.43759 0.211298 4.22573 0.892612 3.22133C4.99987 -2.24739 10 4.10278 10 4.10278C10 4.10278 15.0001 -2.24739 19.1074 3.22133C19.7887 4.22573 20.0954 5.43759 19.974 6.64517C19.8526 7.85276 19.3107 8.97929 18.4431 9.82794L10 18.1432Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                        <a
                          className="item"
                          href="/phim/phong-van-sat-nhan.OYcjq79A"
                        >
                          <div className="inc-icon icon-20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_37_55)">
                                <path
                                  d="M10 0.75C4.47734 0.75 0 5.22734 0 10.75C0 16.2727 4.47734 20.75 10 20.75C15.5227 20.75 20 16.2727 20 10.75C20 5.22734 15.5227 0.75 10 0.75ZM11.2664 14.9523C11.2664 15.1187 11.2337 15.2833 11.17 15.437C11.1064 15.5906 11.0131 15.7302 10.8955 15.8478C10.7779 15.9654 10.6383 16.0587 10.4846 16.1224C10.331 16.186 10.1663 16.2188 10 16.2188C9.83369 16.2188 9.66901 16.186 9.51537 16.1224C9.36172 16.0587 9.22211 15.9654 9.10452 15.8478C8.98692 15.7302 8.89364 15.5906 8.82999 15.437C8.76635 15.2833 8.73359 15.1187 8.73359 14.9523V9.88633C8.73359 9.72002 8.76635 9.55534 8.82999 9.4017C8.89364 9.24805 8.98692 9.10844 9.10452 8.99084C9.22211 8.87325 9.36172 8.77996 9.51537 8.71632C9.66901 8.65268 9.83369 8.61992 10 8.61992C10.1663 8.61992 10.331 8.65268 10.4846 8.71632C10.6383 8.77996 10.7779 8.87325 10.8955 8.99084C11.0131 9.10844 11.1064 9.24805 11.17 9.4017C11.2337 9.55534 11.2664 9.72002 11.2664 9.88633V14.9523ZM10 7.81406C9.74953 7.81406 9.50468 7.73979 9.29642 7.60063C9.08816 7.46148 8.92584 7.26369 8.82999 7.03229C8.73414 6.80088 8.70906 6.54625 8.75793 6.30059C8.80679 6.05493 8.92741 5.82928 9.10452 5.65217C9.28163 5.47506 9.50728 5.35445 9.75294 5.30558C9.9986 5.25672 10.2532 5.2818 10.4846 5.37765C10.716 5.4735 10.9138 5.63582 11.053 5.84408C11.1921 6.05234 11.2664 6.29718 11.2664 6.54766C11.2665 6.71398 11.2337 6.87868 11.1701 7.03235C11.1065 7.18602 11.0132 7.32565 10.8956 7.44326C10.778 7.56086 10.6384 7.65414 10.4847 7.71777C10.331 7.78139 10.1663 7.81411 10 7.81406Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slide-elements">
              <div className="cover-fade">
                <div className="cover-image">
                  <img
                    loading="lazy"
                    title="Slide khác"
                    src="https://static.nutscdn.com/vimg/1920-0/05ab266fbfb9b161acaa630a7e260b5b.jpg"
                  />
                </div>
              </div>
              <div className="safe-area">
                <div className="slide-content">
                  <div className="media-item">
                    <div className="media-title-image">
                      <a
                        title="Phỏng Vấn Sát Nhân"
                        href="/phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        <img
                          alt="Phỏng Vấn Sát Nhân"
                          src="https://static.nutscdn.com/vimg/0-260/ac7763367d0fba9e6bd9de5f45396180.png"
                        />
                      </a>
                    </div>
                    <h3 className="media-title hidden">
                      <a
                        title="Phỏng Vấn Sát Nhân"
                        href="/phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        Phỏng Vấn Sát Nhân
                      </a>
                    </h3>
                    <h3 className="media-alias-title">
                      <a
                        title="Murderer Report"
                        href="/phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        Murderer Report
                      </a>
                    </h3>
                    <div className="hl-tags">
                      <div className="tag-imdb">
                        <span>7.0</span>
                      </div>
                      <div className="tag-model">
                        <span className="last">
                          <strong>T18</strong>
                        </span>
                      </div>
                      <div className="tag-classic">
                        <span>2025</span>
                      </div>
                      <div className="tag-classic">
                        <span>1h 48m</span>
                      </div>
                    </div>
                    <div className="hl-tags mb-4">
                      <a
                        className="tag-topic"
                        href="/the-loai/chinh-kich.1gOywM"
                      >
                        Chính Kịch
                      </a>
                      <a
                        className="tag-topic"
                        href="/the-loai/chieu-rap.3679nF"
                      >
                        Chiếu Rạp
                      </a>
                      <a className="tag-topic" href="/the-loai/gay-can.3PP9q7">
                        Gay Cấn
                      </a>
                      <a className="tag-topic" href="/the-loai/hinh-su.IN1LmJ">
                        Hình Sự
                      </a>
                      <a className="tag-topic" href="/the-loai/bi-an.T6q81e">
                        Bí Ẩn
                      </a>
                      <a className="tag-topic" href="/the-loai/tam-ly.epV6Ny">
                        Tâm Lý
                      </a>
                    </div>
                    <div className="description lim-3">
                      Baek Sun-ju (CHO Yeo-jeong) – một nữ phóng viên đang tuyệt
                      vọng tìm kiếm một tin độc quyền, nhận được lời đề nghị
                      phỏng vấn rùng rợn từ bác sĩ tâm thần Lee Young-hoon (JUNG
                      Sung-il), người tự nhận mình là một kẻ giết người hàng
                      loạt và cảnh báo rằng một vụ án mạng khác sắp xảy ra. Sau
                      nhiều do dự, Sun-ju bắt đầu buổi phỏng vấn với tên sát
                      nhân trong một phòng khách sạn. Trong cuộc trò chuyện căng
                      thẳng đó, Young-hoon tiết lộ một sự thật gây sốc: những vụ
                      giết người của hắn bắt đầu như một cách để “chữa trị” cho
                      bệnh nhân của mình. Khi cuộc phỏng vấn tiếp diễn, Sun-ju
                      cảm nhận có điều gì đó vô cùng sai trái và cố gắng bỏ
                      chạy. Nhưng hắn lại tung ra một “quả bom” khác: nếu cô
                      dừng buổi phỏng vấn lại, sẽ có thêm một người chết. “Nếu
                      cuộc phỏng vấn này dừng lại, sẽ có người mất mạng.” Liệu
                      cuộc chạm trán định mệnh này sẽ kết thúc như thế nào?
                    </div>
                    <div className="touch">
                      <a
                        className="button-play"
                        href="/xem-phim/phong-van-sat-nhan.OYcjq79A"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                      <div className="touch-group">
                        <a className="item ">
                          <div className="inc-icon icon-20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_49_76)">
                                <path
                                  d="M10 18.1432L1.55692 9.82794C0.689275 8.97929 0.147406 7.85276 0.0259811 6.64517C-0.0954433 5.43759 0.211298 4.22573 0.892612 3.22133C4.99987 -2.24739 10 4.10278 10 4.10278C10 4.10278 15.0001 -2.24739 19.1074 3.22133C19.7887 4.22573 20.0954 5.43759 19.974 6.64517C19.8526 7.85276 19.3107 8.97929 18.4431 9.82794L10 18.1432Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                        <a
                          className="item"
                          href="/phim/phong-van-sat-nhan.OYcjq79A"
                        >
                          <div className="inc-icon icon-20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_37_55)">
                                <path
                                  d="M10 0.75C4.47734 0.75 0 5.22734 0 10.75C0 16.2727 4.47734 20.75 10 20.75C15.5227 20.75 20 16.2727 20 10.75C20 5.22734 15.5227 0.75 10 0.75ZM11.2664 14.9523C11.2664 15.1187 11.2337 15.2833 11.17 15.437C11.1064 15.5906 11.0131 15.7302 10.8955 15.8478C10.7779 15.9654 10.6383 16.0587 10.4846 16.1224C10.331 16.186 10.1663 16.2188 10 16.2188C9.83369 16.2188 9.66901 16.186 9.51537 16.1224C9.36172 16.0587 9.22211 15.9654 9.10452 15.8478C8.98692 15.7302 8.89364 15.5906 8.82999 15.437C8.76635 15.2833 8.73359 15.1187 8.73359 14.9523V9.88633C8.73359 9.72002 8.76635 9.55534 8.82999 9.4017C8.89364 9.24805 8.98692 9.10844 9.10452 8.99084C9.22211 8.87325 9.36172 8.77996 9.51537 8.71632C9.66901 8.65268 9.83369 8.61992 10 8.61992C10.1663 8.61992 10.331 8.65268 10.4846 8.71632C10.6383 8.77996 10.7779 8.87325 10.8955 8.99084C11.0131 9.10844 11.1064 9.24805 11.17 9.4017C11.2337 9.55534 11.2664 9.72002 11.2664 9.88633V14.9523ZM10 7.81406C9.74953 7.81406 9.50468 7.73979 9.29642 7.60063C9.08816 7.46148 8.92584 7.26369 8.82999 7.03229C8.73414 6.80088 8.70906 6.54625 8.75793 6.30059C8.80679 6.05493 8.92741 5.82928 9.10452 5.65217C9.28163 5.47506 9.50728 5.35445 9.75294 5.30558C9.9986 5.25672 10.2532 5.2818 10.4846 5.37765C10.716 5.4735 10.9138 5.63582 11.053 5.84408C11.1921 6.05234 11.2664 6.29718 11.2664 6.54766C11.2665 6.71398 11.2337 6.87868 11.1701 7.03235C11.1065 7.18602 11.0132 7.32565 10.8956 7.44326C10.778 7.56086 10.6384 7.65414 10.4847 7.71777C10.331 7.78139 10.1663 7.81411 10 7.81406Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper swiper-initialized swiper-horizontal swiper-watch-progress top-slide-small swiper-backface-hidden swiper-thumbs">
          <div className="swiper-wrapper translate-x-0 translate-y-0 transition-transform duration-300 ease-in-out">
            <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active swiper-slide-thumb-active w-[70.8333px] mr-[5px]">
              <img
                alt="Xem Phim Phỏng Vấn Sát Nhân Vietsub HD Online - Rophim"
                loading="lazy"
                src="https://static.nutscdn.com/vimg/150-0/3c16e73b8dfcdc05592ca01a370fb957.jpg"
              />
            </div>
            <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-next w-[70.8333px] mr-[5px]">
              <img
                alt="Xem Phim Chó Cưng Đừng Sợ Vietsub HD Online - Rophim"
                loading="lazy"
                src="https://static.nutscdn.com/vimg/150-0/912812e95abbf368f574df3274c05a0b.jpg"
              />
            </div>
            <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible w-[70.8333px] mr-[5px]">
              <img
                alt="Xem Phim Nhân Diện Vietsub HD Online - Rophim"
                loading="lazy"
                src="https://static.nutscdn.com/vimg/150-0/05ab266fbfb9b161acaa630a7e260b5b.jpg"
              />
            </div>
            <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible w-[70.8333px] mr-[5px]">
              <img
                alt="Xem Phim Trăm Dặm Tử Thần Vietsub HD Online - Rophim"
                loading="lazy"
                src="https://static.nutscdn.com/vimg/150-0/ce7b7d0bbb3d35dc196192fed8ce2d9c.webp"
              />
            </div>
            <div className=" swiper-slide swiper-slide-visible swiper-slide-fully-visible w-[70.8333px] mr-[5px]">
              <img
                alt="Xem Phim Trò Chơi Ảo Giác: Ares Vietsub HD Online - Rophim"
                loading="lazy"
                src="https://static.nutscdn.com/vimg/150-0/cedd848ff99c21d69a84f1c610872b4f.webp"
              />
            </div>
            <div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible w-[70.8333px] mr-[5px]">
              <img
                alt="Xem Phim Ám Ảnh Kinh Hoàng: Nghi Lễ Cuối Cùng Vietsub HD Online - Rophim"
                loading="lazy"
                src="https://static.nutscdn.com/vimg/150-0/e16420e2ebceda97f1ba2c6bdba7fe1f.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
