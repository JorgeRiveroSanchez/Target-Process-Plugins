define(["Underscore","jQuery","tau/core/class","tau/core/event","libs/parseUri","libs/json2"],function(t,n,e,i,r){var s=e.extend({init:function(n){this._id=t.uniqueId("sh"),this.setWindow(n.getWindow()),this.setEncoder(n.getHashEncoder()||this.encoderDefault())},setWindow:function(e){this.window&&n(this.window).unbind("hashchange."+this._id),this.window=t.defaults(e||{},{location:{hash:""}}),n(this.window).bind("hashchange."+this._id,t.bind(function(){this.fire("changed",{hash:this.getHash()})},this))},setEncoder:function(t){this.paramsEncoder=t},getHash:function(){for(var t=this.window.location.hash;0===t.indexOf("#");)t=t.substr(1);return this.tryDecodeUri(t)},setHref:function(t){this.window.location.href=t},getHref:function(){return this.window.location.href},getHrefParsed:function(){return r(this.getHref())},setHash:function(t){this.window.location.replace("#"+t)},triggerChange:function(t){n(this.window).trigger("hashchange."+this._id,{hash:t})},hashParams:function(){for(var t={},n=this.getHash(),e=n.split("&"),i=0,r=e.length;r>i;i++){var s=e[i],a=s.indexOf("=");if(-1!==a){var h=s.substr(0,a),o=s.substr(a+1);t[h]=this.paramsEncoder.decode(o)}}return t},getHashParam:function(t,n){var e=this.hashParams();return e[t]||(arguments.length>1?n:{})},setHashParam:function(t,n){var e=this.getHash(),i=this.mergeHashParams(e,t,n);this.setHash(i)},applyHashObject:function(n){var e=this,i=this.getHash();t.each(n,function(t,n){i=this.mergeHashParams(i,n,t)},e),e.setHash(i)},mergeHashParams:function(t,n,e){t="&"!==t.charAt(0)?"&"+t:t;var i=t.indexOf("&"+n+"="),r=-1!==i?i:t.length;i=t.indexOf("&",1+r);var s=-1!==i?i:t.length,a="";if(null!==e){var h=this.paramsEncoder.encode(e),o="&"===t?"":"&";a=o+n+"="+h}var c=t.substring(0,r),u=t.substring(s),d=c+a+u;return d="&"!==d.charAt(0)?d:d.substring(1)},tryDecodeUri:function(t){var n=t;try{n=decodeURIComponent(t)}catch(e){}return n},onHashChange:function(t){this.on("changed",t,t)},unbindHashChange:function(t){this.removeListener("changed",t,t)},encoderDefault:function(){return{encode:function(n){var e=n;return t.isObject(n)&&(e=JSON.stringify(n)),e},decode:function(t){var n=t;return"{"===n.charAt(0)&&"}"===n.charAt(n.length-1)&&(n=JSON.parse(n)),n}}},setDefaultEncoder:function(){this.paramsEncoder=this.encoderDefault()},setFakeWindow:function(){var e,i=t.toArray(arguments);e=2==i.length?{hash:i[0],href:i[1]}:t.isString(i[0])?{hash:i[0]}:i[0]||{};var r=n("<div />");r.location=t.defaults(e,{hash:"",href:"",replace:function(n){r.location.hash=t.asString(n),r.trigger("hashchange",{})}}),this.setWindow(r)}});return s.prototype.triggerHashChange=s.prototype.triggerChange,i.implementOn(s.prototype),s});