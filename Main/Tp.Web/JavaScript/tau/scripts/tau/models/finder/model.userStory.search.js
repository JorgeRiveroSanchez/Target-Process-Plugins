define(["Underscore","tau/models/finder/model.assignable.search"],function(_,a){return a.extend({init:function(a){this._super(a);var b=function(a,b,c){a[b]={name:{$contains:c}}};this.properties.feature={label:this.terms.resolve("feature"),autoCompletable:!1,statement:b},this.properties.state.filter=function(a){return a?a.dataItem?a.dataItem.entityType.id===4:!0:!0}},getType:function(){return"userStory"}})})