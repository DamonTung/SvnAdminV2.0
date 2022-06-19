webpackJsonp([4],{380:function(e,o,t){t(401);var r=t(147)(t(390),t(419),null,null);r.options.__file="D:\\SVN\\B06.svn管理面板V2.0\\09.软件开发\\01.web\\src\\views\\repositoryGroup\\index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},390:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{pageCurrentGroup:1,pageSizeGroup:10,totalGroup:0,searchKeywordGroup:"",sortName:"svn_group_name",sortType:"asc",loadingGroup:!0,loadingRepAllUser:!0,loadingRepAllGroup:!0,loadingCreateGroup:!1,loadingEditGroupName:!1,currentSelectGroupName:"",titleEditGroupName:"",titleGetGroupMember:"",modalAddGroup:!1,modalEditGroupName:!1,modalGetGroupMember:!1,formCreateGroup:{svn_group_name:""},formEditGroupName:{groupNameOld:"",groupNameNew:""},tableGroupColumn:[{title:"序号",type:"index",fixed:"left",minWidth:80},{title:"分组名",key:"svn_group_name",tooltip:!0,sortable:"custom",minWidth:120},{title:"包含用户数量",key:"include_user_count",sortable:"custom",minWidth:130},{title:"包含分组数量",key:"include_group_count",sortable:"custom",minWidth:130},{title:"备注信息",slot:"svn_group_note",minWidth:120},{title:"其它",slot:"action",minWidth:180}],tableGroupData:[],tableRepAllUserColumn:[{title:"用户名",key:"userName"},{title:"是否为成员",slot:"isMember"},{title:"当前状态",slot:"disabled"}],tableRepAllUserData:[],tableRepAllGroupColumn:[{title:"分组名",key:"groupName"},{title:"是否为成员",slot:"isMember"}],tableRepAllGroupData:[]}},computed:{},created:function(){},mounted:function(){this.GetGroupList()},methods:{GroupPageSizeChange:function(e){this.pageSizeGroup=e,this.GetGroupList()},GroupPageChange:function(e){this.pageCurrentGroup=e,this.GetGroupList()},SortChangeGroup:function(e){this.sortName=e.key,"desc"!=e.order&&"asc"!=e.order||(this.sortType=e.order),this.GetGroupList()},SearchGetGroupList:function(){this.GetGroupList()},GetGroupList:function(){var e=this;e.loadingGroup=!0,e.tableGroupData=[];var o={pageSize:e.pageSizeGroup,currentPage:e.pageCurrentGroup,searchKeyword:e.searchKeywordGroup,sortName:e.sortName,sortType:e.sortType};e.$axios.post("/api.php?c=Svngroup&a=GetGroupList&t=web",o).then(function(o){e.loadingGroup=!1;var t=o.data;1==t.status?(e.tableGroupData=t.data.data,e.totalGroup=t.data.total):e.$Message.error(t.message)}).catch(function(o){e.loadingGroup=!1,console.log(o),e.$Message.error("出错了 请联系管理员！")})},EditGroupNote:function(e,o){var t=this,r={svn_group_name:o,svn_group_note:t.tableGroupData[e].svn_group_note};t.$axios.post("/api.php?c=Svngroup&a=EditGroupNote&t=web",r).then(function(e){var o=e.data;1==o.status?t.$Message.success(o.message):t.$Message.error(o.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})},ModalCreateGroup:function(){this.modalAddGroup=!0},CreateGroup:function(){var e=this;e.loadingCreateGroup=!0;var o={svn_group_name:e.formCreateGroup.svn_group_name};e.$axios.post("/api.php?c=Svngroup&a=CreateGroup&t=web",o).then(function(o){e.loadingCreateGroup=!1;var t=o.data;1==t.status?(e.$Message.success(t.message),e.modalAddGroup=!1,e.GetGroupList()):e.$Message.error(t.message)}).catch(function(o){e.loadingCreateGroup=!1,console.log(o),e.$Message.error("出错了 请联系管理员！")})},ModalEditGroupName:function(e){this.formEditGroupName.groupNameOld=e,this.formEditGroupName.groupNameNew=e,this.titleEditGroupName="编辑SVN分组名 - "+e,this.modalEditGroupName=!0},EditGroupName:function(){var e=this;e.loadingEditGroupName=!0;var o={groupNameOld:e.formEditGroupName.groupNameOld,groupNameNew:e.formEditGroupName.groupNameNew};e.$axios.post("/api.php?c=Svngroup&a=EditGroupName&t=web",o).then(function(o){e.loadingEditGroupName=!1;var t=o.data;1==t.status?(e.$Message.success(t.message),e.modalEditGroupName=!1,e.GetGroupList()):e.$Message.error(t.message)}).catch(function(o){e.loadingEditGroupName=!1,console.log(o),e.$Message.error("出错了 请联系管理员！")})},DelGroup:function(e){var o=this;o.$Modal.confirm({title:"删除SVN分组 - "+e,content:"确定要删除该用户吗？<br/>该操作不可逆！",onOk:function(){var t={svn_group_name:e};o.$axios.post("/api.php?c=Svngroup&a=DelGroup&t=web",t).then(function(e){var t=e.data;1==t.status?(o.$Message.success(t.message),o.GetGroupList()):o.$Message.error(t.message)}).catch(function(e){console.log(e),o.$Message.error("出错了 请联系管理员！")})}})},ModalGetGroupMember:function(e){this.currentSelectGroupName=e,this.modalGetGroupMember=!0,this.titleGetGroupMember="编辑分组成员信息 - "+e,this.GetGroupMember()},GetGroupMember:function(){var e=this;e.loadingRepAllUser=!0,e.loadingRepAllGroup=!0,e.tableRepAllUserData=[],e.tableRepAllGroupData=[];var o={svn_group_name:e.currentSelectGroupName};e.$axios.post("/api.php?c=Svngroup&a=GetGroupMember&t=web",o).then(function(o){e.loadingRepAllUser=!1,e.loadingRepAllGroup=!1;var t=o.data;1==t.status?(e.tableRepAllUserData=t.data.userList,e.tableRepAllGroupData=t.data.groupList):e.$Message.error(t.message)}).catch(function(o){e.loadingRepAllUser=!1,e.loadingRepAllGroup=!1,console.log(o),e.$Message.error("出错了 请联系管理员！")})},ChangeUserMember:function(e,o){1==e?this.GroupAddUser(o):this.GroupRemoveUser(o)},ChangeGroupMember:function(e,o){1==e?this.GroupAddGroup(o):this.GroupRemoveGroup(o)},GroupAddUser:function(e){var o=this,t={svn_group_name:o.currentSelectGroupName,svn_user_name:e};o.$axios.post("/api.php?c=Svngroup&a=GroupAddUser&t=web",t).then(function(e){var t=e.data;1==t.status?(o.$Message.success(t.message),o.GetGroupMember()):(o.$Message.error(t.message),o.GetGroupMember())}).catch(function(e){console.log(e),o.$Message.error("出错了 请联系管理员！")})},GroupRemoveUser:function(e){var o=this,t={svn_group_name:o.currentSelectGroupName,svn_user_name:e};o.$axios.post("/api.php?c=Svngroup&a=GroupRemoveUser&t=web",t).then(function(e){var t=e.data;1==t.status?(o.$Message.success(t.message),o.GetGroupMember()):(o.$Message.error(t.message),o.GetGroupMember())}).catch(function(e){console.log(e),o.$Message.error("出错了 请联系管理员！")})},GroupAddGroup:function(e){var o=this,t={svn_group_name:o.currentSelectGroupName,svn_group_name_add:e};o.$axios.post("/api.php?c=Svngroup&a=GroupAddGroup&t=web",t).then(function(e){var t=e.data;1==t.status?(o.$Message.success(t.message),o.GetGroupMember()):(o.$Message.error(t.message),o.GetGroupMember())}).catch(function(e){console.log(e),o.$Message.error("出错了 请联系管理员！")})},GroupRemoveGroup:function(e){var o=this,t={svn_group_name:o.currentSelectGroupName,svn_group_name_del:e};o.$axios.post("/api.php?c=Svngroup&a=GroupRemoveGroup&t=web",t).then(function(e){var t=e.data;1==t.status?(o.$Message.success(t.message),o.GetGroupMember()):(o.$Message.error(t.message),o.GetGroupMember())}).catch(function(e){console.log(e),o.$Message.error("出错了 请联系管理员！")})}}}},401:function(e,o){},419:function(e,o,t){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("Card",{attrs:{bordered:!1,"dis-hover":!0}},[t("Row",{staticStyle:{"margin-bottom":"15px"}},[t("Col",{attrs:{type:"flex",justify:"space-between",xs:21,sm:20,md:19,lg:18}},[t("Button",{attrs:{icon:"md-add",type:"primary",ghost:""},on:{click:e.ModalCreateGroup}},[e._v("新建SVN分组")])],1),e._v(" "),t("Col",{attrs:{xs:3,sm:4,md:5,lg:6}},[t("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"通过SVN分组名、备注搜索..."},on:{"on-search":e.SearchGetGroupList},model:{value:e.searchKeywordGroup,callback:function(o){e.searchKeywordGroup=o},expression:"searchKeywordGroup"}})],1)],1),e._v(" "),t("Table",{attrs:{border:"",columns:e.tableGroupColumn,data:e.tableGroupData,loading:e.loadingGroup,size:"small"},on:{"on-sort-change":e.SortChangeGroup},scopedSlots:e._u([{key:"svn_group_note",fn:function(o){var r=o.row,a=o.index;return[t("Input",{attrs:{border:!1},on:{"on-blur":function(o){e.EditGroupNote(a,r.svn_group_name)}},model:{value:e.tableGroupData[a].svn_group_note,callback:function(o){e.$set(e.tableGroupData[a],"svn_group_note",o)},expression:"tableGroupData[index].svn_group_note"}})]}},{key:"action",fn:function(o){var r=o.row;return[t("Button",{attrs:{type:"success",size:"small"},on:{click:function(o){e.ModalGetGroupMember(r.svn_group_name)}}},[e._v("成员")]),e._v(" "),t("Button",{attrs:{type:"warning",size:"small"},on:{click:function(o){e.ModalEditGroupName(r.svn_group_name)}}},[e._v("编辑")]),e._v(" "),t("Button",{attrs:{type:"error",size:"small"},on:{click:function(o){e.DelGroup(r.svn_group_name)}}},[e._v("删除")])]}}])}),e._v(" "),t("Card",{attrs:{bordered:!1,"dis-hover":!0}},[0!=e.totalGroup?t("Page",{attrs:{total:e.totalGroup,current:e.pageCurrentGroup,"page-size":e.pageSizeGroup,size:"small","show-sizer":""},on:{"on-page-size-change":e.GroupPageSizeChange,"on-change":e.GroupPageChange}}):e._e()],1)],1),e._v(" "),t("Modal",{attrs:{title:"新建SVN分组"},on:{"on-ok":e.CreateGroup},model:{value:e.modalAddGroup,callback:function(o){e.modalAddGroup=o},expression:"modalAddGroup"}},[t("Form",{attrs:{model:e.formCreateGroup,"label-width":80}},[t("FormItem",{attrs:{label:"分组名"}},[t("Input",{model:{value:e.formCreateGroup.svn_group_name,callback:function(o){e.$set(e.formCreateGroup,"svn_group_name",o)},expression:"formCreateGroup.svn_group_name"}})],1),e._v(" "),t("FormItem",[t("Alert",{attrs:{type:"warning","show-icon":""}},[e._v("分组名只能包含字母、数字、破折号、下划线、点。")])],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary",loading:e.loadingCreateGroup},on:{click:e.CreateGroup}},[e._v("确定")])],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"primary",ghost:""},on:{click:function(o){e.modalAddGroup=!1}}},[e._v("取消")])],1)],1),e._v(" "),t("Modal",{attrs:{title:e.titleEditGroupName},on:{"on-ok":e.EditGroupName},model:{value:e.modalEditGroupName,callback:function(o){e.modalEditGroupName=o},expression:"modalEditGroupName"}},[t("Form",{attrs:{model:e.formEditGroupName,"label-width":80}},[t("FormItem",{attrs:{label:"分组名"}},[t("Input",{model:{value:e.formEditGroupName.groupNameNew,callback:function(o){e.$set(e.formEditGroupName,"groupNameNew",o)},expression:"formEditGroupName.groupNameNew"}})],1),e._v(" "),t("FormItem",[t("Alert",{attrs:{type:"warning","show-icon":""}},[e._v("分组名只能包含字母、数字、破折号、下划线、点。")])],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary",loading:e.loadingEditGroupName},on:{click:e.EditGroupName}},[e._v("确定")])],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"primary",ghost:""},on:{click:function(o){e.modalEditGroupName=!1}}},[e._v("取消")])],1)],1),e._v(" "),t("Modal",{attrs:{title:e.titleGetGroupMember},model:{value:e.modalGetGroupMember,callback:function(o){e.modalGetGroupMember=o},expression:"modalGetGroupMember"}},[t("Tabs",{attrs:{type:"card"}},[t("TabPane",{attrs:{label:"用户成员"}},[t("Table",{attrs:{height:"350","show-header":!0,columns:e.tableRepAllUserColumn,data:e.tableRepAllUserData,loading:e.loadingRepAllUser,size:"small"},scopedSlots:e._u([{key:"isMember",fn:function(o){var r=o.row;return[t("i-switch",{on:{"on-change":function(o){return e.ChangeUserMember(o,r.userName)}},model:{value:r.isMember,callback:function(o){e.$set(r,"isMember",o)},expression:"row.isMember"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("是")]),e._v(" "),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("否")])])]}},{key:"disabled",fn:function(o){return[0==o.row.disabled?t("Tag",{attrs:{color:"blue"}},[e._v("正常")]):t("Tag",{attrs:{color:"red"}},[e._v("禁用")])]}}])})],1),e._v(" "),t("TabPane",{attrs:{label:"分组成员"}},[t("Table",{attrs:{height:"350","show-header":!0,columns:e.tableRepAllGroupColumn,data:e.tableRepAllGroupData,loading:e.loadingRepAllGroup,size:"small"},scopedSlots:e._u([{key:"isMember",fn:function(o){var r=o.row;return[t("i-switch",{on:{"on-change":function(o){return e.ChangeGroupMember(o,r.groupName)}},model:{value:r.isMember,callback:function(o){e.$set(r,"isMember",o)},expression:"row.isMember"}},[t("span",{attrs:{slot:"open"},slot:"open"},[e._v("是")]),e._v(" "),t("span",{attrs:{slot:"close"},slot:"close"},[e._v("否")])])]}}])})],1)],1),e._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"primary",ghost:""},on:{click:function(o){e.modalGetGroupMember=!1}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});