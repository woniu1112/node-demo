webpackJsonp([7],{"+NXc":function(e,t){},"+hAf":function(e,t){},0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"67t3":function(e,t){},A66B:function(e,t,n){e.exports=function(e){return function(){return n("Opzk")("./"+e+".vue")}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={name:"App",components:{mainHeader:function(e){return n.e(5).then(function(){var t=[n("JCuE")];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("mainHeader"),this._v(" "),t("div",{staticClass:"main_content"},[t("router-view")],1)],1)},staticRenderFns:[]};var r=n("VU/8")(i,o,!1,function(e){n("+NXc")},"data-v-245b2bea",null).exports,s=n("zL8q"),u=n.n(s),c=n("/ocq"),d=n("A66B"),f=[{path:"/",redirect:"/average"},{path:"/login",component:d("login/index"),name:"login",meta:{title:"登录"}},{path:"/average",component:d("average/index"),name:"average",meta:{title:"打分"}}];a.default.use(c.a);var v=new c.a({mode:"hash",fallback:!0,routes:f,scrollBehavior:function(e,t,n){if(e.hash)return{selector:e.hash}}});v.beforeEach(function(e,t,n){var a=(e.meta.title?e.meta.title+"-":"")+"工具";document.title=a||"",n()}),v.afterEach(function(e,t){});var p=v,m=n("d2gY");n("uMhA"),n("+hAf"),n("67t3");a.default.config.productionTip=!1,a.default.use(u.a),m.a.init(),new a.default({el:"#app",router:p,components:{App:r},template:"<App/>"})},Opzk:function(e,t,n){var a={"./average/components/collect.vue":["/NoS",0,2],"./average/components/vote.vue":["jX9T",0,1],"./average/index.vue":["yr4E",4],"./login/index.vue":["T+/8",0,3]};function i(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}i.keys=function(){return Object.keys(a)},i.id="Opzk",e.exports=i},d2gY:function(e,t,n){"use strict";var a={mockEnv:"test",version:"1.0",unifiedLogin:"",host:"http://192.168.98.70:9000/",domain:"",myStar:"ik_saas%&(+||",youStar:"iksaas#$%^&*(",isIE:navigator.userAgent.indexOf("compatible")>-1&&navigator.userAgent.indexOf("MSIE")>-1,isIE11:navigator.userAgent.indexOf("Trident")>-1&&navigator.userAgent.indexOf("rv:11.0")>-1,isIE9:-1!==navigator.userAgent.indexOf("MSIE 9.0"),hostServe:{test:"http://192.168.98.70:9000/",uat:"//uat.saas.ik.com/api/",pre:"//saas.ik.com/api/",prod:"//saas.ik.com/api/"},domainServe:{test:".ik.com",uat:".ik.com",pre:".ik.com",prod:".ik.com"},cookieProp:{path:"/"},Reg:{verifyPass:/\w{6,20}/,verifyAddUserPass:/^[a-zA-Z0-9]{6,20}$/,verifyLoginName:/\w{4,20}/,verifyMSM:/^\d{6}$/,verifyNOChinese:/[^\u4e00-\u9fa5]+/,verifyMobile:/^(13[0-9]|14[579]|15[0-3,5-9]|16[67]|17[0135678]|18[0-9]|19[189])\d{8}$/,verifyPhone:/(^(\d{3}-)?\d{8})$|(1[0-9]{10})/,verifyIdCard:/^(\d{18,18}|\d{15,15}|\d{17,17}[x,X])$/,verifyRoom:/^[0-9a-zA-Z]$/,verifyByName:/[a-zA-Z\d\u4e00-\u9fa5]/},init:function(){var e=window.location.hostname,t=e.indexOf("."),n=e.substring(0,t);if(e.indexOf("192.168.98.190")>-1)a.host="http://192.168.98.190:8885/",a.domain="";else if("localhost"===e||e.indexOf("192.168.")>-1||e.indexOf("172.16.")>-1||e.indexOf("127.0.")>-1){var i=a.mockEnv;a.host=a.hostServe[i],a.domain=""}else"saas"===n||"pre"===n?(a.host=a.hostServe.prod,a.domain=a.domainServe.prod):(a.host=a.hostServe[n],a.domain=a.domainServe[n])}};t.a=a},uMhA:function(e,t){}},[0]);
//# sourceMappingURL=app.5b3f04bc191389cbfd1b.js.map