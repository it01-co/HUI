(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(e,s,n){"use strict";n.r(s);var t={i18n:{"zh-CN":{text:"刷新次数",success:"刷新成功"},"en-US":{text:"Refresh Count",success:"Refresh success"}},data:function(){return{count:0,isLoading:!1}},methods:{onRefresh:function(){var e=this;setTimeout((function(){e.$toast(e.$t("success")),e.isLoading=!1,e.count++}),500)}}},o=(n(88),n(0)),r=Object(o.a)(t,(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("demo-section",{attrs:{name:"pull-refresh"}},[n("h-pull-refresh",{attrs:{"success-text":"加载成功"},on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(s){e.isLoading=s},expression:"isLoading"}},[n("demo-block",{attrs:{title:e.$t("basicUsage")}},[n("p",[e._v(e._s(e.$t("text"))+": "+e._s(e.count))])])],1)],1)}),[],!1,null,null,null);s.default=r.exports},56:function(e,s,n){var t=n(9),o=n(89);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},c=(t(e.i,o,r),o.locals?o.locals:{});e.exports=c},88:function(e,s,n){"use strict";var t=n(56);n.n(t).a},89:function(e,s,n){(s=n(10)(!1)).push([e.i,".demo-pull-refresh {\n  background-color: #fff;\n}\n.demo-pull-refresh .h-pull-refresh,\n.demo-pull-refresh .h-pull-refresh__track {\n  height: calc(100vh - 50px);\n}\n.demo-pull-refresh p {\n  margin: 10px 0 0 15px;\n}\n",""]),e.exports=s}}]);