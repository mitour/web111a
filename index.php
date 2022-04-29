<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="scss/all.css">
  <title>Document</title>
</head>
<body>
  <form action="/form.php" method="post">
    <fieldset>
      <legend class="h2">Interested?</legend>
      <p>
        Name: <input type="text" name="name" id="name">
      </p>
      <p>
        Tel:
        <input type="tel" name="tel" id="tel" placeholder="0900-123-456">
      </p>
      <p>
        Sex: 
        <label for="male"><input type="radio" name="sex" id="male" value="male">男性</label>
        <label for="female"><input type="radio" name="sex" id="female" value="female">女性</label>
        <label for="other"><input type="radio" name="sex" id="other" value="other">其他</label>
      </p>
      <p>
        Mail:
        <input type="email" name="email" id="email" placeholder="example@example.com">
      </p>
      <p>
        最高學歷:
        <select name="education" id="education">
          <option value="elementary">國小</option>
          <option value="junior">國中</option>
          <option value="senior">高中</option>
          <option value="bachelor's">學士</option>
          <option value="Master's">碩士</option>
          <option value="Doctoral">博士</option>
        </select>
      </p>
      <p>
        <p>
          你從哪裡聽說本課程？
        </p>
        <label for="social_media">
          <input type="checkbox" name="social_media" id="social_media">社群軟體
        </label>
        <label for="newspapers_and_magazines">
          <input type="checkbox" name="newspapers_and_magazines" id="newspapers_and_magazines">報章雜誌
        </label>
        <label for="be_introduced">
          <input type="checkbox" name="be_introduced" id="be_introduced">親友介紹
        </label>
      </p>
      <input type="submit" value="Sand!">
    </fieldset>
  </form>
</body>
</html>