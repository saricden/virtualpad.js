!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(function(){return(()=>{"use strict";var t={851:(t,e,n)=>{function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e),n.d(e,{default:()=>i});const i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.testStr="hello from lib",this.thumbstickDown=!1}var e,n;return e=t,(n=[{key:"log",value:function(){console.log(this.testStr)}},{key:"createJoystick",value:function(){var t=document.createElement("div");t.setAttribute("data-vbjoystick",!0);var e=document.createElement("div");return e.setAttribute("data-vbthumbstick",!0),t.appendChild(e),t}},{key:"createButtonPad",value:function(){var t=document.createElement("div");t.setAttribute("data-vbbtnpad",!0);var e=document.createElement("div");e.setAttribute("data-vbabtn",!0),e.innerHTML="A";var n=document.createElement("div");return n.setAttribute("data-vbbbtn",!0),n.innerHTML="B",t.appendChild(e),t.appendChild(n),t}},{key:"bindUI",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(window.virtualboy={ui:{joystick:{isDown:!1,xAxis:0,yAxis:0},aBtn:{isDown:!1},bBtn:{isDown:!1}}},e&&document.body.appendChild(e),n&&document.body.appendChild(n),e){var o=e.querySelector("[data-vbthumbstick]");o.addEventListener("pointerdown",(function(e){window.virtualboy.ui.joystick.isDown=!0,t.thumbstickDown=!0,console.log("down")})),o.addEventListener("pointermove",(function(t){if(window.virtualboy.ui.joystick.isDown){var n=e.getBoundingClientRect(),i=n.x,r=n.y,a=n.width,u=n.height,l=t.clientX-i,d=t.clientY-r;window.virtualboy.ui.joystick.xAxis=Math.min(Math.max(l/a*2-1,-1),1),window.virtualboy.ui.joystick.yAxis=Math.min(Math.max(d/u*2-1,-1),1),l>0&&l<a&&(o.style.left="".concat(l,"px")),d>0&&d<u&&(o.style.top="".concat(d,"px")),console.log("move")}})),o.addEventListener("pointerup",(function(){window.virtualboy.ui.joystick.isDown=!1;var t=null,n=null;try{t=window.getComputedStyle(e,null).getPropertyValue("width"),n=window.getComputedStyle(e,null).getPropertyValue("height")}catch(o){t=e.currentStyle.width,n=e.currentStyle.height}var i=(t=parseInt(t.replace("px",""),10))/2,r=(n=parseInt(n.replace("px",""),10))/2;o.style.left="".concat(i,"px"),o.style.top="".concat(r,"px")})),o.addEventListener("pointercancel",(function(){window.virtualboy.ui.joystick.isDown=!1,console.log("cancel")}))}if(n){var i=n.querySelector("[data-vbabtn]"),r=n.querySelector("[data-vbbbtn]");i.addEventListener("pointerdown",(function(){window.virtualboy.ui.aBtn.isDown=!0,console.log("haza")})),i.addEventListener("pointerup",(function(){window.virtualboy.ui.aBtn.isDown=!1})),i.addEventListener("pointercancel",(function(){window.virtualboy.ui.aBtn.isDown=!1})),r.addEventListener("pointerdown",(function(){window.virtualboy.ui.bBtn.isDown=!0})),r.addEventListener("pointerup",(function(){window.virtualboy.ui.bBtn.isDown=!1})),r.addEventListener("pointercancel",(function(){window.virtualboy.ui.bBtn.isDown=!1}))}}}])&&o(e.prototype,n),t}()}},e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}return n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(851)})()}));