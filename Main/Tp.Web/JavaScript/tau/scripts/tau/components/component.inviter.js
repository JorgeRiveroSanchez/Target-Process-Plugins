define(["tau/components/component.creator","tau/models/common/model.common.events","tau/models/inviter/model.inviter","tau/models/inviter/model.inviter.add","tau/ui/extensions/tabs/ui.extension.tabs.modern","tau/ui/extensions/inviter/ui.extension.inviter.form","tau/ui/extensions/inviter/ui.extension.inviter.widget","tau/components/extensions/error/extension.errorBar","tau/ui/templates/inviter/ui.template.inviter"],function(ComponentCreator,ModelCommonEvents,ModelMain,ModelAdd,ExtensionTabs,ExtensionAddForm,ExtensionAddWidget,ExtensionError,Template){return{create:function(config){config["queue.bus"]=!0;var creatorConfig={"queue.bus":!0,extensions:[ModelCommonEvents,ModelMain,ModelAdd,ExtensionTabs,ExtensionAddForm,ExtensionAddWidget,ExtensionError],template:Template};return ComponentCreator.create(creatorConfig,config)}}})