define(["Underscore","tau/models/dataProviders/strategies/model.provider.groups.strategy.base"],function(_,a){return a.extend({fetch:function(a,b,c){},moveToGroup:function(a,b,c,d,e){var f=_.find(d.realGroups,function(a){return a.id==b.entityState.id}),g=_.find(c.realGroups,function(a){return a.entityType.name.toLowerCase()==b.__type.toLowerCase()&&a.process.id==f.process.id});if(!g||g.id==f.id){e.call(null);return}var h=[];h.push(function(c){a.save(b.__type,{id:b.id,$set:{entityState:{id:g.id}},fields:["id",{entityState:["id","name","isFinal"]}]}).done({success:function(){c(null,arguments)}})}),h.push(function(c){a.get(b.__type,{id:b.id,fields:["id",{entityState:["id","name","isFinal"]}]}).done({success:function(a){c(null,a[0].data)}})}),_.series(h,function(a,b){_.isFunction(e)&&e.call(null,{changed:b[1]})})},isAvailableForItem:function(a,b,c){var d=_.find(c.realGroups,function(b){return b.id==a.entityState.id}),e=_.find(b.realGroups,function(b){return b.entityType.name.toLowerCase()==a.__type.toLowerCase()&&b.process.id==d.process.id}),f=_.pluck(d.nextStates,"id");return f.push(d.id),e&&_.include(f,e.id)},getCommentRequirements:function(a,b,c){var d=_.find(c.realGroups,function(b){return b.id==a.entityState.id}),e=[];return _.forEach(b,function(b){var c=_.find(b.realGroups,function(b){return b.entityType.name.toLowerCase()==a.__type.toLowerCase()&&b.process.id==d.process.id});e.push({isCommentRequired:c?c.isCommentRequired:!1})}),e}})})