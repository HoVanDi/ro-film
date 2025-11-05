"use client";
import { useEffect, useState } from "react";

export default function WatchMoviePage() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false);
    }, 3000);

    return () => clearTimeout(timer);
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
        <div id="wrapper" className="makeup wrapper-watch">
          <h1 className="absolute top-[-9999px] left[-9999px]">
            Xem Phim Điện Thoại Đen 2 - Black Phone 2 - Vietsub - RoPhim
          </h1>
          <div className="sspp-area is-wide">
            <div className="display-single is-demo">
              <a
                href="https://9bet.net/?a=7c1050fd4d8d78eff31ea8c762e20adf&utm_source=rophimme&utm_medium=banner-sidebar-360x300-1&utm_campaign=cpd&utm_term=phim&referrer_domain=www.rophim.me"
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
          <div className="watch-player">
            <div className="wp-bread line-center mt-10">
              <h2 className="heading-sm page-name mb-0 mt-2">
                Xem phim Điện Thoại Đen 2
              </h2>
            </div>
            <div className="player-ratio">
              <div className="ratio ratio-16x9">
                {showFirst ? (
                  <iframe
                    width="560"
                    height="315"
                    id="embed-player"
                    allow="autoplay; encrypted-media; picture-in-picture;"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    src="https://goatembed.com/fRx9ZxsG?version=1"
                  ></iframe>
                ) : (
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/RYUFG3ZA0DA?si=Z56X98zgUuHibh7E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="line-center player-control">
                <div className="line-center control-items">
                  <div className="item item-like ">
                    <div className="inc-icon icon-12">
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
                    <span>Yêu thích</span>
                  </div>
                  <div className="dropdown">
                    <div>
                      <div className="item-playlist">
                        <div className="item">
                          <div className="inc-icon icon-12">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100"
                              height="100"
                              viewBox="0 0 100 100"
                              fill="none"
                            >
                              <path
                                d="M89.7273 41.6365H58.3635V10.2727C58.3635 6.81018 55.5534 4 52.0908 4H47.9092C44.4466 4 41.6365 6.81018 41.6365 10.2727V41.6365H10.2727C6.81018 41.6365 4 44.4466 4 47.9092V52.0908C4 55.5534 6.81018 58.3635 10.2727 58.3635H41.6365V89.7273C41.6365 93.1898 44.4466 96 47.9092 96H52.0908C55.5534 96 58.3635 93.1898 58.3635 89.7273V58.3635H89.7273C93.1898 58.3635 96 55.5534 96 52.0908V47.9092C96 44.4466 93.1898 41.6365 89.7273 41.6365Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <span>Thêm vào</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item item-auto toggle-basic-label ">
                    <span>Bỏ qua giới thiệu</span>
                    <div className="toggle-basic is-on"></div>
                  </div>
                  <div className="item item-focus toggle-basic-label ">
                    <span>Rạp phim</span>
                    <div className="toggle-basic"></div>
                  </div>
                  <a
                    className="item item-w2g"
                    href="/xem-chung/tao-phong/fRx9ZxsG"
                  >
                    <div className="inc-icon icon-14">
                      <img alt="icon live" src="/images/icons/live.svg" />
                    </div>
                    <span>Xem chung</span>
                  </a>
                  <div className="item item-share">
                    <div className="inc-icon icon-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <path
                          d="M16.3628 0.651489C15.946 0.223669 15.3291 0.0642849 14.7538 0.232058L1.34002 4.13277C0.733102 4.30139 0.302926 4.78541 0.187045 5.4003C0.0686637 6.02609 0.482166 6.82049 1.02239 7.15268L5.2166 9.73051C5.64678 9.99475 6.20201 9.92848 6.55799 9.56945L11.3608 4.73676C11.6026 4.4851 12.0027 4.4851 12.2445 4.73676C12.4862 4.98003 12.4862 5.37429 12.2445 5.62595L7.43334 10.4595C7.07653 10.8177 7.00984 11.3755 7.27245 11.8084L9.83516 16.0446C10.1353 16.548 10.6522 16.8332 11.2191 16.8332C11.2858 16.8332 11.3608 16.8332 11.4275 16.8248C12.0777 16.7409 12.5946 16.2963 12.7864 15.6671L16.763 2.2705C16.9381 1.70007 16.7797 1.07931 16.3628 0.651489Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span>Chia sẻ</span>
                  </div>
                  <div className="flex-grow-1"></div>
                  <div className="item item-report">
                    <i className="fa-solid fa-flag"></i>
                    <span>Báo lỗi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="watch-container">
            <div className="wc-main">
              <div className="wm-info">
                <div className="v-thumb-l">
                  <div className="v-thumbnail">
                    <img
                      alt="Xem Phim Điện Thoại Đen 2 Vietsub HD Online - Rophim"
                      loading="lazy"
                      src="https://static.nutscdn.com/vimg/300-0/3178e418a45c77adb6fa519395e666ad.jpg"
                    />
                  </div>
                </div>
                <div className="info">
                  <h2 className="heading-sm media-name">
                    <a
                      title="Điện Thoại Đen 2"
                      href="/phim/dien-thoai-den-2.fRx9ZxsG"
                    >
                      Điện Thoại Đen 2
                    </a>
                  </h2>
                  <div className="alias-name">Black Phone 2</div>
                  <div className="detail-more">
                    <div className="hl-tags">
                      <div className="tag-imdb">
                        <span>6.6</span>
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
                        <span>1h 54m</span>
                      </div>
                    </div>
                    <div className="hl-tags">
                      <a
                        className="tag-topic"
                        href="/the-loai/chieu-rap.3679nF"
                      >
                        Chiếu Rạp
                      </a>
                      <a className="tag-topic" href="/the-loai/gay-can.3PP9q7">
                        Gay Cấn
                      </a>
                      <a className="tag-topic" href="/the-loai/kinh-di.43tNdP">
                        Kinh Dị
                      </a>
                      <a className="tag-topic" href="/the-loai/tam-ly.epV6Ny">
                        Tâm Lý
                      </a>
                    </div>
                  </div>
                </div>
                <div className="desc-line">
                  <div className="description lim-3">
                    Bốn năm trước, Finn khi mới 13 tuổi đã giết chết kẻ bắt cóc
                    mình và trốn thoát thành công, trở thành người duy nhất sống
                    sót sau vụ án của The Grabber - một kẻ sát nhân khét tiếng.
                    Nhưng cái ác thực sự không chết đi… và chiếc điện thoại đen
                    lại một lần nữa đổ chuông. Khi Finn nay đã 17 tuổi và vẫn
                    vật lộn với hậu chấn tâm lý sau vụ bắt cóc, còn cô em gái 15
                    tuổi Gwen bắt đầu nhận được các cuộc gọi trong giấc mơ từ
                    chiếc điện thoại đen kỳ lạ, cùng với những hình ảnh rùng
                    rợn. Quyết tâm khám phá sự thật và chấm dứt cơn ác mộng cho
                    cả bản thân lẫn anh trai, Gwen thuyết phục Finn cùng đến
                    trại trong lúc có bão tuyết. Tại đây, cô phát hiện ra một bí
                    mật kinh hoàng liên quan đến The Grabber và cả quá khứ của
                    gia đình mình. Giờ đây, 2 anh em buộc phải đối đầu với một
                    kẻ sát nhân không chỉ mạnh mẽ hơn sau khi chết, mà còn có
                    mối liên hệ sâu sắc với họ hơn những gì họ từng tưởng tượng.
                  </div>
                  <a
                    className="text-primary"
                    href="/phim/dien-thoai-den-2.fRx9ZxsG"
                  >
                    Thông tin phim{" "}
                    <i className="fa-solid fa-angle-right small me-2"></i>
                  </a>
                </div>
              </div>
              <div id="episodes-list" className="wm-episodes">
                <div className="cg-body-box is-eps">
                  <div className="box-header">
                    <div className="heading-md mb-0">Các bản chiếu</div>
                  </div>
                  <div className="box-body">
                    <div className="de-type">
                      <a
                        className="item pd active"
                        href="/xem-phim/dien-thoai-den-2.fRx9ZxsG?ver=1"
                      >
                        <div className="m-thumbnail">
                          <img
                            alt="Xem Phim Điện Thoại Đen 2 Vietsub HD Online - Rophim"
                            loading="lazy"
                            src="https://static.nutscdn.com/vimg/300-0/53afc144c08c707aed60e572d59f1af4.jpg"
                          />
                        </div>
                        <div className="info">
                          <div className="ver line-center">
                            <div className="inc-icon icon-20">
                              <img src="/images/icons/pd.svg" />
                            </div>
                            <span>Phụ đề</span>
                          </div>
                          <div className="media-title lim-2 mb-0">
                            Điện Thoại Đen 2
                          </div>
                          <div className="btn btn-sm btn-light">Đang xem</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sspp-area is-wide">
                <div className="display-single is-demo">
                  <a href="#" className="is-image" target="_blank">
                    <img
                      alt=""
                      src="https://i.finallygotthexds.site/vpromolink/72/70/72708b30f5fb5a1adbffb9fec0d286dc/72708b30f5fb5a1adbffb9fec0d286dc.gif"
                    />
                  </a>
                </div>
              </div>
              <div id="comment-area" className="child-box child-discuss">
                <div className="child-header">
                  <div className="inc-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_281_3026)">
                        <path
                          d="M14.499 0.5H6.50109C3.19363 0.5 0.502686 3.19095 0.502686 6.4984V11.1638C0.502686 14.3596 3.01468 16.9796 6.16784 17.1532V19.9338C6.16784 20.2461 6.42244 20.5 6.73536 20.5C6.88498 20.5 7.02661 20.4407 7.13358 20.3337L7.75875 19.7085C9.40031 18.0666 11.5834 17.1622 13.9054 17.1622H14.499C17.8064 17.1622 20.4974 14.4713 20.4974 11.1638V6.4984C20.4974 3.19095 17.8064 0.5 14.499 0.5ZM6.16784 10.1641C5.4327 10.1641 4.83486 9.56625 4.83486 8.83111C4.83486 8.09597 5.4327 7.49813 6.16784 7.49813C6.90298 7.49813 7.50082 8.09597 7.50082 8.83111C7.50082 9.56625 6.90265 10.1641 6.16784 10.1641ZM10.5 10.1641C9.76488 10.1641 9.16704 9.56625 9.16704 8.83111C9.16704 8.09597 9.76488 7.49813 10.5 7.49813C11.2352 7.49813 11.833 8.09597 11.833 8.83111C11.833 9.56625 11.2348 10.1641 10.5 10.1641ZM14.8322 10.1641C14.0971 10.1641 13.4992 9.56625 13.4992 8.83111C13.4992 8.09597 14.0971 7.49813 14.8322 7.49813C15.5673 7.49813 16.1652 8.09597 16.1652 8.83111C16.1652 9.56625 15.567 10.1641 14.8322 10.1641Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <span>Bình luận (18)</span>
                  <div className="model-tabs actor-tabs">
                    <a className="item active">Bình luận</a>
                    <a className="item ">Đánh giá</a>
                  </div>
                </div>
                <div className="child-content">
                  <div className="discuss-wrap">
                    <div className="my-area">
                      <div className="ma-via mb-3">
                        Vui lòng <a className="text-primary">đăng nhập</a> để
                        tham gia bình luận.
                      </div>
                      <div className="textarea-wrap">
                        <div className="ma-input">
                          <textarea
                            className="form-control v-form-control v-form-textarea"
                            rows={4}
                            cols={3}
                            maxLength={1000}
                            placeholder="Viết bình luận"
                          ></textarea>
                          <div className="chac-left">0 / 1000</div>
                        </div>
                        <div className="line-center d-flex gap-3 ma-buttons">
                          <div className="v-toggle v-toggle-min line-center">
                            <div id="spoil-toggle" className="toggle-x off">
                              <span></span>
                            </div>
                            <div className="text">Tiết lộ?</div>
                          </div>
                          <div className="flex-grow-1"></div>
                          <button
                            className="btn btn-basic btn-submit"
                            type="button"
                          >
                            <span>Gửi</span>
                            <div className="inc-icon icon-20 ms-1">
                              <svg
                                fill="none"
                                height="512"
                                viewBox="0 0 24 24"
                                width="512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="m22.1012 10.5616-19.34831-9.43824c-.1664-.08117-.34912-.12336-.53427-.12336-.67302 0-1.21862.5456-1.21862 1.21862v.03517c0 .16352.02005.32643.05971.48507l1.85597 7.42384c.05069.2028.22214.3526.42986.3757l8.15756.9064c.2829.0314.4969.2705.4969.5552s-.214.5238-.4969.5552l-8.15756.9064c-.20772.0231-.37917.1729-.42986.3757l-1.85597 7.4238c-.03966.1587-.05971.3216-.05971.4851v.0352c0 .673.5456 1.2186 1.21862 1.2186.18515 0 .36787-.0422.53427-.1234l19.34831-9.4382c.5499-.2682.8988-.8265.8988-1.4384s-.3489-1.1702-.8988-1.4384z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="discuss-list">
                      <div
                        className="d-item  "
                        id="cm-690ad2b0e896b1f2abf96d1d"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack4/08.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Alice{" "}
                                <i className="fas fa-venus text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">16 phút trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              Phim hay nha mn, kịch bản đơn giản dễ đoán, nhưng
                              cuốn, chữa lành cực kỳ
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690aceaf0eefc2f06abbcd04"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack4/08.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Chico{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">33 phút trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              thấy khen nhiều nên vào xem nhưng thực sự chưa đủ
                              wow như phần 1, build up tốt nhưng kết nhạt nhòa
                              quá. Đứa em và thằng bạn nó diễn thực sự vẫn còn
                              đơ. Nhiều khi cứ để mọi thứ nặng nề như phần 1 có
                              khi lại hay.
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690acdcd3131d4a85d4c2307"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/13.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Mimi{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">36 phút trước</div>
                            </div>
                          </div>
                          <div className="text text-spoil">
                            <span>phim hay mò =))))</span>
                          </div>
                          <div className="spoil-toggle mt-2 small">
                            <a className="text-primary">Xem</a>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sspp-area is-post">
                        <div className="display-single is-demo">
                          <div className="sspp-logo">
                            <img src="https://www.rophim.li/images/sponsor_icon.webp" />
                          </div>
                          <div className="subject">
                            <div className="flex gap-6">
                              <div>
                                <div className="heading-xs mb-1">789Club</div>
                                <p className="mb-1">
                                  GAME BÀI ĐỔI THƯỞNG UY TÍN
                                </p>
                                <p className="mb-0">
                                  <a
                                    href="https://789.club/?a=12241cef3172f169545c38ab24730d1c&amp;utm_source=rophimme&amp;utm_medium=textlink-1&amp;utm_campaign=cpd&amp;utm_term=phim&amp;referrer_domain=www.rophim.me"
                                    target="_blank"
                                    className="text-primary"
                                  >
                                    Cược Ngay!
                                  </a>
                                </p>
                              </div>
                              <div>
                                <div className="heading-xs mb-1">USBET</div>
                                <p className="mb-1">
                                  NHÀ CÁI ĐẲNG CẤP CHÂU MỸ USBET
                                </p>
                                <p className="mb-0">
                                  <a
                                    href="https://usbet.net/khuyen-mai/?a=ed131d6eb72da6f630b4bd0411c91e55&amp;utm_source=rophimme&amp;utm_medium=textlink-2&amp;utm_campaign=cpd&amp;utm_term=phim&amp;referrer_domain=www.rophim.me"
                                    target="_blank"
                                    className="text-primary"
                                  >
                                    Cược Ngay!
                                  </a>
                                </p>
                              </div>
                              <div>
                                <div className="heading-xs mb-1">DU88</div>
                                <p className="mb-1">
                                  NHÀ CÁI DU88 - CHÚC BẠN NHIỀU MAY MẮN
                                </p>
                                <p className="mb-0">
                                  <a
                                    href="https://du88.com/?a=6c6ca8667526e6b9bf8e9a5ed1ef4975&amp;utm_source=rophimme&amp;utm_medium=textlink-3&amp;utm_campaign=cpd&amp;utm_term=phim&amp;referrer_domain=www.rophim.me"
                                    target="_blank"
                                    className="text-primary"
                                  >
                                    Cược Ngay!
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690ab8c8a93e962633e2f23c"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack6/08.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Bin đẹp trai{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">2 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              Cũng hay nhưng k wow = p1, thg sát nhân bị kill dễ
                              quá, cảm giác mì ăn liền
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                          <div className="replies-wrap">
                            <a className="text-primary replies-toggle">
                              <i className="fa-solid fa-angle-down me-1"></i>1
                              bình luận{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a89de0aee734bbe866dd6"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Anh trai say gex{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">5 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              vẫn nhớ hồi đó mua vé coi phim này p1 trên momo
                              xong lúc ra rạp coi lại chiếu em và trịnh =))
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                                <span>1</span>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                          <div className="replies-wrap">
                            <a className="text-primary replies-toggle">
                              <i className="fa-solid fa-angle-down me-1"></i>2
                              bình luận{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a69580aee734bbe860617"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                kingston{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">8 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              mình chưa xem cho hỏi nó có liên kết gì với p1 hok
                              z
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                          <div className="replies-wrap">
                            <a className="text-primary replies-toggle">
                              <i className="fa-solid fa-angle-down me-1"></i>1
                              bình luận{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a5a243a5ca6f618bb5eaf"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Minh Hương Nè{" "}
                                <i className="fas fa-venus text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">9 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              Phim hay nha phần 2 tưởng dở ai dè hay quá.
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a451b59b2670d94d641d1"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Thenguyen67{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">10 giờ trước</div>
                            </div>
                          </div>
                          <div className="text text-spoil">
                            <span>Quá hay</span>
                          </div>
                          <div className="spoil-toggle mt-2 small">
                            <a className="text-primary">Xem</a>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a44fe2cf2bdaa0617ef67"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Thenguyen67{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">10 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>Xem hết chưa mà nói như thật ?</span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a44c438cd259235909c9f"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Thenguyen67{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">10 giờ trước</div>
                            </div>
                          </div>
                          <div className="text text-spoil">
                            <span>Thằng *** nào vote 4.0 vậy</span>
                          </div>
                          <div className="spoil-toggle mt-2 small">
                            <a className="text-primary">Xem</a>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a37755ec532bfc98dd10c"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Thành Ka{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">11 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              Bro comeback bằng cách aura farming full thời
                              lượng, và cái kết vẫn 0 kills và bị 2 anh em đập
                              cho như 1 con cho rach đúng nghĩa đen luôn "Hell
                              isn't flame, Bill. It's ice." Finn chơi câu ngầu
                              ***
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                                <span>3</span>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a224154c7d6e11d7e836f"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Đào Minh Quân{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">13 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              coi thấy tội ông bố, người duy nhất bình thường
                              trong nhà, lạc lõng trong thế giới tồn tại siêu
                              linh
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                                <span>1</span>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a1b57764ebaf8763a6d90"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Thenguyen67{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">13 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>vip</span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a0fbd12e681b4d6ea5ac6"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Nguyễn Huyền Minh Thư{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">14 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>Lên con phim cho em đi 2</span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a0ce04d00fe323b6ccfc1"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                THANH AN{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">14 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>có chua ta:v</span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-690a07ed12e681b4d6e94d28"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                kieranphan3010{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">15 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>chưa có hả 2</span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-6909faa5bf6e720a6efc0d67"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Bin đẹp trai{" "}
                                <i className="fa-solid fa-infinity text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">16 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              Tới sớm quá, để tạm đĩa hạt dưa, đừng đứa nào ăn
                              của t nhé
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="d-item  "
                        id="cm-6909ed2669a33c40de76f026"
                      >
                        <div className="user-avatar">
                          <img src="https://www.rophim.li/images/avatars/pack1/12.jpg" />
                        </div>
                        <div className="info">
                          <div className="comment-header">
                            <div className="user-name line-center gr-free ">
                              <span>
                                Đào Minh Quân{" "}
                                <i className="fas fa-mars text-primary ms-2"></i>
                              </span>
                            </div>
                            <div className="ch-logs">
                              <div className="c-time">17 giờ trước</div>
                            </div>
                          </div>
                          <div className="text ">
                            <span>
                              xin thông báo: phim đã có bản đẹp trên itunes, khả
                              năng mai hay mốt sẽ có bản lậu
                            </span>
                          </div>
                          <div className="comment-bottom line-center d-flex">
                            <div className="group-react line-center">
                              <div className="item item-up line-center ">
                                <i className="fa-solid fa-circle-up"></i>
                                <span>1</span>
                              </div>
                              <div className="item item-down line-center ">
                                <i className="fa-solid fa-circle-down"></i>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-xs btn-basic btn-comment"
                            >
                              <i className="fa-solid fa-reply"></i>
                              <span>Trả lời</span>
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-xs btn-basic btn-menu"
                              >
                                <i className="fa-solid fa-ellipsis"></i>
                                <span>Thêm</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sspp-area is-wide">
                <div className="display-single is-demo">
                  <a href="#" className="is-image" target="_blank">
                    <img
                      alt=""
                      src="https://i.finallygotthexds.site/vpromolink/72/70/72708b30f5fb5a1adbffb9fec0d286dc/72708b30f5fb5a1adbffb9fec0d286dc.gif"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="wc-side">
              <div className="ws-rate">
                <div className="line-center gap-3 wsr-left">
                  <a className="item-v item-rate">
                    <div className="inc-icon icon-20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M30.36 14.63C30.94 14.06 31.15 13.23 30.9 12.45C30.65 11.67 29.99 11.12 29.18 11L21.46 9.88C21.46 9.88 21.38 9.85 21.37 9.81L17.92 2.81C17.56 2.08 16.83 1.62 16.01 1.62C15.19 1.62 14.46 2.07 14.1 2.81L10.65 9.81C10.65 9.81 10.6 9.87 10.55 9.88L2.83001 11C2.02001 11.12 1.37001 11.67 1.11001 12.45C0.860006 13.23 1.06001 14.06 1.65001 14.63L7.24001 20.08C7.24001 20.08 7.28001 20.15 7.28001 20.19L5.96001 27.88C5.82001 28.68 6.15001 29.48 6.81001 29.96C7.47001 30.44 8.33001 30.5 9.05001 30.12L15.96 26.49C15.96 26.49 16.04 26.47 16.08 26.49L22.99 30.12C23.3 30.29 23.64 30.37 23.98 30.37C24.42 30.37 24.86 30.23 25.23 29.96C25.89 29.48 26.21 28.68 26.08 27.88L24.76 20.19C24.76 20.19 24.76 20.11 24.8 20.08L30.39 14.63H30.36Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span>Đánh giá</span>
                  </a>
                  <div className="v-line"></div>
                  <a className="item-v item-comment">
                    <div className="inc-icon icon-20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_281_3026)">
                          <path
                            d="M14.499 0.5H6.50109C3.19363 0.5 0.502686 3.19095 0.502686 6.4984V11.1638C0.502686 14.3596 3.01468 16.9796 6.16784 17.1532V19.9338C6.16784 20.2461 6.42244 20.5 6.73536 20.5C6.88498 20.5 7.02661 20.4407 7.13358 20.3337L7.75875 19.7085C9.40031 18.0666 11.5834 17.1622 13.9054 17.1622H14.499C17.8064 17.1622 20.4974 14.4713 20.4974 11.1638V6.4984C20.4974 3.19095 17.8064 0.5 14.499 0.5ZM6.16784 10.1641C5.4327 10.1641 4.83486 9.56625 4.83486 8.83111C4.83486 8.09597 5.4327 7.49813 6.16784 7.49813C6.90298 7.49813 7.50082 8.09597 7.50082 8.83111C7.50082 9.56625 6.90265 10.1641 6.16784 10.1641ZM10.5 10.1641C9.76488 10.1641 9.16704 9.56625 9.16704 8.83111C9.16704 8.09597 9.76488 7.49813 10.5 7.49813C11.2352 7.49813 11.833 8.09597 11.833 8.83111C11.833 9.56625 11.2348 10.1641 10.5 10.1641ZM14.8322 10.1641C14.0971 10.1641 13.4992 9.56625 13.4992 8.83111C13.4992 8.09597 14.0971 7.49813 14.8322 7.49813C15.5673 7.49813 16.1652 8.09597 16.1652 8.83111C16.1652 9.56625 15.567 10.1641 14.8322 10.1641Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span>Bình luận</span>
                  </a>
                </div>
                <div className="v-rating">
                  <div className="ro-rating">
                    <div className="ro-icon"></div>
                    <span className="point">6.0</span>
                    <span className="a-rate">Đánh giá</span>
                  </div>
                </div>
              </div>
              <div className="sspp-area is-3x2">
                <div className="display-single is-demo">
                  <a href="#" className="is-image auto-res" target="_blank">
                    <img
                      alt=""
                      src="https://i.finallygotthexds.site/vpromolink/7b/5b/7b5b30af1bf81e4043868d95d3dad496/7b5b30af1bf81e4043868d95d3dad496.gif"
                    />
                  </a>
                </div>
              </div>
              <div className="ws-actors">
                <div className="child-box child-actors">
                  <div className="child-header">Diễn viên</div>
                  <div className="child-actors-list">
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/ethan-hawke.tEt6o9"
                      >
                        <img
                          alt="Ethan Hawke"
                          src="https://image.tmdb.org/t/p/w500/a7rgJl8TYUWAfJuM4fxbLHgD7BL.jpg"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/ethan-hawke.tEt6o9">
                            Ethan Hawke
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/mason-thames.T9NF29"
                      >
                        <img
                          alt="Mason Thames"
                          src="https://image.tmdb.org/t/p/w500/mpNtrfs7QyTa2nPop6IwWmWaUkL.jpg"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/mason-thames.T9NF29">
                            Mason Thames
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/madeleine-mcgraw.YP0oh1"
                      >
                        <img
                          alt="Madeleine McGraw"
                          src="https://image.tmdb.org/t/p/w500/6iV8hWvC0G5g3iusOTEo02FVP7u.jpg"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/madeleine-mcgraw.YP0oh1">
                            Madeleine McGraw
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/demian-bichir.TOFzLq"
                      >
                        <img
                          alt="Demián Bichir"
                          src="https://image.tmdb.org/t/p/w500/sw8TqPQLbMMgLbkNNUIW649THWJ.jpg"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/demian-bichir.TOFzLq">
                            Demián Bichir
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/miguel-mora.ED4weB"
                      >
                        <img
                          alt="Miguel Mora"
                          src="https://image.tmdb.org/t/p/w500/6gpmJkycDfdhv3J3tTrsPu93DSD.jpg"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/miguel-mora.ED4weB">
                            Miguel Mora
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/jeremy-davies.wDcfgw"
                      >
                        <img
                          alt="Jeremy Davies"
                          src="https://image.tmdb.org/t/p/w500/tNtcpQnMxzl0OqVDsyA63oAgPbI.jpg"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/jeremy-davies.wDcfgw">
                            Jeremy Davies
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/arianna-rivas.zAJymc"
                      >
                        <img
                          alt="Arianna Rivas"
                          src="/images/avatar-default.webp"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/arianna-rivas.zAJymc">
                            Arianna Rivas
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="v-item">
                      <a
                        className="v-actor v-actor-medium"
                        href="/dien-vien/maev-beaty.wU6p9L"
                      >
                        <img
                          alt="Maev Beaty"
                          src="https://image.tmdb.org/t/p/w500/xu1NcOTmT3gNPgjcIu1UJxLaNPD.jpg"
                        />
                      </a>
                      <div className="info">
                        <h4 className="item-title lim-2">
                          <a href="/dien-vien/maev-beaty.wU6p9L">Maev Beaty</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ws-top">
                <div className="child-box child-suggest">
                  <div className="child-header">
                    <span>Đề xuất cho bạn</span>
                  </div>
                  <div className="child-content">
                    <div className="cc-top">
                      <div className="item">
                        <div className="h-item">
                          <div className="v-thumb-m">
                            <a
                              className="v-thumbnail"
                              href="/phim/phi-vu-dong-troi-2.7AyURXiL"
                            >
                              <img
                                alt="Phi Vụ Động Trời 2"
                                src="https://static.nutscdn.com/vimg/300-0/d10e69cc4b68fd2974c9d0314c4b9720.jpg"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4 className="item-title lim-2">
                              <a
                                title="Phi Vụ Động Trời 2"
                                href="/phim/phi-vu-dong-troi-2.7AyURXiL"
                              >
                                Phi Vụ Động Trời 2
                              </a>
                            </h4>
                            <div className="alias-title mb-2 lim-1">
                              Zootopia 2
                            </div>
                            <div className="info-line">
                              <div className="tag-small">
                                <strong>K</strong>
                              </div>
                              <div className="tag-small">Sắp chiếu</div>
                              <div className="tag-small">2025</div>
                              <div className="tag-small">1h 50m</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="h-item">
                          <div className="v-thumb-m">
                            <a
                              className="v-thumbnail"
                              href="/phim/hedda.MO0HqxJr"
                            >
                              <img
                                alt="Hedda"
                                src="https://static.nutscdn.com/vimg/300-0/f6286e4e682b317e3169d707d72efa23.jpg"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4 className="item-title lim-2">
                              <a title="Hedda" href="/phim/hedda.MO0HqxJr">
                                Hedda
                              </a>
                            </h4>
                            <div className="alias-title mb-2 lim-1">Hedda</div>
                            <div className="info-line">
                              <div className="tag-small">
                                <strong>T16</strong>
                              </div>
                              <div className="tag-small">2025</div>
                              <div className="tag-small">1h 47m</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="h-item">
                          <div className="v-thumb-m">
                            <a
                              className="v-thumbnail"
                              href="/phim/bang-chuot-cau-chuyen-tho-san-quai-vat.AB6sZDLM"
                            >
                              <img
                                alt="Băng Chuột: Câu Chuyện Thợ Săn Quái Vật"
                                src="https://static.nutscdn.com/vimg/300-0/ceb3364fb761ec0c9ac819d6c04c0e65.jpg"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4 className="item-title lim-2">
                              <a
                                title="Băng Chuột: Câu Chuyện Thợ Săn Quái Vật"
                                href="/phim/bang-chuot-cau-chuyen-tho-san-quai-vat.AB6sZDLM"
                              >
                                Băng Chuột: Câu Chuyện Thợ Săn Quái Vật
                              </a>
                            </h4>
                            <div className="alias-title mb-2 lim-1">
                              The Rats: A Witcher Tale
                            </div>
                            <div className="info-line">
                              <div className="tag-small">
                                <strong>T18</strong>
                              </div>
                              <div className="tag-small">2025</div>
                              <div className="tag-small">1h 22m</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="h-item">
                          <div className="v-thumb-m">
                            <a
                              className="v-thumbnail"
                              href="/phim/quai-thu-vo-hinh-vung-dat-chet-choc.uPMpbgTj"
                            >
                              <img
                                alt="Quái Thú Vô Hình: Vùng Đất Chết Chóc"
                                src="https://static.nutscdn.com/vimg/300-0/cb7bd27a954da3a626d7058dd699bf34.jpg"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4 className="item-title lim-2">
                              <a
                                title="Quái Thú Vô Hình: Vùng Đất Chết Chóc"
                                href="/phim/quai-thu-vo-hinh-vung-dat-chet-choc.uPMpbgTj"
                              >
                                Quái Thú Vô Hình: Vùng Đất Chết Chóc
                              </a>
                            </h4>
                            <div className="alias-title mb-2 lim-1">
                              Predator: Badlands
                            </div>
                            <div className="info-line">
                              <div className="tag-small">
                                <strong>T16</strong>
                              </div>
                              <div className="tag-small">Sắp chiếu</div>
                              <div className="tag-small">2025</div>
                              <div className="tag-small">1h 50m</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="h-item">
                          <div className="v-thumb-m">
                            <a
                              className="v-thumbnail"
                              href="/phim/ngoi-nha-thuoc-no.F1UDJdlD"
                            >
                              <img
                                alt="Ngôi Nhà Thuốc Nổ"
                                src="https://static.nutscdn.com/vimg/300-0/94d48cf9ac05981cc980710297eb2a1d.jpg"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4 className="item-title lim-2">
                              <a
                                title="Ngôi Nhà Thuốc Nổ"
                                href="/phim/ngoi-nha-thuoc-no.F1UDJdlD"
                              >
                                Ngôi Nhà Thuốc Nổ
                              </a>
                            </h4>
                            <div className="alias-title mb-2 lim-1">
                              A House of Dynamite
                            </div>
                            <div className="info-line">
                              <div className="tag-small">
                                <strong>T18</strong>
                              </div>
                              <div className="tag-small">2025</div>
                              <div className="tag-small">1h 54m</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="h-item">
                          <div className="v-thumb-m">
                            <a
                              className="v-thumbnail"
                              href="/phim/cho-cung-dung-so.gqDYUZM6"
                            >
                              <img
                                alt="Chó Cưng Đừng Sợ"
                                src="https://static.nutscdn.com/vimg/300-0/ce030b389c9c6599f9075eae6904bacf.jpg"
                              />
                            </a>
                          </div>
                          <div className="info">
                            <h4 className="item-title lim-2">
                              <a
                                title="Chó Cưng Đừng Sợ"
                                href="/phim/cho-cung-dung-so.gqDYUZM6"
                              >
                                Chó Cưng Đừng Sợ
                              </a>
                            </h4>
                            <div className="alias-title mb-2 lim-1">
                              Good Boy
                            </div>
                            <div className="info-line">
                              <div className="tag-small">
                                <strong>T16</strong>
                              </div>
                              <div className="tag-small">2025</div>
                              <div className="tag-small">1h 13m</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sspp-area is-3x2">
                <div className="display-single is-demo">
                  <a href="#" className="is-image auto-res" target="_blank">
                    <img
                      alt=""
                      src="https://i.finallygotthexds.site/vpromolink/7b/5b/7b5b30af1bf81e4043868d95d3dad496/7b5b30af1bf81e4043868d95d3dad496.gif"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
