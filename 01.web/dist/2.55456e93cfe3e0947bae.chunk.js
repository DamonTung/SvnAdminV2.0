webpackJsonp([2],{382:function(e,s,t){t(395);var r=t(147)(t(392),t(411),null,null);r.options.__file="D:\\SVN\\B06.svn管理面板V2.0\\09.软件开发\\01.web\\src\\views\\repositoryUser\\index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},392:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{pageCurrentUser:1,pageSizeUser:10,totalUser:0,searchKeywordUser:"",sortName:"svn_user_name",sortType:"asc",loadingUser:!0,loadingCreateUser:!1,loadingEditUserPass:!1,modalCreateUser:!1,modalEditUserPass:!1,formCreateUser:{svn_user_name:"",svn_user_pass:""},formEditUser:{svn_user_name:"",svn_user_pass:"",index:-1},titleEditUser:"",tableColumnUser:[{title:"序号",type:"index",fixed:"left",minWidth:80},{title:"用户名",key:"svn_user_name",tooltip:!0,sortable:"custom",minWidth:120},{title:"密码",slot:"svn_user_pass",minWidth:120},{title:"启用状态",key:"svn_user_status",slot:"svn_user_status",sortable:"custom",minWidth:120},{title:"备注信息",slot:"svn_user_note",minWidth:120},{title:"其它",slot:"action",minWidth:180}],tableDataUser:[]}},computed:{},created:function(){},mounted:function(){this.GetUserList()},methods:{UserPageSizeChange:function(e){this.pageSizeUser=e,this.GetUserList()},UserPageChange:function(e){this.pageCurrentUser=e,this.GetUserList()},SearchGetUserList:function(){this.GetUserList()},GetUserList:function(){var e=this;e.loadingUser=!0,e.tableDataUser=[];var s={pageSize:e.pageSizeUser,currentPage:e.pageCurrentUser,searchKeyword:e.searchKeywordUser,sortName:e.sortName,sortType:e.sortType};e.$axios.post("/api.php?c=Svnuser&a=GetUserList&t=web",s).then(function(s){e.loadingUser=!1;var t=s.data;1==t.status?(e.tableDataUser=t.data.data,e.totalUser=t.data.total):e.$Message.error(t.message)}).catch(function(s){e.loadingUser=!1,console.log(s),e.$Message.error("出错了 请联系管理员！")})},ChangeUserStatus:function(e,s){1==e?this.EnableUser(s):this.DisableUser(s)},EnableUser:function(e){var s=this,t={svn_user_name:e};s.$axios.post("/api.php?c=Svnuser&a=EnableUser&t=web",t).then(function(e){var t=e.data;1==t.status?s.$Message.success(t.message):s.$Message.error(t.message)}).catch(function(e){console.log(e),s.$Message.error("出错了 请联系管理员！")})},DisableUser:function(e){var s=this,t={svn_user_name:e};s.$axios.post("/api.php?c=Svnuser&a=DisableUser&t=web",t).then(function(e){s.loadingUser=!1;var t=e.data;1==t.status?s.$Message.success(t.message):s.$Message.error(t.message)}).catch(function(e){console.log(e),s.$Message.error("出错了 请联系管理员！")})},EditUserNote:function(e,s){var t=this,r={svn_user_name:s,svn_user_note:t.tableDataUser[e].svn_user_note};t.$axios.post("/api.php?c=Svnuser&a=EditUserNote&t=web",r).then(function(e){var s=e.data;1==s.status?t.$Message.success(s.message):t.$Message.error(s.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})},SortChangeUser:function(e){this.sortName=e.key,"desc"!=e.order&&"asc"!=e.order||(this.sortType=e.order),this.GetUserList()},ModalCreateUser:function(){this.modalCreateUser=!0},CreateUser:function(){var e=this;e.loadingCreateUser=!0;var s={svn_user_name:e.formCreateUser.svn_user_name,svn_user_pass:e.formCreateUser.svn_user_pass};e.$axios.post("/api.php?c=Svnuser&a=CreateUser&t=web",s).then(function(s){e.loadingCreateUser=!1;var t=s.data;1==t.status?(e.$Message.success(t.message),e.modalCreateUser=!1,e.GetUserList()):e.$Message.error(t.message)}).catch(function(s){e.loadingCreateUser=!1,console.log(s),e.$Message.error("出错了 请联系管理员！")})},ModalEditUserPass:function(e,s){this.titleEditUser="修改密码 - "+s,this.formEditUser.svn_user_name=s,this.formEditUser.svn_user_pass=this.tableDataUser[e].svn_user_pass,this.formEditUser.index=e,this.modalEditUserPass=!0},EditUserPass:function(){var e=this;e.loadingEditUserPass=!0;var s={svn_user_name:e.formEditUser.svn_user_name,svn_user_pass:e.formEditUser.svn_user_pass,svn_user_status:e.tableDataUser[e.formEditUser.index].svn_user_status};e.$axios.post("/api.php?c=Svnuser&a=EditUserPass&t=web",s).then(function(s){e.loadingEditUserPass=!1;var t=s.data;1==t.status?(e.modalEditUserPass=!1,e.$Message.success(t.message),e.GetUserList()):e.$Message.error(t.message)}).catch(function(s){e.loadingEditUserPass=!1,console.log(s),e.$Message.error("出错了 请联系管理员！")})},DelUser:function(e,s){var t=this;t.$Modal.confirm({title:"删除SVN用户 - "+s,content:"确定要删除该用户吗？<br/>将会从所有仓库和分组下将该用户移除<br/>该操作不可逆！",onOk:function(){var r={svn_user_name:s,svn_user_status:t.tableDataUser[e].svn_user_status};t.$axios.post("/api.php?c=Svnuser&a=DelUser&t=web",r).then(function(e){var s=e.data;1==s.status?(t.$Message.success(s.message),t.GetUserList()):t.$Message.error(s.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})}})}}}},395:function(e,s){},411:function(e,s,t){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("Card",{attrs:{bordered:!1,"dis-hover":!0}},[t("Row",{staticStyle:{"margin-bottom":"15px"}},[t("Col",{attrs:{type:"flex",justify:"space-between",xs:21,sm:20,md:19,lg:18}},[t("Button",{attrs:{icon:"md-add",type:"primary",ghost:""},on:{click:e.ModalCreateUser}},[e._v("新建SVN用户")])],1),e._v(" "),t("Col",{attrs:{xs:3,sm:4,md:5,lg:6}},[t("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"通过SVN用户名、备注搜索..."},on:{"on-search":e.SearchGetUserList},model:{value:e.searchKeywordUser,callback:function(s){e.searchKeywordUser=s},expression:"searchKeywordUser"}})],1)],1),e._v(" "),t("Table",{attrs:{border:"",columns:e.tableColumnUser,data:e.tableDataUser,loading:e.loadingUser,size:"small"},on:{"on-sort-change":e.SortChangeUser},scopedSlots:e._u([{key:"svn_user_pass",fn:function(s){var r=s.row;return[t("Input",{attrs:{border:!1,readonly:"",type:"password",password:""},model:{value:r.svn_user_pass,callback:function(s){e.$set(r,"svn_user_pass",s)},expression:"row.svn_user_pass"}})]}},{key:"svn_user_status",fn:function(s){var r=s.row;return[t("i-switch",{attrs:{"false-color":"#ff4949"},on:{"on-change":function(s){return e.ChangeUserStatus(s,r.svn_user_name)}},model:{value:r.svn_user_status,callback:function(s){e.$set(r,"svn_user_status",s)},expression:"row.svn_user_status"}},[t("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),e._v(" "),t("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)]}},{key:"svn_user_note",fn:function(s){var r=s.row,a=s.index;return[t("Input",{attrs:{border:!1},on:{"on-blur":function(s){e.EditUserNote(a,r.svn_user_name)}},model:{value:e.tableDataUser[a].svn_user_note,callback:function(s){e.$set(e.tableDataUser[a],"svn_user_note",s)},expression:"tableDataUser[index].svn_user_note"}})]}},{key:"action",fn:function(s){var r=s.row,a=s.index;return[t("Button",{attrs:{type:"warning",size:"small"},on:{click:function(s){e.ModalEditUserPass(a,r.svn_user_name)}}},[e._v("修改")]),e._v(" "),t("Button",{attrs:{type:"error",size:"small"},on:{click:function(s){e.DelUser(a,r.svn_user_name)}}},[e._v("删除")])]}}])}),e._v(" "),t("Card",{attrs:{bordered:!1,"dis-hover":!0}},[0!=e.totalUser?t("Page",{attrs:{total:e.totalUser,current:e.pageCurrentUser,"page-size":e.pageSizeUser,size:"small","show-sizer":""},on:{"on-page-size-change":e.UserPageSizeChange,"on-change":e.UserPageChange}}):e._e()],1)],1),e._v(" "),t("Modal",{attrs:{title:"新建SVN用户"},model:{value:e.modalCreateUser,callback:function(s){e.modalCreateUser=s},expression:"modalCreateUser"}},[t("Form",{attrs:{model:e.formCreateUser,"label-width":80}},[t("FormItem",{attrs:{label:"用户名"}},[t("Input",{model:{value:e.formCreateUser.svn_user_name,callback:function(s){e.$set(e.formCreateUser,"svn_user_name",s)},expression:"formCreateUser.svn_user_name"}})],1),e._v(" "),t("FormItem",[t("Alert",{attrs:{type:"warning","show-icon":""}},[e._v("用户名只能包含字母、数字、破折号、下划线、点。")])],1),e._v(" "),t("FormItem",{attrs:{label:"密码"}},[t("Input",{attrs:{type:"password",password:""},model:{value:e.formCreateUser.svn_user_pass,callback:function(s){e.$set(e.formCreateUser,"svn_user_pass",s)},expression:"formCreateUser.svn_user_pass"}})],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary",loading:e.loadingCreateUser},on:{click:e.CreateUser}},[e._v("确定")])],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"primary",ghost:""},on:{click:function(s){e.modalCreateUser=!1}}},[e._v("取消")])],1)],1),e._v(" "),t("Modal",{attrs:{title:e.titleEditUser},on:{"on-ok":e.EditUserPass},model:{value:e.modalEditUserPass,callback:function(s){e.modalEditUserPass=s},expression:"modalEditUserPass"}},[t("Form",{attrs:{model:e.formEditUser,"label-width":80}},[t("FormItem",{attrs:{label:"新密码"}},[t("Input",{model:{value:e.formEditUser.svn_user_pass,callback:function(s){e.$set(e.formEditUser,"svn_user_pass",s)},expression:"formEditUser.svn_user_pass"}})],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary",loading:e.loadingEditUserPass},on:{click:e.EditUserPass}},[e._v("确定")])],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"primary",ghost:""},on:{click:function(s){e.modalEditUserPass=!1}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});