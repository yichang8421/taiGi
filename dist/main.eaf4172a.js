parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),t="/*你好,我是andy8421，一名前端新人。\n下面演示一下我的前端功底：\n首先准备一个div*/\n#div1{\n    // border:1px solid red;\n    width:400px;\n    height:400px;\n}\n@media(max-width: 500px){\n    #html{\n        height: 50vh;\n        /* 使代码保持在图形上侧，添加滚动条 */\n        overflow: auto;\n    }\n    #div1{\n        width:200px;\n        height:200px;\n        position:relative;\n        right: 0px;\n        top: 0px;\n    }\n}\n/*\n接下来我将把div变成一个八卦图：\n首先把div变成一个圆\n*/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n\n#div1{\n    background: rgb(0,0,0);\n    //background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(9,9,121,1) 50%, rgba(255,255,255,1) 50%);\n    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/*\n添加两个阴阳球\n*/\n#div1::before{\n    position: absolute;\n    width:50%;\n    height:50%;\n    // border: 1px solid red;\n    left: 0;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: black;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 17.5%, rgba(0,0,0,1) 18%);\n}\n#div1::after{\n    position: absolute;\n    width:50%;\n    height:50%;\n    // border: 1px solid red;\n    left: 0;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: white;\n    border-radius: 50%;\n    background: rgb(0,0,0);\n    background: radial-gradient(circle, rgba(0,0,0,1) 18%, rgba(255,255,255,1) 17.5%, rgba(255,255,255,1) 100%);\n}\n/*\n添加旋转动画\n*/\n#div1{\n    animation:s 10s infinite linear;\n}\n/* PC端动画 */\n@media(min-width: 500px){\n    @keyframes s{\n        from{\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n        to{\n            transform: translateX(-50%) translateY(-50%) rotate(360deg);\n        }\n    }\n}\n/* 移动端动画 */\n@media(max-width: 500px){\n    @keyframes s{\n        from{\n            transform: rotate(0deg);\n        }\n        to{\n            transform: rotate(360deg);\n        }\n    }\n}\n",e="",a=0,i=function i(){setTimeout(function(){"\n"===t[a]?e+="<br>":" "===t[a]?e+="&nbsp;":e+=t[a],n.innerHTML=e,r.innerHTML=t.substring(0,a+1),window.scroll(0,9999),n.scroll(0,9999),++a<t.length&&i()},0)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.eaf4172a.js.map