define(["tau/components/extensions/component.extension.base","tau/ui/extensions/list/request/extension.requesters.tabs"],function(ExtensionBase,ExtensionTabs){return ExtensionBase.extend({"bus afterInit":function(evt){var store=evt.data.config.store,entity=evt.data.config.context.entity,self=this;store.unbind(this),store.on({eventName:"afterSave",type:entity.entityType.name,listener:this,filter:{id:entity.id},hasChanges:["requesters"]},function(){store.evictProperties(entity.id,entity.entityType.name,["requesters"]),self.fire("refresh")})},"bus afterRender":function(evt){var $action=evt.data.element.find("[role=action-add]"),bubbleConfig={actionOnBlur:"destroy",target:$action,alignTo:$action,componentsConfig:{components:[{type:"tabs",cssClass:"tau-tabs-small",extensions:[ExtensionTabs],tabs:[{label:"select",header:[{type:"label",text:"Select requester"}],items:[{type:"finder.requesters"}],selected:!0},{label:"add",header:[{type:"label",text:"Add new"}],items:[{type:"editor.requester"}]}]}]}};this.fire("initBubble",bubbleConfig);var _empty=function(){$action.tauBubble("empty"),$action.data("bubbleLoaded",!1)};$action.bind("externalClose",_empty),$action.bind("close",_empty),$action.on("show",function(){var $popup=$action.tauBubble("widget");$popup.delegate("[role=action-cancel]","click",_empty)})}})})