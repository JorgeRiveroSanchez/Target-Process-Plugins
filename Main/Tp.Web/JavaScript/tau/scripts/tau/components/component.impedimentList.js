define(["Underscore","tau/components/component.list.baseInfo","tau/models/baseInfoList/extension.model.additionalInfoImpedimentFilter"],function(_,a,b){return{create:function(c){return c.typeName="impediment",c.propertyName="impediments",a.create(c,{extensions:[b]})}}})