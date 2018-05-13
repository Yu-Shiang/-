alert();
console.log()


//字串轉換成數字
Number();

//彈跳視窗
confirm("請稍後");


//判斷式
if (/* Some condition */) {  //如果是某東西===true則可以省略，直接if(某東西就可以)
  // Do something
} else if (/* Some other condition */) {
  // Do something else
} else {    // Otherwise
  // Do a third thing
}


//無窮迴圈，跑完會再重頭跑一次，直到false
while(){
}

for(var i=1;i<=100;i++){

}

  break; //強制跳出迴圈
  continue;  //強制進行下一次迴圈
//舉例一旦n跑到50，就會脫離整個while迴圈
var n=0;
while(n<=100){
  if(n==50){
    break; 
  }
  n++;
}
//舉例0喊到100，遇到4的倍數就略過不喊，總共喊了幾次
var x=0;
for(var n=0;n<=100;n++){
  if(n%4==0){   //n除以4的餘數(是不是4的倍數)
    continue;  //因為碰到continue就直接回到最外層迴圈跑下一次，下面的++就不會執行
  }
  x++;
}




//彈跳視窗詢問用戶
prompt("提示語",”預設值”);
var y=prompt("提示語",”預設值”); //假如使用者輸入15，15會變成prompt的結果，y=15


