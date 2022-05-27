</div>
</div>
</div>
<!-- footer  -->
<footer>
  <div class="container d-flex">
    <div class="col-8 d-flex">
      <a href="#">AncoraThemes</a>
      <span> © 2022 All Rights Reserved</span>
    </div>
    <div class="col-4 d-flex">
      <a class="footer-link" href="https://twitter.com/themes_ancora"><i class="fab fa-twitter"></i></a>
      <a class="footer-link" href="https://www.facebook.com/AncoraThemes/"><i class="fab fa-facebook-f"></i></a>
      <a class="footer-link" href="https://www.instagram.com/ancora_themes/"><i class="fab fa-instagram"></i></a>
      <a class="footer-link" href="https://www.behance.net/ancorathemes"><i class="fab fa-behance"></i></a>
      <a class="footer-link" href="https://dribbble.com/AncoraThemes"><i class="fab fa-dribbble"></i></a>
    </div>
  </div>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(this).toggleClass("active");
    $(".nav-collapse").toggleClass("active");
  });
  $(window).resize(function() {
    if (window.matchMedia('(min-width: 576px)').matches) {
      $(".nav-collapse, .navbar-toggler").removeClass("active");
    };
  });
});


// - Noel Delgado | @pixelia_me

const nodes = [].slice.call(document.querySelectorAll('li'), 0);
const directions = {
  0: 'top',
  1: 'right',
  2: 'bottom',
  3: 'left'
};
const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(
  b));

const getDirectionKey = (ev, node) => {
  const {
    width,
    height,
    top,
    left
  } = node.getBoundingClientRect();
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
  }
}


nodes.forEach(node => new Item(node));
</script>
</body>

</html>