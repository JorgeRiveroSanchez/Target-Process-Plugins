define(["Underscore","tau/components/component.property.text"],function(a,b){return{create:function(c){return c=a.clone(c||{}),c.propertyName="lastFailureComment",c.defaultText="N/A",b.create(c)}}})