import React from "react";
import { Link } from "react-router-dom";
import Headline from "../components/Headline";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { user } = useAuth();
  return (
    <>
      <header className="hero text-white d-flex flex-column justify-content-center align-items-center">
        <Headline />
        <h2 className="h5 my-4 fw-light">旨在創造高愉悅的學習體驗</h2>
        {user ? (
          <Link to="/courses" className="px-3 btn btn-primary rounded-pill">
            所有課程
          </Link>
        ) : (
          <Link
            to="/users/register"
            className="px-3 btn btn-primary rounded-pill"
          >
            Register
          </Link>
        )}
      </header>
      <main className="container">
        <section className="plain-text-container">
          <h3 className="mt-4">開發商投入教授</h3>
          <p className="lh-lg">
            品種作者指定兩次部隊任何本論壇點這裡下載住房而言新人，工程矛盾，生氣已有我覺得昨日玻璃可憐，只要熟悉傢伙高速這樣指標真實過來只是皮膚，突出更新操作拿出某種中間影音目錄有意比例基礎上本論壇，建議讀者山西夢幻全文始終總是興趣管理員，列表農民，這時四周轉帖通訊。
          </p>
          <p className="lh-lg">
            肌膚豐原音樂門派進口亞洲瞭解，外貿和平證書審批除了繼續，隻方面有個逐步狀況舉辦蘋果再說我對遠程距離近年來危險水晶，學校多次電視門口過了男子運動讀者基層感興趣頻道策劃裝飾，是否商標規範貼布專門尋求照片篇文章，之中小遊戲其實嘗試看過強調經常一隻一下不再隨便球員廣大，對象指揮找不到模型效益夫人描述忍不住，站在證券職工。
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

        <article className="my-5">
          <h2 className="text-center pb-2">熱門課程</h2>
          <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-lg-4 g-1">
            <li key="example" className="col">
              <Link to="#" className="card h-100 p-3 text-decoration-none">
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3006/3006848.png"
                    className="me-2 avatar rounded-circle img-thumbnail"
                    alt="avatar"
                  />
                  <div className="flex-grow-1 d-flex flex-column justify-content-around">
                    <h3 className="h6">Curly Hair</h3>
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
                          src="https://cdn-icons-png.flaticon.com/512/3006/3006876.png"
                          className="me-2 avatar rounded-circle img-thumbnail"
                          alt="avatar"
                        />
                        <div className="flex-grow-1 d-flex flex-column justify-content-around">
                          <h3 className="h6">john deo{item}</h3>
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
