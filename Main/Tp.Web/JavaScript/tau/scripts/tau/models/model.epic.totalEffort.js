define(["Underscore","tau/models/model.feature.totalEffort"],function(e,t){var i=t.extend({childType:"feature",childCountFieldName:"features-count",fieldsToListen:["features|effort"],"bus entity.changed":function(){this.store.evictProperties(this.entityId,this.entityType,["effort",this.childCountFieldName]),this.onEntityUpdate()}});return i});