"use client";
interface LoginPageProps {
  onClose: () => void;
}
export default function LoginPage({ onClose }: LoginPageProps) {
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
                  <div>
                    <template>
                      <iframe
                        src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/ov2/av0/rch/uxvwv/0x4AAAAAAA4Qi7tBSUiDfBRY/auto/fbE/new/normal?lang=vi"
                        allow="cross-origin-isolated; fullscreen; autoplay"
                        sandbox="allow-same-origin allow-scripts allow-popups"
                        id="cf-chl-widget-uxvwv"
                        tabIndex={0}
                        title="Tiện ích chứa thách thức bảo mật Cloudflare"
                        className="border-none overflow-hidden w-[300px] h-[65px]"
                      ></iframe>
                    </template>
                    <input
                      type="hidden"
                      name="cf-turnstile-response"
                      id="cf-chl-widget-uxvwv_response"
                      value="0.s921-8ZDHBo3J4GJkRlGHoy18Dkp07XXcjgw62Apa_yUXgiwCtElQgq9X20cPVA7bQRx6pBAeGcpje2W2DwlG1AgcN5dJGBZXu_nkQUwK1q-GranixeYjl6so_VovqJea0lWsFcb-E70AL0_RLhmesA5TjHyjQyoTticYDPi0N-MERcC1R5zzigiy2Si1saHc_xS6KkjyvGark-0BLI7RodTYKoaWNhYnpKYw21FGhen5mgnc9zosRtDjkgX9UdLmRgvTxmPYh3YVPo7Lsvd4UvU4ne5byyNK6ldevyfim858MpjnNHdaO2NtNjhanrfPCk3TKtB3D6edUa_vJ0-WaKB6T1nuAq7zHGhTTLFGqS4gVkQEZ1jrr2zR7AaH5OZjMkCe72FjzGGpY2ojFealXK4z30qaXKIHyimGObXI5wGlMKlAVgcUcoSgS99RTtudjmXyB7SUUTN0v68MJv7KaE_gar_T4nWJK5rDpaU4nNXKamsg1oKu-gvih2bjqTUzml_bKOOFov_TaCNKJhq7cHaUivG18DZpXeOjyAjtIzOUk6xSZcTC1XVhlNmH1o6JG4pI098f1pSIgKPFGaXyS7kvpDJuCMpxIpK__eRj9UgOplODBRDNU2I7XdyKfcVKM_7f8ay3DrDFynlcgzOiuCva7Zk-bM9ZueAkuDNOXmHOTadclEExab_QNjBvEOF7UtNaEAiLeAFGXkoGpYhQHKpv4Oie77tcwDHXF0er12mwW0bqE0zZHypwz2p-PYMS_nUjldSxlnTlnlAg6BmQjrn5WTQM247FbQIIDH3NnfjPm4rVBnJvlT6yIbxkqzf3rHEFNLmlIvi5fl30ZZNIevxD9OWJEPGLjVHvJVMJn39fTRyAtyQ4TrsnXqtdwTVpN0xkuLzKHmwox74xGb7yfsxJnatSjGi55oi87xelN0B8_sP4UX5-av8lJ1wyUSM.d9IP7XoDjElGcqbh93rRnA.f3f27ea21bedc8a34a612a58ac6d1f1cb470f12b65385ff5cd3693f71d352099"
                    />
                  </div>
                </div>
                <div className="form-group action-btn mt-4 mb-4 d-grid">
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
                        src="https://accounts.google.com/gsi/button?type=standard&amp;shape=rectangular&amp;size=large&amp;text=signin_with&amp;is_fedcm_supported=true&amp;client_id=301260845904-cm0c0d2vhugkkhpkkql2lohmnliq5fvu.apps.googleusercontent.com&amp;iframe_id=gsi_277647_420461&amp;cas=12%2Fp%2BhWrO1MQYFjEd662wryeH%2BxVk6b9XdPkkJXqSM8"
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
