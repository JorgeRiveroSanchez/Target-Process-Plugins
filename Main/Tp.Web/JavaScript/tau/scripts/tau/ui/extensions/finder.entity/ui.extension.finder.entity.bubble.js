define(["Underscore","jQuery","tau/core/extension.base"],function(e,t,i){return i.extend({"bus $outerBubbled.ready":function(t,i){i.on("taububbleshow",e.bind(this.fire,this,"$outerBubbled.shown")),i.on("taububblehide",e.bind(this.fire,this,"$outerBubbled.hidden"))},"bus $el.ready:last + $listholder.ready:last + $outerBubbled.shown":function(e,i,s){s.css("max-height",t(window).height()/3),t.browser.safari&&i.width(t(window).width()/3),this.fire("paging.tryNext"),i.find(":text").focus(),this.fire("headers.toSync")},"bus $outerBubbled.ready:last + $el.ready:last + result.rendered":function(e,t,i){i.is(":visible")&&this.fire("headers.toSync"),this.fire("headers.toSync"),this.fire("adjustPosition")},"bus $outerBubbled.ready:last + headers.toSync":function(){this.fire("adjustPosition")}})});