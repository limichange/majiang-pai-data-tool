webpackJsonp([1],{24:function(e,t,n){"use strict";var s=n(2),r=n(84),a=n(81),i=n.n(a);s.default.use(r.a),t.a=new r.a({routes:[{path:"/",name:"indexPage",component:i.a}]})},26:function(e,t){},27:function(e,t,n){function s(e){n(77)}var r=n(22)(n(52),n(83),s,null,null);e.exports=r.exports},50:function(e,t,n){"use strict";function s(){for(var e=[],t=0,n=0;n<9;++n)for(var s=0;s<4;++s)e[t]=n,t++;for(n=9;n<18;++n)for(s=0;s<4;++s)e[t]=n,t++;for(n=18;n<27;++n)for(s=0;s<4;++s)e[t]=n,t++;for(n=27;n<34;++n)for(s=0;s<4;++s)e[t]=n,t++;for(n=34;n<42;++n)e[t]=n,t++;return e}function r(e){return["1筒","2筒","3筒","4筒","5筒","6筒","7筒","8筒","9筒","1条","2条","3条","4条","5条","6条","7条","8条","9条","1万","2万","3万","4万","5万","6万","7万","8万","9万","中","发","白","东","西","南","北","春","夏","秋","冬","梅","兰","竹","菊"][e]}function a(e){return e>=0&&e<9?0:e>=9&&e<18?1:e>=18&&e<27?2:void 0}t.a={getMJType:a,shuffle:s,getType:r}},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),r=n(27),a=n.n(r),i=n(25),o=n.n(i),u=n(26),c=(n.n(u),n(24));s.default.use(o.a),new s.default({el:"#app",router:c.a,template:"<App/>",components:{App:a.a}})},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(54),r=n.n(s),a=n(50),i=n(55),o=n.n(i);t.default={name:"indexPage",mounted:function(){},data:function(){return{radio:"0",users:[[],[],[],[]],userSelected:0,pais:a.a.shuffle(),textarea:""}},watch:{users:function(){for(var e=this,t=[],n=0;n<14;n++)for(var s=0;s<4;s++)t.push(e.users[s][n]);e.textarea=r()(t.concat(e.pais))}},methods:{getType:a.a.getType,getMJType:a.a.getMJType,remove:function(e,t){var n=this;n.pais.push(t),n.users[e].splice(n.users[e].indexOf(t),1)},copy:function(){var e=this;o.a.copy(e.textarea).then(function(){e.$message({message:"复制成功",type:"success"})})},select:function(e){13!==this.users[this.radio].length&&(this.users[this.radio].push(e),this.pais.splice(this.pais.indexOf(e),1))}}}},76:function(e,t){},77:function(e,t){},81:function(e,t,n){function s(e){n(76)}var r=n(22)(n(53),n(82),s,"data-v-06732ae0",null);e.exports=r.exports},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"indexPage"},[n("h3",[e._v("牌场")]),e._v(" "),n("span",[e._v("筒")]),e._v(" "),e._l(e.pais,function(t){return 0===e.getMJType(t)?n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.select(t)}}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")]):e._e()}),e._v(" "),n("br"),e._v(" "),n("span",[e._v("条")]),e._v(" "),e._l(e.pais,function(t){return 1===e.getMJType(t)?n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.select(t)}}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")]):e._e()}),e._v(" "),n("br"),e._v(" "),n("span",[e._v("万")]),e._v(" "),e._l(e.pais,function(t){return 2===e.getMJType(t)?n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.select(t)}}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")]):e._e()}),e._v(" "),n("br"),e._v(" "),n("span",[e._v("风牌")]),e._v(" "),e._l(e.pais,function(t){return t<=33&&t>29?n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.select(t)}}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")]):e._e()}),e._v(" "),n("br"),e._v(" "),n("span",[e._v("花牌")]),e._v(" "),e._l(e.pais,function(t){return t>33||27===t||28===t||29===t?n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.select(t)}}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")]):e._e()}),e._v(" "),n("h3",[e._v("手牌")]),e._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:"0"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("玩家0")]),e._v(" "),e._l(e.users[0],function(t){return n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){e.remove(0,t)}}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")])}),e._v(" "),n("span",[e._v(e._s(e.users[0].length))]),e._v(" "),n("br"),e._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("玩家1")]),e._v(" "),e._l(e.users[1],function(t){return n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")])}),e._v(" "),n("span",[e._v(e._s(e.users[1].length))]),e._v(" "),n("br"),e._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("玩家2")]),e._v(" "),e._l(e.users[2],function(t){return n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")])}),e._v(" "),n("span",[e._v(e._s(e.users[2].length))]),e._v(" "),n("br"),e._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:"3"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("玩家3")]),e._v(" "),e._l(e.users[3],function(t){return n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n    "+e._s(e.getType(t))+"\n  ")])}),e._v(" "),n("span",[e._v(e._s(e.users[3].length))]),e._v(" "),n("br"),e._v(" "),n("h3",[e._v("代码")]),e._v(" "),n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}}),e._v(" "),n("el-button",{on:{click:e.copy}},[e._v("复制")])],2)},staticRenderFns:[]}},83:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}}},[51]);