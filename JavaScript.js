//封裝的時候要先想用的時候怎麼用，看需要那些參數，再來寫封裝




/*
安裝node.js  去node.js官網下載安裝檔
查看node版本(看是否安裝成功)  node -v

安裝VueCli  npm install -g @vue/cli
查看版本  vue --version
看全部指令  vue
(win電腦有可能會遇到預設不允許執行，請參考https://officeguide.cc/powershell-set-execution-policy-remote-signed/))
建立專案 vue create 專案名稱


*/



//JS
window.onload = function(){

}
// 或這樣 <body onload="init();"> //當body載入成功後就觸發load事件
//jQuery
$(document).ready(function(){
  var wh = $(window).height(); 
  $('.kv').height(wh);
});
//jQuery 偵測視窗尺寸變化，通常會搭配定時器，避免拖曳變更尺寸時執行數十次function
var timer;
$(window).resize(function(){
  timer=setTimeout(function(){
    ww=$(window).width();
  },500);
});
clearTimeout(timer);
//JS寫法
window.onresize = function(){
  console.log("視窗發生改變了喲！");
}


//JS，視窗寬度(包含scrollbar)
window.innerWidth;
//JS，視窗寬度(扣除scrollbar)
document.documentElement.clientWidth;

/*阻止事件冒泡*/
object.onclick = function(ev){
  ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
}

/*事件源*/
object.onclick = function(ev){
  ev = window.ev || ev;
  var self = ev.target || ev.srcElement;
}

//滑鼠對於瀏覽器頁面位置
ev.clientX;
ev.clientY;
//滑鼠相對於事件源位置
ev.offsetX;
ev.offsetY;



//以下三種，結尾不用加 ;
function demo(){} 
for(){}
if(){}




//這樣可以將div搬移到body最後方
$('div').appendTo('body');

//抓物件尺寸總高
$('div').outerHeight(true);




/*
兩種基本結構，物件的方法、屬性
物件.方法(參數);  windows.alert(msg);
物件.屬性 = 值;   sample.lenght = 5;
 */





/*-------------------宣告提升 Hoisting-------------------
先執行在宣告也不會報錯，因為javascript會自動將宣告提升到最前面
按照大陸教學，JS處理語法時會拆成兩個步驟 
1.預解析
  開始從上到下先執行宣告(包含var、function，但不會賦值、不會管函數內容是什麼)
2.逐行解析
  開始從上到下開始運行(這時才會賦值)，遇到執行函數時，函數內部依然遵循兩步驟，會先1.預解析、2.逐行解析
*/
test();
var x=10;
function test(){
  console.log(x);
}
/* e.g. 
以上語法實際運作時會被依序拆成兩步驟處理，
1.預解析
  var x;
  宣告函數test(但不會管內容，只知道有一個函數test)
2.逐行解析
  執行函數test()，這時才開始拆解函數test，一樣先處理test內看看有無預解析(宣告)、接著才逐行解析。
  這時函數會印出x，但x還沒給值，所以會輸出undefined
  x=10;
*/
//函式也是有同樣特性，這樣OK





alert();
console.log();
confirm("請稍後");  //彈跳視窗

//資料型態轉換。字串轉換成數字 (把n轉成數字再放回n)
n=Number(n);


//字串*字串時，如果字串是數字，依然能夠乘
var sum="5"*5;//25





/*------------------ this
this 是指誰?? 掌握一大原則：誰呼叫就是指誰
*/
function fn(){
  console.log(this);  //指windwos
}
btn.onclick = function(){
  console.log(this);  //指btn
  fn();   //並不是btn呼叫他，是這個function呼叫他，所以是windwos
}





//判斷式
if(){
  //如果是某東西===true則可以省略，直接if(某東西就可以)
}else if(){
}else{
}
//沒有大括弧也可以
if() /*true時執行啥*/

//另外一種寫法，三元運算子 
判斷式?"true時":"false時";
//如果需要return值，那就是：
return 判斷式?"true時":"false時";









/*--------------迴圈----------------*/
//知道迴圈次數時可用for
for(var i=1;i<=100;i++){
}

//不知道迴圈次數時可用while，直到false
while(/*判斷*/){
}
//一定會先執行一次，後續再看是否滿足條件
do(){
}while(/*判斷式*/)


