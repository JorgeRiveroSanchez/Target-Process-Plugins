define(["Underscore","tau/components/component.property","tau/models/property/model.release.property.projects","tau/ui/templates/property/ui.template.release.property.projects"],function(e,t,r,p){return{create:function(e){return e.propertyName="projects",e.Model=r,e.template=p,e.editable=!1,e.showUrl=!0,e.alignElementSelector=".property-text",e.applyBubbleClasses=!1,t.create(e)}}});