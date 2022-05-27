<?php
namespace Myproject;
$a =__LINE__;
$b =__FILE__;
$c =__DIR__;
$g =__NAMESPACE__;
echo"取得行程式的行號{$a}<br>";
echo"取得文件在本機的路徑與名{$b}<br>";
echo"取得文件在本機的路徑{$c}<br>";

class test
{
public function fun(){
$d =__FUNCTION__;
echo"取得函數的名稱{$d}<br>";
}
public function meth(){
$e = __CLASS__;
$f = __METHOD__;
echo"取得類別名稱{$e}<br>";
echo"取得類别的方法名稱{$f}<br>";
}
}

$obj = new test();
$obj->fun();
$obj->meth();
echo"取得區分大小寫命名空間名稱{$g}";
?>