import React from "react";

function About() {
  return (
    <main className="container">
      <article className="plain-text-container">
        <h3 className="mt-4">前言</h3>
        <p className="lh-lg">
          我是一個非常不喜歡出門的人，一直以來也認為通勤是非常耗費時間的，如果哆啦Ａ夢存在，我最想要的道具就是任意門。
          後疫情時代也讓大眾明白 WFH (Work From Home，在家工作)
          這把雙面刃，也開始認知到就算足不出戶也能做到很多事，工作、學習、購物、社交，實際上就是人們的日常生活。
          網路課程一向是我的心頭好，可以選擇自己專注力最高的時段學習，影片教學也一定程度保證內容是精華的、有流程的，沒聽懂的部分可以輕易暫停、重播，且隨時隨地都能學習。
        </p>
        <h3 className="mt-4">動機</h3>
        <p className="lh-lg">
          藉由此專案希望能夠整合、借鏡各大線上學習平台的優點，創造具有彈性、使用者體驗佳的教學平台。
        </p>
        <h3 className="mt-4">目的</h3>
        <h4 className="mt-3">簡化流程</h4>
        <p className="lh-lg">
          以前買東西猶豫半天不知該不該下手，都會去 Google
          評價，但是很難確認網路上的評論，跟要買的東西是不是同樣的。特別是買線上課程，確認同老師、同課程甚至是最新的評論都是一道又一道手續。
        </p>
        <p className="lh-lg">
          WeLearn
          平台上結合歷屆學員評價，讓新進學員可以參考上過課的學長、姐對本課程、老師的評價，讓學員不用到茫茫網路海中撈針。
        </p>
        <h4 className="mt-3">0障礙學習</h4>
        <p className="lh-lg">
          WeLearn
          平台標示每一堂課程適合上課的族群，輕鬆暫停、重播讓學習不再只能跟隨別人的步調。挑一個你喜歡的時間來學習吧！
        </p>
        <h3 className="mt-4">LOGO 發想</h3>
        <p className="lh-lg">
          我覺得萬物離不開點線面，線條、形狀等簡約的設計相當吸引我，也很貼合
          WeLearn 簡化的理念。
        </p>
        <h3 className="mt-4">名稱發想</h3>
        <p className="lh-lg">
          WeLearn 名稱的發想來自於共享辦公室
          WeWork，線上學習平台本身就是共享概念的實體化，共享疑惑、共享知識、共享理念。WeLearn
          想當好念不拗口，tagline 的 From now on 則體現的 0 障礙學習的精神。
        </p>
        <h3 className="mt-4">未來展望</h3>
        <ul>
          <li>結合 blog</li>
          <li>回覆機器人</li>
        </ul>
        <h3 className="mt-4">應用技術</h3>
        <ul>
          <li>Tailor Brands：Logo 設計參考</li>
          <li>Trallo：專案管理</li>
          <li>Draw.io：UML 製作</li>
          <li>
            <a href="https://nodejs.org/en/">Node.js</a>
            <ul>
              <li>
                <a href="https://expressjs.com/">Express</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.mongodb.com/">mongoDB</a>
            <ul>
              <li>
                <a href="https://mongoosejs.com/">mongoose</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://reactjs.org/">React.js</a>
            <ul>
              <li>
                <a href="https://reactrouter.com/en/main">React Router</a>
              </li>
              <li>
                <a href="https://create-react-app.dev/">Create React App</a>
              </li>
              <li>
                <a href="https://react-hook-form.com/">React Hook Form</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://getbootstrap.com/">Bootstrap</a>
          </li>
          <li>
            <a href="https://fontawesome.com/">FontAwesome</a>
          </li>
          <li>
            <a href="https://unsplash.com/">Unsplash</a>
          </li>
        </ul>
      </article>
    </main>
  );
}

export default About;
