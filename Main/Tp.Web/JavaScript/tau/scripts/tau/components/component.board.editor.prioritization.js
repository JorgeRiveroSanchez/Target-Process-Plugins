define(["Underscore","tau/components/component.creator","tau/models/board.editor.prioritization/model.board.editor.prioritization","tau/ui/templates/board.editor.prioritization/ui.template.board.editor.prioritization"],function(t,e,o,r){return{create:function(t){var i={extensions:[o],template:r};return t["queue.bus"]=!0,e.create(i,t)}}});