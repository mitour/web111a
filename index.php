<?php include_once("header.php");?>

<div class="css_animation">
  <ul>
    <?php
    for ( $i=1 ; $i<=12 ; $i++ ) {
      $card = '<li>';
      $card .= '<img class="img-fluid normal" src="https://source.unsplash.com/random/'.$i.'" alt="">';
      $card .= '<div class="info">';
      $card .= '<h3>'.$i.'</h3>';
      $card .= '</div>';
      $card .= '</li>';
      echo $card;
    }
    ?>
  </ul>
</div>

<?php include_once("footer.php");?>