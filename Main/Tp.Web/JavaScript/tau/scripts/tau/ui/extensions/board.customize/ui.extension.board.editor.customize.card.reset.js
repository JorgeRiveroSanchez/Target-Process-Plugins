define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(e,n,t){return t.extend({"bus elementRefreshedWithData":function(n,t){t.element.find(".i-role-reset").click(e.bind(function(){this.fire("public.resetToDefault")},this))},"bus elementRefreshedWithData:last + public.card.changed":function(e,n){n.element.find(".i-role-reset").prop("disabled",!1)}})});