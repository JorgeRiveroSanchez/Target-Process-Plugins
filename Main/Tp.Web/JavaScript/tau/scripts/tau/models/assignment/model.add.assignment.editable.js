define(["Underscore","tau/models/assignment/model.property.assignUser.editable.base","tau/configurator"],function(_,a){return a.extend({assignTo:function(a){var b={typeName:"assignment",$include:[{generalUser:["id","firstName","lastName"]},{role:["id","name"]},{assignable:["id"]}]};this.config.data.role&&_.extend(b,{id:null,$set:{generalUser:{id:a},assignable:{id:parseInt(this.config.context.entity.id)},role:{id:this.config.data.role.id}}}),this.fire("save",b)},destroy:function(){this.project=null,this.entity=null,this._super()}})})