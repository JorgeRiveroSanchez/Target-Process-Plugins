define(["Underscore","jQuery","tau/components/extensions/component.extension.base"],function(_,$,a){return a.extend({"bus afterRender":function(a){this._$element=a.data.element,this._data=a.data.data,this._render()},_render:function(){if(this._timeLoadWasReported()){var a=this._calculateMaxSpentTime(),b=this._$element.find(".tau-historyGrid td.tau-historyItem");_.each(this._data.historyItems,function(c,d){var e=c.spentTime,f=b.eq(d).find(".tau-date"),g=this._calculateRelatedRoundedSpentTime(a,e);if(!isNaN(g)){var h=f.attr("title");f.addClass("tau-timeLoad-"+g).attr("title",h+" ("+e+" hours)")}},this)}},_timeLoadWasReported:function(){return _.any(this._data.historyItems,function(a){return a.spentTime>0})},_calculateMaxSpentTime:function(){return _.max(this._data.historyItems,function(a){return a.spentTime}).spentTime},_calculateRelatedRoundedSpentTime:function(a,b){var c=b*100/a,d=Math.round(c/10)*10;return d}})})