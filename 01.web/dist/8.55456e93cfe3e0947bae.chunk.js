webpackJsonp([8],{375:function(t,e,a){a(397);var o=a(147)(a(385),a(414),null,null);o.options.__file="D:\\SVN\\B06.svn管理面板V2.0\\09.软件开发\\01.web\\src\\views\\advance\\index.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},385:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tempBindPort:0,tempBindHost:"",tempManageHost:"",tempTestEmail:"",tempToEmail:"",disabledEditPort:!0,disabledEditHost:!0,disabledEditManageHost:!0,currentAdvanceTab:"1",version:{current_verson:"2.3.1",php_version:"5.5 <= PHP < 8.0",database:"MYSQL、SQLite",github:"https://github.com/witersen/SvnAdminV2.0",gitee:"https://gitee.com/witersen/SvnAdminV2.0"},loadingSvnserveStart:!1,loadingSvnserveStop:!1,loadingEditHost:!1,loadingEditPort:!1,loadingEditManageHost:!1,loadingSendTest:!1,loadingEditEmail:!1,loadingEditPush:!1,loadingEditSafe:!1,loadingCheckUpdate:!1,formSvn:{version:"",installed:null,bindPort:"",bindHost:"",manageHost:"",enable:"",svnserveLog:""},configList:[],listPush:[],listSafe:[],modalSofawareUpdateGet:!1,modalAddToEmail:!1,formMailSmtp:{host:"",auth:"",user:"",pass:"",encryption:"",autotls:!0,port:0,test:"",from:{address:"",name:""},status:!1,to:[],timeout:0},formUpdate:{version:"",fixd:{con:[]},add:{con:[]},remove:{con:[]},release:{download:[]},update:{step:[],download:[]}}}},computed:{},created:function(){},mounted:function(){sessionStorage.currentAdvanceTab?this.currentAdvanceTab=sessionStorage.currentAdvanceTab:sessionStorage.setItem("currentAdvanceTab","1"),this.GetDetail(),this.GetConfig(),this.GetEmail(),this.GetPush(),this.GetSafeConfig()},methods:{SetCurrentAdvanceTab:function(t){sessionStorage.setItem("currentAdvanceTab",t),this.currentAdvanceTab=t},GetDetail:function(){var t=this,e={};t.$axios.post("/api.php?c=Svn&a=GetDetail&t=web",e).then(function(e){var a=e.data;1==a.status?(t.formSvn=a.data,t.tempBindPort=a.data.bindPort,t.tempBindHost=a.data.bindHost,t.tempManageHost=a.data.manageHost,t.disabledEditPort=!0,t.disabledEditHost=!0,t.disabledEditManageHost=!0):t.$Message.error(a.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})},ChangeEditPort:function(t){this.tempBindPort==this.formSvn.bindPort?this.disabledEditPort=!0:this.disabledEditPort=!1},ChangeEditHost:function(t){this.tempBindHost==this.formSvn.bindHost?this.disabledEditHost=!0:this.disabledEditHost=!1},ChangeEditManageHost:function(t){this.tempManageHost==this.formSvn.manageHost?this.disabledEditManageHost=!0:this.disabledEditManageHost=!1},GetEmail:function(){var t=this,e={};t.$axios.post("/api.php?c=Mail&a=GetEmail&t=web",e).then(function(e){var a=e.data;1==a.status?t.formMailSmtp=a.data:t.$Message.error(a.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})},ChangeEncryption:function(t){"none"==t?this.formMailSmtp.port=25:"SSL"==t?this.formMailSmtp.port=465:"TLS"==t&&(this.formMailSmtp.port=587)},EditEmail:function(){var t=this;t.loadingEditEmail=!0;var e={host:t.formMailSmtp.host,auth:t.formMailSmtp.auth,user:t.formMailSmtp.user,pass:t.formMailSmtp.pass,encryption:t.formMailSmtp.encryption,autotls:t.formMailSmtp.autotls,port:t.formMailSmtp.port,from:t.formMailSmtp.from,status:t.formMailSmtp.status,to:t.formMailSmtp.to,timeout:t.formMailSmtp.timeout};t.$axios.post("/api.php?c=Mail&a=EditEmail&t=web",e).then(function(e){t.loadingEditEmail=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetEmail()):t.$Message.error(a.message)}).catch(function(e){t.loadingEditEmail=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})},SendTest:function(){var t=this;t.loadingSendTest=!0;var e={host:t.formMailSmtp.host,auth:t.formMailSmtp.auth,user:t.formMailSmtp.user,pass:t.formMailSmtp.pass,encryption:t.formMailSmtp.encryption,autotls:t.formMailSmtp.autotls,port:t.formMailSmtp.port,test:t.formMailSmtp.test,from:t.formMailSmtp.from,timeout:t.formMailSmtp.timeout};t.$axios.post("/api.php?c=Mail&a=SendTest&t=web",e).then(function(e){t.loadingSendTest=!1;var a=e.data;1==a.status?t.$Message.success(a.message):t.$Message.error(a.message)}).catch(function(e){t.loadingSendTest=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})},GetConfig:function(){var t=this,e={};t.$axios.post("/api.php?c=Svn&a=GetConfig&t=web",e).then(function(e){var a=e.data;1==a.status?t.configList=a.data:t.$Message.error(a.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})},GetPush:function(){var t=this,e={};t.$axios.post("/api.php?c=Mail&a=GetPush&t=web",e).then(function(e){var a=e.data;1==a.status?t.listPush=a.data:t.$Message.error(a.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})},GetSafeConfig:function(){var t=this,e={};t.$axios.post("/api.php?c=Safe&a=GetSafeConfig&t=web",e).then(function(e){var a=e.data;1==a.status?t.listSafe=a.data:t.$Message.error(a.message)}).catch(function(e){console.log(e),t.$Message.error("出错了 请联系管理员！")})},CloseTagToEmail:function(t,e){this.formMailSmtp.to=this.formMailSmtp.to.filter(function(t){return t.address!=e})},ModalAddToEmail:function(){this.modalAddToEmail=!0,this.tempToEmail=""},AddToEmail:function(){var t=this;return""==this.tempToEmail?void this.$Message.error("输入不能为空"):this.formMailSmtp.to.filter(function(e){return e.address!=t.tempToEmail}).length!=this.formMailSmtp.to.length?void this.$Message.error("邮件已存在"):void this.formMailSmtp.to.push({address:this.tempToEmail,name:""})},EditPush:function(){var t=this;t.loadingEditPush=!0;var e={listPush:t.listPush};t.$axios.post("/api.php?c=Mail&a=EditPush&t=web",e).then(function(e){t.loadingEditPush=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetPush()):t.$Message.error(a.message)}).catch(function(e){t.loadingEditPush=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})},SetSafeConfig:function(){var t=this;t.loadingEditSafe=!0;var e={listSafe:t.listSafe};t.$axios.post("/api.php?c=Safe&a=SetSafeConfig&t=web",e).then(function(e){t.loadingEditSafe=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetSafeConfig()):t.$Message.error(a.message)}).catch(function(e){t.loadingEditSafe=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})},Install:function(){},UnInstall:function(){},Start:function(){var t=this;t.$Modal.confirm({title:"以daomen方式启动svnserve服务",content:"确定要启动svnserve服务吗吗？",onOk:function(){t.loadingSvnserveStart=!0;var e={};t.$axios.post("/api.php?c=Svn&a=Start&t=web",e).then(function(e){t.loadingSvnserveStart=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetDetail()):t.$Message.error(a.message)}).catch(function(e){t.loadingSvnserveStart=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})}})},Stop:function(){var t=this;t.$Modal.confirm({title:"停止svnserve服务",content:"确定要停止svnserve服务吗？",onOk:function(){t.loadingSvnserveStop=!0;var e={};t.$axios.post("/api.php?c=Svn&a=Stop&t=web",e).then(function(e){t.loadingSvnserveStop=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetDetail()):t.$Message.error(a.message)}).catch(function(e){t.loadingSvnserveStop=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})}})},EditPort:function(){var t=this;t.$Modal.confirm({title:"更换svnserve服务绑定端口",content:"确定要更换svnserve服务绑定端口吗？此操作会使svnserve服务停止并重新启动！",onOk:function(){t.loadingEditPort=!0;var e={bindPort:t.tempBindPort};t.$axios.post("/api.php?c=Svn&a=EditPort&t=web",e).then(function(e){t.loadingEditPort=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetDetail()):(t.GetDetail(),t.$Message.error(a.message))}).catch(function(e){t.loadingEditPort=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})}})},EditHost:function(){var t=this;t.$Modal.confirm({title:"更换svnserve服务绑定主机",content:"确定要更换svnserve服务绑定主机吗？此操作会使svnserve服务停止并重新启动！",onOk:function(){t.loadingEditHost=!0;var e={bindHost:t.tempBindHost};t.$axios.post("/api.php?c=Svn&a=EditHost&t=web",e).then(function(e){t.loadingEditHost=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetDetail()):(t.GetDetail(),t.$Message.error(a.message))}).catch(function(e){t.loadingEditHost=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})}})},EditManageHost:function(){var t=this;t.$Modal.confirm({title:"更换管理系统主机名",content:"确定要更换管理系统主机名吗？此操作不会影响svnserve服务的状态！",onOk:function(){t.loadingEditManageHost=!0;var e={manageHost:t.tempManageHost};t.$axios.post("/api.php?c=Svn&a=EditManageHost&t=web",e).then(function(e){t.loadingEditManageHost=!1;var a=e.data;1==a.status?(t.$Message.success(a.message),t.GetDetail()):(t.GetDetail(),t.$Message.error(a.message))}).catch(function(e){t.loadingEditManageHost=!1,console.log(e),t.$Message.error("出错了 请联系管理员！")})}})},EditEnable:function(t){var e=this,a={enable:t};e.$axios.post("/api.php?c=Svn&a=EditEnable&t=web",a).then(function(t){var a=t.data;1==a.status?(e.$Message.success(a.message),e.GetDetail()):(e.GetDetail(),e.$Message.error(a.message))}).catch(function(t){console.log(t),e.$Message.error("出错了 请联系管理员！")})},CheckUpdate:function(){var t=this;t.loadingCheckUpdate=!0;var e={};t.$axios.post("/api.php?c=Update&a=CheckUpdate&t=web",e).then(function(e){t.loadingCheckUpdate=!1;var a=e.data;1==a.status?""!=a.data?(t.formUpdate=a.data,t.modalSofawareUpdateGet=!0):t.$Message.success(a.message):t.$Message.error(a.message)}).catch(function(e){t.loadingCheckUpdate=!1,console.log(e)})}}}},397:function(t,e){},414:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{attrs:{bordered:!1,"dis-hover":!0}},[a("Tabs",{on:{"on-click":t.SetCurrentAdvanceTab},model:{value:t.currentAdvanceTab,callback:function(e){t.currentAdvanceTab=e},expression:"currentAdvanceTab"}},[a("TabPane",{attrs:{label:"Subversion",name:"1"}},[a("Card",{staticStyle:{width:"620px"},attrs:{bordered:!1,"dis-hover":!0}},[a("Form",{attrs:{"label-width":100,"label-position":"left"}},[a("FormItem",{attrs:{label:"Subversion"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("span",[t._v(t._s(t.formSvn.version))])]),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Tooltip",{attrs:{transfer:!0,"max-width":"360",content:"可以使用系统提供的 server/install.php 文件在命令行模式下进行Subversion安装和初始化等操作"}},[a("Button",{attrs:{type:"info"}},[t._v("tips")])],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}})],1)],1),t._v(" "),a("FormItem",{attrs:{label:"运行状态"}},[a("Row",[a("Col",{attrs:{span:"12"}},[0==t.formSvn.installed?a("span",{staticStyle:{color:"#ff9900"}},[t._v("未安装")]):t._e(),t._v(" "),1==t.formSvn.installed?a("span",{staticStyle:{color:"#f90"}},[t._v("未启动")]):t._e(),t._v(" "),2==t.formSvn.installed?a("span",{staticStyle:{color:"#19be6b"}},[t._v("运行中")]):t._e(),t._v(" "),-1==t.formSvn.installed?a("span",{staticStyle:{color:"#ed4014"}},[t._v("未知")]):t._e()]),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[1==t.formSvn.installed?a("Button",{attrs:{loading:t.loadingSvnserveStart,type:"success"},on:{click:t.Start}},[t._v("启动")]):t._e(),t._v(" "),2==t.formSvn.installed?a("Button",{attrs:{loading:t.loadingSvnserveStop,type:"warning"},on:{click:t.Stop}},[t._v("停止")]):t._e()],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"绑定端口"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("InputNumber",{attrs:{min:1},on:{"on-change":t.ChangeEditPort},model:{value:t.tempBindPort,callback:function(e){t.tempBindPort=e},expression:"tempBindPort"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"warning",disabled:t.disabledEditPort,loading:t.loadingEditPort},on:{click:t.EditPort}},[t._v("修改")])],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"绑定主机"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"默认地址：0.0.0.0"},on:{"on-change":t.ChangeEditHost},model:{value:t.tempBindHost,callback:function(e){t.tempBindHost=e},expression:"tempBindHost"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Tooltip",{attrs:{transfer:!0,"max-width":"350",content:"请注意，如果您的机器为公网服务器且非弹性IP，则可能会绑定失败。原因与云服务器厂商分配公网IP给服务器的方式有关。如果绑定失败，建议配置使用自定义主机名代替检出地址。"}},[a("Button",{attrs:{type:"warning",disabled:t.disabledEditHost,loading:t.loadingEditHost},on:{click:t.EditHost}},[t._v("修改")])],1)],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"自定义主机"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"默认地址：127.0.0.1"},on:{"on-change":t.ChangeEditManageHost},model:{value:t.tempManageHost,callback:function(e){t.tempManageHost=e},expression:"tempManageHost"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"warning",disabled:t.disabledEditManageHost,loading:t.loadingEditManageHost},on:{click:t.EditManageHost}},[t._v("修改")])],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"检出地址选用"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("RadioGroup",{on:{"on-change":t.EditEnable},model:{value:t.formSvn.enable,callback:function(e){t.$set(t.formSvn,"enable",e)},expression:"formSvn.enable"}},[a("Radio",{attrs:{label:"bindHost"}},[t._v("绑定主机")]),t._v(" "),a("Radio",{attrs:{label:"manageHost"}},[t._v("自定义主机")])],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}})],1)],1)],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"配置文件",name:"2"}},[a("Card",{staticStyle:{width:"620px"},attrs:{bordered:!1,"dis-hover":!0}},[a("Alert",[t._v("可以使用系统提供的 server/install.php"),a("br"),a("br"),t._v("\n            文件在命令行模式下进行目录更换操作\n          ")]),t._v(" "),a("Form",{attrs:{"label-width":160,"label-position":"left"}},t._l(t.configList,function(e,o){return a("FormItem",{key:o,attrs:{label:e.key}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("span",[t._v(t._s(e.value))])])],1)],1)}))],1)],1),t._v(" "),a("TabPane",{attrs:{label:"邮件服务",name:"3"}},[a("Card",{staticStyle:{width:"620px"},attrs:{bordered:!1,"dis-hover":!0}},[a("Form",{attrs:{"label-width":120,"label-position":"left"}},[a("FormItem",{attrs:{label:"SMTP主机"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{model:{value:t.formMailSmtp.host,callback:function(e){t.$set(t.formMailSmtp,"host",e)},expression:"formMailSmtp.host"}})],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"加密"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("RadioGroup",{on:{"on-change":t.ChangeEncryption},model:{value:t.formMailSmtp.encryption,callback:function(e){t.$set(t.formMailSmtp,"encryption",e)},expression:"formMailSmtp.encryption"}},[a("Radio",{attrs:{label:"none"}},[a("span",[t._v("无")])]),t._v(" "),a("Radio",{attrs:{label:"SSL"}},[a("span",[t._v("SSL")])]),t._v(" "),a("Radio",{attrs:{label:"TLS"}},[a("span",[t._v("TLS")])])],1)],1),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Tooltip",{attrs:{transfer:!0,"max-width":"360",content:"对于大多数服务器，建议使用TLS。 如果您的SMTP提供商同时提供SSL和TLS选项，我们建议您使用TLS。"}},[a("Button",{attrs:{type:"info"}},[t._v("tips")])],1)],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"SMTP端口"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("InputNumber",{attrs:{min:1},model:{value:t.formMailSmtp.port,callback:function(e){t.$set(t.formMailSmtp,"port",e)},expression:"formMailSmtp.port"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}})],1)],1),t._v(" "),"TLS"!=t.formMailSmtp.encryption?a("FormItem",{attrs:{label:"自动TLS"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("i-switch",{model:{value:t.formMailSmtp.autotls,callback:function(e){t.$set(t.formMailSmtp,"autotls",e)},expression:"formMailSmtp.autotls"}},[a("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),t._v(" "),a("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Tooltip",{attrs:{transfer:!0,"max-width":"360",content:"默认情况下，如果服务器支持TLS加密，则会自动使用TLS加密（推荐）。在某些情况下，由于服务器配置错误可能会导致问题，则需要将其禁用。"}},[a("Button",{attrs:{type:"info"}},[t._v("tips")])],1)],1)],1)],1):t._e(),t._v(" "),a("FormItem",{attrs:{label:"认证"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("i-switch",{model:{value:t.formMailSmtp.auth,callback:function(e){t.$set(t.formMailSmtp,"auth",e)},expression:"formMailSmtp.auth"}},[a("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),t._v(" "),a("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1)],1)],1),t._v(" "),t.formMailSmtp.auth?a("FormItem",{attrs:{label:"SMTP用户名"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{model:{value:t.formMailSmtp.user,callback:function(e){t.$set(t.formMailSmtp,"user",e)},expression:"formMailSmtp.user"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Tooltip",{attrs:{transfer:!0,"max-width":"360",content:"如果使用QQ邮件服务，请注意对于@qq.com的邮件地址，仅输入@前面的部分，对于@vip.qq.com的邮件地址，可能需填入完整的地址"}},[a("Button",{attrs:{type:"info"}},[t._v("tips")])],1)],1)],1)],1):t._e(),t._v(" "),t.formMailSmtp.auth?a("FormItem",{attrs:{label:"SMTP密码"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{type:"password",password:""},model:{value:t.formMailSmtp.pass,callback:function(e){t.$set(t.formMailSmtp,"pass",e)},expression:"formMailSmtp.pass"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}})],1)],1):t._e(),t._v(" "),a("FormItem",{attrs:{label:"发件人邮箱"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"默认与用户名相同，需要为邮件格式"},model:{value:t.formMailSmtp.from.address,callback:function(e){t.$set(t.formMailSmtp.from,"address",e)},expression:"formMailSmtp.from.address"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}})],1)],1),t._v(" "),a("FormItem",{attrs:{label:"收件人邮箱"}},[a("Row",[a("Col",{attrs:{span:"12"}},[t._l(t.formMailSmtp.to,function(e){return a("Tag",{key:e.address,attrs:{closable:"",name:e.address},on:{"on-close":t.CloseTagToEmail}},[t._v(t._s(e.address))])}),t._v(" "),a("Button",{attrs:{icon:"ios-add",type:"dashed",size:"small"},on:{click:t.ModalAddToEmail}},[t._v("添加")])],2),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Tooltip",{attrs:{transfer:!0,"max-width":"360",content:"收件人邮箱只有在触发消息推送选项且邮件服务启用的条件下才会收到邮件"}},[a("Button",{attrs:{type:"info"}},[t._v("tips")])],1)],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"测试邮箱"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{placeholder:"测试邮箱不会被保存"},model:{value:t.formMailSmtp.test,callback:function(e){t.$set(t.formMailSmtp,"test",e)},expression:"formMailSmtp.test"}})],1),t._v(" "),a("Col",{attrs:{span:"1"}}),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Tooltip",{attrs:{transfer:!0,"max-width":"360",content:"发送测试邮件会使用当前表单填写的配置信息而不是已经保存过的配置信息。全局默认的发送超时时间为10s，如有需要请自行修改。"}},[a("Button",{attrs:{type:"success",loading:t.loadingSendTest},on:{click:t.SendTest}},[t._v("发送")])],1)],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"发邮超时时间"}},[a("InputNumber",{attrs:{min:1},model:{value:t.formMailSmtp.timeout,callback:function(e){t.$set(t.formMailSmtp,"timeout",e)},expression:"formMailSmtp.timeout"}})],1),t._v(" "),a("FormItem",{attrs:{label:"启用状态"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("i-switch",{model:{value:t.formMailSmtp.status,callback:function(e){t.$set(t.formMailSmtp,"status",e)},expression:"formMailSmtp.status"}},[a("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),t._v(" "),a("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1)],1)],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary",loading:t.loadingEditEmail},on:{click:t.EditEmail}},[t._v("保存")])],1)],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"消息推送",name:"4"}},[a("Card",{staticStyle:{width:"600px"},attrs:{bordered:!1,"dis-hover":!0}},[a("Alert",[t._v("由于邮件发送没有使用异步任务"),a("br"),a("br"),t._v("\n            因此开启了邮件推送模块的响应时间会有相应延迟"),a("br"),a("br"),t._v("\n            如，用户点击登录 ~ 登录成功跳转的响应时间 = 正常处理时间 +\n            邮件发送时间")]),t._v(" "),a("Form",{attrs:{"label-width":140}},[t._l(t.listPush,function(e,o){return a("FormItem",{key:o,attrs:{label:e.note}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("i-switch",{model:{value:t.listPush[o].enable,callback:function(e){t.$set(t.listPush[o],"enable",e)},expression:"listPush[index].enable"}},[a("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),t._v(" "),a("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1)],1)],1)}),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary",loading:t.loadingEditPush},on:{click:t.EditPush}},[t._v("保存")])],1)],2)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"安全配置",name:"5"}},[a("Card",{staticStyle:{width:"600px"},attrs:{bordered:!1,"dis-hover":!0}},[a("Form",{attrs:{"label-width":140}},[t._l(t.listSafe,function(e,o){return a("FormItem",{key:o,attrs:{label:e.note}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("i-switch",{model:{value:t.listSafe[o].enable,callback:function(e){t.$set(t.listSafe[o],"enable",e)},expression:"listSafe[index].enable"}},[a("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),t._v(" "),a("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)],1)],1)],1)}),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary",loading:t.loadingEditSafe},on:{click:t.SetSafeConfig}},[t._v("保存")])],1)],2)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"系统更新",name:"6"}},[a("Card",{staticStyle:{width:"600px"},attrs:{bordered:!1,"dis-hover":!0}},[a("Form",{attrs:{"label-width":140}},[a("FormItem",{attrs:{label:"当前版本"}},[a("Badge",[t._v(" "+t._s(t.version.current_verson)+" ")])],1),t._v(" "),a("FormItem",{attrs:{label:"支持PHP版本"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("span",[t._v(t._s(t.version.php_version))])])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"支持数据库"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("span",[t._v(t._s(t.version.database))])])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"开源地址"}},[a("Row",[a("Badge",[a("a",{attrs:{href:t.version.github,target:"_blank"}},[t._v("GitHub")])])],1),t._v(" "),a("Row",[a("Badge",[a("a",{attrs:{href:t.version.gitee,target:"_blank"}},[t._v("Gitee")])])],1)],1),t._v(" "),a("FormItem",[a("Tooltip",{attrs:{"max-width":"300",content:"此操作是通过读取位于GitHub和Gitee公开仓库(witersen/update)的配置文件进行软件更新检测 所以需要软件所在主机能够访问外网",placement:"top",transfer:""}},[a("Button",{attrs:{type:"primary",loading:t.loadingCheckUpdate},on:{click:function(e){t.CheckUpdate()}}},[t._v("检测更新")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("Modal",{attrs:{title:"最新版本信息"},model:{value:t.modalSofawareUpdateGet,callback:function(e){t.modalSofawareUpdateGet=e},expression:"modalSofawareUpdateGet"}},[a("Scroll",[a("Form",{ref:"formUpdate",attrs:{model:t.formUpdate,"label-width":90}},[a("FormItem",{attrs:{label:"最新版本"}},[a("Badge",{attrs:{dot:""}},[t._v("\n            "+t._s(t.formUpdate.version)+"\n          ")])],1),t._v(" "),a("FormItem",{attrs:{label:"修复内容"}},[a("ul",{staticStyle:{"list-style":"none"}},t._l(t.formUpdate.fixd.con,function(e,o){return a("li",{key:o},[a("span",[t._v(" ["+t._s(e.title)+"] "+t._s(e.content)+" ")])])}))]),t._v(" "),a("FormItem",{attrs:{label:"新增内容"}},[a("ul",{staticStyle:{"list-style":"none"}},t._l(t.formUpdate.add.con,function(e,o){return a("li",{key:o},[a("span",[t._v(" ["+t._s(e.title)+"] "+t._s(e.content)+" ")])])}))]),t._v(" "),a("FormItem",{attrs:{label:"移除内容"}},[a("ul",{staticStyle:{"list-style":"none"}},t._l(t.formUpdate.remove.con,function(e,o){return a("li",{key:o},[a("span",[t._v(" ["+t._s(e.title)+"] "+t._s(e.content)+" ")])])}))]),t._v(" "),a("FormItem",{attrs:{label:"完整程序包"}},[a("ul",{staticStyle:{"list-style":"none"}},t._l(t.formUpdate.release.download,function(e,o){return a("li",{key:o},[t._v("\n              ["+t._s(o+1)+"] "+t._s(e.nodeName)+"节点\n              "),a("ul",{staticStyle:{"list-style":"none"}},[a("li",[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v("下载")])])])])}))]),t._v(" "),a("FormItem",{attrs:{label:"升级程序包"}},[a("ul",{staticStyle:{"list-style":"none"}},t._l(t.formUpdate.update.download,function(e,o){return a("li",{key:o},[t._v("\n              ["+t._s(o+1)+"] "+t._s(e.nodeName)+"节点\n              "),a("ul",{staticStyle:{"list-style":"none"}},t._l(e.packages,function(e,o){return a("li",{key:o},[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.for.source)+" -> "+t._s(e.for.dest))])])}))])}))]),t._v(" "),a("FormItem",{attrs:{label:"升级步骤"}},[a("ul",{staticStyle:{"list-style":"none"}},t._l(t.formUpdate.update.step,function(e,o){return a("li",{key:o},[a("span",[t._v(" ["+t._s(e.title)+"] "+t._s(e.content)+" ")])])}))])],1)],1)],1),t._v(" "),a("Modal",{attrs:{title:"添加收件人邮箱"},on:{"on-ok":t.AddToEmail},model:{value:t.modalAddToEmail,callback:function(e){t.modalAddToEmail=e},expression:"modalAddToEmail"}},[a("Form",{nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",[a("Input",{attrs:{type:"text"},model:{value:t.tempToEmail,callback:function(e){t.tempToEmail=e},expression:"tempToEmail"}})],1)],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});