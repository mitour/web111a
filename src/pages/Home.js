import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Swiper from "../components/Swiper";
import { Hero } from "../components/ParallaxBanner";

import chameleon from "../images/avatar/chameleon.png";
import chameleonBless from "../images/avatar/chameleon-bless.png";
import chameleonQuestion from "../images/home/chameleonQuestion.png";
import browser from "../images/home/browser.gif";
import mortarboard from "../images/home/mortarboard.gif";
import briefcase from "../images/home/briefcase.gif";
import diploma from "../images/home/diploma.gif";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="container my-5 plain-text-container">
          <h3 className="mt-4">開發商投入教授</h3>
          <p className="lh-lg">
            品種作者指定兩次部隊任何本論壇點這裡下載住房而言新人，工程矛盾，生氣已有我覺得昨日玻璃可憐，只要熟悉傢伙高速這樣指標真實過來只是皮膚，突出更新操作拿出某種中間影音目錄有意比例基礎上本論壇，建議讀者山西夢幻全文始終總是興趣管理員，列表農民，這時四周轉帖通訊。
          </p>
          <p className="lh-lg">
            品種作者指定兩次部隊任何本論壇點這裡下載住房而言新人，工程矛盾，生氣已有我覺得昨日玻璃可憐，只要熟悉傢伙高速這樣指標真實過來只是皮膚，突出更新操作拿出某種中間影音目錄有意比例基礎上本論壇，建議讀者山西夢幻全文始終總是興趣管理員，列表農民，這時四周轉帖通訊。
          </p>
          <h3 className="mt-4">一句話門派用戶名</h3>
          <p className="lh-lg">
            常常他不運動不論校長暴力網頁班郵件跟着，專輯沒有任何一週凱文讓我，不同最為分為社會好處售價貿易，投入高手性別自己的人物，貿易標準機器刺激丈夫視頻體會機票微微，表演儘快外貿。
          </p>
          <h3 className="mt-4">版權感覺</h3>
          <p className="lh-lg">
            球隊以後從此集中註明重新優惠，畢業一定要，原料人大民國，規定任何人，日月潭美元睡覺書記紅色。
          </p>
          <p className="lh-lg">
            分鐘偉大不斷他就等方面拿出，後悔自動幾乎教材很久超市還在，無論結構大門居然結果細胞國產請求法國，針對配置上去結婚說什麼原來回到男孩緩緩著名互動本次，專業大門部分之類學校註明父親本身。
          </p>
        </section>
        <section className="container my-5 mx-auto row align-items-center">
          <div className="col-lg-5 text-center d-none d-lg-block">
            <img
              src={chameleonQuestion}
              className="img-fluid p-5"
              alt="chameleonQuestion"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="text-center pb-2">Why Choose us?</h2>
            <ul className="list-unstyled row row-cols-2 g-4 pt-4">
              <li key="online courses" className="col">
                <div className="card h-100 p-md-2">
                  <div className="card-body d-flex align-items-center">
                    <img style={{ width: "25%" }} src={browser} alt="browser" />
                    <div className="ms-3">
                      <p className="h3 text-primary">+10k</p>
                      <h3 className="small text-muted">online courses</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li key="brilliant students" className="col">
                <div className="card h-100 p-md-2">
                  <div className="card-body d-flex align-items-center">
                    <img
                      style={{ width: "25%" }}
                      src={mortarboard}
                      alt="browser"
                    />
                    <div className="ms-3">
                      <p className="h3 text-primary">+40k</p>
                      <h3 className="small text-muted">brilliant students</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li key="expert tutors" className="col">
                <div className="card h-100 p-md-2">
                  <div className="card-body d-flex align-items-center">
                    <img style={{ width: "25%" }} src={diploma} alt="diploma" />
                    <div className="ms-3">
                      <p className="h3 text-primary">+2k</p>
                      <h3 className="small text-muted">expert tutors</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li key="job placement" className="col">
                <div className="card h-100 p-md-2">
                  <div className="card-body d-flex align-items-center">
                    <img
                      style={{ width: "25%" }}
                      src={briefcase}
                      alt="briefcase"
                    />
                    <div className="ms-3">
                      <p className="h3 text-primary">100%</p>
                      <h3 className="small text-muted">job placement</h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <article className="container my-5">
          <h2 className="text-center pb-2">學員評論</h2>
          <Swiper>
            {[11, 12, 13, 14, 15].map((item) => {
              return (
                <>
                  <SwiperSlide key={item}>
                    <div className="card h-100">
                      <div className="card-body mx-lg-3 my-lg-2 d-flex flex-column">
                        <p className="card-text multiline-ellipsis">
                          原來聊天機器人可以這麼有人性！團隊有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。
                          原來聊天機器人可以這麼有人性！團隊有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。
                          原來聊天機器人可以這麼有人性！團隊有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            src={chameleon}
                            className="me-2 avatar rounded-circle"
                            alt="avatar"
                          />
                          <div>
                            <h3 className="card-title h6 fw-bold lh-base">
                              Lina
                            </h3>
                            <span className="rate rate-5 d-inline-block"></span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <p className="small text-muted m-0">
                          對 complete HTML tutorial 的評論
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </article>
        <article className="container my-5">
          <h2 className="text-center pb-2">熱門課程</h2>
          <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-lg-4 g-1">
            <li key="example" className="col">
              <Link to="#" className="card h-100 p-3 text-decoration-none">
                <div className="d-flex align-items-center">
                  <img
                    src={chameleon}
                    className="me-2 avatar rounded-circle"
                    alt="avatar"
                  />
                  <div className="flex-grow-1 d-flex flex-column justify-content-around">
                    <h3 className="h6 fw-bold">Curly Hair</h3>
                    <span className="small text-muted">02-10-2022</span>
                  </div>
                  <span className="text-primary price">1,000</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1588912914074-b93851ff14b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="rounded-2 mt-2"
                  alt="udemy"
                />
                <div className="card-body">
                  <h3 className="h6 card-title">
                    <span className="badge text-bg-secondary me-1">NEW</span>
                    complete HTML tutorial
                  </h3>
                  <p className="card-text text-muted fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            </li>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <>
                  <li key={index} className="col">
                    <Link
                      to="#"
                      className="card h-100 p-3 text-decoration-none"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={chameleonBless}
                          className="me-2 avatar rounded-circle"
                          alt="avatar"
                        />
                        <div className="flex-grow-1 d-flex flex-column justify-content-around">
                          <h3 className="h6 fw-bold">john deo{item}</h3>
                          <span className="small text-muted">21-10-2022</span>
                        </div>
                        <span className="text-primary">FREE</span>
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="rounded-2 mt-2"
                        alt="join us online"
                      />
                      <div className="card-body">
                        <h3 className="h6 card-title">
                          complete MySQL tutorial
                        </h3>
                        <p className="card-text text-muted fw-light">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <center>
            <Link to="/courses" className="btn btn-primary rounded-pill">
              Show All Courses
            </Link>
          </center>
        </article>
      </main>
    </>
  );
}

export default Home;
