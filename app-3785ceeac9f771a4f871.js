webpackJsonp([0xd2a57dc1d883],{121:function(n,e,o){"use strict";function t(n,e,o){var t=a.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function u(n,e,o){return a.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=u;var a=[{plugin:o(369),options:{plugins:[]}},{plugin:o(371),options:{plugins:[]}},{plugin:o(368),options:{plugins:[]}},{plugin:o(372),options:{plugins:[]}}]},227:function(n,e,o){"use strict";var t;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(336),"component---src-templates-blog-post-js":o(342),"component---src-pages-events-js":o(339),"component---src-pages-about-js":o(338),"component---src-pages-index-js":o(340),"component---src-pages-philosophy-js":o(341)},e.json=(t={"layout-index.json":o(6),"offline-plugin-app-shell-fallback.json":o(363)},t["layout-index.json"]=o(6),t["2013-05-21-drupalcon-portland-session-notes.json"]=o(344),t["layout-index.json"]=o(6),t["2013-10-20-drupalcamp-atlanta-session-notes.json"]=o(345),t["layout-index.json"]=o(6),t["2012-12-02-florida-drupalcamp-2012-session-notes.json"]=o(343),t["layout-index.json"]=o(6),t["2014-04-02-ie-dev-tips.json"]=o(347),t["layout-index.json"]=o(6),t["2014-04-29-notes-on-developing-drupal-8-alpha-13.json"]=o(348),t["layout-index.json"]=o(6),t["2014-03-08-forida-drupalcamp-presentation-notes.json"]=o(346),t["layout-index.json"]=o(6),t["2015-04-19-making-syfy-animations-not-suck.json"]=o(350),t["layout-index.json"]=o(6),t["2014-09-04-new-method-comment-spam.json"]=o(349),t["layout-index.json"]=o(6),t["2015-06-09-advice-newbie-frontend-developer.json"]=o(351),t["layout-index.json"]=o(6),t["2015-06-16-importing-css-breakpoints-js.json"]=o(352),t["layout-index.json"]=o(6),t["2016-05-12-drupalcon-nola-chrome-devtools.json"]=o(353),t["layout-index.json"]=o(6),t["2018-01-01-hello-2018.json"]=o(355),t["layout-index.json"]=o(6),t["2017-12-31-reflections-on-2017.json"]=o(354),t["layout-index.json"]=o(6),t["2018-01-10-why-is-gatsby-fast-prpl.json"]=o(356),t["layout-index.json"]=o(6),t["computer.json"]=o(359),t["layout-index.json"]=o(6),t["2018-01-15-css-grid.json"]=o(357),t["layout-index.json"]=o(6),t["pixel.json"]=o(365),t["layout-index.json"]=o(6),t["vscode.json"]=o(367),t["layout-index.json"]=o(6),t["fast.json"]=o(361),t["layout-index.json"]=o(6),t["variables.json"]=o(366),t["layout-index.json"]=o(6),t["events.json"]=o(360),t["layout-index.json"]=o(6),t["about.json"]=o(358),t["layout-index.json"]=o(6),t["index.json"]=o(362),t["layout-index.json"]=o(6),t["philosophy.json"]=o(364),t),e.layouts={"layout---index":o(337)}},228:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function r(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(3),c=t(i),l=o(9),p=t(l),f=o(164),d=t(f),m=o(103),h=t(m),g=o(121),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(o){u(this,e);var t=a(this,n.call(this)),r=o.location;return d.default.getPage(r.pathname)||(r=s({},r,{pathname:"/404.html"})),t.state={location:r,pageResources:d.default.getResourcesForPathname(r.pathname)},t}return r(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},103:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(407),a=t(u),r=(0,a.default)();n.exports=r},229:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(120),a=o(165),r=t(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,r.default)(t,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,u.matchPath)(a,{path:n.path})||(0,u.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,u.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,u.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},230:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(141),a=t(u),r=o(121),s=(0,r.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},343:function(n,e,o){o(2),n.exports=function(n){return o.e(70377159570471,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(380)})})}},344:function(n,e,o){o(2),n.exports=function(n){return o.e(0x8974ce4f7907,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(381)})})}},345:function(n,e,o){o(2),n.exports=function(n){return o.e(89926328501068,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},346:function(n,e,o){o(2),n.exports=function(n){return o.e(0xd414f63fdd9b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},347:function(n,e,o){o(2),n.exports=function(n){return o.e(0x8b907fe3eef6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},348:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ffc6641957,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},349:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe715d43b0010,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},350:function(n,e,o){o(2),n.exports=function(n){return o.e(22890600373292,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},351:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9c6f77b1c617,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},352:function(n,e,o){o(2),n.exports=function(n){return o.e(39229358024304,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(389)})})}},353:function(n,e,o){o(2),n.exports=function(n){return o.e(93009360049971,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(390)})})}},354:function(n,e,o){o(2),n.exports=function(n){return o.e(0xea360bb422cb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(391)})})}},355:function(n,e,o){o(2),n.exports=function(n){return o.e(0x8e8144995599,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(392)})})}},356:function(n,e,o){o(2),n.exports=function(n){return o.e(28210096298019,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(393)})})}},357:function(n,e,o){o(2),n.exports=function(n){return o.e(0xd2a7d615166e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(394)})})}},358:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(395)})})}},359:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb3fd8a1e2752,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(396)})})}},360:function(n,e,o){o(2),n.exports=function(n){return o.e(44713349584700,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(397)})})}},361:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf31c84eeecc9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(398)})})}},362:function(n,e,o){o(2),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(399)})})}},6:function(n,e,o){o(2),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(143)})})}},363:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(400)})})}},364:function(n,e,o){o(2),n.exports=function(n){return o.e(0x773013b8a162,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(401)})})}},365:function(n,e,o){o(2),n.exports=function(n){return o.e(0x978c6ecbff41,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(402)})})}},366:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb34836ec145f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(403)})})}},367:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb78be70d2fff,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(404)})})}},337:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(231)})})}},164:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var u=o(3),a=(t(u),o(229)),r=t(a),s=o(103),i=t(s),c=o(165),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},v="",b=[],C={},R=function(n){return n&&n.default||n},w=void 0,N=!0,k=[],_={},P={},E=5;w=o(232)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){b=b.filter(function(e){return e!==n}),w.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){w.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){w.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},S=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),o(n,t)})}},L=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):T(e,function(n,t){if(n)o(n);else{var u=R(t());g[e]=u,o(n,u)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},I=1,U={empty:function(){j=[],x={},C={},b=[],y=[],v=""},addPagesArray:function(n){y=n,v="",p=(0,r.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var o=1/I;I+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(S);var t=p(e);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||h[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};N&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var u;if(o){if(t>=e.length)break;u=e[t++]}else{if(t=e.next(),t.done)break;u=t.value}var a=u;a.unregister()}window.location.reload()}})),N=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var u=void 0,a=void 0,r=void 0,s=function(){if(u&&a&&(!t.layoutComponentChunkName||r)){m[e]={component:u,json:a,layout:r,page:t};var n={component:u,json:a,layout:r,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return L(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),u=e,s()}),L(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),a=e,s()}),void(t.layoutComponentChunkName&&L(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),r=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,o(144))},405:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2013-05-21-drupalcon-portland-session-notes.json",path:"/2013-05-21-drupalcon-portland-session-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2013-10-20-drupalcamp-atlanta-session-notes.json",path:"/2013-10-20-drupalcamp-atlanta-session-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2012-12-02-florida-drupalcamp-2012-session-notes.json",path:"/2012-12-02-florida-drupalcamp-2012-session-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-04-02-ie-dev-tips.json",path:"/2014-04-02-ie-dev-tips/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-04-29-notes-on-developing-drupal-8-alpha-13.json",path:"/2014-04-29-notes-on-developing-drupal-8-alpha13/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-03-08-forida-drupalcamp-presentation-notes.json",path:"/2014-03-08-forida-drupalcamp-presentation-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2015-04-19-making-syfy-animations-not-suck.json",path:"/2015-04-19-making-syfy-animations-not-suck/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-09-04-new-method-comment-spam.json",path:"/2014-09-04-new-method-comment-spam/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2015-06-09-advice-newbie-frontend-developer.json",path:"/2015-06-09-advice-newbie-frontend-developer/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2015-06-16-importing-css-breakpoints-js.json",path:"/2015-06-16-importing-css-breakpoints-js/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2016-05-12-drupalcon-nola-chrome-devtools.json",path:"/2016-05-12-drupalcon-nola-chrome-devtools/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2018-01-01-hello-2018.json",path:"/2018-01-01-hello-2018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2017-12-31-reflections-on-2017.json",path:"/2017-12-31-reflections-on-2017/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2018-01-10-why-is-gatsby-fast-prpl.json",path:"/2018-01-10-why-is-gatsby-fast-prpl/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"computer.json",path:"/computer/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2018-01-15-css-grid.json",path:"/2018-01-15-css-grid/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"pixel.json",path:"/pixel/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"vscode.json",path:"/vscode/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"fast.json",path:"/fast/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"variables.json",path:"/variables/"},{componentChunkName:"component---src-pages-events-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events.json",path:"/events/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-philosophy-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"philosophy.json",path:"/philosophy/"}]},232:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],u=[],a=function(){var n=e();n&&(u.push(n),o(n))},r=function(n){switch(n.type){case"RESOURCE_FINISHED":u=u.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===u.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){r({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:u}},empty:function(){t=[],u=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(121),r=o(3),s=t(r),i=o(196),c=t(i),l=o(120),p=o(376),f=o(320),d=t(f),m=o(230),h=t(m),g=o(103),y=t(g),j=o(405),x=t(j),v=o(406),b=t(v),C=o(228),R=t(C),w=o(227),N=t(w),k=o(164),_=t(k);o(310),window.___history=h.default,window.___emitter=y.default,_.default.addPagesArray(x.default),_.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=_.default,window.matchPath=l.matchPath;var P=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=P[n];return null!=e&&(h.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var u=n.location.pathname;if(u===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(233);var t=function(n){function e(o){o.page.path===_.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=P[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);_.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],m=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},g=(0,l.withRouter)(R.default);_.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(f?f:m,null,(0,r.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,r.createElement)(g,{layout:!0,children:function(e){return(0,r.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return _.default.getPage(t.location.pathname)?(0,r.createElement)(R.default,u({page:!0},t)):(0,r.createElement)(R.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},406:function(n,e){n.exports=[]},233:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var u=o(103),a=t(u),r="/";r="/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},165:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},320:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,u="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(u,n=function(){for(o.removeEventListener(u,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},2:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),u=o.e,a=o.s;o.e=function(t,r){var s=!1,i=!0,c=function(n){r&&(r(o,n),r=null)};return!a&&e&&e[t]?void c(!0):(u(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},368:function(n,e,o){"use strict";var t=o(33);e.onClientEntry=function(){"undefined"!=typeof window&&"undefined"!=typeof window.__EMOTION_CRITICAL_CSS_IDS__&&(0,t.hydrate)(window.__EMOTION_CRITICAL_CSS_IDS__)}},369:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},336:function(n,e,o){o(2),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(370)})})}},371:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},372:function(n,e){"use strict";e.onRouteUpdate=function(n){n.location;setTimeout(function(){"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()},0)}},407:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},144:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function u(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function r(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=u(r);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new i(n,e)),1!==m.length||h||u(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},338:function(n,e,o){o(2),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(237)})})}},339:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe03105f01a98,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(238)})})}},340:function(n,e,o){o(2),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(239)})})}},341:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb6eef032af7f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(240)})})}},342:function(n,e,o){o(2),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(241)})})}}});
//# sourceMappingURL=app-3785ceeac9f771a4f871.js.map