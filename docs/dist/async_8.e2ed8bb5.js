(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{117:function(t,e,l){"use strict";l.r(e);var i={i18n:{"zh-CN":{accordion:"手风琴",titleSlot:"自定义标题内容",title1:"health-ui-1",title2:"health-ui-2",title3:"health-ui-2",content:"自定义内容",content1:"Health - 丰富、多样的移动端 Vue 组件库",content2:"Health - 丰富、多样的移动端 Vue 组件库",content3:"Health - 丰富、多样的移动端 Vue 组件库"},"en-US":{}},data:function(){return{active1:[0],active2:0,active3:[]}}},n=(l(71),l(0)),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("demo-section",[l("demo-block",{attrs:{title:t.$t("basicUsage")}},[l("h-collapse",{model:{value:t.active1,callback:function(e){t.active1=e},expression:"active1"}},[l("h-collapse-item",{attrs:{title:t.$t("title1")}},[t._v(t._s(t.$t("content1")))]),l("h-collapse-item",{attrs:{title:t.$t("title2")}},[t._v(t._s(t.$t("content2")))]),l("h-collapse-item",{attrs:{title:t.$t("title3"),disabled:""}},[t._v("\n        "+t._s(t.$t("content3"))+"\n      ")])],1)],1),l("demo-block",{attrs:{title:t.$t("accordion")}},[l("h-collapse",{attrs:{accordion:""},model:{value:t.active2,callback:function(e){t.active2=e},expression:"active2"}},[l("h-collapse-item",{attrs:{title:t.$t("title1")}},[t._v(t._s(t.$t("content1")))]),l("h-collapse-item",{attrs:{title:t.$t("title2")}},[t._v(t._s(t.$t("content2")))]),l("h-collapse-item",{attrs:{title:t.$t("title3")}},[t._v(t._s(t.$t("content3")))])],1)],1),l("demo-block",{attrs:{title:t.$t("titleSlot")}},[l("h-collapse",{model:{value:t.active3,callback:function(e){t.active3=e},expression:"active3"}},[l("h-collapse-item",[l("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("title1"))),l("h-icon",{attrs:{name:"completed"}})],1),t._v("\n        "+t._s(t.$t("content1"))+"\n      ")]),l("h-collapse-item",{attrs:{title:t.$t("title2"),value:t.$t("content"),icon:"pen"}},[t._v("\n        "+t._s(t.$t("content2"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},48:function(t,e,l){var i=l(9),n=l(72);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var a={insert:"head",singleton:!1},c=(i(t.i,n,a),n.locals?n.locals:{});t.exports=c},71:function(t,e,l){"use strict";var i=l(48);l.n(i).a},72:function(t,e,l){(e=l(10)(!1)).push([t.i,".demo-collapse .completed {\n  vertical-align: middle;\n  margin-left: 5px;\n  font-size: 15px;\n}\n",""]),t.exports=e}}]);