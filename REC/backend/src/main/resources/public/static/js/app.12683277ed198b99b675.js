webpackJsonp([1],{"+skl":function(t,s){},"1AZf":function(t,s,a){"use strict";var e=a("bOdI"),i=a.n(e),n=a("9Xvl"),l="ivu-btn-group",o={name:"ButtonGroup",props:{size:{validator:function(t){return Object(n.a)(t,["small","large","default"])}},shape:{validator:function(t){return Object(n.a)(t,["circle","circle-outline"])}},vertical:{type:Boolean,default:!1}},computed:{classes:function(){var t;return[""+l,(t={},i()(t,l+"-"+this.size,!!this.size),i()(t,l+"-"+this.shape,!!this.shape),i()(t,l+"-vertical",this.vertical),t)]}}},r={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{class:t.classes},[t._t("default")],2)},staticRenderFns:[]},c=a("VU/8")(o,r,!1,null,null,null);s.a=c.exports},"1Zkw":function(t,s){},"2gzw":function(t,s){},LW0X:function(t,s,a){"use strict";var e="ivu-icon",i={name:"Icon",props:{type:String,size:[Number,String],color:String},computed:{classes:function(){return e+" "+e+"-"+this.type},styles:function(){var t={};return this.size&&(t["font-size"]=this.size+"px"),this.color&&(t.color=this.color),t}}},n={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("i",{class:t.classes,style:t.styles})},staticRenderFns:[]},l=a("VU/8")(i,n,!1,null,null,null);s.a=l.exports},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("bomf")},null,null).exports,l=a("/ocq"),o=a("KxKW"),r={data:function(){return{}},components:{Button:o.a},methods:{}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("router-link",{attrs:{to:"/system/stage"}},[s("Button",{attrs:{type:"primary"}},[this._v("进入系统")])],1)],1)},staticRenderFns:[]};var v=a("VU/8")(r,c,!1,function(t){a("WIva")},"data-v-5fa21714",null).exports,d={data:function(){return{}},props:{kind:{type:String,default:"项目"},name:{type:String,default:"北京大学学生选课系统"},domain:{type:String,default:"高等教育"},dates:{type:String,default:"2013-4-23"},creator:{type:String,default:"dean"}},components:{},methods:{}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"basic title"},[a("span",[t._v("score >>")]),t._v(" "),a("span",{staticClass:"focus-blue"},[t._v(t._s(t.name))])]),t._v(" "),a("div",{staticClass:"basic info"},[a("div",{staticClass:"left"}),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"right-name"},[t._v(t._s(t.kind)+"："+t._s(t.name))]),t._v(" "),a("div",{staticClass:"right-tag"},[a("span",[t._v("领域："+t._s(t.domain))]),t._v(" "),a("span",[t._v("创建时间："+t._s(t.dates))]),t._v(" "),a("span",[t._v("创建人："+t._s(t.creator))]),t._v(" "),a("span",{staticClass:"focus-blue"},[t._v("角色申请")]),t._v(" "),a("span",{staticClass:"focus-blue"},[t._v("管理员申请")])])])])])},staticRenderFns:[]};var _=a("VU/8")(d,u,!1,function(t){a("WYCR")},"data-v-fee2e45e",null).exports,p={data:function(){return{}},props:{target:{type:String,default:"st"}},components:{},methods:{}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav-view"},[a("div",{class:"st"===t.target?"locked":""},[a("router-link",{attrs:{to:"/system/stage"}},[t._v("场景")])],1),t._v(" "),a("div",[a("router-link",{attrs:{to:""}},[t._v("角色")])],1),t._v(" "),a("div",[a("router-link",{attrs:{to:""}},[t._v("数据")])],1),t._v(" "),a("div",[a("router-link",{attrs:{to:""}},[t._v("问题")])],1),t._v(" "),a("div",[a("router-link",{attrs:{to:""}},[t._v("解决方案")])],1)])},staticRenderFns:[]};var m={data:function(){return{BusinessData:[{id:1,name:"毕业选课结果",roles:"校教务部，院系教务",datas:"学生选课结果"},{id:2,name:"选课结束",roles:"学生，开课老师，计算中心",datas:"学生选课结果"}],UsageData:[{id:1,name:"毕业选课结果",roles:"校教务部，院系教务",datas:"学生选课结果"},{id:2,name:"选课结束",roles:"学生，开课老师，计算中心",datas:"学生选课结果"}]}},components:{Top:_,Nav:a("VU/8")(p,f,!1,function(t){a("gqBB")},"data-v-35bfdfe4",null).exports,Button:o.a},methods:{edit:function(t){this.$router.push({name:"usage",params:{type:"edit"}})}}},h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Top",{attrs:{name:"北京大学学生选课系统"}}),t._v(" "),a("div",{staticClass:"context"},[a("div",{staticClass:"context-nav"},[a("Nav",{attrs:{target:"st"}})],1),t._v(" "),a("div",{staticClass:"context-detail"},[a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-btn"},[a("Button",{attrs:{type:"primary"}},[t._v("新增业务场景")])],1),t._v(" "),a("div",{staticClass:"detail-body"},[t._m(0),t._v(" "),a("div",{staticClass:"detail-context"},t._l(t.BusinessData,function(s){return a("div",{key:s.id,staticClass:"detail-item"},[a("div",{staticClass:"col-name"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"col-roles"},[t._v(t._s(s.roles))]),t._v(" "),a("div",{staticClass:"col-datas"},[t._v(t._s(s.datas))]),t._v(" "),t._m(1,!0)])}))])]),t._v(" "),a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-btn"},[a("Button",{attrs:{type:"primary"}},[t._v("新增用况场景")])],1),t._v(" "),a("div",{staticClass:"detail-body"},[t._m(2),t._v(" "),a("div",{staticClass:"detail-context"},t._l(t.UsageData,function(s){return a("div",{key:s.id,staticClass:"detail-item"},[a("div",{staticClass:"col-name"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"col-roles"},[t._v(t._s(s.roles))]),t._v(" "),a("div",{staticClass:"col-datas"},[t._v(t._s(s.datas))]),t._v(" "),a("div",{staticClass:"col-operate"},[a("span",{on:{click:function(a){t.edit(s.id)}}},[t._v("设置")]),t._v(" "),a("span",[t._v("删除")])])])}))])])])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail-head"},[a("div",{staticClass:"col-name"},[t._v("业务场景名称")]),t._v(" "),a("div",{staticClass:"col-roles"},[t._v("相关角色")]),t._v(" "),a("div",{staticClass:"col-datas"},[t._v("相关数据")]),t._v(" "),a("div",{staticClass:"col-operate"},[t._v("操作")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-operate"},[a("span",[t._v("设置")]),t._v(" "),a("span",[t._v("删除")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail-head"},[a("div",{staticClass:"col-name"},[t._v("用况场景名称")]),t._v(" "),a("div",{staticClass:"col-roles"},[t._v("相关角色")]),t._v(" "),a("div",{staticClass:"col-datas"},[t._v("相关数据")]),t._v(" "),a("div",{staticClass:"col-operate"},[t._v("操作")])])}]};var C=a("VU/8")(m,h,!1,function(t){a("oWLF")},"data-v-784517fc",null).exports,b={data:function(){return{}},props:{kind:{type:String,default:"用况场景"},name:{type:String,default:"北京大学学生选课系统"},creator:{type:String,default:"dean"},role:{type:String,default:"校教务部"}},components:{},methods:{}},g={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"basic title"},[a("span",[t._v("score >>")]),t._v(" "),a("span",{staticClass:"focus-blue"},[t._v(t._s(t.name))])]),t._v(" "),a("div",{staticClass:"basic info"},[a("div",{staticClass:"left"}),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"right-name"},[t._v(t._s(t.kind)+"："+t._s(t.name))]),t._v(" "),a("div",{staticClass:"right-tag"},[a("span",{staticClass:"focus-blue"},[t._v(t._s(t.creator))]),t._v(" "),a("span",[t._v("当前角色："+t._s(t.role)+" ")]),t._v(" "),a("span",{staticClass:"focus-btn"},[t._v("转换角色")])])])])])},staticRenderFns:[]};var y={data:function(){return{type:"",name:"",infos:[{role:"查找某些数据",system:"展示该课程详细信息"}]}},components:{TopMirror:a("VU/8")(b,g,!1,function(t){a("1Zkw")},"data-v-274db2c3",null).exports,Button:o.a},beforeMount:function(){console.log(this.type),this.type=this.$route.params.type,this.name="new"===this.type?"新增课程信息":"更新课程信息"},methods:{del:function(t){this.infos.splice(t,1)},add:function(){this.infos.push({})}}},x={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("TopMirror",{attrs:{kind:"用况场景",name:t.name}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"box2"},[t._m(2),t._v(" "),a("div",{staticClass:"box2-bottom"},[a("div",{staticClass:"box2-head"},[a("div",{staticClass:"col-order"},[t._v("顺序")]),t._v(" "),a("div",{staticClass:"col-role"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"col-system"},[t._v("系统")]),t._v(" "),a("div",{staticClass:"col-operate"})]),t._v(" "),a("div",{staticClass:"box2-body"},t._l(t.infos,function(s,e){return a("div",{key:e,staticClass:"box2-context"},[a("div",{staticClass:"col-order"},[t._v(t._s(e))]),t._v(" "),a("div",{staticClass:"col-role"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.role,expression:"item.role"}],domProps:{value:s.role},on:{input:function(a){a.target.composing||t.$set(s,"role",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-system"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.system,expression:"item.system"}],domProps:{value:s.system},on:{input:function(a){a.target.composing||t.$set(s,"system",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-operate"},[a("span",{staticClass:"focus-color",on:{click:function(s){t.del(e)}}},[t._v("删除")])])])}))]),t._v(" "),a("div",[a("span",{staticClass:"focus-color",on:{click:function(s){t.add()}}},[t._v("+新增")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top-btn"},[a("div",[a("button",[t._v("演化历史")]),t._v(" "),a("button",[t._v("演化")])]),t._v(" "),a("div",[a("button",[t._v("更新")]),t._v(" "),a("button",[t._v("取消")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box1"},[a("div",{staticClass:"ylevel"},[a("label",{attrs:{for:"name"}},[t._v("业务活动名称:")]),t._v(" "),a("input",{staticClass:"xlevel",attrs:{id:"name"}})]),t._v(" "),a("div",{staticClass:"ylevel"},[a("label",{attrs:{for:"prior"}},[t._v("优先级:")]),t._v(" "),a("select",{staticClass:"xlevel",attrs:{id:"prior"}},[a("option",[t._v("高")]),t._v(" "),a("option",[t._v("低")])])]),t._v(" "),a("div",{staticClass:"ylevel"},[a("label",{attrs:{for:"precon"}},[t._v("前提条件:")]),t._v(" "),a("input",{staticClass:"xlevel",attrs:{id:"precon"}})]),t._v(" "),a("div",{staticClass:"ylevel"},[a("label",{attrs:{for:"postcon"}},[t._v("结束条件:")]),t._v(" "),a("input",{staticClass:"xlevel",attrs:{id:"postcon"}})]),t._v(" "),a("div",{staticClass:"ylevel"},[a("label",{attrs:{for:"data"}},[t._v("相关数据:")]),t._v(" "),a("input",{staticClass:"xlevel",attrs:{id:"data"}})]),t._v(" "),a("div",{staticClass:"ylevel"},[a("label",{attrs:{for:"discribe"}},[t._v("描述:")]),t._v(" "),a("textarea",{staticClass:"xlevel",attrs:{id:"discribe"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"up"},[s("span",[this._v("交互序列：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box3"},[a("div",{staticClass:"up"},[a("span",[t._v("相关业务活动：")])]),t._v(" "),a("p",[a("span",{staticClass:"focus-color"},[t._v("维护课程信息")])]),t._v(" "),a("p",[a("button",[t._v("关联业务活动")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box4"},[a("div",{staticClass:"up"},[a("span",[t._v("评论：")])]),t._v(" "),a("p",[a("button",[t._v("发表评论")])])])}]};var k=a("VU/8")(y,x,!1,function(t){a("2gzw")},"data-v-4c2ead60",null).exports;e.a.use(l.a);var $=new l.a({routes:[{path:"/",name:"index",component:v},{path:"/system/stage",name:"stage",component:C},{path:"/system/stage/usage",name:"usage",component:k}]});a("+skl");e.a.config.productionTip=!1,new e.a({el:"#app",router:$,components:{App:n},template:"<App/>"})},WIva:function(t,s){},WYCR:function(t,s){},bomf:function(t,s){},gMJu:function(t,s,a){"use strict";var e=a("bOdI"),i=a.n(e),n=a("EMb8"),l=a("9Xvl"),o="ivu-btn",r={name:"Button",components:{Icon:n.a},props:{type:{validator:function(t){return Object(l.a)(t,["primary","ghost","dashed","text","info","success","warning","error","default"])}},shape:{validator:function(t){return Object(l.a)(t,["circle","circle-outline"])}},size:{validator:function(t){return Object(l.a)(t,["small","large","default"])}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator:function(t){return Object(l.a)(t,["button","submit","reset"])}},icon:String,long:{type:Boolean,default:!1}},data:function(){return{showSlot:!0}},computed:{classes:function(){var t;return[""+o,(t={},i()(t,o+"-"+this.type,!!this.type),i()(t,o+"-long",this.long),i()(t,o+"-"+this.shape,!!this.shape),i()(t,o+"-"+this.size,!!this.size),i()(t,o+"-loading",null!=this.loading&&this.loading),i()(t,o+"-icon-only",!this.showSlot&&(!!this.icon||this.loading)),t)]}},methods:{handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.showSlot=void 0!==this.$slots.default}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{class:t.classes,attrs:{type:t.htmlType,disabled:t.disabled},on:{click:t.handleClick}},[t.loading?a("Icon",{staticClass:"ivu-load-loop",attrs:{type:"load-c"}}):t._e(),t._v(" "),t.icon&&!t.loading?a("Icon",{attrs:{type:t.icon}}):t._e(),t._v(" "),t.showSlot?a("span",{ref:"slot"},[t._t("default")],2):t._e()],1)},staticRenderFns:[]},v=a("VU/8")(r,c,!1,null,null,null);s.a=v.exports},gqBB:function(t,s){},oWLF:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.12683277ed198b99b675.js.map