(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-548fbbb9"],{"7f7f":function(e,t,a){var s=a("86cc").f,c=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in c||a("9e1e")&&s(c,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},ada8:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-head"},[e._v("存储桶")]),a("div",{staticClass:"card-body"},[e.loading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:"",size:"large"}})],1):a("Row",{attrs:{gutter:24}},[1==e.userInfo.role.is_admin?a("Col",{staticClass:"ivu-mb",attrs:{xxl:6,xl:8,lg:12,md:12,sm:24,xs:24}},[a("Card",{staticClass:"list-goods-list-item"},[a("div",{staticClass:"main",on:{click:e.addClick}},[a("Icon",{attrs:{type:"ios-add",size:"18"}}),e._v(" 新建桶\n              ")],1)])],1):e._e(),e._l(e.data,(function(t){return a("Col",{key:t.id,staticClass:"ivu-mb",attrs:{xxl:6,xl:8,lg:12,md:12,sm:24,xs:24}},[a("Card",{staticClass:"list-goods-list-item"},[a("div",{staticStyle:{padding:"16px",height:"110px"}},[a("div",{staticClass:"name"},[e._v("\n                  "+e._s(t.name)+"\n                  "),a("Tag",{staticStyle:{float:"right"},attrs:{color:"green"}},[e._v(e._s(e.getName(t.type)))])],1),a("div",{staticClass:"explain"},[a("Tag",{attrs:{color:"default"}},[e._v("图片数量："+e._s(t.imgCount))]),a("br"),a("Tag",{attrs:{color:"default"}},[e._v("占用存储："+e._s(e.turnSize(t.imgSize)))])],1)]),1==e.userInfo.role.is_admin?a("div",{staticClass:"btn-main"},[a("div",{staticClass:"btn",on:{click:function(a){return e.editClick(t)}}},[e._v("编辑")]),a("div",{staticClass:"btn",on:{click:function(a){return e.del(t.id)}}},[e._v("删除")]),a("div",{staticStyle:{clear:"both"}})]):e._e()])],1)}))],2),a("div",{staticClass:"paging"},[a("Page",{attrs:{total:Number(e.total),current:e.page,"page-size":e.size,simple:e.$store.state.isMobile,"show-total":"","show-sizer":"","show-elevator":""},on:{"on-change":e.pageChange,"on-page-size-change":e.pageSizeChange}})],1)],1)])])]),a("Modal",{attrs:{width:600,title:e.edit?"编辑桶":"新增桶",loading:e.creating,"class-name":"vertical-center-modal"},on:{"on-ok":function(t){e.edit?e.editSave():e.addSave()}},model:{value:e.showCreate,callback:function(t){e.showCreate=t},expression:"showCreate"}},[a("Form",{ref:"create",attrs:{model:e.createData,"label-width":130}},[a("FormItem",{attrs:{label:"存储源"}},[a("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择存储源",disabled:e.edit},model:{value:e.createData.type,callback:function(t){e.$set(e.createData,"type",t)},expression:"createData.type"}},e._l(e.sourceList,(function(t,s,c){return a("Option",{key:c,attrs:{value:s}},[e._v(e._s(t))])})),1),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!edit"}],staticStyle:{"font-size":"12px",color:"red"}},[e._v("\n          * 添加成功后存储源不可修改\n        ")])],1),a("FormItem",{attrs:{label:"桶名称"}},[a("Input",{attrs:{placeholder:"请输入自定义名称"},model:{value:e.createData.name,callback:function(t){e.$set(e.createData,"name",t)},expression:"createData.name"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"local"!=e.createData.type,expression:"createData.type != 'local'"}],attrs:{label:"空间域名"}},[a("Input",{attrs:{placeholder:"请输入空间域名"},model:{value:e.createData.space_domain,callback:function(t){e.$set(e.createData,"space_domain",t)},expression:"createData.space_domain"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"local"!=e.createData.type,expression:"createData.type != 'local'"}],attrs:{label:e.getLabel("AccessKey")}},[a("Input",{attrs:{placeholder:"请输入"+e.getLabel("AccessKey")},model:{value:e.createData.AccessKey,callback:function(t){e.$set(e.createData,"AccessKey",t)},expression:"createData.AccessKey"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"local"!=e.createData.type,expression:"createData.type != 'local'"}],attrs:{label:e.getLabel("SecretKey")}},[a("Input",{attrs:{placeholder:"请输入"+e.getLabel("AccessKey")},model:{value:e.createData.SecretKey,callback:function(t){e.$set(e.createData,"SecretKey",t)},expression:"createData.SecretKey"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"cos"==e.createData.type||"oss"==e.createData.type||"obs"==e.createData.type,expression:"createData.type == 'cos' || createData.type == 'oss' || createData.type == 'obs'"}],attrs:{label:"所属地域"}},[a("Input",{attrs:{placeholder:"请输入所属地域"},model:{value:e.createData.region,callback:function(t){e.$set(e.createData,"region",t)},expression:"createData.region"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"local"!=e.createData.type,expression:"createData.type != 'local'"}],attrs:{label:"空间名称"}},[a("Input",{attrs:{placeholder:"请输入空间名称 bucket"},model:{value:e.createData.bucket,callback:function(t){e.$set(e.createData,"bucket",t)},expression:"createData.bucket"}})],1),"local"!=e.createData.type?a("div",{staticClass:"help"},[e._v("不知道如何填写？\n        "),a("a",{attrs:{href:"https://www.kancloud.cn/osuu234/lightpicture/2651042",target:"_blank"}},[e._v("点此查看教程")])]):e._e()],1)],1),a("Modal",{attrs:{width:"360"},model:{value:e.showDel,callback:function(t){e.showDel=t},expression:"showDel"}},[a("p",{staticStyle:{color:"#f60"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),a("span",[e._v("删除确认")])],1),a("div",[a("p",[e._v("\n        为安全起见，删除桶会删除系统内此桶的所有数据，但不会删除此桶内已有的图片文件；通俗的讲就是删除桶后不会影响之前上传的图片链接，但系统将会无法管理之前的图片，仍可以前往服务器图片文件所在文件夹或所属对象存储控制台管理\n      ")])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:"",loading:e.modal_loading},on:{click:e.delFunction}},[e._v("确认删除")])],1)])],1)},c=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("ade3")),i=a("365c"),n=a("ed08"),o=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{showCreate:!1,showDel:!1,creating:!0,loading:!0,modal_loading:!1,edit:!1,createData:{},sourceList:{},data:[],page:1,size:10,total:"",delId:""}},computed:d(d({},Object(o["c"])(["userInfo"])),{},{getLabel:function(){var e=this;return function(t){if("AccessKey"==t){if("oss"==e.createData.type)return"AccessKey ID";if("cos"==e.createData.type)return"secretId";if("kodo"==e.createData.type)return"AccessKey";if("uss"==e.createData.type)return"OperatorName";if("obs"==e.createData.type)return"Access Key"}else{if("oss"==e.createData.type)return"AccessKey Secret";if("cos"==e.createData.type)return"secretKey";if("kodo"==e.createData.type)return"SecretKey";if("uss"==e.createData.type)return"OperatorPwd";if("obs"==e.createData.type)return"Secret Access"}}},turnSize:function(){return function(e){return Object(n["a"])(e)}},getName:function(){var e=this;return function(t){for(var a in e.sourceList)if(t==a)return e.sourceList[a]}}}),created:function(){this._getData(),this._getStorageType()},methods:{del:function(e){this.delId=e,this.showDel=!0},delFunction:function(){var e=this;this.modal_loading=!0,Object(i["d"])({id:this.delId}).then((function(t){200==t.code?(e.$Message.success({background:!0,content:t.msg}),e._getData()):e.$Message.error({background:!0,content:t.msg}),e.modal_loading=!1,e.showDel=!1}))},addClick:function(){this.edit=!1,this.showCreate=!0,this.createData={name:"",type:"local",space_domain:"",AccessKey:"",SecretKey:"",region:"",bucket:""}},_getData:function(){var e=this;this.loading=!0,Object(i["l"])({page:this.page,size:this.size}).then((function(t){e.loading=!1,e.data=t.data.data,e.total=t.data.total}))},_getStorageType:function(){var e=this;Object(i["m"])().then((function(t){e.sourceList=t.data}))},addSave:function(){var e=this;if(!this.createData.name)return this.nextTick(),this.$Message.error({background:!0,content:"名称不能为空"});Object(i["x"])({name:this.createData.name,type:this.createData.type,space_domain:this.createData.space_domain,AccessKey:this.createData.AccessKey,SecretKey:this.createData.SecretKey,region:this.createData.region,bucket:this.createData.bucket}).then((function(t){200==t.code?(e.$Message.success({background:!0,content:t.msg}),e.showCreate=!1,e._getData()):e.$Message.error({background:!0,content:t.msg}),e.nextTick()}))},editClick:function(e){this.edit=!0,this.showCreate=!0,this.createData=d({},e)},editSave:function(){var e=this;if(!this.createData.name)return this.nextTick(),this.$Message.error({background:!0,content:"名称不能为空"});Object(i["E"])({id:this.createData.id,name:this.createData.name,type:this.createData.type,space_domain:this.createData.space_domain,AccessKey:this.createData.AccessKey,SecretKey:this.createData.SecretKey,region:this.createData.region,bucket:this.createData.bucket}).then((function(t){200==t.code?(e.$Message.success({background:!0,content:t.msg}),e.showCreate=!1,e._getData()):e.$Message.error({background:!0,content:t.msg}),e.nextTick()}))},pageChange:function(e){this.page=e,this._getData()},pageSizeChange:function(e){this.page=1,this.size=e,this._getData()},nextTick:function(){var e=this;this.creating=!1,this.$nextTick((function(){e.creating=!0}))}}},p=u,h=(a("bf96"),a("2877")),g=Object(h["a"])(p,s,c,!1,null,"1c0229ea",null);t["default"]=g.exports},bd28:function(e,t,a){},bf96:function(e,t,a){"use strict";a("bd28")}}]);