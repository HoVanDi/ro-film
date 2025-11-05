"use client";
import ReCAPTCHA from "react-google-recaptcha";
interface LoginPageProps {
  onClose: () => void;
}
export default function LoginPage({ onClose }: LoginPageProps) {
  const handleCaptcha = (value: string | null) => {
    console.log("Captcha value:", value);
  };

  return (
    <>
      <div className="fade modal-backdrop show"></div>
      <div
        role="dialog"
        aria-modal="true"
        className="fade v-modal modal-login modal show"
        tabIndex={-1}
        style={{ display: "block", paddingRight: "15px" }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <button className="btn modal-close" onClick={onClose}>
              <i className="fa-solid fa-times"></i>
            </button>
            <div className="is-header mb-3">
              <h4 className="heading-sm mb-0 ">Đăng nhập</h4>
            </div>
            <div className="is-body">
              <p className="mb-4">
                Nếu bạn chưa có tài khoản,{" "}
                <a className="text-primary">đăng ký ngay</a>
              </p>
              <form className="v-form">
                <div className="form-group mb-2">
                  <input
                    className="form-control v-form-control"
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="form-group mb-4 user-password ">
                  <input
                    className="form-control v-form-control"
                    placeholder="Mật khẩu"
                    type="password"
                    name="password"
                  />
                </div>
                <div id="cf-turnstile">
                  <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleCaptcha} />
                </div>
                <div className="mt-4 mb-4 d-grid">
                  <button className="btn d-block btn-primary">Đăng nhập</button>
                </div>
                <div className="form-opt text-center">
                  <a className="small">Quên mật khẩu?</a>
                </div>
                <div className="button-group gap-2 w-100 mt-3">
                  <div>
                    <div className="relative">
                      <div></div>
                      <iframe
                        src="https://accounts.google.com/gsi/button?type=standard&shape=rectangular&size=large&text=signin_with&is_fedcm_supported=true&client_id=301260845904-cm0c0d2vhugkkhpkkql2lohmnliq5fvu.apps.googleusercontent.com&iframe_id=gsi_277647_420461&cas=12%2Fp%2BhWrO1MQYFjEd662wryeH%2BxVk6b9XdPkkJXqSM8"
                        className="block relative top-0 left-0 h-[44px] w-[204px] border-0 mt-[-2px] mb-[-2px] ml-[-10px] mr-[-10px]"
                        allow="identity-credentials-get"
                        id="gsi_277647_420461"
                        title="Sign in with Google Button"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
