(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,n){"use strict";n.r(t);var i={i18n:{"zh-CN":{errorInfo:"错误提示",finishedText:"没有更多了",errorText:"请求失败，点击重新加载"},"en-US":{errorInfo:"Error Info",finishedText:"Finished",errorText:"Request failed. Click to reload"}},data:function(){return{list:[{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]}},methods:{onLoad:function(e,t){var n=this.list[e];n.loading=!0,setTimeout((function(){t&&(n.items=[]);for(var i=0;i<10;i++){var r=n.items.length+1;n.items.push(r<10?"0"+r:r)}n.loading=!1,1!==e||10!==n.items.length||n.error?n.error=!1:n.error=!0,n.items.length>=40&&(n.finished=!0)}),500)},onRefresh:function(e){var t=this,n=this.list[e];setTimeout((function(){n.error=!1,n.finished=!1,n.refreshing=!1,t.onLoad(e,!0)}),1e3)}}},r=(n(80),n(0)),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-section",[n("h-tabs",[n("h-tab",{attrs:{title:e.$t("basicUsage")}},[n("h-pull-refresh",{on:{refresh:function(t){return e.onRefresh(0)}},model:{value:e.list[0].refreshing,callback:function(t){e.$set(e.list[0],"refreshing",t)},expression:"list[0].refreshing"}},[n("h-list",{attrs:{finished:e.list[0].finished,"finished-text":e.$t("finishedText")},on:{load:function(t){return e.onLoad(0)}},model:{value:e.list[0].loading,callback:function(t){e.$set(e.list[0],"loading",t)},expression:"list[0].loading"}},e._l(e.list[0].items,(function(e){return n("h-cell",{key:e,attrs:{title:e}})})),1)],1)],1),n("h-tab",{attrs:{title:e.$t("errorInfo")}},[n("h-pull-refresh",{on:{refresh:function(t){return e.onRefresh(1)}},model:{value:e.list[1].refreshing,callback:function(t){e.$set(e.list[1],"refreshing",t)},expression:"list[1].refreshing"}},[n("h-list",{attrs:{finished:e.list[1].finished,error:e.list[1].error,"error-text":e.$t("errorText")},on:{"update:error":function(t){return e.$set(e.list[1],"error",t)},load:function(t){return e.onLoad(1)}},model:{value:e.list[1].loading,callback:function(t){e.$set(e.list[1],"loading",t)},expression:"list[1].loading"}},e._l(e.list[1].items,(function(e){return n("h-cell",{key:e,attrs:{title:e}})})),1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports},52:function(e,t,n){var i=n(9),r=n(81);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1},o=(i(e.i,r,s),r.locals?r.locals:{});e.exports=o},80:function(e,t,n){"use strict";var i=n(52);n.n(i).a},81:function(e,t,n){(t=n(10)(!1)).push([e.i,".demo-list .h-cell {\n  text-align: center;\n}\n.demo-list .page-desc {\n  margin: 0;\n  padding: 5px 0;\n  color: #c8c9cc;\n  font-size: 14px;\n  text-align: center;\n}\n.demo-list .page-desc--text {\n  margin: 0;\n}\n.demo-list .page-desc--option {\n  margin: 12px;\n}\n.demo-list .h-checkbox__label {\n  color: #c8c9cc;\n}\n",""]),e.exports=t}}]);