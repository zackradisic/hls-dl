/*! For license information please see hls-dl.commonjs2.js.LICENSE.txt */
module.exports.hlsDl=(()=>{var t={506:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},154:t=>{function e(){return t.exports=e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},e.apply(this,arguments)}t.exports=e},354:t=>{t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}},927:(t,e,i)=>{"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=r(i(908));t.exports=function(t){for(var e,i=(e=t,n.default.atob?n.default.atob(e):Buffer.from(e,"base64").toString("binary")),r=new Uint8Array(i.length),a=0;a<i.length;a++)r[a]=i.charCodeAt(a);return r}},388:t=>{"use strict";var e=function(){function t(){this.listeners={}}var e=t.prototype;return e.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},e.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t]=this.listeners[t].slice(0),this.listeners[t].splice(i,1),i>-1},e.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),a=e.length,s=0;s<a;++s)e[s].apply(this,n)},e.dispose=function(){this.listeners={}},e.pipe=function(t){this.on("data",(function(e){t.push(e)}))},t}();t.exports=e},908:(t,e,i)=>{var r;r="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},t.exports=r},758:(t,e,i)=>{"use strict";i.r(e),i.d(e,{LineStream:()=>l,ParseStream:()=>h,Parser:()=>m});var r=i(354),n=i.n(r),a=i(388),s=i.n(a),u=i(154),o=i.n(u),c=i(506),d=i.n(c),f=i(927),g=i.n(f),l=function(t){function e(){var e;return(e=t.call(this)||this).buffer="",e}return n()(e,t),e.prototype.push=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf("\n");e>-1;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},e}(s()),p=function(t){for(var e,i=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),r={},n=i.length;n--;)""!==i[n]&&((e=/([^=]*)=(.*)/.exec(i[n]).slice(1))[0]=e[0].replace(/^\s+|\s+$/g,""),e[1]=e[1].replace(/^\s+|\s+$/g,""),e[1]=e[1].replace(/^['"](.*)['"]$/g,"$1"),r[e[0]]=e[1]);return r},h=function(t){function e(){var e;return(e=t.call(this)||this).customParsers=[],e.tagMappers=[],e}n()(e,t);var i=e.prototype;return i.push=function(t){var e,i,r=this;0!==(t=t.trim()).length&&("#"===t[0]?this.tagMappers.reduce((function(e,i){var r=i(t);return r===t?e:e.concat([r])}),[t]).forEach((function(t){for(var n=0;n<r.customParsers.length;n++)if(r.customParsers[n].call(r,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))r.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void r.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void r.trigger("data",i);if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void r.trigger("data",i);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void r.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void r.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void r.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void r.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void r.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void r.trigger("data",i);if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"map"},e[1]){var a=p(e[1]);if(a.URI&&(i.uri=a.URI),a.BYTERANGE){var s=a.BYTERANGE.split("@"),u=s[0],o=s[1];i.byterange={},u&&(i.byterange.length=parseInt(u,10)),o&&(i.byterange.offset=parseInt(o,10))}}r.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=p(e[1]),i.attributes.RESOLUTION){var c=i.attributes.RESOLUTION.split("x"),d={};c[0]&&(d.width=parseInt(c[0],10)),c[1]&&(d.height=parseInt(c[1],10)),i.attributes.RESOLUTION=d}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}r.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=p(e[1])),void r.trigger("data",i);if(e=/^#EXT-X-ENDLIST/.exec(t))r.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))r.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void r.trigger("data",i);if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=p(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void r.trigger("data",i);if(e=/^#EXT-X-START:?(.*)$/.exec(t))return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=p(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void r.trigger("data",i);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void r.trigger("data",i);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void r.trigger("data",i);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void r.trigger("data",i);r.trigger("data",{type:"tag",data:t.slice(4)})}}}else r.trigger("data",{type:"comment",text:t.slice(1)})})):this.trigger("data",{type:"uri",uri:t}))},i.addParser=function(t){var e=this,i=t.expression,r=t.customType,n=t.dataParser,a=t.segment;"function"!=typeof n&&(n=function(t){return t}),this.customParsers.push((function(t){if(i.exec(t))return e.trigger("data",{type:"custom",data:n(t),customType:r,segment:a}),!0}))},i.addTagMapper=function(t){var e=t.expression,i=t.map;this.tagMappers.push((function(t){return e.test(t)?i(t):t}))},e}(s()),m=function(t){function e(){var e;(e=t.call(this)||this).lineStream=new l,e.parseStream=new h,e.lineStream.pipe(e.parseStream);var i,r,n=d()(e),a=[],s={},u=function(){},c={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},f=0;e.manifest={allowCache:!0,discontinuityStarts:[],segments:[]};var p=0;return e.parseStream.on("data",(function(t){var e,d;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=t.allowed,"allowed"in t||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var e={};"length"in t&&(s.byterange=e,e.length=t.length,"offset"in t||(t.offset=p)),"offset"in t&&(s.byterange=e,e.offset=t.offset),p=e.offset+e.length},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),t.duration>0&&(s.duration=t.duration),0===t.duration&&(s.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=a},key:function(){if(t.attributes)if("NONE"!==t.attributes.METHOD)if(t.attributes.URI){if("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"===t.attributes.KEYFORMAT)return-1===["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(t.attributes.METHOD)?void this.trigger("warn",{message:"invalid key method provided for Widevine"}):("SAMPLE-AES-CENC"===t.attributes.METHOD&&this.trigger("warn",{message:"SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}),"data:text/plain;base64,"!==t.attributes.URI.substring(0,23)?void this.trigger("warn",{message:"invalid key URI provided for Widevine"}):t.attributes.KEYID&&"0x"===t.attributes.KEYID.substring(0,2)?void(this.manifest.contentProtection={"com.widevine.alpha":{attributes:{schemeIdUri:t.attributes.KEYFORMAT,keyId:t.attributes.KEYID.substring(2)},pssh:g()(t.attributes.URI.split(",")[1])}}):void this.trigger("warn",{message:"invalid key ID provided for Widevine"}));t.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),r={method:t.attributes.METHOD||"AES-128",uri:t.attributes.URI},void 0!==t.attributes.IV&&(r.iv=t.attributes.IV)}else this.trigger("warn",{message:"ignoring key declaration without URI"});else r=null;else this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(t.number)?this.manifest.mediaSequence=t.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+t.number})},"discontinuity-sequence":function(){isFinite(t.number)?(this.manifest.discontinuitySequence=t.number,f=t.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+t.number})},"playlist-type":function(){/VOD|EVENT/.test(t.playlistType)?this.manifest.playlistType=t.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+t.playlist})},map:function(){i={},t.uri&&(i.uri=t.uri),t.byterange&&(i.byterange=t.byterange)},"stream-inf":function(){this.manifest.playlists=a,this.manifest.mediaGroups=this.manifest.mediaGroups||c,t.attributes?(s.attributes||(s.attributes={}),o()(s.attributes,t.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||c,t.attributes&&t.attributes.TYPE&&t.attributes["GROUP-ID"]&&t.attributes.NAME){var i=this.manifest.mediaGroups[t.attributes.TYPE];i[t.attributes["GROUP-ID"]]=i[t.attributes["GROUP-ID"]]||{},e=i[t.attributes["GROUP-ID"]],(d={default:/yes/i.test(t.attributes.DEFAULT)}).default?d.autoselect=!0:d.autoselect=/yes/i.test(t.attributes.AUTOSELECT),t.attributes.LANGUAGE&&(d.language=t.attributes.LANGUAGE),t.attributes.URI&&(d.uri=t.attributes.URI),t.attributes["INSTREAM-ID"]&&(d.instreamId=t.attributes["INSTREAM-ID"]),t.attributes.CHARACTERISTICS&&(d.characteristics=t.attributes.CHARACTERISTICS),t.attributes.FORCED&&(d.forced=/yes/i.test(t.attributes.FORCED)),e[t.attributes.NAME]=d}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){f+=1,s.discontinuity=!0,this.manifest.discontinuityStarts.push(a.length)},"program-date-time":function(){void 0===this.manifest.dateTimeString&&(this.manifest.dateTimeString=t.dateTimeString,this.manifest.dateTimeObject=t.dateTimeObject),s.dateTimeString=t.dateTimeString,s.dateTimeObject=t.dateTimeObject},targetduration:function(){!isFinite(t.duration)||t.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+t.duration}):this.manifest.targetDuration=t.duration},totalduration:function(){!isFinite(t.duration)||t.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+t.duration}):this.manifest.totalDuration=t.duration},start:function(){t.attributes&&!isNaN(t.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:t.attributes["TIME-OFFSET"],precise:t.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){s.cueOut=t.data},"cue-out-cont":function(){s.cueOutCont=t.data},"cue-in":function(){s.cueIn=t.data}}[t.tagType]||u).call(n)},uri:function(){s.uri=t.uri,a.push(s),this.manifest.targetDuration&&!("duration"in s)&&(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),s.duration=this.manifest.targetDuration),r&&(s.key=r),s.timeline=f,i&&(s.map=i),s={}},comment:function(){},custom:function(){t.segment?(s.custom=s.custom||{},s.custom[t.customType]=t.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[t.customType]=t.data)}})[t.type].call(n)})),e}n()(e,t);var i=e.prototype;return i.push=function(t){this.lineStream.push(t)},i.end=function(){this.lineStream.push("\n")},i.addParser=function(t){this.parseStream.addParser(t)},i.addTagMapper=function(t){this.parseStream.addTagMapper(t)},e}(s())},607:function(t,e,i){var r,n,a=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,a){function s(t){try{o(r.next(t))}catch(t){a(t)}}function u(t){try{o(r.throw(t))}catch(t){a(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,u)}o((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var i,r,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,r&&(n=2&a[0]?r.return:a[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};r=[i,e,i(758)],void 0===(n=function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.downloadToFile=e.download=void 0,e.download=function(t){return a(void 0,void 0,void 0,(function(){var e,r,n;return s(this,(function(u){switch(u.label){case 0:return t.url?[4,(c=t.url,a(void 0,void 0,void 0,(function(){return s(this,(function(t){return[2,fetch(c).then((function(t){if(!t.ok)throw Error(t.statusText);return t.text()}))]}))})))]:[3,2];case 1:e=u.sent(),u.label=2;case 2:if(!t.url&&!t.m3u8)throw new Error("No url or m3u8 string specified");if(0===(r=function(t){var e=new i.Parser;return e.push(t),e.end(),e.manifest}(e)).segments.length)throw new Error("Got an invalid M3U8 file, check the provided URL or m3u8 string is valid");return[4,(o=r,a(void 0,void 0,void 0,(function(){var t,e;return s(this,(function(i){switch(i.label){case 0:return t=o.segments.map((function(t){return t.uri})),e=t.map((function(t){return a(void 0,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,fetch(t).then((function(t){if(!t.ok)throw Error(t.statusText);if("audio/mpeg"===t.headers.get("Content-Type").toLowerCase())throw Error("Got invalid Content-Type while downloading HLS segments: "+t.headers.get("Content-Type"));return t.arrayBuffer()}))];case 1:return[2,e.sent()]}}))}))})),[4,Promise.all(e)];case 1:return[2,i.sent()]}}))})))];case 3:return n=u.sent(),[2,new Blob(n)]}var o,c}))}))},e.downloadToFile=function(t,i){return a(void 0,void 0,void 0,(function(){var r,n,a,u;return s(this,(function(s){switch(s.label){case 0:return[4,e.download(t)];case 1:return r=s.sent(),n=window.URL||window.webkitURL,a=n.createObjectURL(r),(u=document.createElement("a")).style.display="none",u.href=a,u.download=i,document.body.appendChild(u),u.click(),window.URL.revokeObjectURL(a),[2]}}))}))}}.apply(e,r))||(t.exports=n)}},e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,i),n.exports}return i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(607)})();
//# sourceMappingURL=hls-dl.commonjs2.js.map