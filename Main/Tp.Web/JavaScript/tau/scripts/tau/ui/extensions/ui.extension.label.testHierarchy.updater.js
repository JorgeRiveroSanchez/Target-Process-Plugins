define(["require","tau/core/extension.base"],function(t){var e=t("tau/core/extension.base");return e.extend({"bus afterInit":function(t,e){this.config=e.config,this._off(),this._on()},"bus afterInit > destroy":function(){this._off()},_on:function(){var t=this.bus.getGlobalBus();t&&t.on("test.hierarchy.count.changed",this._handleChanged,this)},_handleChanged:function(t){var e=this.config.context.entity,n=t.data.entity;if(e.id===n.id&&e.entityType.name.toLowerCase()===n.entityType.name.toLowerCase()){var i=t.data.count;i?this.fire("setBadgeData",i.toString()):this.fire("entity.changed")}},_off:function(){var t=this.bus.getGlobalBus();t&&t.removeAllListeners(this)}})});