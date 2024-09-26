/*! For license information please see blocks.js.LICENSE.txt */
!function(){"use strict";var t={"./assets/src/js/gutenberg/blocks/cbsp_block/edit.js":function(t,e,r){r.r(e);var n=r("@wordpress/i18n"),o=r("@wordpress/element"),c=r("@wordpress/block-editor"),a=r("@wordpress/components"),i=r("./assets/src/js/gutenberg/blocks/cbsp_block/product-layout.js");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(){l=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var c=e&&e.prototype instanceof v?e:v,a=Object.create(c.prototype),i=new N(n||[]);return o(a,"_invoke",{value:R(t,r,i)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",m="suspendedYield",y="executing",b="completed",g={};function v(){}function w(){}function E(){}var _={};f(_,a,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(O([])));k&&k!==r&&n.call(k,a)&&(_=k);var S=E.prototype=v.prototype=Object.create(_);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,c,a,i){var u=h(t[o],t,c);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==s(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,i)}))}i(u.arg)}var c;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return c=c?c.then(o,o):o()}})}function R(e,r,n){var o=d;return function(c,a){if(o===y)throw Error("Generator is already running");if(o===b){if("throw"===c)throw a;return{value:t,done:!0}}for(n.method=c,n.arg=a;;){var i=n.delegate;if(i){var s=L(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?b:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=b,n.method="throw",n.arg=u.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var c=h(o,e.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,g;var a=c.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}throw new TypeError(s(e)+" is not iterable")}return w.prototype=E,o(S,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(P.prototype),f(P.prototype,i,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,c){void 0===c&&(c=Promise);var a=new P(p(t,r,n,o),c);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),f(S,u,"Generator"),f(S,a,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function f(t,e,r,n,o,c,a){try{var i=t[c](a),s=i.value}catch(t){return void r(t)}i.done?e(s):Promise.resolve(s).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){f(c,n,o,a,i,"next",t)}function i(t){f(c,n,o,a,i,"throw",t)}a(void 0)}))}}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c,a,i=[],s=!0,u=!1;try{if(c=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=c.call(r)).done)&&(i.push(n.value),i.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return i}}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return m(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var y=function(t){var e=(new DOMParser).parseFromString(t,"application/xml").getElementsByTagName("item"),r=[];return Array.from(e).forEach((function(t){var e,n=(null===(e=t.getElementsByTagName("title")[0])||void 0===e?void 0:e.textContent)||"",o=t.getElementsByTagName("wp:postmeta"),c="";Array.from(o).forEach((function(t){var e,r,n=null===(e=t.getElementsByTagName("wp:meta_key")[0])||void 0===e?void 0:e.textContent,o=null===(r=t.getElementsByTagName("wp:meta_value")[0])||void 0===r?void 0:r.textContent;"_price"===n&&(c=o)}));var a=cbspProductData.defaultImg;r.push({name:n,image:a,price:c})})),r};e.default=function(t){var e=t.attributes,r=t.setAttributes,s=e.columns,f=e.rows,d=e.showImage,m=e.showTitle,b=e.showPrice,g=e.showViewButton,v=e.products,w=e.currencySymbol,E=h((0,o.useState)([]),2),_=E[0],x=E[1],k=h((0,o.useState)([]),2),S=k[0],j=k[1],P=h((0,o.useState)(""),2),R=P[0],L=P[1];(0,o.useEffect)((function(){var t=function(){var t=p(l().mark((function t(){var e,n,o,c;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(cbspProductData.sampleProductsXML);case 2:return e=t.sent,t.next=5,e.text();case 5:n=t.sent,o=y(n),j(o),r({products:o}),c=cbspProductData.currencySymbol,r({currencySymbol:c});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,o.useEffect)((function(){var t=function(){var t=p(l().mark((function t(){var e,r,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(cbspProductData.apiUrl+"products");case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,n=r.map((function(t){return{id:t.id,name:t.name,price:t.price,image:t.image}})),j(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error fetching products:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);(0,o.useEffect)((function(){var t=s*f;_.length>t&&x(_.slice(0,t))}),[s,f,_]);var T=S.filter((function(t){return t.name.toLowerCase().includes(R.toLowerCase())}));return React.createElement(React.Fragment,null,React.createElement(c.InspectorControls,null,React.createElement(a.PanelBody,{title:(0,n.__)("Layout","cbsp")},React.createElement(a.RangeControl,{label:(0,n.__)("Columns","cbsp"),value:s,onChange:function(t){return r({columns:t})},min:1,max:6}),React.createElement(a.RangeControl,{label:(0,n.__)("Rows","cbsp"),value:f,onChange:function(t){return r({rows:t})},min:1,max:6})),React.createElement(a.PanelBody,{title:(0,n.__)("Content Settings","cbsp")},React.createElement(a.ToggleControl,{label:(0,n.__)("Show Product Image","cbsp"),checked:d,onChange:function(t){return r({showImage:t})}}),React.createElement(a.ToggleControl,{label:(0,n.__)("Show Product Title","cbsp"),checked:m,onChange:function(t){return r({showTitle:t})}}),React.createElement(a.ToggleControl,{label:(0,n.__)("Show Product Price","cbsp"),checked:b,onChange:function(t){return r({showPrice:t})}}),React.createElement(a.ToggleControl,{label:(0,n.__)("Show View Product Button","cbsp"),checked:g,onChange:function(t){return r({showViewButton:t})}})),React.createElement(a.PanelBody,{title:(0,n.__)("Product Filters","cbsp")},React.createElement("p",null,(0,n.__)("Select Products","cbsp")),React.createElement(a.TextControl,{label:"",value:R,onChange:function(t){return L(t)},placeholder:(0,n.__)("Search by product name...","cbsp")}),React.createElement("div",{style:{maxHeight:"200px",minWidth:"230px",overflowY:"scroll",border:"1px solid #ccc",padding:"10px"}},T.map((function(t){return React.createElement(a.CheckboxControl,{key:t.id,label:t.name,checked:_.some((function(e){return e.id===t.id})),onChange:function(){return function(t){var e=_.some((function(e){return e.id===t.id}))?_.filter((function(e){return e.id!==t.id})):[].concat(u(_),[t]);x(e),r({products:e.length>0?e:S})}(t)}})}))))),React.createElement(i.default,{products:_.length>0?_:v,columns:s,rows:f,showImage:d,showTitle:m,currencySymbol:w,showPrice:b,showViewButton:g}))}},"./assets/src/js/gutenberg/blocks/cbsp_block/index.js":function(t,e,r){r.r(e);var n=r("@wordpress/i18n"),o=r("@wordpress/blocks"),c=r("./assets/src/js/gutenberg/blocks/cbsp_block/edit.js"),a=r("./assets/src/js/gutenberg/blocks/cbsp_block/save.js");(0,o.registerBlockType)("cbsp-blocks/cbsp-grid-layout",{title:(0,n.__)("CBSP","cbsp"),icon:"products",description:(0,n.__)("Choose Your Best Selling Products","cbsp"),category:"wc-cbsp",attributes:{columns:{type:"number",default:3},rows:{type:"number",default:2},showImage:{type:"boolean",default:!0},showTitle:{type:"boolean",default:!0},showPrice:{type:"boolean",default:!0},showViewButton:{type:"boolean",default:!0},products:{type:"array",default:[]}},edit:c.default,save:a.default})},"./assets/src/js/gutenberg/blocks/cbsp_block/product-layout.js":function(t,e,r){r.r(e);var n=r("@wordpress/i18n");e.default=function(t){var e=t.currencySymbol,r=t.products,o=t.columns,c=t.rows,a=t.showImage,i=t.showTitle,s=t.showPrice,u=t.showViewButton,l=r.slice(0,Math.min(r.length,o*c));return React.createElement("div",{className:"container cbsp-container"},Array.from({length:c}).map((function(t,r){return React.createElement("div",{className:"row cbsp-grid-layout-row",key:r},l.slice(r*o,r*o+o).map((function(t,r){return React.createElement("div",{key:r,className:"col-".concat(Math.floor(12/o))},React.createElement("div",{className:"cbsp-product-column"},a&&React.createElement("img",{className:"cbsp-product-img",src:t.image,alt:t.name||(0,n.__)("Product Image","cbsp")}),React.createElement("div",{className:"cbsp-product-body"},i&&React.createElement("h5",{className:"cbsp-title"},t.name||(0,n.__)("No Title","cbsp")),(e||s)&&React.createElement("p",{className:"cbsp-price"},e&&React.createElement("span",{className:"cbsp-currency-symbol"},e),s&&React.createElement("span",{className:"cbsp-price"},t.price||(0,n.__)("Price not available","cbsp"))),u&&React.createElement("a",{href:"#"},React.createElement("button",{className:"btn btn-primary cbsp-btn"},(0,n.__)("View Product","cbsp"))))))})))})))}},"./assets/src/js/gutenberg/blocks/cbsp_block/save.js":function(t,e,r){r.r(e);r("@wordpress/i18n");var n=r("./assets/src/js/gutenberg/blocks/cbsp_block/product-layout.js");e.default=function(t){var e=t.attributes,r=e.currencySymbol,o=e.products,c=e.columns,a=e.rows,i=e.showImage,s=e.showTitle,u=e.showPrice,l=e.showViewButton;return React.createElement(n.default,{products:o,columns:c,rows:a,showImage:i,showTitle:s,currencySymbol:r,showPrice:u,showViewButton:l})}},"./assets/src/sass/blocks.scss":function(t,e,r){r.r(e)},"@wordpress/block-editor":function(t){t.exports=window.wp.blockEditor},"@wordpress/blocks":function(t){t.exports=window.wp.blocks},"@wordpress/components":function(t){t.exports=window.wp.components},"@wordpress/element":function(t){t.exports=window.wp.element},"@wordpress/i18n":function(t){t.exports=window.wp.i18n}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};r.r({});r("./assets/src/sass/blocks.scss"),r("./assets/src/js/gutenberg/blocks/cbsp_block/index.js")}();
//# sourceMappingURL=blocks.js.map