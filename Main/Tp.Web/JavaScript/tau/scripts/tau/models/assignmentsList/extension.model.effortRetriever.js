define(["Underscore","tau/models/extension.model.base"],function(_,a){return a.extend({category:"model effort retriver","bus registerStoreRequest":function(){var a=this.config.context.entity||{entityType:{}};this.fire("get",{type:a.entityType.name,query:{id:a.id,fields:["effort","effortToDo"]},callback:{scope:this,success:this.onEffortRetrieved}})},"bus extendDataToBind":function(a){var b=a.data||{},c=this.entity||{};b.totalEffort={effort:this.floatToString(c.effort),remain:this.floatToString(c.effortToDo)}},onEffortRetrieved:function(a){this.entity=a.data},destroy:function(){delete this.entity,this._super()}})})