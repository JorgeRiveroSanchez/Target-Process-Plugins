define(["Underscore","tau/components/component.creator","tau/models/model.property.bool","tau/models/model.property.editable","tau/components/extensions/property/extension.property.refresher","tau/components/extensions/property/extension.property.bool.editable","tau/ui/templates/property/ui.template.bool"],function(_,a,b,c,d,e,f){return{create:function(g){var h=_.concat([g.extensions,d]);g.editable===!0&&(h=_.concat([h,e,c]));var i={ModelType:b,template:g.template||f,extensions:h};return a.create(i,g)}}})