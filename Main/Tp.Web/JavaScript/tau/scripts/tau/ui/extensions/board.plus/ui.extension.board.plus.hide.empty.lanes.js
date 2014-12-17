define(["jQuery","Underscore","tau/components/extensions/component.extension.base"],function(e,t,n){return n.extend({cells:null,"bus boardSettings.ready + overview.board.ready":function(e,t,n){this._extractCellData(n),this._attachListeners(t.boardSettings),this.boardSettings.get({fields:["hideEmptyLanes"],callback:function(e){this._setHiddenState(!!e.hideEmptyLanes)}.bind(this)})},"bus operation.execute.done":function(n,i){var s=i.operation||{};if("card"===s.location&&0!==i.cards.length&&("added"===s.name||"updated"===s.name)){var a=t.flatMap(i.affected$CellsArray,t.resultOf("toArray")),r=this._findCellByElement(a);if(r&&!r.hasItems)if(this.hidden){var l=this._findCellsOnEmptyLanes();r.hasItems=1;var o=this._findCellsOnEmptyLanes(),d=t.difference(l.toArray(),o.toArray());d.length&&(this._toggleCells(e(d),!1),this._resizeBoard())}else r.hasItems=1}},"bus view.card.batch.move":function(e,t){var n=t[0].target,i=this._findCellByCoordinates(n.x,n.y);i&&!i.hasItems&&(i.hasItems=1)},_setHiddenState:function(e){this.hidden=e,this._toggleCells(this._findCellsOnEmptyLanes(),e),this._resizeBoard()},_toggleCells:function(e,t){e.parent().toggleClass("hidden",t)},_resizeBoard:function(){this.fire("resize.executed",{onlyHeaders:!1,refreshElement:!0})},_findCellByElement:function(n){var i=e(n);return t.find(this.cells,function(e){return i.index(e.element)>=0})},_findCellByCoordinates:function(e,n){return e=""+e,n=""+n,t.find(this.cells,function(t){return t.x===e&&t.y===n})},_extractCellData:function(e){this.cells=t.map(e.cells,function(e){var t=e.data;return{x:t.x,y:t.y,element:e.element,hasItems:t.dynamic.items.length}})},_findCellsOnEmptyLanes:function(){var n={},i={};t.each(this.cells,function(e){e.x&&e.y&&e.hasItems&&(n[e.x]=!0,i[e.y]=!0)},this);var s=e();return t.each(this.cells,function(e){(e.x&&!n[e.x]||e.y&&!i[e.y])&&(s=s.add(e.element))}),s},_viewIsEmpty:function(){var e=t.any(this.cells,function(e){return e.x&&e.y&&e.hasItems});return!e},_attachListeners:function(t){this._removeListeners(),this.boardSettings=t,this.boardSettings.bind({listener:this,fields:["hideEmptyLanes"],callback:function(t){var n=!!t.hideEmptyLanes;
this._setHiddenState(n),n&&this._viewIsEmpty()&&this.fire("notification",{type:"information",$node:e("<div><h3>All columns and rows on this View are empty.</h3></div>")})}.bind(this)})},_removeListeners:function(){this.boardSettings&&(this.boardSettings.unbind({listener:this}),this.boardSettings=null)},destroy:function(){this._removeListeners(),this._super()}})});