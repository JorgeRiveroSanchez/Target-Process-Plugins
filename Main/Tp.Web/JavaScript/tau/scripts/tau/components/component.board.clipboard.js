define(["Underscore","tau/components/component.creator","tau/models/board.clipboard/model.board.clipboard.main","tau/models/board.clipboard/model.board.clipboard.data","tau/ui/extensions/board.clipboard/ui.extension.board.clipboard.output","tau/ui/extensions/board.clipboard/ui.extension.board.clipboard.actions","tau/ui/extensions/board.clipboard/ui.extension.board.clipboard.selection","tau/ui/extensions/board.clipboard/ui.extension.board.clipboard.dragndrop","tau/ui/extensions/board.clipboard/ui.extension.board.clipboard.viewer","tau/components/extensions/error/extension.errorBar","tau/ui/templates/board.clipboard/ui.template.board.clipboard"],function(_,ComponentCreator,Model,ModelData,ExtensionOutput,ExtensionActions,ExtensionSelection,ExtensionDragndrop,ExtensionViewer,ExtensionErrorNotifier,Template){return{create:function(config){var creatorConfig={extensions:[Model,ModelData,ExtensionOutput,ExtensionActions,ExtensionSelection,ExtensionDragndrop,ExtensionViewer,ExtensionErrorNotifier],template:Template};config["queue.bus"]=!0;var componentBus=ComponentCreator.create(creatorConfig,config);return componentBus}}})