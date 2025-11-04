"use client";
import { useEffect, useState } from "react";
interface HeaderProps {
  setShowLogin: (show: boolean) => void;
}
export default function Header({ setShowLogin }: HeaderProps) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fly transition-all duration-200 ease-linear ${
        isFixed ? "fixed bg-[#001b36] shadow-md" : "absolute bg-transparent"
      }`}
    >
      <div className="header-elements">
        <div className="for-mobile menu-toggle ">
          <div className="icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="for-mobile search-toggle ">
          <div className="icon-search">
            <span></span>
            <span></span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <a id="logo" title="Rophim" href="/phimhay">
          <img src="https://www.rophim.li/images/logo.svg" alt="RoPhim" />
        </a>
        <div id="search">
          <div className="search-elements">
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              id="main-search"
              className="search-input"
              placeholder="Tìm kiếm phim, diễn viên"
            />
          </div>
        </div>
        <div className="el-group ">
          <div id="main_menu">
            <div className="menu-item">
              <a title="Phim lẻ" href="/phim-le">
                Phim Lẻ
              </a>
            </div>
            <div className="menu-item">
              <a title="Phim bộ" href="/phim-bo">
                Phim Bộ
              </a>
            </div>
            <div className="menu-item menu-item-sub">
              <div className="season-dropdown dropdown">
                <a>
                  Thể loại<i className="fa-solid fa-caret-down ms-2"></i>
                </a>
              </div>
            </div>
            <div className="menu-item menu-item-sub">
              <div className="season-dropdown dropdown">
                <a>
                  Quốc gia<i className="fa-solid fa-caret-down ms-2"></i>
                </a>
              </div>
            </div>
            <div className="menu-item">
              <a title="Xem Chung" href="/xem-chung">
                Xem Chung
              </a>
            </div>
            <div className="menu-item menu-item-sub">
              <div className="season-dropdown dropdown">
                <a>
                  Thêm<i className="fa-solid fa-caret-down ms-2"></i>
                </a>
              </div>
            </div>
            <div className="menu-item">
              <a href="https://robong.net" title="Rổ Bóng" target="_blank">
                <span className="new me-2"></span>Rổ Bóng
              </a>
            </div>
          </div>
          <div className="flex-grow-1"></div>
          <div className="app-download">
            <div className="dropdown">
              <a className="app-download-button">
                <div className="inc-icon">
                  <svg
                    id="Pc"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9998 16.8992C11.1655 16.8992 11.2998 16.7649 11.2998 16.5992V11.5982C11.2998 9.28322 13.1838 7.39922 15.4998 7.39922H18.7998C18.9238 7.39922 19.0446 7.41106 19.1616 7.43327C19.3745 7.47368 19.5998 7.32682 19.5998 7.11012V6.69922C19.5998 6.67022 19.5968 6.64022 19.5918 6.61222C19.2488 4.66722 17.4468 3.19922 15.4008 3.19922H6.79982C4.42882 3.19922 2.49982 5.12822 2.49982 7.49922V12.5982C2.49982 14.9692 4.42882 16.8992 6.79982 16.8992H8.24282L7.86182 19.2492H5.85982C5.44582 19.2492 5.10982 19.5852 5.10982 19.9992C5.10982 20.4132 5.44582 20.7492 5.85982 20.7492H10.7598C11.1738 20.7492 11.5098 20.4132 11.5098 19.9992C11.5098 19.5852 11.1738 19.2492 10.7598 19.2492H9.38082L9.76182 16.8992H10.9998Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.1912 18.4564C16.7712 18.4564 16.4302 18.1154 16.4302 17.6954C16.4302 17.2754 16.7712 16.9344 17.1912 16.9344C17.6112 16.9344 17.9522 17.2754 17.9522 17.6954C17.9522 18.1154 17.6112 18.4564 17.1912 18.4564ZM18.8002 8.90039H15.5002C14.0362 8.90039 12.8002 10.1364 12.8002 11.5994V18.0994C12.8002 19.5884 14.0112 20.7994 15.5002 20.7994H18.8002C20.2892 20.7994 21.5002 19.5884 21.5002 18.0994V11.5994C21.5002 10.1364 20.2642 8.90039 18.8002 8.90039Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <div className="text text-light">
                  <span>Tải ứng dụng</span>
                  <strong>RoPhim</strong>
                </div>
              </a>
            </div>
          </div>
          <div id="main_user">
            <button
              className="button-user button-login"
              onClick={() => setShowLogin(true)}
            >
              <div className="line-center flex items-center space-x-2">
                <i className="fa-solid fa-user ms-1"></i>
                <span>Thành viên</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
