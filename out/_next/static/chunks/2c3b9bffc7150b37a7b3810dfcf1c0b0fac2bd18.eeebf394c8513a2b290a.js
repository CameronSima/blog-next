(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var l=f[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=a.props[l],h=r[l]||new Set;"name"===l&&o||!h.has(d)?(h.add(d),r[l]=h):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var g=m;t.default=g},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),a=n("vUxr"),i=(n("TSYQ"),n("YSmr"));function o(){return Object(r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:Object(r.jsx)(a.a,{children:Object(r.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[Object(r.jsx)("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Statically Generated with Next.js."}),Object(r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[Object(r.jsx)("a",{href:"https://nextjs.org/docs/basic-features/pages",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),Object(r.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/".concat(i.b),className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})})}var u=n("g4pe"),s=n.n(u);function c(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),Object(r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),Object(r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),Object(r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),Object(r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),Object(r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),Object(r.jsx)("meta",{name:"theme-color",content:"#000"}),Object(r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),Object(r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(i.a,".")}),Object(r.jsx)("meta",{property:"og:image",content:i.c})]})}function l(e){e.preview;var t=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c,{}),Object(r.jsx)("div",{className:"min-h-screen",children:Object(r.jsx)("main",{children:t})}),Object(r.jsx)(o,{})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),u=n("a1gu"),s=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){o(n,e);var t=c(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},YSmr:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var r="blog-starter",a="Markdown",i="https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=a(n("q1tI")),o=n("elyg"),u=n("nOHt"),s=n("vNVm"),c={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),a=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],u=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):u||i}}),[a,e.href,e.as]),f=d.href,h=d.as,m=e.children,g=e.replace,v=e.shallow,p=e.scroll,w=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=i.Children.only(m),y=b&&"object"===typeof b&&b.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),M=r(x,2),T=M[0],C=M[1],j=i.default.useCallback((function(e){T(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,T]);(0,i.useEffect)((function(){var e=C&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof w?w:n&&n.locale,a=c[f+"%"+h+(r?"%"+r:"")];e&&!a&&l(n,f,h,{locale:r})}),[h,f,C,w,t,n]);var D={ref:j,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,f,h,g,v,p,w)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(n,f,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var k="undefined"!==typeof w?w:n&&n.locale,O=(0,o.getDomainLocale)(h,k,n&&n.locales,n&&n.domainLocales);D.href=O||(0,o.addBasePath)((0,o.addLocale)(h,k,n&&n.defaultLocale))}return i.default.cloneElement(b,D)};t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},i2FJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("nKUr");function a(e){var t=e.name,n=e.picture;return Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)("img",{src:n,className:"w-12 h-12 rounded-full mr-4",alt:t}),Object(r.jsx)("div",{className:"text-xl font-bold",children:t})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},p9OW:function(e,t,n){"use strict";n.d(t,"a",(function(){return pe}));var r=n("nKUr");function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}var o=36e5,u={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},s=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(e){var t,n={},r=e.split(u.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],u.timeZoneDelimiter.test(n.date)&&(n.date=e.split(u.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=u.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function f(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function h(e,t){if(null===t)return null;var n=e.match(s);if(!n)return null;var r=!!n[4],a=m(n[1]),i=m(n[2])-1,o=m(n[3]),u=m(n[4]),c=m(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,c)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,c):new Date(NaN);var l=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(w[t]||(b(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(b(e)?366:365)}(t,a)?(l.setUTCFullYear(t,i,Math.max(a,o)),l):new Date(NaN)}function m(e){return e?parseInt(e):1}function g(e){var t=e.match(c);if(!t)return null;var n=v(t[1]),r=v(t[2]),a=v(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*o+6e4*r+1e3*a:NaN}function v(e){return e&&parseFloat(e.replace(",","."))||0}function p(e){if("Z"===e)return 0;var t=e.match(l);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*o+6e4*a):NaN}var w=[31,null,31,30,31,30,31,31,30,31,30,31];function b(e){return e%400===0||e%4===0&&e%100}function y(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function x(e){i(1,arguments);var t=y(e);return!isNaN(t)}var M={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var C={date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},j={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function D(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function k(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var O,S={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"===typeof M[e]?M[e]:1===t?M[e].one:M[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:C,formatRelative:function(e,t,n,r){return j[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:D({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:D({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:D({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:D({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:D({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(O.matchPattern);if(!a)return null;var i=a[0],o=n.match(O.parsePattern);if(!o)return null;var u=O.valueCallback?O.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function U(e,t){i(2,arguments);var n=y(e).getTime(),r=a(t);return new Date(n+r)}function N(e,t){i(2,arguments);var n=a(t);return U(e,-n)}function P(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var E={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return P("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):P(n+1,2)},d:function(e,t){return P(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return P(e.getUTCHours()%12||12,t.length)},H:function(e,t){return P(e.getUTCHours(),t.length)},m:function(e,t){return P(e.getUTCMinutes(),t.length)},s:function(e,t){return P(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return P(Math.floor(r*Math.pow(10,n-3)),t.length)}},W=864e5;function Y(e){i(1,arguments);var t=1,n=y(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function q(e){i(1,arguments);var t=y(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=Y(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var u=Y(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}function F(e){i(1,arguments);var t=q(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=Y(n);return r}var H=6048e5;function A(e,t){i(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,u=null==o?0:a(o),s=null==n.weekStartsOn?u:a(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=y(e),l=c.getUTCDay(),d=(l<s?7:0)+l-s;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function z(e,t){i(1,arguments);var n=y(e,t),r=n.getUTCFullYear(),o=t||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:a(s),l=null==o.firstWeekContainsDate?c:a(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(r+1,0,l),d.setUTCHours(0,0,0,0);var f=A(d,t),h=new Date(0);h.setUTCFullYear(r,0,l),h.setUTCHours(0,0,0,0);var m=A(h,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function L(e,t){i(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.firstWeekContainsDate,u=null==o?1:a(o),s=null==n.firstWeekContainsDate?u:a(n.firstWeekContainsDate),c=z(e,t),l=new Date(0);l.setUTCFullYear(c,0,s),l.setUTCHours(0,0,0,0);var d=A(l,t);return d}var I=6048e5;var _="midnight",R="noon",Q="morning",X="afternoon",B="evening",G="night";function J(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+P(i,2)}function K(e,t){return e%60===0?(e>0?"-":"+")+P(Math.abs(e)/60,2):Z(e,t)}function Z(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+P(Math.floor(a/60),2)+n+P(a%60,2)}var $={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return E.y(e,t)},Y:function(e,t,n,r){var a=z(e,r),i=a>0?a:1-a;return"YY"===t?P(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):P(i,t.length)},R:function(e,t){return P(q(e),t.length)},u:function(e,t){return P(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return P(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return P(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return E.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return P(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){i(1,arguments);var n=y(e),r=A(n,t).getTime()-L(n,t).getTime();return Math.round(r/I)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):P(a,t.length)},I:function(e,t,n){var r=function(e){i(1,arguments);var t=y(e),n=Y(t).getTime()-F(t).getTime();return Math.round(n/H)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):P(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):E.d(e,t)},D:function(e,t,n){var r=function(e){i(1,arguments);var t=y(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/W)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):P(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return P(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return P(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return P(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?R:0===a?_:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?B:a>=12?X:a>=4?Q:G,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return E.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):P(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):E.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):E.s(e,t)},S:function(e,t){return E.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return K(a);case"XXXX":case"XX":return Z(a);case"XXXXX":case"XXX":default:return Z(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return K(a);case"xxxx":case"xx":return Z(a);case"xxxxx":case"xxx":default:return Z(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+J(a,":");case"OOOO":default:return"GMT"+Z(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+J(a,":");case"zzzz":default:return"GMT"+Z(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return P(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return P((r._originalDate||e).getTime(),t.length)}};function V(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function ee(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var te={p:ee,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return V(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",V(a,t)).replace("{{time}}",ee(i,t))}},ne=6e4;function re(e){return e.getTime()%ne}function ae(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(ne+re(t))%ne:re(t);return n*ne+r}var ie=["D","DD"],oe=["YY","YYYY"];function ue(e){return-1!==ie.indexOf(e)}function se(e){return-1!==oe.indexOf(e)}function ce(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var le=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,de=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fe=/^'([^]*?)'?$/,he=/''/g,me=/[a-zA-Z]/;function ge(e,t,n){i(2,arguments);var r=String(t),o=n||{},u=o.locale||S,s=u.options&&u.options.firstWeekContainsDate,c=null==s?1:a(s),l=null==o.firstWeekContainsDate?c:a(o.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=u.options&&u.options.weekStartsOn,f=null==d?0:a(d),h=null==o.weekStartsOn?f:a(o.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var m=y(e);if(!x(m))throw new RangeError("Invalid time value");var g=ae(m),v=N(m,g),p={firstWeekContainsDate:l,weekStartsOn:h,locale:u,_originalDate:m},w=r.match(de).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,te[t])(e,u.formatLong,p):e})).join("").match(le).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ve(n);var a=$[r];if(a)return!o.useAdditionalWeekYearTokens&&se(n)&&ce(n,t,e),!o.useAdditionalDayOfYearTokens&&ue(n)&&ce(n,t,e),a(v,n,u.localize,p);if(r.match(me))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return w}function ve(e){return e.match(fe)[1].replace(he,"'")}function pe(e){var t=e.dateString,n=function(e,t){i(1,arguments);var n=t||{},r=null==n.additionalDigits?2:a(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,u=d(e);if(u.date){var s=f(u.date,r);o=h(s.restDateString,s.year)}if(isNaN(o)||!o)return new Date(NaN);var c,l=o.getTime(),m=0;if(u.time&&(m=g(u.time),isNaN(m)||null===m))return new Date(NaN);if(!u.timezone){var v=new Date(l+m),w=new Date(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate(),v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds());return w.setFullYear(v.getUTCFullYear()),w}return c=p(u.timezone),isNaN(c)?new Date(NaN):new Date(l+m+c)}(t);return Object(r.jsx)("time",{dateTime:t,children:ge(n,"LLLL\td, yyyy")})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,a=(0,i.useRef)(),c=(0,i.useState)(!1),l=r(c,2),d=l[0],f=l[1],h=(0,i.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,i.useEffect)((function(){u||d||(0,o.default)((function(){return f(!0)}))}),[d]),[h,d]};var i=n("q1tI"),o=a(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var s=new Map},vUxr:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("nKUr");function a(e){var t=e.children;return Object(r.jsx)("div",{className:"container mx-auto px-5",children:t})}},zK7a:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=n("TSYQ"),i=n.n(a),o=n("YFqc"),u=n.n(o);function s(e){var t=e.title,n=e.src,a=e.slug,o=e.height,s=e.width,c=Object(r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t),className:i()("shadow-sm",{"hover:shadow-md transition-shadow duration-200":a}),layout:"responsive",width:s,height:o});return Object(r.jsx)("div",{className:"sm:mx-0",children:a?Object(r.jsx)(u.a,{as:"/posts/".concat(a),href:"/posts/[slug]",children:Object(r.jsx)("a",{"aria-label":t,children:c})}):c})}}}]);