define(["require","tau/core/extension.base","tau/utils/utils.serverErrorTranslator"],function(e){var t=e("tau/core/extension.base"),s=e("tau/utils/utils.serverErrorTranslator");return t.extend({init:function(e){this._super(e),this.configurator=e.context.configurator,this.on("afterRender",function(e,t){this.$element=t.element}.bind(this))},"bus _customRules.view":function(e,t){this._view=t},"bus customRules.config.ready + _customRules.view":function(e,t){t.model.getCustomRules().done(function(e){this._viewData=e,this._setProps(e)}.bind(this))},"bus customRules.config.ready:last + customRule.toggleStatus":function(e,t,s){t.model.toggleCustomRuleStatus(s).done(function(){var e=t.model.getData();this._setProps(e)}.bind(this)).fail(this._handleError.bind(this))},"bus customRules.config.ready:last + customRules.sendFeedback":function(e,t,s){this.configurator.getActionsService().sendFeedback("customRules",s).done(this._handleSuccess.bind(this)).fail(this._handleError.bind(this))},_handleSuccess:function(){this.fire("notification",{message:"Feedback sent. Thank you!",delay:100})},_handleError:function(e){var t=JSON.parse(e.responseText)||{Message:"Server is not available"},i=s.translateServerError.call(this,t);this.fire("error",i)},_setProps:function(e){this._view&&this._view.setProps(e)}})});