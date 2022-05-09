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
  <title>WeLearn</title>
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
    <div class="css_animation">
      <ul>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/1" alt="">
          <div class='info'>
            <h3>TO</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/2" alt="">
          <div class='info'>
            <h3>BE</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/3" alt="">
          <div class='info'>
            <h3>OR</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/4" alt="">
          <div class='info'>
            <h3>NOT</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/5" alt="">
          <div class='info'>
            <h3>TO</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/6" alt="">
          <div class='info'>
            <h3>BE</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/7" alt="">
          <div class='info'>
            <h3>,</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/8" alt="">
          <div class='info'>
            <h3>IT</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/9" alt="">
          <div class='info'>
            <h3>IS</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/10" alt="">
          <div class='info'>
            <h3>A</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/11" alt="">
          <div class='info'>
            <h3>QUESTION</h3>
          </div>
        </li>
        <li>
          <img class="img-fluid normal" src="https://source.unsplash.com/random/12" alt="">
          <div class='info'>
            <h3><i class="fa-solid fa-exclamation"></i></h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <script>

// - Noel Delgado | @pixelia_me

const nodes = [].slice.call(document.querySelectorAll('li'), 0);
const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - width / 2 * (width > height ? height / width : 1);
  const y = t - height / 2 * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
  }}


nodes.forEach(node => new Item(node));
  </script>
</body>
</html>