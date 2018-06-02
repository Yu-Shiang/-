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

var player=new Object();
//物件裡面分兩種東西：屬性、方法
player.name="Shine";//屬性。物件中有一屬性name是字串"Shine"
player.hp=100;
player.rest=function(){ //方法
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















//彈跳視窗詢問用戶
prompt("提示語",”預設值”);
var y=prompt("提示語",”預設值”); //假如使用者輸入15，15會變成prompt的結果，y=15