break; //強制跳出整個迴圈
continue;  //結束本次迴圈，繼續進行下一次迴圈 (continue後面的語法不會執行到)
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
console.log(x);









/*
--------------------Function 函式(函數)-----------------
當程式需要重複使用就可以寫成函式已供重複使用。
沒有呼叫時並不會執行這內容
*/
function name(n1,n2){
  //參數屬於區域變數，在'呼叫'函數時一樣會先Hositing自動宣告

  //可搭配使用return
  return n1+n2;/*這個值回傳到呼叫的地方*/
}
//呼叫執行，才會跳進函式
name(10,20,30);  //會得到return的值（多餘的參數不會被用到）
//以上，也可以寫這樣
var name=function(n1,n2){
}
name();//呼叫

//函式內建一個arguments，他會記錄下來呼叫時的全部參數，不管有沒有用到。
//e.g. 加總函式
function sum(){
  var x=0;
  for(index in arguments){
    x+=arguments[index];
  }
  return x;
  console.log(arguments.length); //可以得知共有幾個參數 = 3
}
sum(10,20,30);


//jQuery的寫法
$(function(){
  // Document is ready
});











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
/*
區域變數：僅能夠在函式中透過關鍵字 var 宣告，每個不同的函式可以有相同的變數名稱，，每個函式間的變數互不干涉，也無法在函式外其他地方調用。
僅有在函式（function）內，透過 var 所宣告的變數才能算是區域變數，若沒有使用 var 關鍵字宣告，無論是在哪裡宣告的變數，都會屬於 Global Variable 全域變數的範疇，此細節請多多注意避免錯誤。
*/








/*Date時間*/
var 現在時間 = new Date(); //創建現在時間
var 指定日期 = new Date(year, month, day, hours, minutes, seconds, milliseconds); //參數依序填寫，最終沒寫的則是預設
var 用字串指定日期 = new Date("2019-01-01");
var 轉成JSON格式 = 現在時間.toJSON().slice(0,10).replace(/-/g,'/'); //並取前面年月日的部分並轉成/分隔

nowTime.getTime();  //1970至今毫秒 (同下面)
nowTime = Date.now(); //1970至今毫秒 (同上面)
nowTime.getSeconds();  //秒
nowTime.getMinutes();  //分
nowTime.getHours();  //小時
nowTime.getDay();  //星期幾
nowTime.getDate();  //日
nowTime.getMonth()+1;  //月
nowTime.getFullYear();  //年

/*計算兩個日期*/
/*設定日期8/15 12:00*/
var time = new Date();
time.setMonth(7);
time.setDate(15);
time.setHours(12);
time.setMinutes(0);
time.setSeconds(0);
var endTime = time.getTime();
var offsetTime = (endTime - nowTime) / 1000;  //兩個日期的差距的秒數
var ss = parseInt(offsetTime % 60);  //換算秒
var mm = parseInt(offsetTime / 60 % 60);  //換算分
var HH = parseInt(offsetTime / 60 / 60);  //換算小時








/*
-----------------Array 陣列---------------------
陣列從0開始
colors=['black','blue','red'];
colors[0]值就是'black';
*/
//計算陣列數量有幾個
colors.length;
//動態加入陣列到最後一個，有兩種方式：
colors.push("Purple");
colors[colors.length] = 'Purple';

//取出所有的值，可用for迴圈 或 for-in
for(var i=0; i<colors.length; i++){
  console.log(i+'::'+colors[i]);
}
for(index in colors){
  console.log(colors[index]);
}

//join : 將陣列元素用固定符號串成"字串"，預設為,
var arr = ["jack", "john", "may", "su", "Ada"];
var n = arr.join(); //n為字串 "jack,john,may,su,Ada"
var n = arr.join("、"); //n為字串 "jack、john、may、su、Ada"
var n = arr.join(""); //n為字串 "jackjohnmaysuAda"

