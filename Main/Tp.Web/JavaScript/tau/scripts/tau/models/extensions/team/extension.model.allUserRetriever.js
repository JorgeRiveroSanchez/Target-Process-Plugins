define(["Underscore","tau/core/model-base"],function(_,a){return a.extend({"bus registerStoreRequest":function(){var a=this;this.store.get("user",{fields:["id","firstName","lastName","isActive","deleteDate",{role:["id","name"]}]}).done({success:function(b){var c=b[0].data,d={},e=[];c=_.filter(c,function(a){return a.deleteDate===null}),_.forEach(c,function(a){var b=a.role;b&&(d[b.id]=b),e.push({user:a,role:b})}),a.fire("projectMembersReady",e),a.fire("projectRolesReady",_.values(d))}})}})})