define(["Underscore","tau/models/dataProviders/model.provider.groups.base","tau/models/dataProviders/strategies/model.provider.groups.strategy.states","tau/utils/utils.date"],function(_,a,b,c){return a.extend({init:function(a){this._super(a),this.strategy=new b},fetch:function(a,b,c){var d=["userstory"];return this.config.context.isPracticeAvailable("Bug Tracking")&&d.push("bug"),this._fetchState(a,d,c)},moveToGroup:function(a,b,c,d){var e=this.config.store;return this.strategy.moveToGroup(e,a,b,c,d)},isAvailableForItem:function(a,b,c){return this.strategy.isAvailableForItem(a,b,c)},getCommentRequirements:function(a,b,c){return this.strategy.getCommentRequirements(a,b,c)}})})