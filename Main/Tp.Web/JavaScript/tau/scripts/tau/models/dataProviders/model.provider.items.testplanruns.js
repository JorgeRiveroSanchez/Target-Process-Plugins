define(["Underscore","tau/models/dataProviders/model.provider.items.base"],function(_,a){return a.extend({fetch:function(a){this._fetch("testplanruns","testplanrun",a)},_createDetailCommand:function(a){var b={};return b[a]=["id","name","tags","effort","effortCompleted","effortToDo","timeSpent","timeRemain",{entityState:["id","name","isInitial","isFinal"]},{roleEfforts:["id",{role:["id","name"]}]},{assignments:["id",{role:["id"]},{generalUser:["id","firstName","lastName"]}]}],b},_convertItem:function(a){var b={id:a.id,name:a.name,__type:a.__type,entityState:{id:a.entityState.id,name:a.entityState.name,isInitial:a.entityState.isinitial,isFinal:a.entityState.isfinal},tags:this._processTags(a),effort:this._getEffortData(a),assignments:this._processAssignments(a)};return b}})})