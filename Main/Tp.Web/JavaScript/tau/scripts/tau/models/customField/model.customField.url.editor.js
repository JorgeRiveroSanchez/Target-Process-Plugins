define(["Underscore","tau/models/model.customField"],function(_,a){var b=a.extend({_beforeSave:function(a){return!0},"bus beforeInit":function(a){var b=a.data.config,c=b.context.entity,d=b.context.getCustomFields(),e=this,f={name:b.data.name,type:b.data.type};this.store.get(c.entityType.name,{id:c.id,fields:["id","customFields"]}).done({success:function(a){var b=a[0].data.customFields,g=e.createConfiguration(f,c,d,b);e.fire("configurationProvided",g)}})},_afterSave:function(a){return!0}});return b})