//以下用這陣列示範
var arr = [1, 2, 3, 4, 5, 6];
//設定了length數量，多出的項目會被清空，第4個及以後就被刪除了
arr.length=3; //[1,2,3]
//shift 刪除陣列第一個元素，並回傳刪除的元素值  x=1
var x=arr.shift();
//unshift 新增第一個元素到陣列內，並回傳陣列的新長度  x=7
var x=arr.unshift("0");
//pop 刪除陣列最後一個元素，並回傳刪除的元素值   x=6
var x=arr.pop();
//push 在陣列尾巴新增一個或多個元素，並回傳新的陣列長度 x=8
var x=arr.push(7,8);
//清除該陣列元素（變空值）
delete arr[1];  //結果是 [1,  ,3, 4, 5, 6]
//splice 增加或刪除元素， 會返回刪除的元素
//以下的意思是(從第0個開始,刪除2項(1,2),塞入新值,塞入新值,可多個)
var temp = arr.splice(0,2,"new 1","new2");  //arr結果是 ["new 1", 3, 4, 5, 6]，而temp會收到刪除的值"1,2"

//陣列排序，由小到大
var arr = [5, 9, 1, 3, 2, 6];
arr.sort();   //結果為[1, 2, 3, 5, 6, 9]
//以下不是複製，這樣的賦值動作，arry1、arry2指向的會是"同一組"陣列
var arr1=[1,2,3,4,5];
var arr2 = arr1;  //有點類似捷徑的概念 arr2是通往該陣列的捷徑
//正確的複製方式如下：
var arr1=[1,2,3,4,5];
var arr2=[];
for(index in arr1){
  arr2[index]=arr1[index];
}






/*
-------------------物件---------------------
大括弧{ }，裡面小項目是用;作為分隔結束
*/
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
player.rest();//加上()表示你要呼叫



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





/*
-------------------JSON-----------------
JSON跟物件非常像，JSON也是大括弧{ }，但裡面小項目是用,分隔
*/
var point={
  "x":3,
  "y":4,
  "000":05487,
  "get":function(){
    alert(this.x+","+this.y);
  }
};

//至於使用時則都一樣
point.x;
point.get();
//如果key是數字，就要改用
point['000'];
point['x']; //當然這樣也可以


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

//JS, 只會抓到第一個.example
document.querySelector(".example");
document.getElementById("id");
id.style; //其實 getElementById 可以省略，直接寫id名稱也能用
//JS，抓出全部<H1>、class="class"(會用陣列儲存)，若要取用記得[]
document.getElementsByTagName("H1")[0];
document.getElementsByClassName("class");
//jQuery，抓取結果是一個陣列，就算沒抓到也是一個空陣列
$("h1")[0];
$("class");


function change(){
  document.body.innerHTML="Hello";
  var x=document.getElementById("id");
  //JS，控制CSS style的範例
  x.style.color="red";
  x.style.fontWeight="bold";
  x.style.display="none";
  //jQuery，控制CSS style的範例
  $("#id").css( "background", "yellow");

  //加上class="on"的幾個方式
  x.classList.toggle("on");//等同jQuery的toggleClass()
  x.classList.add("on");
  
  x.setAttribute("class", "on");
  x.className="on";
  //jQuery的寫法
  $("#id").addClass("on");
  $("#id").removeClass("on");
  $("#id").toggleClass("on");
}
function over(element){
  element.style.color="red";
}
function out(element){

}
/*--------常見滑鼠事件----*/
element.onclick=function(){};       //點擊後放開
element.ondbclick=function(){};     //雙擊
element.onmousedown=function(){};   //滑鼠點擊
element.onmouseup=function(){};     //滑鼠放開
element.onmouseover=function(){};   //滑鼠移入
element.onmouseout=function(){};    //滑鼠移出
element.onmousemove=function(){};   //滑鼠移動 (像是拖曳)
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
  //註冊事件處理器，(事件名稱,對應的處理函式,true是捕獲false是冒泡))
  //element.addEventListener(event, function, useCapture)
  btn.addEventListener("click", handler); //click後會觸發handler
  btn.addEventListener("mousemove", function(){
  })
  btn.removeEventListener('click'); //移除事件監聽

  //下面這個為過時寫法，可以捨棄
  btn.onclick=function(){
  }
  btn.onclick=null;//移除click函數

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
//封裝JS，1.請求方式 2.URL位置 3.要傳遞的參數 4.成功後要執行的函數
function getDate(method, url, args, successFn){
  //基本寫法var request=new XMLHttpRequest(); 或相容性完整寫法
  var request= window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  if(method == 'get'){
    url = url + args; //假如是get，參數會是直接接在網址後面
  }
  request.open(method,url, true);

  
  if(method == 'get'){
    request.send();
  }else{ //post
    request.setRequestHeader('content-type','application/x-www-form-urlencoded');
    request.send(args);
  }
  

  request.onreadystatechange = function(){
    if(request.readyState == 4){
      if(request.status == 200){ 
        //確認收到資料，將json存入變數，可以使用了
        var jsonData = JSON.parse(request.response);
        //或者呼叫參數，先檢查有參數才跑
        if(successFn){
          successFn(request.response);//把JSON變成參數(response)傳回去
        };
        //也可以這樣簡寫，使用OR的概念，兩個都是true時才是true
        successFn && successFn(request.response);
      }else{
        //獲取失敗
      }
    }
  }


}
//實際呼叫會這樣寫
getDate('get','http://xxxxxxxxxxx','要傳遞的內容',function(response){
  console.log(response);
});













