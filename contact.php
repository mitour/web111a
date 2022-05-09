<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="scss/all.css">

    <!-- font awesome -->
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==' crossorigin='anonymous'/>

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css' integrity='sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==' crossorigin='anonymous'/>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js' integrity='sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ==' crossorigin='anonymous'></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <title>Contact | WeLearn</title>
  </head>
  <body>
  <div class="wrap">
      <nav class="nav">
        <a href="./index.php" class="logo">
          <h1>WE LEARN</h1>
          <h2>from now on</h2>
        </a>
        <ul>
          <li><a href="./index.php"><i class="fa-solid fa-house"></i>Home</a></li>
          <li><a href="./about.php"><i class="fas fa-address-card"></i>About</a></li>
          <li><a href="./contact.php"><i class="fa-solid fa-comments"></i>Contact</a></li>
        </ul>
      </nav>
      <div class="container">
        <div class="row justify-content-center">
          <section class="col-lg-4 left col-md-12">
            <h1 class="section_title">需求單</h1>
            <p class="section_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquid repudiandae hic aliquam ea odit doloribus, obcaecati sed! Laudantium quae illo dolor neque ab nostrum quis quibusdam, praesentium aspernatur ullam!</p>
          </section>
          <section class="col-lg-4 plain_block col-md-12">
            <form class="form" action="/form.php" method="post">
              <label for="username" class="form-label h3">Name: </label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="icon-user"><i class="fa-lg fa-solid fa-user"></i></span>
                <input type="text" class="form-control" id="username" name="username" aria-describedby="icon-user">
              </div>  
              <label for="phone" class="form-label h3">Tel: </label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="icon-phone"><i class="fa-lg fa-solid fa-phone"></i></span>
                <input type="text" class="form-control" id="phone" name="phone" aria-describedby="icon-phone">
              </div> 
              <div class="mb-3">
                <label for="opinion" class="form-label h3">您的意見：</label>
                <textarea class="form-control" id="opinion" name="opinion" rows="5" placeholder="Describe your opinion"></textarea>
              </div>
              <div class="btn-group">
                <button class="btn btn-primary" type="submit"><i class="fa-lg fa-solid fa-paper-plane"></i>Submit</button>
                <button class="btn btn-primary" type="reset"><i class="fa-lg fa-solid fa-cancel"></i>Reset</button>
                <a class="btn  btn-primary" href="./index.php"><i class="fa-lg fa-solid fa-house"></i>Home</a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>
</html>