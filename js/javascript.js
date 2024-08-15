// JavaScript Document
var count=0;  //定义计数器，图片显示的序号
var mytime;   //时间变量

//根据参数id判断，是响应鼠标经过事件还是时间事件
function showImg(id){
	count++;
	//如果id变量有值，响应鼠标经过事件，停止轮播(清除时间函数)，且使图片显示指定的id
	if(id>0){
		clearInterval(mytime);  //清除时间函数
		count=id;               //传递的计数器为指定的序号
		} 
	if(count>2){  //这里只有两张图片，当序号为2时，重新设置计数器为1显示
		count=1;
		}
	//动态改变img属性值，图片放置在images目录下，命名为ad_1.jpg和ad_2.jpg
	document.getElementById("pic").src="../images/ad_"+count+".jpg";
	//动态改变序号的样式，显示那张图片，这相应的序号显示为#F63色，不显示的图片序号显示为灰色
	for(var i=1;i<=2;i++){
		if(i==count){
			document.getElementById("num"+i).style.backgroundColor="#F63";
			}
		else{
			document.getElementById("num"+i).style.backgroundColor="#CCC";
			}
		}
}

//鼠标移开后调用该函数
//启动时间函数，每间隔1000毫秒，自动调用函数showImg(0)
function showOut(){mytime=setInterval("showImg(0)",1000);}
//时间函数，每间隔1000毫秒，自动调用函数showImg(0)
mytime=setInterval("showImg(0)",2000);


				
