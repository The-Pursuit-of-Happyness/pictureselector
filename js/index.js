window.onload = function (){
    var oPre = document.getElementById("pre");
    var oNext = document.getElementById("next");
    var oTitle = document.getElementById("title");
    var oNum = document.getElementById("num");
    var oPicture = document.getElementById("picture");
    var oBox = document.getElementById("box");
    var oPreview = document.getElementById("preview");
    var num = 0;
    var picturs = ["images/pic1.jpg","images/pic2.png","images/pic3.png","images/pic4.gif","images/pic5.jpg","images/pic6.jpg","images/pic7.jpg"];
    var title =["排队走啊，走啊走，后面的跟上，别掉队啦！！！","可爱的小海豹，你瞅啥呢？","嘿嘿，三胞胎哦，我们可是同卵多生哦！！！","你说啥，不是吧！！！","好舒服，哈哈，别叫我起来！！！","二脸懵逼，哈哈，别这样！！！","还是自家的兄弟亲，来，咱接着睡！！！"];
    //初始化数据和显示效果
    function defaultSet(){
        oPre.style.display ="none";
        oNext.style.display ="none";
        oNum.innerHTML = (num+1)+"/"+picturs.length;
        oTitle.innerHTML = title[num];
        oPicture.src = picturs[num];
    }
    defaultSet();
    //设置自动播放的计时器
    var timer;
    function autoDisplay(){
        timer = setInterval(function () {
            num++;
            num = num%picturs.length;
            defaultSet();
        },2000);
    }
    timer = setTimeout(autoDisplay,2000);//增加一个延时
    //下一张图片点击效果
    oNext.onclick = function(){
        num = (num+1)%picturs.length;
        oPicture.src = picturs[num];
        oTitle.innerHTML = title[num];
        oNum.innerHTML = (num+1) +"/"+picturs.length;
        oPreview.style.display = "none";
    }
    //下一张图片鼠标移入效果
    oNext.onmouseover = function () {
        oPreview.src = picturs[(num+1)%picturs.length];
        oPreview.style.display = "block";
    }
    //下一张图片鼠标移除效果
    oNext.onmouseout = function () {
        oPreview.style.display = "none";
    }
    //上一张点击效果
    oPre.onclick = function(){
        num--;
        if(num<0){
            num = picturs.length-1;
        }
        oPicture.src = picturs[num];
        oTitle.innerHTML = title[num];
        oNum.innerHTML = (num+1) +"/"+picturs.length;
    }
    //上一张鼠标移入效果
    oPre.onmouseover = function () {
        var n = num -1;
        if(n<0){
        n = picturs.length-1;
        }
        oPreview.src = picturs[n];
        oPreview.style.display = "block";
    }
    //上一张鼠标移出效果
    oPre.onmouseout = function () {
        oPreview.style.display = "none";
    }
    //鼠标移入可见区域效果
    oBox.onmouseover= function (){
        clearInterval(timer);
        oPre.style.display = "block";
        oNext.style.display = "block";
    }
    //鼠标移出可见区域效果
    oBox.onmouseout= function (){
        autoDisplay();
        oPre.style.display = "none";
        oNext.style.display = "none";
    }
}