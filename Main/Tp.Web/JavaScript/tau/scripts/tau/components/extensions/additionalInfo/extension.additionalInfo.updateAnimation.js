define(["jQuery","tau/components/extensions/component.extension.base"],function($,a){return a.extend({category:"edit",editableIndexes:null,init:function(){this._super.apply(this,arguments),this.onRowClickProxy=$.proxy(this.onRowClick,this)},"bus beforeComponentsInitialize":function(a){this.editableIndexes=[],this.createComponentList(a.data),this.attachListeners()},"bus afterRender":function(a){this.$el=a.data.element},"bus refresh":function(){this.clearComponent()},createComponentList:function(a){this.components=[];for(var b=1;b<a.length;b+=2)this.components.push(a[b].component)},attachListeners:function(){var a=this.components;if(a)for(var b=0;b<a.length;b++)a[b].on("beforeChangeProperty",this.onBeforeChangeProperty,this,{index:b}),a[b].on("propertyChanged",this.onPropertyChanged,this,{index:b,component:a[b]},1)},removeListeners:function(){var a=this.components;if(a)for(var b=0;b<a.length;b++)a[b].removeListener("permissionsReady",this.onPermissionsReady,this)},onRowClick:function(a){a.stopPropagation(),a.data.component.fire("edit")},onPropertyChanged:function(a){var b=a.listenerData.index,c=a.listenerData.component,d=this;c.on("afterRender",function(a){a.removeListener();var c=d.$el.find(" > tbody > tr").eq(b).find(">td");d.fire("updateElement",{element:c})},c)},markRowAsUpdating:function(a){var b=this.$el.find(" > tbody > tr").eq(a).find(">td");this.fire("markElementToBeUpdated",{element:b})},onBeforeChangeProperty:function(a){var b=a.listenerData.index;this.markRowAsUpdating(b)},clearComponent:function(){this.removeListeners(),delete this.components,delete this.editableIndexes,delete this.$el},destroy:function(){this.clearComponent(),this._super()}})})