define(["Underscore","tau/core/model-base"],function(_,a){return a.extend({"bus dataRequest":function(a){this.config.store.get(a.data.type,a.data.config,{success:a.data.callback}).done()},"bus partialDataRequest":function(a){var b=this,c=function(a){b.fire("dataRequestCompleted",a)};b.config.store.find(a.data.type,a.data.config,{success:c}).done()}})})