<?php

if(isset($_POST["username"])){
  $username = $_POST["username"];
  echo "你好，".$username;
}
if(isset($_POST["phone"])){
  $phone = $_POST["phone"];
  echo "電話：".$phone;
}
if(isset($_POST["opinion"])){
  $opinion = $_POST["opinion"];
  echo "意見：".$opinion;
}

// $heard_from = $_POST["heard_from"];

// echo "選擇如下：<br>";
// echo "<ul>";
//   foreach ($heard_from as $value){
//     echo "<li>".$value."</li>";
//   }
// echo "</ul>";

// for ($i=0 ; $i<10 ; $i++ ) {
//   echo $i;
// }

// phpinfo();

?>