define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/core/templates-factory"],function(_,$,BaseExtension,templatesFactory){return BaseExtension.extend({"bus template.bind":function(evtArgs){var src=evtArgs.data,templateName=src.name,data=src.data,config=src.config||{},template=templatesFactory.get(templateName),$el=template.bind(config,data);src.element=$el,this.fire("template."+templateName+".bound",src)},"bus template.pure.bind":function(evtArgs){var src=evtArgs.data,templateName=src.name,data=src.data,config=src.config||{},template=templatesFactory.get(templateName),html=template.bindPure(config,data);src.html=html,this.fire("template."+templateName+".pure.bound",src)},"bus template.multiply.pure.bind":function(evtArgs){var src=evtArgs.data,templateName=src.name,data=src.arrayData,config=src.config||{},outputEvt={items:[]},template=templatesFactory.get(templateName);_.each(data,function(itemData){var html=template.bindPure(config,itemData);outputEvt.items.push({html:html,data:itemData})}),this.fire("template.multiply."+templateName+".pure.bound",outputEvt)}})})