webpackJsonp([0],{377:function(e,t,r){r(398);var n=r(147)(r(387),r(415),"data-v-51f19c28",null);n.options.__file="D:\\SVN\\B06.svn管理面板V2.0\\09.软件开发\\01.web\\src\\views\\layout\\basicLayout\\index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{currentActiveName:"",logoContent:"SVN Admin",currentUsername:sessionStorage.user_name,currentRoleName:sessionStorage.user_role_name,navList:[],breadcrumb:[]}},methods:{LogOut:function(){var e=this,t={};e.$axios.post("/api.php?c=Common&a=Logout&t=web",t).then(function(t){var r=t.data;1==r.status?(sessionStorage.removeItem("token"),sessionStorage.removeItem("user_name"),sessionStorage.removeItem("user_role_id"),sessionStorage.removeItem("user_role_name"),e.$Message.success(r.message),e.$router.push({name:"login"})):e.$Message.error(r.message)}).catch(function(t){console.log(t),e.$Message.error("出错了 请联系管理员！")})},handleCommand:function(e){switch(e){case"logOut":this.logOUt()}},CreateNav:function(){var e=this,t=e.$router.options.routes.filter(function(e){return"manage"==e.name});t=t[0].children;var r=t.map(function(e){return e.meta.group}).filter(function(e){return""!=e.name});t=t.filter(function(e){return e.meta.group.num>0}),t=t.filter(function(e){return-1!=e.meta.user_role_id.indexOf(sessionStorage.user_role_id)});for(var n=[],o=0;o<r.length;o++){for(var a=[],i=0;i<t.length;i++)t[i].meta.group.num==r[o].num&&a.push(t[i]);0!=a.length&&n.push({title:r[o].name,value:a})}e.navList=n},SetBreadcrumb:function(){var e=this;e.breadcrumb=e.$route.matched},SetActiveName:function(){this.currentActiveName=this.$route.name}},mounted:function(){var e=this;e.CreateNav(),e.SetBreadcrumb(),this.SetActiveName()},watch:{$route:function(){this.SetBreadcrumb()}}}},398:function(e,t){},410:function(e,t,r){e.exports=r.p+"6eee7a3978d7d0d05d816816ca1b291c.png"},415:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Layout",[n("Header",{staticStyle:{"background-color":"#9b1be5","background-image":"linear-gradient(90deg, #9b1be5 0%, #2085ea 100%)",color:"#fff",position:"fixed",width:"100%","z-index":"99"}},[n("img",{staticStyle:{"line-height":"64px",position:"absolute",top:"12px",left:"1%"},attrs:{src:r(410)}}),e._v(" "),n("Dropdown",{staticStyle:{float:"right",zindex:"99"},attrs:{transfer:!0,trigger:"click"},on:{"on-click":e.LogOut}},[n("a",{staticStyle:{"margin-left":"8px",color:"#fff"},attrs:{href:"javascript:void(0)"}},[e._v("\n          "+e._s(e.currentUsername)+"\n          "),n("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),e._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[e._v("退出")])],1)],1),e._v(" "),n("div",{staticStyle:{float:"right"}},[n("Divider",{attrs:{type:"vertical"}})],1),e._v(" "),n("div",{staticStyle:{float:"right"}},[n("a",{staticStyle:{"margin-left":"8px",color:"#fff",cursor:"default"}},[e._v(e._s(e.currentRoleName))])])],1),e._v(" "),n("Layout",{staticStyle:{"margin-top":"64px"}},[n("Sider",{staticStyle:{"min-height":"calc(100vh - 64px)",position:"fixed","z-index":"99",height:"100%"}},[n("Menu",{staticStyle:{height:"100%"},attrs:{theme:"light",width:"auto","active-name":e.currentActiveName}},e._l(e.navList,function(t,r){return n("MenuGroup",{key:r,attrs:{title:t.title}},e._l(t.value,function(t,o){return n("MenuItem",{key:r+"-"+o,attrs:{name:t.name,to:t.path}},[n("Icon",{attrs:{type:t.meta.icon}}),e._v("\n              "+e._s(t.meta.title)+"\n            ")],1)}))}))],1),e._v(" "),n("Layout",{staticStyle:{padding:"20px 30px 0px 220px",height:"calc(100vh - 64px)"}},[n("Breadcrumb",{staticStyle:{padding:"0px 0px 20px 0px"}},e._l(e.breadcrumb,function(t,r){return n("BreadcrumbItem",{key:r},[e._v(e._s(t.meta.title))])})),e._v(" "),n("Content",[n("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});