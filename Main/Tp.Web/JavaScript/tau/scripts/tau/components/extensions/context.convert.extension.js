define(["Underscore","tau/components/extensions/component.extension.base","tau/configurations/converters/converter.context"],function(_,a,b){return a.extend({init:function(a){this._super(a),this.practices=[],this.editions=[]},"bus onConfigContainerCreated":function(a){var c=[],d=[];if(a.data.context){var e=a.data.context,f=this;_.each(e.getPractices(),function(a){c.push(a.name)}),d=e.getEdition()?[e.getEdition()]:[]}var g=a.data;b.convert(g,c,d)}})})