//jQuery寫法
$(document).ready(function(){
  $("span").click(function(){
    htmlobj=$.ajax({
      type:'GET',
      url: "/jquery/test1.txt",
      async: false,
      success: function(e){
        //成功的話~資料會傳到e變數
      }
    });
    $("#content").html(htmlobj.responseText);
  });
});

//用jQuery的ajax來完成CRUD效果
//http://muki.tw/tech/jquery-ajax-crud-and-template/
//Read  抓資料顯示出來
$.ajax({
	url: ajax_url,
	type: 'GET',
	error: function(){
		console.log('error');
	},
	success: function(e){
		for(var i=0; i<e.length; i++) {
			$(".result").append(
				'<div class="full-msg" data-id="'+ e[i]._id +'">' +
				'<div>姓名：<div class="name">'+ e[i].username +'</div><div class="update" >更新留言</div><div class="del" >刪除留言</div></div>' +
				'<div>網站：<div class="url">'+ e[i].url +'</div></div>' +
				'<div>電子郵件：<div class="email">'+ e[i].email +'</div></div>' +
				'<div>標題：<div class="title">'+ e[i].title +'</div></div>' +
				'<div><div class="message">'+ e[i]. message +'</div></div>' +
				'</div>'
			);
		};
	}
});



























/*-------單純用javascript控制放大動畫---------- */
//抓取物件的外觀尺寸 (javascript)
var box=document.getElementById("box");
//取得這個物件的全部樣式
var styles=window.getComputedStyle(box);
//取得寬度，例如"50px"
var size=styles.getPropertyValue("width");
//因為得到的是字串"50px"，將他轉換成數字
size=parseInt(size);
//放大動畫
var id=window.setInterval(function(){
  if(size>200){
    window.clearInterval(id);
    return;
  }
  size+=2;//每次+2
  box.style.width=size+"px";
}, 10);//每0.01秒執行一次函式















/*--------------Cookie-------------------*/

document.cookie = 'itemname=哈囉';  //若沒有設定有效時間，瀏覽器關閉就會消失
//設定有效時間的cookie，設定30秒鐘內有效
var expiresTime = new Date();
expiresTime.setSeconds(expiresTime.getSeconds() + 30);  //如果時間設成過期的，就等於可以刪除該cookie(因為過期了)
document.cookie = 'age=34;expires=' + expiresTime.toGMTString();
//抓取cookie內容
console.log(document.cookie); //抓出來時會是一字串，且該網域全抓並用; 分隔，如果要取用其中一值，要自行拆解字串


















//跳到某個<input>中，用focus()
document.getElementById("input").focus();

//JS,抓出全部.example，然後將第1個改顏色
function myFunction() {
  var x = document.querySelectorAll(".example");
  x[0].style.backgroundColor = "red";
}

//變更style樣式
//JS寫法  .style.  若遇到-就省略後字變大寫
this.style.backgroundColor='#222222';
this.style.color='white';


//回上一頁
window.history.back();

//JS,抓瀏覽器高度
var wh=window.innerHeight;

//抓取網址#hash值
//出處https://www.codexworld.com/how-to/get-hash-value-from-url-using-javascript/
//xxxx.htm#aaa
var hash = location.hash; //抓到#aaa
var hash = location.hash.substr(1); //抓到aaa
//用this.hash 可抓到href的hash #aaa
<a href="http://www.codexworld.com/index.php#VideoTutorial" onclick="alert(this.hash)">Get Hash</a>

