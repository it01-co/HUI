(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{105:function(i,e,n){"use strict";n.r(e);var t={i18n:{"zh-CN":{radio:"单选框"},"en-US":{radio:"Radio"}},data:function(){return{show:!1,show1:!1,radio1Text:"请选择",radio1Text1:"请选择",radio1:null,radio2:"2",radio3:null,radio4:null,radio5:null,data1:[{id:1,text:"清淡"},{id:2,text:"甜"},{id:3,text:"辣"},{id:4,text:"咸"},{id:5,text:"不挑食都可以,不挑食都可以,不挑食都可以,不挑食都可以"}],data2:[{id:1,text:"男",img:"https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/boy.png",imgCheck:"https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/boy1.png"},{id:2,text:"女",img:"https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/girl.png",imgCheck:"https://jkyy-ai-ego.cs.jiankangyouyi.com/jkyy-evaluation-sy/1/girl1.png"}]}},methods:{radioClick:function(i){var e=this;i===this.radio1Text&&(this.show=!1),setTimeout((function(){e.show=!1,e.radio1Text=i}),400)},radioClick1:function(i){var e=this;i===this.radio1Text1&&(this.show1=!1),setTimeout((function(){e.show1=!1,e.radio1Text1=i}),200)}}},a=(n(90),n(0)),o=Object(a.a)(t,(function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:i.$t("basicUsage")+"：radio1值为"+i.radio1}},[n("h-radio-group",{staticClass:"demo-radio-group",model:{value:i.radio1,callback:function(e){i.radio1=e},expression:"radio1"}},i._l(i.data1,(function(e){return n("h-radio",{key:e.id,attrs:{name:e.id}},[i._v(i._s(e.text))])})),1)],1),n("demo-block",{attrs:{title:i.$t("disabled")}},[n("h-radio-group",{staticClass:"demo-radio-group",attrs:{size:"round"},model:{value:i.radio2,callback:function(e){i.radio2=e},expression:"radio2"}},[n("h-radio",{attrs:{disabled:"",name:"1"}},[i._v(i._s(i.$t("radio"))+" 1")]),n("h-radio",{attrs:{name:"2"}},[i._v(i._s(i.$t("radio"))+" 2")]),n("h-radio",{attrs:{name:"3"}},[i._v(i._s(i.$t("radio"))+" 2")])],1)],1),n("demo-block",{attrs:{title:"结合Laybg组件使用，h-radio-group设置replative"}},[n("h-radio-group",{staticClass:"demo-radio-group",model:{value:i.radio3,callback:function(e){i.radio3=e},expression:"radio3"}},[n("h-Laybg",{attrs:{size:"10px",crevice:"5px",fillet:"https://jkyy-ai-ego.cs.jiankangyouyi.com/evaluation-tcm/1/sy_bg_zuoshang.png"}}),n("h-radio",{attrs:{name:"1"}},[i._v(i._s(i.$t("radio"))+" 1")]),n("h-radio",{attrs:{name:"2"}},[i._v(i._s(i.$t("radio"))+" 2")])],1)],1),n("demo-block",{attrs:{title:"结合Popup组件 Cell组件使用"}},[n("h-cell",{attrs:{title:"请选择口味",name:"iconbth-tongyong-jiantou","is-link":"",value:i.radio1Text},on:{click:function(e){i.show=!0}}}),n("h-popup",{attrs:{round:"16px","get-container":"body"},model:{value:i.show,callback:function(e){i.show=e},expression:"show"}},[n("h-radio-group",{staticClass:"demo-radio-group",attrs:{size:"round"},model:{value:i.radio4,callback:function(e){i.radio4=e},expression:"radio4"}},i._l(i.data1,(function(e){return n("h-radio",{key:e.id,attrs:{name:e.id},on:{click:function(n){return i.radioClick(e.text)}}},[i._v(i._s(e.text))])})),1)],1)],1),n("demo-block",{attrs:{title:"自定义样式"}},[n("h-cell",{attrs:{title:"请选择性别",name:"iconbth-tongyong-jiantou","is-link":"",value:i.radio1Text1},on:{click:function(e){i.show1=!0}}}),n("h-popup",{attrs:{position:"top","get-container":"body"},model:{value:i.show1,callback:function(e){i.show1=e},expression:"show1"}},[n("h-radio-group",{staticClass:"demo-radio-group1",model:{value:i.radio5,callback:function(e){i.radio5=e},expression:"radio5"}},i._l(i.data2,(function(e){return n("h-radio",{key:e.id,attrs:{custom:"",name:e.id},on:{click:function(n){return i.radioClick1(e.text)}}},[n("img",{attrs:{src:i.radio5===e.id?e.imgCheck:e.img,alt:e.text}})])})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports},57:function(i,e,n){var t=n(9),a=n(91);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[i.i,a,""]]);var o={insert:"head",singleton:!1},r=(t(i.i,a,o),a.locals?a.locals:{});i.exports=r},90:function(i,e,n){"use strict";var t=n(57);n.n(t).a},91:function(i,e,n){(e=n(10)(!1)).push([i.i,".demo-radio-group {\n  position: relative;\n  margin: 0 auto;\n}\n.demo-radio-group1 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 35px 45px;\n  margin: 0 auto;\n}\n.demo-radio-group1 .h-radio__modetrue {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.demo-radio-group1 .h-radio__modetrue img {\n  width: 100%;\n  height: 100%;\n}\n@-webkit-keyframes genderCheck {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n}\n@keyframes genderCheck {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n}\n.demo-radio-group1 .h-radio__modetrue--checked {\n  -webkit-animation: genderCheck 0.2s ease;\n          animation: genderCheck 0.2s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.demo-radio-group1 .h-radio__modetrue--disabled {\n  opacity: 0.4;\n}\n",""]),i.exports=e}}]);