let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string = `/*你好,我是andy8421，一名前端新人。\n下面演示一下我的前端功底：
首先准备一个div*/
#div1{
    // border:1px solid red;
    width:400px;
    height:400px;
}
@media(max-width: 500px){
    #html{
        height: 50vh;
        /* 使代码保持在图形上侧，添加滚动条 */
        overflow: auto;
    }
    #div1{
        width:200px;
        height:200px;
        position:relative;
        right: 0px;
        top: 0px;
    }
}
/*
接下来我将把div变成一个八卦图：
首先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}

#div1{
    background: rgb(0,0,0);
    //background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(9,9,121,1) 50%, rgba(255,255,255,1) 50%);
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*
添加两个阴阳球
*/
#div1::before{
    position: absolute;
    width:50%;
    height:50%;
    // border: 1px solid red;
    left: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 17.5%, rgba(0,0,0,1) 18%);
}
#div1::after{
    position: absolute;
    width:50%;
    height:50%;
    // border: 1px solid red;
    left: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 18%, rgba(255,255,255,1) 17.5%, rgba(255,255,255,1) 100%);
}
/*
添加旋转动画
*/
#div1{
    animation:s 10s infinite linear;
}
/* PC端动画 */
@media(min-width: 500px){
    @keyframes s{
        from{
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
        }
        to{
            transform: translateX(-50%) translateY(-50%) rotate(360deg);
        }
    }
}
/* 移动端动画 */
@media(max-width: 500px){
    @keyframes s{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
}
`;
// string = string.replace(/\n/g,'<br>');
let string2 = '';

let n = 0;

//html.innerHTML = string.substring(0,n+1);
//String.prototype.substring()提取从 indexStart 到 indexEnd（不包括）之间的字符，即，左闭右开。

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += '<br>';
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        // string2 += string[n] === "\n" ? '<br>' : string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n+1);
        //窗口自动滚动到底端（PC端）
        window.scroll(0,9999);
        //html自动滚动到页面底端(移动端)
        html.scroll(0,9999);
        n++;
        if (n < string.length) {
            step();
        }
    }, 0);
};

step();