//抓取網址參數
var url = window.location.toString();
if (url.indexOf("?") != -1) { 
    var target_sn = url.split("?")[1];//將網址拆成陣列，[?前面,?後面]，可以再繼續用split("&")拆出多個參數、再用split("=")拆出屬性及值
}

//尋找字串裡有沒有"?"這個字串，回傳首次出現的位置，假如沒找到會是-1
//所以可以用這個工具來辨識字串內是否有出現關鍵字
String.indexOf("?");
if(String.indexOf("?") === -1){
  //當字串裡找不到"?"時
}


//javascript 擷取字串中的其中一段(抓出固定字數)
String.substr(從0開始，第幾個字符開始抓,共要抓出幾個字符);
String.substring(從0開始，第幾個字符開始抓,抓到第幾個字符前);

/*JS，取整數、四捨五入
強制進位 : Math.ceil(a);
四捨五入 : Math.round(a));
無條件舍去 : Math.floor(a);
無調整捨去：parseInt()
parseInt("100px");   //100  parseInt是将数据化为整数（数据必须数字开头），parseInt("px100")  ==>NAN
Math.floor("100px"); //NAN  Math.floor是对数字向下取整；
*/
















//JS，捲動事件。示範捲動到元素底部再載入次頁
window.onscroll = function(){
  console.log('捲軸捲動!!');

  var page = 1;
  var isLoad = true;  //用來標示目前有沒有在載入 (前面載入完後才能允許再觸發下一次載入)

  //抓取捲軸位置
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  //抓取視窗尺寸
  var screenH = document.documentElement.clientHeight;

  //offsetHeight 是物件的總高(含padding)
  //offsetTop 是物件距離視窗頂部的高度
  //抓取DOM物件尺寸
  var idheight = id.offsetHeight + id.offsetTop;

  if(scrollTop + screenH > idheight){
    if(isLoad){
      page++;
      isLoad = false;
    }
  }
}
//JS.控制捲動，例如捲動到x300 y500
window.scrollTo(300, 500);
//下面這寫法也可以，但Edge不吃
window.scrollTo({ 
  left: 300,
  top: 500, 
  behavior: "smooth" // smooth(平滑滾動),instant(瞬間滾動)
});




//jQuery捲動到指定單元
$("html,body").animate({scrollTop: $("#group-prod").offset().top}, 500);
$(function(){
  $("#gotop").click(function(){
      $("html,body").animate({
          scrollTop:0
      },1000);
  });
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 300){
          $('#gotop').fadeIn("fast");
      } else {
          $('#gotop').stop().fadeOut("fast");
      }
  });
});
















//jQuery，變更整塊為純文字內容
$(".sample").text("HELLO!");
//jQuery，如果沒給值，表示要抓取.sample裡面目前的文字
$(".sample").text();
//jQuery，抓屬性 (沒給值就表示要要抓取) <img width="50">
$(".sample").attr("data-value","30");//給予值
$("img").attr({width:"50",height:"80"});//給予值
$(".sample").attr("data-value");//抓取
//jQuery，變更整塊html內容
$(".sample").html("<div class='xxx'></div>");
//jQuery，改物件的value值
$("input").val("test");
//jQuery，於內部的前方插入html內容
$(".sample").prepend("<div class='xxx'></div>");

//於內部的後方插入html內容
//JS
object.appendChild("");
//jQuery
$(".sample").append("<div class='xxx'></div>");


//創建DOM   div.section (JS)
var oSection = document.createElement('div');
oSection.className = 'section';
document.appendChild(oSection);


//變更CSS (用style寫在元素上)
//JS寫法  **教學網站說就是省略-，然後-後面字母變大寫
sample.style.backgroundColor="red";
//jQuery
$(".sample").css("background-color","red");


//尋找子元素
$(".sample").find(".child");
//尋找最近的div元素
$(".sample").closest("div");

//jQuery，滑鼠進入
$(".sample").mouseenter(function(){
})
//jQuery，滑鼠離開
$(".sample").mouseleave(function(){
})
//js，拆字串，結果會是陣列
"1g2g3".split("g"); //結果是[1,2,3]

//以逗號來作為分割的字元 =  ["1", "2", "3"] 陣列
//replace("要取代的東西","取代成什麼") 取代        
"hello".replace("e", "x");
//經過特定時間執行
setTimeout(function(){
  //do something
},5000);

//每經過一段特定時間就執行一次
setInterval(function(){
  //do something
},1000);