<?php include_once("header.php");?>
  <div class="row justify-content-center">
    <!-- <section class="col-lg-4 left col-md-12">
      <h1 class="section_title">需求單</h1>
      <p class="section_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aliquid repudiandae hic aliquam ea odit doloribus, obcaecati sed! Laudantium quae illo dolor neque ab nostrum quis quibusdam, praesentium aspernatur ullam!</p>
    </section> -->
    <section class="col-12 plain_block">
      <form class="form" action="/form.php" method="post">
        <label for="username" class="form-label h3">Name: </label>
        <div class="input-group flex">
          <span class="col-3 input-group-text" id="icon-user"><i class="fa-lg fa-solid fa-user"></i></span>
          <input type="text" class="col-9 form-control" id="username" name="username" aria-describedby="icon-user">
        </div>  
        <label for="phone" class="form-label h3">Tel: </label>
        <div class="input-group flex">
          <span class="input-group-text col-3" id="icon-phone"><i class="fa-lg fa-solid fa-phone"></i></span>
          <input type="text" class="col-9 form-control" id="phone" name="phone" aria-describedby="icon-phone">
        </div> 
        <div class="flex">
          <label for="opinion" class="form-label h3 col-3">您的意見：</label>
          <textarea class="form-control col-9" id="opinion" name="opinion" rows="5" placeholder="Describe your opinion"></textarea>
        </div>
        <div class="btn-group">
          <button class="btn btn-primary" type="submit"><i class="fa-lg fa-solid fa-paper-plane"></i>Submit</button>
          <button class="btn btn-primary" type="reset"><i class="fa-lg fa-solid fa-cancel"></i>Reset</button>
          <a class="btn  btn-primary" href="./index.php"><i class="fa-lg fa-solid fa-house"></i>Home</a>
        </div>
      </form>
    </section>
  </div>
<?php include_once("footer.php");?>
