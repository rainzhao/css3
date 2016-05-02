/**
 * Created by zhaoyu on 2016/4/6.
 */
window.onload = function(){

    /*-------节点的获取与变量的定义-------*/
    //获取左侧选择器的节点
    var translates = document.getElementById("translates");//获取translates节点用于控制translate界面显示与隐藏
    var box_shadow = document.getElementById("box_shadow");//获取box_shadow节点用于控制box_shadow界面的显示与隐藏
    var text_shadow = document.getElementById("text_shadow");//获取text_shadow节点用于控制text_shadow界面的显示与隐藏
    var border_radius = document.getElementById("border_radius");//获取border_radius节点用于控制border_radius界面的显示与隐藏
    var text_radius = document.getElementById("text_radius");//获取text_radius节点用于控制text_radius界面的显示与隐藏
    var css_gradient = document.getElementById("css_gradient");//获取css_gradient节点用于控制css_gradient界面的显示与隐藏
    var rangeGshposition = document.getElementById("range_gshposition");//获取gradient中的shposition
    var rangeGsvposition = document.getElementById("range_gsvposition");//获取gradient中的svposition
    var rangeGevposition = document.getElementById("range_gevposition");//获取gradient中的evposition
    var rangeGehposition = document.getElementById("range_gehposition");//获取gradient中的ehposition
    var insertRadialStart = document.getElementById("insertRadialStart");//获取要插入start radial的前一个兄弟节点
    var insertRadialEnd = document.getElementById("insertRadialEnd");//获取要插入end radial的前一个兄弟节点
    var animationTim = document.getElementById("animationTim");//设置动画播放方式的节点
    var btnAnimate = document.getElementById("btnAnimate");//获取btnAnimate按钮
    var inText = document.getElementById("inText");//获取右侧图形中的text文本
    var shape = document.getElementById("shape");//获取右侧图形-shape的节点
    var rgb_a = document.getElementById("rgb_a");//获取rgba界面用于显示与隐藏
    var keySta = document.getElementById("keySta");//获取动画的radiobutton--Start
    var keyEnd = document.getElementById("keyEnd");//获取动画的radiobutton--End
    var codeDurat = document.getElementsByClassName("durate");//获取Code.className中的durate
    var codeItera = document.getElementsByClassName("itera");//获取Code.className中的itera
    var codeTim = document.getElementsByClassName("timing");//获取Code.className中的timing
    var codeTransSta = document.getElementsByClassName("codeTransSta");//获取实时改变动画代码的地点
    var codeTransEnd = document.getElementsByClassName("codeTransEnd");//获取实时改变动画代码的地点
    var exportBtn = document.getElementById("exportBtn");//获取导出按钮
    //设置标志用于判断选择了哪个属性默认为translate
    var flag = "translate";
    //定义变量用于操作
    var tran = 1,/*用于保存translate的值*/
        rot = 1,/*用于保存rotation的值*/
        scal = 1,/*用于保存scale值*/
        ske = 1,/*用于保存skew值*/
        horizontal= 10,/*用于保存阴影的水平方向的值*/
        vertical = 10,/*用于保存阴影的垂直方向的值*/
        blurradius = 5,/*用于保存阴影的模糊程度*/
        shadowcolor = 0,/*用于保存阴影的颜色*/
        ins = "",/*用于保存内阴影还是外阴影*/
        thorizontal= 10,/*用于保存text的水平方向的值*/
        tvertical = 10,/*用于保存text的垂直方向的值*/
        tblurradius = 5,/*用于保存text的阴影模糊程度*/
        tshadowcolor = "#000",/*用于保存text的阴影颜色*/
        borderW = 0,/*用于保存border的宽度*/
        borderR = 15,/*用于保存border的radius值*/
        borderC = "#000",/*用于保存border的颜色*/
        borderS = "",/*用于保存border的样式border-style*/
        trotate = 0,/*用于保存文字的旋转度数*/
        r = 255,
        g = 0,
        b = 0,
        r_opa = 1,/*用于保存透明度*/
        gradientType="linear",/*用于保存渐变方式*/
        startr = 255,/*用于保存渐变的起始颜色*/
        startg = 0,/*用于保存渐变的起始颜色*/
        startb = 0,/*用于保存渐变的起始颜色*/
        gshposition = 0,/*用于保存渐变的起始位置的水平方向的位置*/
        gsvposition = 0,/*用于保存渐变的起始位置的垂直方向的位置*/
        endr = 0,/*用于保存渐变结束的颜色*/
        endg = 0,/*用于保存渐变结束的颜色*/
        endb = 0,/*用于保存渐变结束的颜色*/
        gehposition = 0,/*用于保存渐变的结束位置水平方向的位置*/
        gevposition = 0,/*用于保存渐变的结束位置垂直方向的位置*/
        graradsta = 0,/*用于保存渐变开始的位置*/
        graradend = 0,/*用于保存渐变结束的位置*/
        durat = 1000,/*用于保存动画播放的时间*/
        iteracount= 3,/*用于保存动画播放的次数*/
        anitim = "ease",/*用于保存动画默认的播放方式*/
        keyStaText = "",/*用于保存开始的动画*/
        keyEndText = "";/*用于保存结束的动画*/


    //初始化
    upDateCodeClassName();

    var cssStyle = document.getElementById("cssStyle");

    /*------调用相关的函数-------*/
    cssStyle.onchange = cssFun;

    //弹出框操作
    exportBtn.onclick = exportCode;
    //select操作
    var box_select = document.getElementById("box_select");
    box_select.onchange = boxShadowFun;
    var inputs = document.getElementsByTagName("input");
    var select_gradient = document.getElementById("select_gradient");

    var border_select = document.getElementById("border_select");




    //调用cssThree改变样式
    for(var i=0;i<inputs.length;i++){
        inputs[i].oninput = cssThree;
    }
    border_select.onchange = borderStyle;
    select_gradient.onchange = selectGradient;
    animationTim.onchange = selectAniTim;

    //动画操作
    btnAnimate.onclick = Animate;

   /*-------------------------------------函数部分，具体方法-------------------------------------*/


    //css3Style选择函数判断界面的显示与隐藏
    function cssFun(){
        switch(this.selectedIndex){
            case 0:
                translates.style.display="block";
                box_shadow.style.display="none";
                text_shadow.style.display="none";
                border_radius.style.display="none";
                text_radius.style.display = "none";
                rgb_a.style.display = "none";
                css_gradient.style.display="none";
                shape.style.cssText = "";
                inText.style.cssText = "";
                flag = "translate";
                cssThree();
                break;
            case 1:
                translates.style.display="none";
                box_shadow.style.display="block";
                text_shadow.style.display="none";
                border_radius.style.display="none";
                text_radius.style.display = "none";
                rgb_a.style.display = "none";
                css_gradient.style.display="none";
                shape.style.cssText = "";
                inText.style.cssText = "";
                flag = "boxShadow";
                cssThree();
                break;
            case 2:
                translates.style.display="none";
                box_shadow.style.display="none";
                text_shadow.style.display="block";
                border_radius.style.display="none";
                text_radius.style.display = "none";
                rgb_a.style.display = "none";
                css_gradient.style.display="none";
                shape.style.cssText = "";
                inText.style.cssText = "";
                flag = "textShadow";
                cssThree();
                break;
            case 3:
                translates.style.display="none";
                box_shadow.style.display="none";
                text_shadow.style.display="none";
                border_radius.style.display="block";
                text_radius.style.display = "none";
                rgb_a.style.display = "none";
                css_gradient.style.display="none";
                shape.style.cssText = "";
                inText.style.cssText = "";
                flag = "borderRadius";
                cssThree();
                break;
            case 4:
                translates.style.display="none";
                box_shadow.style.display="none";
                text_shadow.style.display="none";
                border_radius.style.display="none";
                text_radius.style.display="block";
                rgb_a.style.display = "none";
                css_gradient.style.display="none";
                shape.style.cssText = "";
                inText.style.cssText = "";
                flag = "textRotation";
                cssThree();
                break;
            case 5:
                translates.style.display="none";
                box_shadow.style.display="none";
                text_shadow.style.display="none";
                border_radius.style.display="none";
                text_radius.style.display="none";
                rgb_a.style.display = "block";
                css_gradient.style.display="none";
                inText.style.cssText = "";
                shape.style.cssText = "";
                flag = "rgbOpacity";
                cssThree();
                break;
            case 6:
                translates.style.display="none";
                box_shadow.style.display="none";
                text_shadow.style.display="none";
                border_radius.style.display="none";
                text_radius.style.display="none";
                rgb_a.style.display = "none";
                css_gradient.style.display="block";
                inText.style.cssText = "";
                shape.style.cssText = "";
                flag = "cssGradient";
                cssThree();
                break;

        }
    }


    //selectAnimate操作判断选择哪种运动方式
    function selectAniTim(){
        var t = this;
        switch(t.selectedIndex){
            case 0 : anitim = "ease";break;
            case 1 : anitim = "linear";break;
            case 2 : anitim = "ease-in";break;
            case 3 : anitim = "ease-out";break;
            case 4 : anitim = "ease-in-out";break;
        }
        cssThree();
    }

    //操作boxShadow的select事件判断选择是内阴影还是外阴影
    function boxShadowFun(){
        if(this.selectedIndex==0){
            ins = "inset";
            cssThree();
        }else{
            ins = "";
            cssThree();
        }
    }


    //selectGradient判断选择的是哪个渐变方式，根据选择的渐变方式来创建删除节点
    function selectGradient(){
        if(this.selectedIndex==0){
            gradientType = "linear";
            rangeGshposition.setAttribute("max",100);
            rangeGshposition.setAttribute("min",0);
            rangeGsvposition.setAttribute("max",100);
            rangeGsvposition.setAttribute("min",0);
            rangeGehposition.setAttribute("max",100);
            rangeGehposition.setAttribute("min",0);
            rangeGevposition.setAttribute("max",100);
            rangeGevposition.setAttribute("min",0);
            //判断是否该节点存在，存在的话则移除
            if(document.getElementById("InsertStaRad")?true:false){
                var insStaRad = document.getElementById("InsertStaRad");
                insStaRad.parentNode.removeChild(insStaRad);
            }
            if(document.getElementById("InsertEndRad")?true:false){
                var insEndRad = document.getElementById("InsertEndRad");
                insEndRad.parentNode.removeChild(insEndRad);
            }
            for(var i=0;i<inputs.length;i++){//更新节点
                inputs[i].oninput = cssThree;
            }
        }else{
            gradientType = "radial";
            //设置上相应的range范围
            rangeGshposition.setAttribute("max",1000);
            rangeGshposition.setAttribute("min",-1000);
            rangeGsvposition.setAttribute("max",1000);
            rangeGsvposition.setAttribute("min",-1000);
            rangeGehposition.setAttribute("max",1000);
            rangeGehposition.setAttribute("min",-1000);
            rangeGevposition.setAttribute("max",1000);
            rangeGevposition.setAttribute("min",-1000);
            var textStart = document.createTextNode("Start radial");
            var textEnd = document.createTextNode("End radial");
            var spanStart = document.createElement("span");
            var spanEnd = document.createElement("span");
            var divStart = document.createElement("div");
            var divEnd = document.createElement("div");
            var inputStart = document.createElement("input");
            var inputEnd = document.createElement("input");
            divStart.setAttribute("class","changeItem");
            divStart.setAttribute("id","InsertStaRad");
            inputStart.setAttribute("id","graRadSta");
            inputStart.setAttribute("type","range");
            inputStart.setAttribute("max",1000);
            inputStart.setAttribute("min",-1000);
            inputStart.setAttribute("value",0);
            inputStart.setAttribute("step","1");
            spanStart.appendChild(textStart);
            divStart.appendChild(spanStart);
            divStart.appendChild(inputStart);
            css_gradient.insertBefore(divStart,insertRadialStart);
            /*第一个radial节点插入完毕*/

            divEnd.setAttribute("class","changeItem");
            divEnd.setAttribute("id","InsertEndRad");
            inputEnd.setAttribute("id","graRadEnd");
            inputEnd.setAttribute("type","range");
            inputEnd.setAttribute("max",1000);
            inputEnd.setAttribute("min",-1000);
            inputEnd.setAttribute("value",500);
            inputEnd.setAttribute("step","1");
            spanEnd.appendChild(textEnd);
            divEnd.appendChild(spanEnd);
            divEnd.appendChild(inputEnd);
            css_gradient.appendChild(divEnd);
            /*第二个节点插入完毕*/

            for(var i=0;i<inputs.length;i++){//插入完毕后跟新一下inputs，使其能获取到新创建的节点
                inputs[i].oninput = cssThree;
            }
        }
    }


    //判断选择的是哪种border-style样式
    function borderStyle(){

        //console.log(this.firstChild);
        switch(this.selectedIndex){
            case 0:borderS = "none";cssThree();break;
            case 1:borderS = "solid";cssThree();break;
            case 2:borderS = "dashed";cssThree();break;
            case 3:borderS = "dotted";cssThree();break;
            case 4:borderS = "double";cssThree();break;
            case 5:borderS = "groove";cssThree();break;
            case 6:borderS = "hidden";cssThree();break;
            case 7:borderS = "inset";cssThree();break;
            case 8:borderS = "outset";cssThree();break;
            case 9:borderS = "ridge";cssThree();break;
            case 10:borderS = "inherit";cssThree();break;
        }

    }

    //判断选择了哪个样式
    function flagType(){
        if(flag == "translate"){
            setTranslate(shape,tran,rot,scal,ske,durat,iteracount,anitim);
        }
        if(flag=="boxShadow"){
            setBoxShadow(shape,horizontal,vertical,blurradius,shadowcolor,ins);
        }
        if(flag=="textShadow"){
            setTextShadow(shape,thorizontal,tvertical,tblurradius,tshadowcolor);
        }
        if(flag=="borderRadius"){
            setBorderRadius(shape,borderS,borderW,borderR,borderC);
        }
        if(flag=="textRotation"){
            setTextRotation(inText,trotate);
        }
        if(flag == "rgbOpacity"){
            setRgba(shape,r,g,b,r_opa);
        }
        if(flag =="cssGradient"){
            setGradient(shape,gradientType,startr,startg,startb,gshposition,gsvposition,endr,endg,endb,gehposition,gevposition,graradsta,graradend);
        }
    }

    //获取range的数值并将其赋值给相应的变量
    function cssThree(){
        //获取场景中矩形元素
        var shape = document.getElementById("shape");
        var t = this;
        switch(t.id){
            case "range_translate": tran = t.value;break;
            case "range_rotate": rot =t.value; break;
            case "range_scale" : scal = t.value;break;
            case "range_skew" : ske = t.value;break;
            case "range_horizontal": horizontal = t.value;break;
            case "range_vertical" : vertical = t.value;break;
            case "range_blurradius": blurradius = t.value;break;
            case "range_shadowcolor": shadowcolor = t.value;break;
            case "range_thorizontal": thorizontal = t.value;break;
            case "range_tvertical" : tvertical = t.value;break;
            case "range_tblurradius" : tblurradius = t.value;break;
            case "range_tshadowcolor": tshadowcolor = t.value;break;
            case "range_borderwidth": borderW = t.value;break;
            case "range_borderradius": borderR = t.value;break;
            case "range_bordercolor" : borderC = t.value;break;
            case "range_trotate" : trotate = t.value;break;
            case "range_r":r = t.value;break;
            case "range_g":g = t.value;break;
            case "range_b":b = t.value;break;
            case "range_opacity":r_opa = t.value;break;
            case "range_startr" : startr = t.value;break;
            case "range_startg" : startg = t.value;break;
            case "range_startb" : startb = t.value;break;
            case "range_gshposition": gshposition = t.value;break;
            case "range_gsvposition" : gsvposition = t.value;break;
            case "range_endr" : endr = t.value;break;
            case "range_endg" : endg = t.value;break;
            case "range_endb" : endb = t.value;break;
            case "range_gehposition" : gehposition = t.value;break;
            case "range_gevposition" : gevposition = t.value;break;
            case "graRadSta" : graradsta = t.value;break;
            case "graRadEnd" : graradend = t.value;break;
            case "range_duration" : durat = t.value;break;
            case "range_iteration" : iteracount = t.value;break;
        }

        //通过标识符判断选择了哪个css属性
        flagType();
    }


    //更新CodeClassName中的值
    function upDateCodeClassName(){
        //给每个相同的class其中的内容设置上相同的数值
        for(var i=0;i<codeDurat.length;i++){
            codeDurat[i].innerHTML = durat/1000+"s";
        }
        for(var i=0;i<codeItera.length;i++){
            codeItera[i].innerHTML = iteracount;
        }
        for(var i=0;i<codeItera.length;i++){
            codeTim[i].innerHTML = anitim+";";
        }
    }


    var keyFrame = "";//用于保存动画的值
    var radiobutton = translates.querySelectorAll("input[type=radio]");//获取radiobutton
    //设置translate中transform属性
    function setTranslate(ele,tran,rot,scal,ske){
        ele.style.cssText = "transform:translate("+tran+"px) rotate("+ rot +"deg) scale("+scal+") skew("+ske+"deg)";
        //console.log(duration+" "+iteracount+" "+anitim);

        keyFrame = 'translate('+tran+'px) rotate('+rot+'deg) scale('+scal+') skew('+ske+'deg)';
        updateAnimate(); //每次改变调用该函数实现实时的面板显示
        upDateCodeClassName();


    }
    //动画操作


    //动画数值更新函数，用于在面板上实时显示动画的数值变化
    function updateAnimate(){
        for(var i=0;i<radiobutton.length;i++) {
            if (radiobutton[i].checked) {//如果被选中则进入
                //console.log(radiobutton[i].id)
                if(radiobutton[i].id=="keySta"){//被选中而且id还为keySta，那么将动画的值保存在起始动画上
                    for(var i=0;i<codeTransSta.length;i++){//将动画的值实时的设置到面板上
                        codeTransSta[i].innerHTML = keyFrame;
                        keyStaText = keyFrame;
                    }
                }else{
                    for(var i=0;i<codeTransEnd.length;i++){
                        codeTransEnd[i].innerHTML = keyFrame;
                        keyEndText = keyFrame;
                    }
                }
            }
        }
    }

    //弹出框
    function exportCode(){
        //判断是否设置了起始动画
        if(keyStaText==""){
            alert("请设置Start的值");
        return;
        }
        if(keyStaText!=""&&keyEndText==""){
            alert("请设置End的值");
        return;
        }
        //动态创建节点显示弹出框
        var exportDiv = document.createElement("div");
        exportDiv.id="exptext";
        exportDiv.innerHTML = "<div class='export'><h2>导出动画代码</h2><hr><br><span class='close_img'></span></div>"+
            "<div><textarea name='code' id='exportAnimateCode' cols='30' rows='10'></textarea></div>";
        document.body.appendChild(exportDiv);
        //将代码设置到导出的textArea中
        document.getElementById("exportAnimateCode").value = ".className{"+"\n"+"-webkit-animation: cssAnimation "+durat/1000+"s "+iteracount+" "+anitim+";"
            +"\n"+"-moz-animation: cssAnimation "+durat/1000+"s "+iteracount+" "+anitim+";"+"\n"
            +"-o-animation: cssAnimation "+durat/1000+"s "+iteracount+" "+anitim+";"+"\n}\n"
            +"@-webkit-keyframes cssAnimation {\n"+
        "from { -webkit-transform:\n"+keyStaText+"}\n"+"to { -webkit-transform:\n"+keyEndText+"}\n}"
            +"\n@-moz-keyframes cssAnimation {\n"+
            "from { -moz-transform:\n"+keyStaText+"}\n"+"to { -moz-transform:\n"+keyEndText+"}\n}"
            +"\n@-o-keyframes cssAnimation {\n"+
            "from { -o-transform:\n"+keyStaText+"}\n"+"to { -o-transform:\n"+keyEndText+"}\n}";
        //元素的高度宽度
        var eHeight = exportDiv.offsetHeight;
        var eWidth = exportDiv.offsetWidth;
        //页面高度,宽度
        var wHeight = document.documentElement.scrollHeight;
        var wWidth = document.documentElement.scrollWidth;
        exportDiv.style.left = (wWidth-eWidth)/2 + "px";//将弹出框居中显示
        exportDiv.style.top = (wHeight-eHeight)/2 + "px";//将弹出框居中显示
        //遮罩层
        var marks = document.createElement("div");
        marks.id = "mark";

        document.body.appendChild(marks);//将遮罩层添加到body中

        marks.style.width = wWidth + "px";//设置遮罩层的宽度
        marks.style.height = wHeight +83+ "px";//设置遮罩层的高度
        document.getElementById("mark").onclick = function(){//当点击遮罩层时关闭遮罩层和弹出框
            document.body.removeChild(mark);
            document.body.removeChild(exportDiv);
        }
        document.getElementsByClassName("close_img")[0].onclick = function(){//点击关闭按钮时关闭遮罩层和弹出框
            document.body.removeChild(mark);
            document.body.removeChild(exportDiv);
        }

    }


    //动画函数
    function Animate(){
        if(keyStaText==""){
            alert("请设置Start的值");//如果没有设置动画结束的状态提示
            return;
        }
        if(keyEndText==""){
            alert("请设置End的值");//如果没有设置动画结束的状态提示
            return;
        }
        var frames = [{transform:keyStaText},{transform:keyEndText}];
        var duraInt = parseInt(durat);
        var iteracInt = parseInt(iteracount);
        var timing = {
            duration: duraInt,         //ms
            delay: 0,               //ms
            iterations: iteracInt,   //1, 2, 3 ... Infinity
            //direction: 'alternate', //'normal', 'reverse'等
            easing: anitim,  //'linear', 'ease-in'等
        };
        shape.animate(frames,timing);
    }
    //设置boxShadow属性
    function setBoxShadow(ele,horizontal,vertical,blurradius,shadowcolor,ins){
        ele.style.cssText = "box-shadow:"+ins+" "+horizontal+"px "+vertical+"px "+blurradius+"px "+shadowcolor+";"+
            "-webkit-box-shadow:"+ins+" "+horizontal+"px "+vertical+"px "+blurradius+"px "+shadowcolor+";"+
            "-moz-box-shadow:"+ins+" "+horizontal+"px "+vertical+"px "+blurradius+"px "+shadowcolor+";"+
            "-o-box-shadow:"+ins+" "+horizontal+"px "+vertical+"px "+blurradius+"px "+shadowcolor+";";
    }

    //设置textShadow属性
    function setTextShadow(ele,thorizontal,tvertical,tblurradius,tshadowcolor){
        ele.style.cssText = "text-shadow:"+thorizontal+"px "+tvertical+"px "+tblurradius+"px "+tshadowcolor;
    }

    //设置borderRadius属性
    function setBorderRadius(ele,borderS,borderW,borderR,borderC){
        ele.style.cssText= "border:"+borderS+" "+borderW+"px "+borderC+
            ";-webkit-border-radius: "+borderR+"px;"+
        "-moz-border-radius: "+borderR+"px;"+
            "-o-border-radius: "+borderR+"px;"+
            "border-radius: "+borderR+"px;";
    }

    //设置textRotation属性
    function setTextRotation(ele_t,trotate){

        ele_t.style.cssText = "transform:rotate("+trotate+"deg);"+
            "-webkit-transform:rotate("+trotate+"deg);"+
            "-moz-transform:rotate("+trotate+"deg);"+
            "-o-transform:rotate("+trotate+"deg);";
    }

    //设置rgba属性
    function setRgba(ele,r,g,b,r_opa){
        ele.style.cssText = "background:rgba("+r+","+g+","+b+","+r_opa+");"
    }

    //设置cssGradient属性
    function setGradient(ele,gradientType,startr,startg,startb,gshposition,gsvposition,endr,endg,endb,gehposition,gevposition,graradsta,graradend){
        if(gradientType=="linear"){
            ele.style.cssText = "background:-webkit-gradient("+gradientType+","+gshposition+"% "+gsvposition+"%,"+gehposition+"% "+gevposition+"%,"+"from(rgb("+startr+","+startg+","+startb+")),"+"to(rgb("+endr+","+endg+","+endb+")));"+
                "background:-moz-"+gradientType+"-gradient("+gshposition+"% "+gsvposition+"%,"+gehposition+"% "+gevposition+"%,"+"rgb("+startr+","+startg+","+startb+"),"+"rgb("+endr+","+endg+","+endb+"));"+
                "background:-o-gradient("+gradientType+","+gshposition+"% "+gsvposition+"%,"+gehposition+"% "+gevposition+"%,"+"from(rgb("+startr+","+startg+","+startb+")),"+"to(rgb("+endr+","+endg+","+endb+")));"+
                "background:gradient("+gradientType+","+gshposition+"% "+gsvposition+"%,"+gehposition+"% "+gevposition+"%,"+"from(rgb("+startr+","+startg+","+startb+")),"+"to(rgb("+endr+","+endg+","+endb+")));"
        }else{
            ele.style.cssText = "background:-webkit-gradient("+gradientType+","+gshposition+" "+gsvposition+","+graradsta+","+gehposition+" "+gevposition+","+graradend+","+"from(rgb("+startr+","+startg+","+startb+")),"+"to(rgb("+endr+","+endg+","+endb+")));"
        }
    }




}