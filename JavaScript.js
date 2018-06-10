alert();
console.log()


//資料型態轉換。字串轉換成數字 (把n轉成數字再放回n)
n=Number(n);

//彈跳視窗
confirm("請稍後");


//判斷式
if(){
  //如果是某東西===true則可以省略，直接if(某東西就可以)
}else if(){
}else{
}

/*--------------迴圈----------------*/
//無窮迴圈，跑完會再重頭跑一次，直到false
while(/*判斷*/){
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








//--------------------函式-----------------
//當程式需要重複使用就可以寫成函式已供重複使用。

function name(n1,n2){
  //沒有呼叫時並不會執行這內容
  //參數可以多組

  //可搭配使用return
  return n1+n2;/*這個值回傳到呼叫的地方*/
}
//呼叫執行，會跳進函式
name("參數1","參數2");//會得到return的值


//--------------------以上，也可以寫這樣
var name=function(n1,n2){
}
name();//呼叫


//全域變數 與 區域變數
//一個函式會有自己的區域，區域變數只能在自己的區域內用
//函數內的變數x，會優先找函式內的x，找不到才會用外面全域變數
var x=3;
function test(){
  var y=5;
  var x=9;
  console.log(x+y);//x是5
}
console.log(x); //x是3














//-------------------物件---------------------
//建立一個物件"player"
var player=new Object();
//在這物件裡建立一個"屬性"
player.name="Shine";//屬性。物件中有一屬性name是字串"Shine"
player.hp=100;
//在這物件裡建立一個"方法"
player.rest=function(){ 
  this.hp++;
  console.log(this.hp);
}

player.rest();//呼叫，**要加上()



//-----------------建構式物件--------------
//例如我要建立很多相似的物件，就會使用這方式
function Player(n1,n2){//業界習慣首字大寫
  this.name=n1;
  this.hp=n2;
  this.rest=function(){
    this.hp++;
    console.log(this.hp);
  }
}

//使用時，且建立兩個物件
var player=new Player("Amy",100);
player.rest();
var player2=new Player("Sam",80);
player2.rest();







/*-------------------JSON---------------
JSON跟物件非常像
*/
/*
var point=new Object();
point.x=3;
point.y=4;
point.get=function(){
  alert(this.x+","+this.y);
}
以上面這一段來說，JSON可以這樣達成
*/
var point={
  "x":3,
  "y":4,
  "get":function(){
    alert(this.x+","+this.y);
  }
};

//至於使用時則都一樣
point.x;
point.get();


//point是一個"物件"，有時會需要轉成"字串"以利傳輸給後端
var jsonStr=JSON.stringify(point);
//jsonStr就是一段字串(若印出來就是程式碼)
//!!!轉換時"方法"會被忽略，以上例來說get就會不見了/
//接著如何將字串轉成物件?
var plainObj=JSON.parse(jsonStr);
















//彈跳視窗詢問用戶
prompt("提示語",”預設值”);
var y=prompt("提示語",”預設值”); //假如使用者輸入15，15會變成prompt的結果，y=15










//-------------HTML DOM選擇方式
function change(){
  document.body.innerHTML="Hello";
  var x=document.getElementById("id");
  //控制CSS的範例
  x.style.color="red";
  x.style.fontWeight="bold";
  x.style.display="none";
  x.classList.toggle("on");//等同jQuery的toggleClass()
}
function over(element){
  element.style.color="red";
}
function out(element){

}
/*展示點擊、滑鼠滑過、滑鼠離開
<div onclick="change();" onmouseover="over(this);" onmouseout="out(this);">
*/





/*
<body onload="init();"> //當body載入成功後就觸發load事件
  <button id="btn">Click</button>
</body>
*/
function init(){
  var btn=document.getElementById("id");
  //現代新的寫法
  var handler=function(){
  };
  //註冊事件處理器，(事件名稱,對應的處理函式)
  btn.addEventListener("click", handler); //click後會觸發handler


  //下面這個為過時寫法，可以捨棄
  btn.onclick=function(){
  }

}

/*---------Event Object事件物件-----------
addEventListener 
瀏覽器會主動收集和事件有關的資訊，並製造出EventObject事件物件
有點像是私下寫了一段 var eventObj=事件物件;
當觸發時，呼叫已經註冊的事件處理函式 例如 handler(eventObj);
一定會回傳事件物件，
為了好抓取，所以我們會加上一個參數e(只是習慣寫e)，方便收集
*/
  var handler=function(e){ 
    console.log(e.clientX+","+e.clientY); //抓取點擊當下的滑鼠X,y軸位置
    console.log(e.keyCode); //按下哪一顆鍵
  };













/*-----------------自動排程----------------*/
//範例：倒數
var timer;
function init(){
  timer=document.getElementById("timer");
  window.setTimeout(countdown, 1000); //一秒鐘後執行countdown()
}
function countdown(){
  timeer.innerHTML=timer.innerHTML-1;
  if(timer.innerHTML>0){
    windows.setTimeout(countdown, 1000);
  }else{
    console.log("時間到");
  }
  
}
//另一個寫法，每秒鐘執行一次countdoen();
windwos.setInterval(countdown, 1000);











/*----------------AJAX-------------- */
/*
不用重新載入網頁，即可抓取service上的資料呈現在畫面上
(測試時須在service環境下)
*/
function getDate(pageName){
  var req=new XMLHttpRequest(); //XMLHttpRequesr是內建函式
  req.open("get","http://127.0.0.1/"+pageName);
  req.onload=function(){//利用onload來得知連線成功，然後要做什麼
    var content=document.getElementById("content");
    content.innerHTML=this.responseText;
  }
  req.send();//送出連線
}
/*
<body onload="getDate('popular.html')">
  <div>
    <span onclick="getDate('popular.html')";>熱門</span>
    <span onclick="getDate('popular.html')";>熱門</span>
  </div>
<div id="content"></duv>
*/








/*-------------------宣告提升 Hoisting
就算宣告放在後面，javascript也會自動提升到最前面，所以程式並不會出錯
*/
//以下這樣OK
x=10;
var x; 
//以下這樣NG，被提升的只有var x，所以X並還沒有被塞入10
alert(x);
var x=10;

//函式也是有同樣特性，這樣OK
test();
function test(){//函式宣告
  console.log("Hello");
}
//以下這樣NG
test();
var test=funciotn(){
  consloe.log("HELLO");
}










//跳到某個<input>中，用focus()
document.getElementById("input").focus();






//抓取網址#hash值
//出處https://www.codexworld.com/how-to/get-hash-value-from-url-using-javascript/
//xxxx.htm#aaa
var hash = location.hash; //抓到#aaa
var hash = location.hash.substr(1); //抓到aaa
//用this.hash 可抓到href的hash #aaa
<a href="http://www.codexworld.com/index.php#VideoTutorial" onclick="alert(this.hash)">Get Hash</a>

