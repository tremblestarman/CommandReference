!function(e){var r={};function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=11)}([function(e,r,n){"use strict";function t(e,r,n,t,s,a,o,i){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,d="function"==typeof e?e.options:e;if(r&&(d.render=r,d.staticRenderFns=n,d._compiled=!0),t&&(d.functional=!0),a&&(d._scopeId=a),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=c):s&&(c=i?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(e,r){return c.call(r),u(e,r)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:d}}n.d(r,"a",function(){return t})},function(e,r,n){"use strict";function t(e,r){for(var n=[],t={},s=0;s<r.length;s++){var a=r[s],o=a[0],i={id:e+":"+s,css:a[1],media:a[2],sourceMap:a[3]};t[o]?t[o].parts.push(i):n.push(t[o]={id:o,parts:[i]})}return n}n.r(r),n.d(r,"default",function(){return m});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,d=function(){},u=null,p="data-vue-ssr-id",A="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,r,n,s){c=n,u=s||{};var o=t(e,r);return f(o),function(r){for(var n=[],s=0;s<o.length;s++){var i=o[s];(l=a[i.id]).refs--,n.push(l)}r?f(o=t(e,r)):o=[];for(s=0;s<n.length;s++){var l;if(0===(l=n[s]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}}function f(e){for(var r=0;r<e.length;r++){var n=e[r],t=a[n.id];if(t){t.refs++;for(var s=0;s<t.parts.length;s++)t.parts[s](n.parts[s]);for(;s<n.parts.length;s++)t.parts.push(h(n.parts[s]));t.parts.length>n.parts.length&&(t.parts.length=n.parts.length)}else{var o=[];for(s=0;s<n.parts.length;s++)o.push(h(n.parts[s]));a[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function h(e){var r,n,t=document.querySelector("style["+p+'~="'+e.id+'"]');if(t){if(c)return d;t.parentNode.removeChild(t)}if(A){var s=l++;t=i||(i=v()),r=_.bind(null,t,s,!1),n=_.bind(null,t,s,!0)}else t=v(),r=function(e,r){var n=r.css,t=r.media,s=r.sourceMap;t&&e.setAttribute("media",t);u.ssrId&&e.setAttribute(p,r.id);s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,t),n=function(){t.parentNode.removeChild(t)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}var g,b=(g=[],function(e,r){return g[e]=r,g.filter(Boolean).join("\n")});function _(e,r,n,t){var s=n?"":t.css;if(e.styleSheet)e.styleSheet.cssText=b(r,s);else{var a=document.createTextNode(s),o=e.childNodes;o[r]&&e.removeChild(o[r]),o.length?e.insertBefore(a,o[r]):e.appendChild(a)}}},function(e,r){e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var n=function(e,r){var n=e[1]||"",t=e[3];if(!t)return n;if(r&&"function"==typeof btoa){var s=(o=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=t.sources.map(function(e){return"/*# sourceURL="+t.sourceRoot+e+" */"});return[n].concat(a).concat([s]).join("\n")}var o;return[n].join("\n")}(r,e);return r[2]?"@media "+r[2]+"{"+n+"}":n}).join("")},r.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},s=0;s<this.length;s++){var a=this[s][0];"number"==typeof a&&(t[a]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&t[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),r.push(o))}},r}},function(e,r){e.exports=Vue},function(e,r,n){"use strict";var t={name:"tag_filter",props:{tags:Array,maximum:Number,title:String,exclude:Boolean},methods:{toggle:function(e){if($(e.target).hasClass("badge-light")){if(this.maximum&&this.filter.length===this.maximum)return;$(e.target).removeClass("badge-light"),this.exclude_mode?($(e.target).addClass("badge-danger"),this.$data.excludes.push($(e.target).text())):($(e.target).addClass("badge-success"),this.$data.filter.push($(e.target).text()))}else{$(e.target).removeClass("badge-danger"),$(e.target).removeClass("badge-success"),$(e.target).addClass("badge-light");let r=this.filter.indexOf($(e.target).text());r>-1&&this.filter.splice(r,1),(r=this.excludes.indexOf($(e.target).text()))>-1&&this.excludes.splice(r,1)}$(e.target).blur(),this.$emit("update",this.filter,this.excludes)}},data:()=>({filter:[],excludes:[],exclude_mode:!1})},s=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"text-left"},[n("strong",[e._v(e._s(e.title))]),n("br"),e._v(" "),n("div",{staticClass:"container"},[n("p",e._l(e.tags,function(r){return n("b-badge",{key:r,staticClass:"noselect",attrs:{href:"#",variant:"light"},on:{click:e.toggle}},[e._v(e._s(r))])})),e._v(" "),e.exclude?n("div",{staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.exclude_mode,expression:"exclude_mode"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exclude"},domProps:{checked:Array.isArray(e.exclude_mode)?e._i(e.exclude_mode,null)>-1:e.exclude_mode},on:{change:function(r){var n=e.exclude_mode,t=r.target,s=!!t.checked;if(Array.isArray(n)){var a=e._i(n,null);t.checked?a<0&&(e.exclude_mode=n.concat([null])):a>-1&&(e.exclude_mode=n.slice(0,a).concat(n.slice(a+1)))}else e.exclude_mode=s}}}),e._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"exclude"}},[e._v("\n                排除标签模式\n            ")])]):e._e()])])};s._withStripped=!0;var a=n(0),o=!1;var i=function(e){o||n(8)},l=Object(a.a)(t,s,[],!1,i,null,null);l.options.__file="src\\filter\\tags.vue";r.a=l.exports},function(e,r){e.exports=bootstrapVue},function(e,r){e.exports=$},function(e,r,n){(e.exports=n(2)(!0)).push([e.i,"\n.noselect {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\n}\r\n","",{version:3,sources:["D:/PcaProjects/CommandReference/src/filter/src/filter/tags.vue"],names:[],mappings:";AAuEA;IACA,4BAAA,CAAA,gBAAA;IACA,0BAAA,GAAA,YAAA;KACA,yBAAA,GAAA,oBAAA;OACA,uBAAA,GAAA,aAAA;QACA,sBAAA,GAAA,4BAAA;YACA,kBAAA,GAAA;oEACA;CACA",file:"tags.vue",sourcesContent:['<template>\r\n    <div class="text-left">\r\n        <strong>{{title}}</strong><br/>\r\n        <div class="container">\r\n            <p><b-badge class="noselect" v-on:click="toggle" href="#" variant="light" v-for="tag in tags" :key="tag">{{tag}}</b-badge></p>\r\n            <div v-if="exclude" class="form-check">\r\n                <input v-model="exclude_mode" class="form-check-input" type="checkbox" id="exclude">\r\n                <label class="form-check-label" for="exclude">\r\n                    排除标签模式\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: \'tag_filter\',\r\n    props: {\r\n        tags: Array,\r\n        maximum: Number,\r\n        title: String,\r\n        exclude: Boolean\r\n    },\r\n    methods: {\r\n        toggle: function(event) {\r\n            if ($(event.target).hasClass(\'badge-light\')) {\r\n                if (this.maximum && this.filter.length === this.maximum) {\r\n                    return;\r\n                }\r\n\r\n                $(event.target).removeClass(\'badge-light\');\r\n\r\n                if (this.exclude_mode) {\r\n                    $(event.target).addClass(\'badge-danger\');\r\n                    this.$data.excludes.push($(event.target).text());\r\n                } else {\r\n                    $(event.target).addClass(\'badge-success\');\r\n                    this.$data.filter.push($(event.target).text());\r\n                }\r\n\r\n            } else {\r\n                $(event.target).removeClass(\'badge-danger\');\r\n                $(event.target).removeClass(\'badge-success\');\r\n\r\n                $(event.target).addClass(\'badge-light\');\r\n                let index = this.filter.indexOf($(event.target).text());\r\n                if (index > -1) {\r\n                    this.filter.splice(index, 1);\r\n                }\r\n\r\n                index = this.excludes.indexOf($(event.target).text());\r\n                if (index > -1) {\r\n                    this.excludes.splice(index, 1);\r\n                }\r\n            }\r\n            $(event.target).blur();\r\n            this.$emit(\'update\', this.filter, this.excludes);\r\n        }\r\n    },\r\n    data () {\r\n        return {\r\n            filter: [],\r\n            excludes: [],\r\n            exclude_mode: false\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.noselect {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\r\n}\r\n</style>'],sourceRoot:""}])},function(e,r,n){var t=n(7);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n(1).default)("e6cacfac",t,!1,{})},function(e,r,n){e.exports=n.p+"assets/39daa58b955d3d55ffa5d59d12bd1280.png"},,function(e,r,n){"use strict";n.r(r);var t=n(3),s=n.n(t),a=n(5),o=n.n(a);let i=null;var l={name:"title_search",methods:{lazy_search:function(){i&&clearTimeout(i),i=setTimeout(()=>{this.$emit("update",this.value),i=null},1e3)}},data:()=>({value:""})},c=function(){var e=this,r=e.$createElement;return(e._self._c||r)("b-form-input",{attrs:{id:"search",placeholder:"搜索标题...",type:"text"},on:{input:e.lazy_search},model:{value:e.value,callback:function(r){e.value=r},expression:"value"}})};c._withStripped=!0;var d=n(0),u=Object(d.a)(l,c,[],!1,null,null,null);u.options.__file="src\\filter\\search.vue";var p=u.exports,A=n(4),m={name:"version_selector",props:{min:Number,max:Number},methods:{update:function(){this.$emit("update",this.version_selected)}},data:()=>({version_selected:"任意版本"}),computed:{options:function(){let e=[];e.push("任意版本");for(let r=this.max;r>=this.min;r--)e.push("1."+r.toString());return e}}},f=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"text-left"},[n("span",{staticClass:"bmd-form-group is-filled"},[n("b-form-select",{attrs:{options:e.options,id:"version"},model:{value:e.version_selected,callback:function(r){e.version_selected=r},expression:"version_selected"}})],1)])};f._withStripped=!0;var v=!1;var h=function(e){v||n(21)},g=Object(d.a)(m,f,[],!1,h,null,null);g.options.__file="src\\filter\\version.vue";var b=g.exports,_={name:"thread",props:{properties:Object,url:String},methods:{variant:function(e){return"过时"===e?"danger":"即将过时"===e?"warning":"部分过时"===e?"danger":"预览版"===e?"success":"secondary"},get_tips:function(e){return"过时"===e?"在最新正式版失效":"即将过时"===e?"在最新预览版失效":"部分过时"===e?"帖子部分内容已经过时":"预览版"===e?"仅在预览版有效":""}},computed:{version:function(){return this.properties["version-min"]?"1."+this.properties["version-min"].toString()+(this.properties["version-min"]===this.properties["version-max"]?"":"-1."+this.properties["version-max"].toString()):"-"}}},x=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("b-row",{staticClass:"thread text-left"},[n("b-col",{staticClass:"col-12 col-md-4"},[n("div",{staticClass:"box"},[n("a",{staticClass:"title",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.properties.title))])])]),e._v(" "),n("b-col",{staticClass:"col-12 col-md-4"},[n("div",{staticClass:"box"},[e.properties["version-min"]?n("b-badge",{staticClass:"noselect tag",attrs:{variant:"success"}},[e._v(e._s(e.version))]):e._e(),e._v(" "),e._l(e.properties.tags,function(r){return n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:e.get_tips(r),expression:"get_tips(tag)",modifiers:{hover:!0}}],key:r,staticClass:"noselect tag",attrs:{variant:e.variant(r)}},[e._v(e._s(r))])})],2)]),e._v(" "),n("b-col",{staticClass:"col-12 col-md-4"},[n("b-row",[e.properties.authors&&e.properties.authors.length>0?n("b-col",[n("div",{staticClass:"box"},[n("span",{staticClass:"align-middle"},[e._v("\n                    "+e._s(e.properties.authors[0])+"\n                    "),e.properties.authors.length>1?n("div",{staticClass:"d-inline"},[n("b-button",{staticClass:"hint",attrs:{variant:"link",size:"sm"}},[n("span",{staticClass:"authors"},[e._v(e._s(e.properties.authors.slice(1).map(function(e){return", "+e}).join("")))])])],1):e._e()])])]):e._e(),e._v(" "),n("b-col",[n("div",{staticClass:"box"},[n("span",{staticClass:"align-middle"},[e._v(e._s(e.properties["last-update"]||"未知/不适用"))])])])],1)],1)],1)};x._withStripped=!0;var C=!1;var y=function(e){C||n(17)},w=Object(d.a)(_,x,[],!1,y,null,null);w.options.__file="src\\threads\\thread.vue";var k={name:"category",components:{thread:w.exports},props:{header:String,threads:Object,sorted:Array,name:String,shown:{default:!0,type:Boolean}},computed:{collapse_name(){return this.name+"_collapse"}}},S=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",[n("div",{staticClass:"card category"},[n("header",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.collapse_name,expression:"collapse_name"}],staticClass:"card-header category-header text-left"},[n("div",{staticClass:"header-content"},[n("span",{staticClass:"when-opened"},[e._v("▲")]),n("span",{staticClass:"when-closed"},[e._v("▼")]),e._v(e._s(e.header)+"\n            ")])]),e._v(" "),n("b-collapse",{attrs:{visible:e.shown,id:e.collapse_name}},[n("div",{staticClass:"card-body"},[n("b-container",{attrs:{fluid:"true"}},e._l(e.sorted,function(r){return n("thread",{key:r,attrs:{properties:e.threads[r],url:r}})}))],1)])],1),e._v(" "),n("hr")])};S._withStripped=!0;var B=!1;var E=function(e){B||n(19)},$=Object(d.a)(k,S,[],!1,E,null,null);$.options.__file="src\\threads\\category.vue";var O=$.exports,I={name:"offset",props:{name:String}},j=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"offset",attrs:{id:this.name}})};j._withStripped=!0;var N=!1;var R=function(e){N||n(15)},T=Object(d.a)(I,j,[],!1,R,null,null);T.options.__file="src\\util\\offset.vue";var G=T.exports;function z(e,r,n,t){let s=(e=>{if("任意版本"===e)return e=>!0;let r=parseInt(e.substring(2));return e=>!e["version-min"]||e["version-min"]<=r&&r<=e["version-max"]})(e);let a=(e=>0===e.length?e=>!0:(e=e.toLowerCase(),r=>-1!==r.title.toLowerCase().indexOf(e)))(t);return e=>s(e)&&function(e){for(let r of n)if(-1!==e.tags.indexOf(r))return!1;for(let n of r)if(-1===e.tags.indexOf(n))return!1;return!0}(e)&&a(e)}var L={name:"category_manager",components:{category:O,offset:G},props:{threads:Array,tags:Array,exclusion:Array,version:String,title:String},computed:{raw:function(){return function(e,r){function n(e,r){let n=e.length;for(let t=0;t<e.length;t++)if(r(t)){n=t;break}return e.slice(0,n)}let t={},s=["命令快讯","编辑推荐"];t["命令快讯"]=n(n(e,n=>r[e[n]].recommended<1).sort((e,n)=>(r[e]["last-update"]||"")>(r[n]["last-update"]||"")?-1:(r[e]["last-update"]||"")<(r[n]["last-update"]||"")?1:0),e=>10===e),t["编辑推荐"]=n(e,n=>r[e[n]].recommended<2);for(let n of e)t[r[n].category]||(t[r[n].category]=[],s.push(r[n].category)),t[r[n].category].push(n);return[s,t]}((e=this.threads,Object.keys(e).sort((r,n)=>{if(e[r].recommended>e[n].recommended)return-1;if(e[r].recommended<e[n].recommended)return 1;let t=e[r].tags.indexOf("基础");return-1!=t!=(-1!=e[n].tags.indexOf("基础"))?-1!=t?-1:1:(e[r]["last-update"]||"")>(e[n]["last-update"]||"")?-1:(e[r]["last-update"]||"")<(e[n]["last-update"]||"")?1:0})),this.threads);var e},categories:function(){let e=function(e,r,n,t){let s=[],a={};for(let o=0;o<e.length;o++){let i=e[o],l=r[i].filter(e=>t(n[e]));l.length>0&&(s.push([i,"cat"+o.toString()]),a[i]=l)}return[s,a]}(this.raw[0],this.raw[1],this.threads,z(this.version,this.tags,this.exclusion,this.title));return this.$emit("update",e[0]),e}}},M=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"categories"},[n("hr"),e._v(" "),e._l(e.categories[0],function(r){return n("div",{key:r[1]},[n("offset",{attrs:{name:r[1]}}),e._v(" "),n("category",{attrs:{name:r[1],shown:"命令快讯"===r[0]||"编辑推荐"===r[0],header:r[0],sorted:e.categories[1][r[0]],threads:e.threads}})],1)})],2)};M._withStripped=!0;var P=Object(d.a)(L,M,[],!1,null,null,null);P.options.__file="src\\threads\\manager.vue";var U=P.exports,q={name:"advertisement",props:{pics:Object},methods:{open(e){window.open(e,"_blank")}}},D=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"wrapper"},[n("b-carousel",{attrs:{controls:"",indicators:"",background:"#ababab",id:"advertisement",interval:3e3}},e._l(e.pics||{},function(r,t){return n("b-carousel-slide",{key:t,attrs:{"img-src":t},nativeOn:{click:function(n){e.open(r)}}})}))],1)};D._withStripped=!0;var H=!1;var K=function(e){H||n(13)},Y=Object(d.a)(q,D,[],!1,K,null,null);Y.options.__file="src\\adv.vue";var F={name:"introduction",components:{adv:Y.exports},props:{pics:Array}},V=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",[e._m(0),e._v(" "),n("hr"),e._v(" "),n("b-row",[n("b-col",[n("div",{staticClass:"d-inline-block align-middle text-center"},[n("p",{staticClass:"text-left d-inline-block"},[e._v("\n                命令资源大全是一个命令相关资源的索引网站，各位可以："),n("br"),e._v("\n                1. 阅读各新人教程，学习命令 "),n("br"),e._v("\n                2. 搜索各种黑科技，制作更好的系统和地图 "),n("br"),e._v("\n                3. 找到需要的生成器软件，加快系统编写效率 "),n("br"),n("br"),e._v("\n                各教程及生成器作者更可以在此宣传各位的作品！\n            ")]),e._v(" "),n("p",[e._v("\n                命令资源大全（原新人手册）进行了大量更新，现在急需各位帮助更新！"),n("br"),e._v("\n                详情请点击\n                "),n("a",{attrs:{href:"https://github.com/pca006132/CommandReference"}},[e._v("命令资源大全(GitHub)")]),e._v("。\n            ")])])])],1),e._v(" "),n("b-row",[n("b-col",{staticClass:"col-12 offset-md-3 col-md-6"},[n("adv",{attrs:{pics:e.pics}})],1)],1)],1)},J=[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"d-block"},[r("div",{staticClass:"d-inline-block"},[r("img",{attrs:{src:n(9)}})]),this._v(" "),r("br",{staticClass:"d-md-none"}),this._v(" "),r("div",{staticClass:"d-inline-block align-middle"},[r("h1",{attrs:{id:"intro"}},[this._v("命令资源大全")]),this._v(" "),r("p",[this._v("您的命令参考索引")])])])}];V._withStripped=!0;var Q=Object(d.a)(F,V,J,!1,null,null,null);Q.options.__file="src\\intro.vue";var W=Q.exports,X={name:"app",components:{search:p,tags:A.a,version:b,manager:U,intro:W,offset:G},props:{version_min:Number,version_max:Number,tags:Array,threads:Array,words:Array,pics:Object},data:()=>({categories:[],filter_tags:[],exclude_tags:[],title:"",version:"任意版本"}),methods:{update_categories(e){this.categories=e},update_tags(e,r){this.filter_tags=e,this.exclude_tags=r},update_title(e){this.title=e},update_version(e){this.version=e}}},Z=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("b-navbar",{attrs:{variant:"dark",type:"dark",sticky:"true",toggleable:"md"}},[t("b-navbar-brand",{attrs:{href:"#intro"}},[t("img",{staticClass:"d-inline-block align-top",staticStyle:{width:"1.5em"},attrs:{src:n(9)}}),e._v(" 命令资源大全\n        ")]),e._v(" "),t("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),t("b-collapse",{attrs:{"is-nav":"true",id:"nav_collapse"}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:"#words"}},[e._v("常用字词表")]),e._v(" "),t("b-nav-item",{attrs:{to:"./tool.html"}},[e._v("添加帖子工具")]),e._v(" "),t("b-nav-item",{attrs:{to:"https://github.com/pca006132/CommandReference"}},[e._v("GitHub")]),e._v(" "),t("b-nav-item",{staticClass:"d-md-none",attrs:{to:"#searchbar"}},[e._v("搜索")]),e._v(" "),t("b-nav-item-dropdown",{attrs:{variant:"dark",type:"dark",text:"分类",right:""}},e._l(e.categories,function(r){return t("b-dropdown-item",{key:r[1],attrs:{variant:"dark",type:"dark",href:"#"+r[1]}},[e._v("\n                        "+e._s(r[0])+"\n                    ")])}))],1)],1)],1),e._v(" "),t("b-container",{attrs:{fluid:"true",id:"container"}},[t("b-row",{attrs:{fluid:"true"}},[t("main",{staticClass:"col-12 col-md-10 bd-content",attrs:{id:"content"}},[t("intro",{attrs:{pics:e.pics}}),e._v(" "),t("manager",{attrs:{threads:e.threads,title:e.title,tags:e.filter_tags,exclusion:e.exclude_tags,version:e.version},on:{update:e.update_categories}}),e._v(" "),t("offset",{attrs:{name:"words"}}),e._v(" "),t("h3",{staticClass:"text-left"},[e._v("常用字词表")]),e._v(" "),t("b-table",{staticClass:"text-left",attrs:{striped:"",hover:"",items:e.words}})],1),e._v(" "),t("b-col",{staticClass:"col-12 col-md-2 order-md-first",attrs:{id:"sidebar"}},[t("hr",{staticClass:"d-md-none"}),e._v(" "),t("b-form-group",[t("offset",{attrs:{name:"searchbar"}}),e._v(" "),t("search",{on:{update:e.update_title}}),e._v(" "),t("hr"),e._v(" "),t("tags",{attrs:{exclude:!0,title:"筛选 Tag",tags:e.tags},on:{update:e.update_tags}}),e._v(" "),t("hr"),e._v(" "),t("version",{attrs:{min:e.version_min,max:e.version_max},on:{update:e.update_version}})],1)],1)],1)],1)],1)};Z._withStripped=!0;var ee=!1;var re=function(e){ee||n(23)},ne=Object(d.a)(X,Z,[],!1,re,null,null);ne.options.__file="src\\app.vue";var te=ne.exports,se=n(6),ae=n.n(se);s.a.use(o.a),ae.a.get("https://raw.githubusercontent.com/pca006132/CommandReference/master/data.json",e=>{let r=JSON.parse(e);new s.a({el:"#app",render:e=>e(te,{props:{version_min:r.version.min,version_max:r.version.max,tags:r.tags,threads:r.threads,words:r["common-words"],pics:r.adv}}),mounted(){this.$nextTick(function(){0!=window.location.hash.length&&ae()("html, body").animate({scrollTop:ae()(window.location.hash).offset().top},50)})}})})},function(e,r,n){(e.exports=n(2)(!0)).push([e.i,"\n.wrapper {\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n","",{version:3,sources:["D:/PcaProjects/CommandReference/src/src/adv.vue"],names:[],mappings:";AAwBA;IACA,gBAAA;IACA,mBAAA;CACA",file:"adv.vue",sourcesContent:['<template>\r\n    <div class="wrapper">\r\n        <b-carousel controls indicators background="#ababab" id="advertisement" :interval="3000">\r\n            <b-carousel-slide v-for="(url, src) in (pics || {})" :key="src" :img-src="src" @click.native="open(url)">\r\n            </b-carousel-slide>\r\n        </b-carousel>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: \'advertisement\',\r\n    props: {\r\n        pics: Object\r\n    },\r\n    methods: {\r\n        open(url) {\r\n            window.open(url, \'_blank\');\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n    .wrapper {\r\n        margin-top: 1em;\r\n        margin-bottom: 1em;\r\n    }\r\n</style>\r\n'],sourceRoot:""}])},function(e,r,n){var t=n(12);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n(1).default)("2ac579c9",t,!1,{})},function(e,r,n){(e.exports=n(2)(!0)).push([e.i,"\n.offset {\n    top: -4em;\n    position: relative;\n}\n","",{version:3,sources:["D:/PcaProjects/CommandReference/src/util/src/util/offset.vue"],names:[],mappings:";AAYA;IACA,UAAA;IACA,mBAAA;CACA",file:"offset.vue",sourcesContent:['<template>\r\n    <div class="offset" :id="name"></div>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: \'offset\',\r\n    props: {\r\n        name: String\r\n    }\r\n}\r\n<\/script>\r\n<style>\r\n    .offset {\r\n        top: -4em;\r\n        position: relative;\r\n    }\r\n</style>\r\n'],sourceRoot:""}])},function(e,r,n){var t=n(14);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n(1).default)("f9776958",t,!1,{})},function(e,r,n){(e.exports=n(2)(!0)).push([e.i,'\n.hint {\r\n    padding: 0;\r\n    text-decoration: none;\r\n    display: inline;\n}\n.hint::after {\r\n    content: "...";\n}\n.hint:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    padding: 0;\r\n    display: inline;\n}\n.hint:focus::after {\r\n    content: "";\n}\n.authors {\r\n    display: none;\n}\n.hint:focus .authors {\r\n    display: inline;\n}\n.noselect {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\n}\n.title {\r\n    color: #28a745;\n}\n.thread {\r\n    margin-top: 0.25em;\r\n    margin-bottom: 0.25em;\r\n    padding-top: 0.25em;\r\n    padding-bottom: 0.25em;\n}\n.box {\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\n}\n.tag {\r\n    margin-right: 0.5em;\r\n    margin-bottom: 0.5em;\n}\r\n\r\n',"",{version:3,sources:["D:/PcaProjects/CommandReference/src/threads/src/threads/thread.vue"],names:[],mappings:";AA6FA;IACA,WAAA;IACA,sBAAA;IACA,gBAAA;CACA;AAEA;IACA,eAAA;CACA;AAEA;IACA,aAAA;IACA,sBAAA;IACA,WAAA;IACA,gBAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,4BAAA,CAAA,gBAAA;IACA,0BAAA,GAAA,YAAA;KACA,yBAAA,GAAA,oBAAA;OACA,uBAAA,GAAA,aAAA;QACA,sBAAA,GAAA,4BAAA;YACA,kBAAA,GAAA;oEACA;CACA;AAEA;IACA,eAAA;CACA;AAEA;IACA,mBAAA;IACA,sBAAA;IACA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,kBAAA;IACA,qBAAA;CACA;AAEA;IACA,oBAAA;IACA,qBAAA;CACA",file:"thread.vue",sourcesContent:['<template>\r\n    <b-row class="thread text-left">\r\n        <b-col class="col-12 col-md-4">\r\n            <div class="box">\r\n                <a class="title" v-bind:href="url" target="_blank">{{properties.title}}</a>\r\n            </div>\r\n        </b-col>\r\n        <b-col class="col-12 col-md-4">\r\n            <div class="box">\r\n                <b-badge class="noselect tag" v-if="properties[\'version-min\']" variant="success">{{version}}</b-badge>\r\n\r\n                <b-badge class="noselect tag" v-for="tag in properties.tags"\r\n                :key="tag" :variant="variant(tag)" v-b-tooltip.hover="get_tips(tag)">{{tag}}</b-badge>\r\n            </div>\r\n        </b-col>\r\n        <b-col class="col-12 col-md-4">\r\n            <b-row>\r\n                <b-col v-if="properties[\'authors\'] && properties[\'authors\'].length > 0">\r\n                    <div class="box">\r\n                    <span class="align-middle">\r\n                        {{properties[\'authors\'][0]}}\r\n                        <div class="d-inline" v-if="properties[\'authors\'].length > 1">\r\n                            <b-button variant="link" size="sm" class="hint">\r\n                                <span class="authors">{{properties[\'authors\'].slice(1).map(a=>\', \' + a).join("")}}</span>\r\n                            </b-button>\r\n                        </div>\r\n                    </span>\r\n                    </div>\r\n                </b-col>\r\n                <b-col>\r\n                    <div class="box">\r\n                        <span class="align-middle">{{properties["last-update"] || \'未知/不适用\'}}</span>\r\n                    </div>\r\n                </b-col>\r\n            </b-row>\r\n\r\n        </b-col>\r\n    </b-row>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: \'thread\',\r\n    props: {\r\n        properties: Object,\r\n        url: String\r\n    },\r\n    methods: {\r\n        variant: function(tag) {\r\n            if (tag === \'过时\') {\r\n                return \'danger\';\r\n            }\r\n            if (tag === \'即将过时\') {\r\n                return \'warning\';\r\n            }\r\n            if (tag === \'部分过时\') {\r\n                return \'danger\';\r\n            }\r\n            if (tag === \'预览版\') {\r\n                return \'success\';\r\n            }\r\n            return \'secondary\';\r\n        },\r\n        get_tips: function(tag) {\r\n            if (tag === \'过时\') {\r\n                return \'在最新正式版失效\';\r\n            }\r\n            if (tag === \'即将过时\') {\r\n                return \'在最新预览版失效\';\r\n            }\r\n            if (tag === \'部分过时\') {\r\n                return \'帖子部分内容已经过时\';\r\n            }\r\n            if (tag === \'预览版\') {\r\n                return \'仅在预览版有效\';\r\n            }\r\n            return \'\';\r\n        }\r\n    },\r\n    computed: {\r\n        version: function () {\r\n            if (!this.properties["version-min"]) {\r\n                return "-";\r\n            }\r\n            return "1." + this.properties["version-min"].toString() +\r\n                (this.properties["version-min"] === this.properties["version-max"] ?\r\n                "" : ("-1." + this.properties["version-max"].toString()));\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.hint {\r\n    padding: 0;\r\n    text-decoration: none;\r\n    display: inline;\r\n}\r\n\r\n.hint::after {\r\n    content: "...";\r\n}\r\n\r\n.hint:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    padding: 0;\r\n    display: inline;\r\n}\r\n\r\n.hint:focus::after {\r\n    content: "";\r\n}\r\n\r\n.authors {\r\n    display: none;\r\n}\r\n\r\n.hint:focus .authors {\r\n    display: inline;\r\n}\r\n\r\n.noselect {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\r\n}\r\n\r\n.title {\r\n    color: #28a745;\r\n}\r\n\r\n.thread {\r\n    margin-top: 0.25em;\r\n    margin-bottom: 0.25em;\r\n    padding-top: 0.25em;\r\n    padding-bottom: 0.25em;\r\n}\r\n\r\n.box {\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n.tag {\r\n    margin-right: 0.5em;\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n</style>'],sourceRoot:""}])},function(e,r,n){var t=n(16);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n(1).default)("3e7ee72f",t,!1,{})},function(e,r,n){(e.exports=n(2)(!0)).push([e.i,"\n.category-header {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\n}\n.category-header.collapsed {\r\n    border-bottom: none;\n}\n.category-header.collapsed .when-opened {\r\n    display: none;\n}\n.category-header:not(.collapsed) .when-closed {\r\n    display: none;\n}\n.category .card-body {\r\n    padding-left: 0.2em;\r\n    padding-right: 0.2em;\n}\n.category .thread:first-child {\r\n    margin-top: -0.25em;\n}\n.category .thread:last-child {\r\n    margin-bottom: -0.25em;\n}\n.category .thread:not(:last-child) {\r\n    border-bottom: 1px solid rgba(0,0,0,.125);\n}\r\n","",{version:3,sources:["D:/PcaProjects/CommandReference/src/threads/src/threads/category.vue"],names:[],mappings:";AAgDA;IACA,4BAAA,CAAA,gBAAA;IACA,0BAAA,GAAA,YAAA;KACA,yBAAA,GAAA,oBAAA;OACA,uBAAA,GAAA,aAAA;QACA,sBAAA,GAAA,4BAAA;YACA,kBAAA,GAAA;oEACA;CAEA;AAEA;IACA,oBAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;IACA,oBAAA;IACA,qBAAA;CACA;AAEA;IACA,oBAAA;CACA;AACA;IACA,uBAAA;CACA;AACA;IACA,0CAAA;CACA",file:"category.vue",sourcesContent:['<template>\r\n    <div>\r\n        <div class="card category">\r\n            <header class="card-header category-header text-left" v-b-toggle="collapse_name">\r\n                <div class="header-content">\r\n                    <span class="when-opened">▲</span><span class="when-closed">▼</span>{{header}}\r\n                </div>\r\n            </header>\r\n            <b-collapse :visible="shown" :id="collapse_name">\r\n                <div class="card-body">\r\n                    <b-container fluid="true">\r\n                        <thread v-for="url in sorted"\r\n                            :key="url" :properties="threads[url]" :url="url"></thread>\r\n                    </b-container>\r\n                </div>\r\n            </b-collapse>\r\n        </div>\r\n        <hr />\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport thread from \'./thread.vue\';\r\n\r\nexport default {\r\n    name: \'category\',\r\n    components: {\r\n        thread: thread\r\n    },\r\n    props: {\r\n        header: String,\r\n        threads: Object,\r\n        sorted: Array,\r\n        name: String,\r\n        shown: {\r\n            default: true,\r\n            type: Boolean\r\n        }\r\n    },\r\n    computed: {\r\n        collapse_name() {\r\n            return this.name + \'_collapse\';\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.category-header {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none;   /* Safari */\r\n     -khtml-user-select: none;   /* Konqueror HTML */\r\n       -moz-user-select: none;   /* Firefox */\r\n        -ms-user-select: none;   /* Internet Explorer/Edge */\r\n            user-select: none;   /* Non-prefixed version, currently\r\n                                    supported by Chrome and Opera */\r\n\r\n}\r\n\r\n.category-header.collapsed {\r\n    border-bottom: none;\r\n}\r\n\r\n.category-header.collapsed .when-opened {\r\n    display: none;\r\n}\r\n\r\n.category-header:not(.collapsed) .when-closed {\r\n    display: none;\r\n}\r\n\r\n.category .card-body {\r\n    padding-left: 0.2em;\r\n    padding-right: 0.2em;\r\n}\r\n\r\n.category .thread:first-child {\r\n    margin-top: -0.25em;\r\n}\r\n.category .thread:last-child {\r\n    margin-bottom: -0.25em;\r\n}\r\n.category .thread:not(:last-child) {\r\n    border-bottom: 1px solid rgba(0,0,0,.125);\r\n}\r\n</style>'],sourceRoot:""}])},function(e,r,n){var t=n(18);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n(1).default)("0fc51e22",t,!1,{})},function(e,r,n){(e.exports=n(2)(!0)).push([e.i,"\n#version {\n    background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;\n    background-size: 8px 10px;\n}\n","",{version:3,sources:["D:/PcaProjects/CommandReference/src/filter/src/filter/version.vue"],names:[],mappings:";AAuCA;IACA,iNAAA;IACA,0BAAA;CACA",file:"version.vue",sourcesContent:["<template>\r\n    <div class=\"text-left\">\r\n        <span class=\"bmd-form-group is-filled\">\r\n            <b-form-select v-model=\"version_selected\" :options=\"options\" id=\"version\"/>\r\n        </span>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: 'version_selector',\r\n    props: {\r\n        min: Number,\r\n        max: Number\r\n    },\r\n    methods: {\r\n        update: function() {\r\n            this.$emit('update', this.version_selected);\r\n        }\r\n    },\r\n    data() {\r\n        return {\r\n            version_selected: '任意版本'\r\n        }\r\n    },\r\n    computed: {\r\n        options: function () {\r\n            let opts = [];\r\n            opts.push('任意版本');\r\n            for (let i = this.max; i >= this.min; i--) {\r\n                opts.push('1.' + i.toString());\r\n            }\r\n            return opts;\r\n        }\r\n    }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n    #version {\r\n        background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;\r\n        background-size: 8px 10px;\r\n    }\r\n</style>\r\n"],sourceRoot:""}])},function(e,r,n){var t=n(20);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n(1).default)("f3621198",t,!1,{})},function(e,r,n){(e.exports=n(2)(!1)).push([e.i,"\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif, \"Microsoft Yahei\";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n#container {\n  padding: 1.5em;\n}\n@media only screen and (min-width: 768px) {\n#container {\n      padding-top: 0px;\n      padding-bottom: 0px;\n}\n}\n@media only screen and (min-width: 768px) {\n#content {\n    padding-top: 1.5em;\n}\n}\n@media only screen and (min-width: 768px) {\n#sidebar {\n    padding-top: 1.5em;\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n    height: calc(100vh - 56px);\n    overflow-y: auto;\n    position: sticky;\n    top: 56px;\n}\n}\n.bg-dark {\n  z-index: 999;\n  max-height: 100vh;\n}\n@media only screen and (max-width: 768px) {\n.bg-dark {\n      overflow-y: auto;\n}\n}\n.bg-dark .dropdown-menu {\n  min-width: 200px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  background-color: #424242 !important;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.bg-dark .dropdown-menu .divider {\n  border: 1px solid rgba(0, 0, 0, 0.8);\n}\n.bg-dark .dropdown-menu > a {\n  padding: 6px 20px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.bg-dark .dropdown-menu > a:hover,\n.bg-dark .dropdown-menu > a:focus {\n  color: rgba(255, 255, 255, 0.75);\n  background-color: #424242 !important;\n  text-decoration: none;\n}\n.bg-dark .dropdown-menu > a,\n.bg-dark .dropdown-menu > a:hover,\n.bs-dark .dropdown-menu > a:focus {\n  background-color: #424242 !important;\n  text-decoration: none;\n  outline: 0;\n}\n.card {\n  margin-bottom: 2em;\n}\nh1,\nh2 {\n  font-weight: normal;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n",""])},function(e,r,n){var t=n(22);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n(1).default)("0d7550e1",t,!1,{})}]);
//# sourceMappingURL=main.js.map