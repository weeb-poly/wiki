(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3],{307:function(t,e,r){"use strict";r.r(e);var n={props:{src:{type:String,required:!0}}},c=r(16),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("h5",{staticClass:"card-header"},[t._t("header")],2),t._v(" "),r("img",{staticClass:"card-img-top",attrs:{src:t.src}}),t._v(" "),t.$slots.body?r("div",{staticClass:"card-body"},[t._t("body")],2):t._e(),t._v(" "),t.$slots.footer?r("div",{staticClass:"card-footer"},[t._t("footer")],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(41),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t._params,e.next=3,r("mascots",{deep:!0}).without(["body"]).fetch();case 3:return data=e.sent,e.abrupt("return",{data:data});case 5:case"end":return e.stop()}}),e)})))()}}),o=r(16),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[t._m(0),t._v(" "),r("section",{staticClass:"py-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row my-1 row-cols-1 row-cols-md-3 g-4 justify-content-md-center"},t._l(t.data,(function(e){return r("div",{key:e.path,staticClass:"col"},[r("BaseCard",{staticClass:"mb-3",attrs:{src:e.cover},scopedSlots:t._u([{key:"header",fn:function(){return[r("NuxtLink",{attrs:{to:e.path}},[t._v(t._s(e.title))]),t._v(" "),e.role?[r("span",[t._v(" - ")]),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(e.role))])]:t._e()]},proxy:!0}],null,!0)})],1)})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumbs"},[r("div",{staticClass:"container"},[r("h2",[t._v("Mascots")]),t._v(" "),r("p",[t._v("This is our list of mascots.")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseCard:r(307).default})}}]);