define(["require","tau/core/class"],function(e){var n=e("tau/core/class"),t="boardMenuShowHiddenBoards";return n.extend({init:function(e){this._settingsManager=e},getShowHiddenBoards:function(){return this._settingsManager.get({fields:[t]}).then(function(e){return!!e[t]})},setShowHiddenBoards:function(e){var n={};return n[t]=!!e,this._settingsManager.set({set:n})}})});