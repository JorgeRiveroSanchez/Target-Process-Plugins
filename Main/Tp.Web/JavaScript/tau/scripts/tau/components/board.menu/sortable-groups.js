define(["jQuery","tau/core/class","./sortable"],function(t,e,r){return e.mixin(r,{sortableSelector:".t3-view[draggable]",sortableGroupSelector:".t3-view-list-group[draggable]",groupSelector:".t3-view-list-group",_elementIsGroup:function(e){return t(e).is(this.groupSelector)},_removeDropClasses:function(t){return t.removeClass("t3-drop-target t3-drop-item-target t3-drop-group-target t3-drop-before t3-drop-after")},_addDropClasses:function(t,e){this._super(t,e),this.sortState.elementIsGroup?t.addClass("t3-drop-group-target"):(t.addClass("t3-drop-item-target"),this.sortState.$targetGroup&&this.sortState.$targetGroup.addClass("t3-drop-target t3-drop-item-target"))},_expandGroup:function(){var t=this.sortState.$targetGroup;if(t&&t[0]){var e=this._getSortableKey(t);this.props.model.expandGroup(e)}},_findSection:function(t){var e=t.closest(".t3-views-section");if(0===e.length){var r=this._findMenuRoot(t);e=r.find(".t3-views-section:last")}return e},_findContainingGroup:function(t){return t.closest(this.groupSelector)},_findSortableFromEventForItem:function(e,r){if(!this.sortState.overNonSortable)return{$group:this._findContainingGroup(r),$element:r};var o,s=t(e.target),i=this._findContainingGroup(s);if(0===i.length&&(o=this._findSection(s),i=o.find(".t3-view-list-group:last"),0===i.find(".t3-view:not(.t3-dragging)").length))return{$group:i,$element:i};var n=s.closest(".t3-header");return n.length?(i=this._findContainingGroup(n),r=this._findFirstSortable(i),{$group:i,$element:r.length?r:i}):(i=this._findContainingGroup(r),i.length?(r=this._findLastSortable(i),{$group:i,$element:r.length?r:i}):(s.is(".t3-views-section > .t3-name")&&(o=this._findSection(s),r=this._findFirstSortable(o),i=this._findContainingGroup(r)),{$group:i,$element:r}))},_findSortableFromEventForGroup:function(e){var r,o,s=t(e.target),i=s.closest(".t3-views-section");if(!i.length)return r=this._findMenuRoot(s),o=r.find(this.sortableGroupSelector+":last"),o.length||(o=r.find(".t3-view-list-group:last")),o;if(o=s.closest(this.sortableGroupSelector),o.length)return o;
var n=i.find(this.sortableGroupSelector);if(n.length)return o=s.is(".t3-views-section")||s.closest(".i-role-board-menu-item").length?n.last():n.first();var a=i.find(".t3-view-list-group");return a.length?o=a:(r=this._findMenuRoot(s),o=r.find(this.sortableGroupSelector+":first"),o.length||(o=r.find(".t3-view-list-group:last")),o)},_findSortableFromEvent:function(t){if(this.sortState.elementIsGroup){var e=this._findSortableFromEventForGroup(t);return this._setSortStateTargetGroup(e),e}var r=this._super(t),o=this._findSortableFromEventForItem(t,r);return this._setSortStateTargetGroup(o.$group),o.$element},_clearSortState:function(){this.sortState&&clearTimeout(this.sortState.groupExpandTimeout),this._super()},_setSortStateElement:function(e){this.sortState.$element=t(e).closest("[draggable]"),this.sortState.key=this._getSortableKey(this.sortState.$element),this.sortState.elementIsGroup=this._elementIsGroup(this.sortState.$element)},_setSortStateTargetGroup:function(t){var e=this.sortState.$targetGroup&&this.sortState.$targetGroup[0];e!==t[0]&&(clearTimeout(this.sortState.groupExpandTimeout),this.sortState.$targetGroup=t,this.sortState.elementIsGroup||(this.sortState.groupExpandTimeout=setTimeout(this._expandGroup,500)))},_getSortableText:function(){return this.sortState.elementIsGroup?this.sortState.$element.find(".t3-group > .i-role-view-menu-header").text():this._super()},_sortItems:function(){var t=this.sortState.key,e=this.sortState.over.$element,r=this._getSortableKey(e),o=this.sortState.placeAfter;if(t!==r){if(this.sortState.elementIsGroup)return void(this.sortState.$element.is(o?e.next():e.prev())||this.sortGroups(t,r,o));var s=this._getSortableKey(this.sortState.$targetGroup);s===r||null===s?this.sortItems(t,null,s,!1):this.sortItems(t,r,s,o)}}})});