define(["Underscore","tau/models/propertyLists/model.propertyList.base"],function(_,ModelBase){return ModelBase.extend({propertyType:"team","bus beforeInit":function(evt,initConfig){var entity=initConfig.config.context.entity,configurator=initConfig.config.context.configurator,store=configurator.getStore(),fire=_.bind(this.fire,this);store.get("team",{fields:["id","name","icon"]}).done(function(result){fire("items.ready",result[0].data)}),store.get(entity.entityType.name,{id:entity.id,fields:["id",{team:["id"]}]}).done(function(result){fire("currentItem.ready",result[0].data.team||{})})},"bus beforeInit:last + items.ready + currentItem.ready":function(evt,initConfig,items,currentItem){var config=initConfig.config;items=_.sortBy(items,function(v){return v.name.toLowerCase()});var showReset=!!(config.showReset&&currentItem&&currentItem.id),data={states:_.reject(items,function(item){return currentItem&&item.id===currentItem.id}),completed:!0,nullableValue:showReset,templateOption:config.templateOption};this.fire("dataBind",data)}})})