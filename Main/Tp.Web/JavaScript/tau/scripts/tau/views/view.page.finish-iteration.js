define(["Underscore","jQuery","tau/core/view-base","tau/components/component.container","tau/configurations/finish-iteration.container.config"],function(t,e,n,i,o){return n.extend({init:function(t){this._super(t)},initialize:function(){},"bus beforeInit":function(){var e=this,n=e.config.context.configurator;n.getTitleManager().setTitle("Finish Iteration");var r=n.getHistory();r.setCurrent({id:0,url:"#"+e.config.entity,title:"Finish Iteration"});var a=e.config,c=t.extend(a,new o(a).getConfig(a));c.context.entity=c.entity;var s=e.container=i.create({name:"board page container",layout:c.layout,template:c.template,extensions:t.union([],c.extensions||[]),context:a.context});s.on("afterInit",e["container afterInit"],e),s.on("afterRender",e["container afterRender"],e),s.on("componentsCreated",e["container componentsCreated"],e),s.initialize(c)},"container afterInit":function(){this.fireAfterInit()},"container componentsCreated":function(t){this.fire(t.name,t.data)},"container afterRender":function(t){this.fireBeforeRender(),this.element=t.data.element,this.fireAfterRender()},lifeCycleCleanUp:function(){this.destroyContainer(),this._super()},destroyContainer:function(){this.container&&(this.container.destroy(),this.container=null)},destroy:function(){this.destroyContainer(),this._super()}})});