webpackJsonp([0x67ef26645b2a,60335399758886],{143:function(e,t){e.exports={layoutContext:{}}},231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(3),r=n(o),l=a(236),s=n(l),c=a(143),d=n(c);t.default=function(e){return r.default.createElement(s.default,i({},e,d.default))},e.exports=t.default},234:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(3),s=n(l),c=a(44),d=n(c),u=a(29),h=a(122),p=n(h),f=a(515),m=n(f),g=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:b},s.default.createElement(d.default,{to:"/"},s.default.createElement("img",{src:m.default,alt:"Mike herchel"})),s.default.createElement("p",null,"Hi, I'm Mike Herchel, and I use Drupal, JavaScript, and other technologies to kick various asses throughout cyberspace."))},t}(s.default.Component),b=(0,u.css)("margin-top:20px;@media (max-width:",p.default.breakpoints.navChange,"){display:flex;align-items:center;margin-bottom:20px;text-align:left;}@media (max-width:",p.default.breakpoints.bioImageChange,"){flex-wrap:wrap;}a{@media (max-width:",p.default.breakpoints.bioImageChange,"){height:50px;overflow:hidden;}}img{border-radius:50%\n\n    @media (max-width:",p.default.breakpoints.navChange,"){width:75px;margin-right:10px;}@media (max-width:",p.default.breakpoints.bioImageChange,"){margin-top:10px;}}p{color:white;font-size:16px;width:100%;margin:0;@media (min-width:",p.default.breakpoints.bioImageChange,"){margin-right:40px;}@media (min-width:",p.default.breakpoints.navChange,"){margin-right:0;margin-top:20px;padding:20px;background-color:rgba(255,255,255,0.15);font-size:20px;}}");t.default=g,e.exports=t.default},235:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(3),s=n(l),c=a(44),d=n(c),u=a(29),h=a(122),p=n(h),f=function(e){function t(){i(this,t);var a=o(this,e.call(this));return a.handleNavClick=a.handleNavClick.bind(a),a.state={navVisible:!1},a}return r(t,e),t.prototype.handleNavClick=function(){this.setState({navVisible:!this.state.navVisible})},t.prototype.render=function(){var e=this;return s.default.createElement("div",{className:m},s.default.createElement("button",{className:g+" "+(this.state.navVisible?"active":""),onClick:function(){return e.handleNavClick()}},s.default.createElement("span",null,"Toggle Navigation")),s.default.createElement("div",{className:b,style:{display:this.state.navVisible?"block":""}},s.default.createElement("nav",{className:w},s.default.createElement(d.default,{activeClassName:"active",onClick:function(){return e.handleNavClick()},to:"/"},"Home"),s.default.createElement(d.default,{activeClassName:"active",onClick:function(){return e.handleNavClick()},to:"/about"},"About"),s.default.createElement(d.default,{activeClassName:"active",onClick:function(){return e.handleNavClick()},to:"/philosophy"},"Philosophy"),s.default.createElement(d.default,{activeClassName:"active",onClick:function(){return e.handleNavClick()},to:"/events"},"Events")),s.default.createElement("section",{className:v},s.default.createElement("p",null,"Email me at ",s.default.createElement("a",{href:"mailto:mike@herchel.com",target:"_blank"},"mike@herchel.com")),s.default.createElement("p",null,"Follow me at ",s.default.createElement("a",{href:"http://twitter.com/mikeherchel",target:"_blank"},"@mikeherchel")),s.default.createElement("p",null,"I'm on github at ",s.default.createElement("a",{href:"https://github.com/mherchel",target:"_blank"},"github.com/mherchel")),s.default.createElement("p",null,"Facebook profile is ",s.default.createElement("a",{href:"http://www.facebook.com/mherchel",target:"_blank"},"facebook.com/mherchel")),s.default.createElement("p",null,"Find me on D.O at ",s.default.createElement("a",{href:"http://drupal.org/user/118428",target:"_blank"},"drupal.org/user/118428")),s.default.createElement("p",null,"I don't use LinkedIn ",s.default.createElement("a",{href:"http://www.linkedin.com/in/mherchel",target:"_blank"},"linkedin.com/in/mherchel")))))},t}(s.default.Component),m=(0,u.css)("@media (min-width:",p.default.breakpoints.navChange,"){position:sticky;top:20px;}"),g=(0,u.css)("position:fixed;top:35px;right:3%;width:40px;/* Necessary for proper placement in Safari. */\n  z-index:3;padding:0;overflow:hidden;border:0;mix-blend-mode:multiply;filter:brightness(0.7);background:transparent;color:var(--primary);font-size:40px;line-height:40px;cursor:pointer;transition:0.2s;@media (min-width:",p.default.breakpoints.navChange,'){display:none;}&:before{content:"☰";display:block;}&.active{transform:rotate(90deg);outline:0;}span{font-size:0;position:absolute;visibility:hidden;}'),b=(0,u.css)("@media (max-width:",p.default.breakpoints.navChange,"){display:none;position:fixed;z-index:2;top:0;left:0;width:100%;height:100vh;overflow:auto;-webkit-overflow-scrolling:touch;background:var(--primary);padding:40px;text-align:left;}"),w=(0,u.css)("margin:0 0 20px;font-size:40px;font-weight:bold;@media (min-width:",p.default.breakpoints.navChange,"){margin-top:20px;}a{display:block;color:white;text-decoration:none;@media (min-width:",p.default.breakpoints.navChange,"){&.active:not(:first-child){text-decoration:underline;}}}"),v=(0,u.css)("color:rgba(255,255,255,0.8);a{color:white;}");t.default=f,e.exports=t.default},515:function(e,t,a){e.exports=a.p+"static/herchelshead.d39009c9.jpg"},236:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(3),s=n(l),c=a(35),d=n(c),u=a(29),h=a(44),p=(n(h),a(234)),f=n(p),m=a(235),g=n(m),b=a(122),w=n(b),v=function(e){function t(){i(this,t);var a=o(this,e.call(this));return a.handleMouseDown=a.handleMouseDown.bind(a),a.handleMouseUp=a.handleMouseUp.bind(a),a.handleMouseMove=a.handleMouseMove.bind(a),a.state={mousedown:!1,hue:195,lightness:50},a}return r(t,e),t.prototype.handleMouseDown=function(e){e.target.matches("."+x+", ."+x+" *")||(this.setState({mousedown:!0}),document.addEventListener("mousemove",this.handleMouseMove))},t.prototype.handleMouseUp=function(e){this.setState({mousedown:!1}),document.removeEventListener("mousemove",this.handleMouseMove)},t.prototype.handleMouseMove=function(e){var t=window.innerHeight/360,a=e.clientY/window.innerHeight*100,n=a*t,i=e.clientX/window.innerWidth*100;this.setState({hue:n,lightness:i})},t.prototype.componentDidMount=function(){document.addEventListener("mousedown",this.handleMouseDown),document.addEventListener("mouseup",this.handleMouseUp)},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mouseup",this.handleMouseUp)},t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return s.default.createElement("div",{className:x},s.default.createElement(d.default,null,s.default.createElement("link",{rel:"icon",type:"image/png",href:"favicon.png"}),s.default.createElement("meta",{property:"og:image",content:"https://herchel.com/herchelshead.jpg"}),s.default.createElement("meta",{name:"twitter:card",content:"summary"}),s.default.createElement("meta",{name:"twitter:image",content:"https://herchel.com/herchelshead.jpg"}),s.default.createElement("meta",{name:"twitter:site",content:"@mikeherchel"}),s.default.createElement("meta",{name:"twitter:creator",content:"@mikeherchel"}),s.default.createElement("style",null,"\n            :root {\n              --primary-hue: "+this.state.hue+";\n              --primary-lightness: "+this.state.lightness+"%;\n              -webkit-user-select: "+(this.state.mousedown?"none":"auto")+";\n              -moz-user-select: "+(this.state.mousedown?"none":"auto")+";\n              user-select: "+(this.state.mousedown?"none":"auto")+";\n            }\n            ")),s.default.createElement("header",{className:y},s.default.createElement(f.default,null),s.default.createElement(g.default,null)),s.default.createElement("main",{role:"main"},t()),s.default.createElement("footer",{className:k},s.default.createElement("span",{className:"copyright"},"©2018 Mike Herchel"),s.default.createElement("span",{className:"developed"},"Developed using ",s.default.createElement("a",{target:"_blank",href:"http://gatsbyjs.org"},"GatsbyJS")),s.default.createElement("span",{className:"github"},"Submit a PR ",s.default.createElement("a",{target:"_blank",href:"https://github.com/mherchel/herchel.com"},"on GitHub"))))},t}(s.default.Component);(0,u.injectGlobal)('*{box-sizing:border-box;touch-action:manipulation;&:before,&:after{box-sizing:inherit;}}:root{--primary:hsla(var(--primary-hue),var(--primary-saturation),var(--primary-lightness),var(--primary-alpha));--primary-hue:195;--primary-saturation:100%;--primary-lightness:50%;--primary-alpha:1;--gray:#333;--white:white;--font-sans:helvetica,arial,sans-serif;--font-serif:georgia,serif;}::selection{color:var(--primary);background:black;}body{margin:0;background-color:var(--primary);line-height:1.7;overflow:scroll;font-family:var(--font-sans);transition:0.2s;&:before{content:"";position:fixed;z-index:-1;backface-visibility:hidden;top:0;left:0;width:100%;height:100vh;background:url(/bg-boxes.jpg);opacity:0.4;filter:grayscale(100%) invert(100%);}&:after{content:"";position:fixed;z-index:-1;backface-visibility:hidden;top:0;left:0;width:100%;height:100vh;background-image:linear-gradient(to bottom,var(--primary),transparent 70%);}}h1,h2,h3{line-height:1.4;color:var(--gray);margin:1em 0 0.5em;&:first-child{margin-top:0;}}h1{@media (max-width:700px){font-size:30px;}}h2{border-bottom:dotted 1px #ccc;@media (max-width:700px){font-size:25px;}}h3{margin:40px 0 5px;color:var(--primary);filter:brightness(75%);font-size:22px;font-family:var(--font-sans);+ p{margin-top:10px;}}blockquote{background-color:#eee;padding:10px 20px;border-left:solid 5px #ccc;font-family:var(--font-sans);@media (max-width:500px){margin-left:0;margin-right:0;}}video{display:block;}figure{margin:20px 0;background #eee;&[border]{padding:3px;}}figcaption{padding:5px 20px;font-family:var(--font-sans);font-style:italic;font-size:16px;line-height:1.2;}iframe.twitter-tweet,twitterwidget{margin-left:auto;margin-right:auto;}.content{position:relative;min-height:calc(100vh - 20px);padding:20px;background:var(--white);font-family:var(--font-serif);color:#666;font-size:22px;line-height:2;@media (min-width:',w.default.breakpoints.navChange,'){padding:40px;&:before{content:"";position:absolute;right:100%;top:70px;transform:translatey(-50%);height:0;width:0;border-top:solid transparent 20px;border-right:solid var(--white) 20px;border-bottom:solid transparent 20px;}}em{opacity:0.9;}a{color:var(--primary);}li{margin:15px 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}');var x=(0,u.css)("width:94%;max-width:1200px;margin:10px auto;--header-width:220px;@media (min-width:",w.default.breakpoints.navChange,"){display:flex;flex-wrap:wrap;}@media (min-width:",w.default.breakpoints.large,"){--header-width:320px;}header{@media (min-width:",w.default.breakpoints.navChange,"){margin-right:40px;flex-basis:var(--header-width);flex-shrink:0;}@media (min-width:",w.default.breakpoints.large,"){margin-right:60px;}}main{@media (min-width:",w.default.breakpoints.navChange,"){flex-grow:1;width:calc(100% - (var(--header-width) + 40px));}@media (min-width:",w.default.breakpoints.large,"){width:calc(100% - (var(--header-width) + 60px));}}footer{flex-basis:100%;}"),y=(0,u.css)("text-align:right;color:white;"),k=(0,u.css)('display:flex;flex-direction:column;justify-content:flex-end;color:rgba(255,255,255,0.8);@media (min-width:700px){flex-direction:row;align-items:center;> *:not(:last-child){&:after{content:"   |   ";white-space:pre;color:white;}}}a{color:white;}');v.propTypes={children:s.default.PropTypes.func,location:s.default.PropTypes.object,route:s.default.PropTypes.object},t.default=v,e.exports=t.default},122:function(e,t){"use strict";t.__esModule=!0;var a={breakpoints:{bioImageChange:"450px",navChange:"1000px",large:"1200px"}};t.default=a,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-f45c3f7d63b44d483946.js.map