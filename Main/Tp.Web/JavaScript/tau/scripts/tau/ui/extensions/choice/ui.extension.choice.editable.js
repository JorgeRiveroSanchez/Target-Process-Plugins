define(["Underscore","jQuery","tau/utils/utils.textsearch","tau/components/extensions/component.extension.base","tau/ui/behaviour/common/ui.behaviour.listSelectable"],function(e,t,i,s){return s.extend({"bus dataBind+afterRender":function(i){this.searchIndex=null;var s=this.config,a=this.element=i.afterRender.data.element,l=this.dataToBind=i.dataBind.data,n=0;e.forEach(l.states,function(e){e.items?n+=e.items.length:n++}),this.$list=a.find(".drop-down-list"),this.$options=this.$list.find(".i-role-option"),this.$list.on("click",".i-role-option:not(:has(.tau-loader))",e.bind(this.onItemSelected,this)),s.hasOwnProperty("maxHeight")&&this.$list.css({"max-height":s.maxHeight,"overflow-y":"auto"});var o=t("<div class='drop-down-actions' role='actions' />"),r=!1;if(l.hasOwnProperty("defaultValue")&&!this.config.hideDefaultValue){r=!0;var d=this.config.defaultValueLabel||"default";t("<span class='action-link default'>"+d+"</span>").click(e.bind(this.defaultValue,this)).appendTo(o)}if(this.config.allowToReset=!!this.config.allowToReset,l.nullableValue&&this.config.allowToReset){r=!0;var h=this.config.clearValueLabel||"reset";t("<span class='action-link clear' role='action-reset'>"+h+"</span>").click(e.bind(this.clearValue,this)).appendTo(o)}if(r&&o.insertBefore(this.$list),0===l.states.length&&l.completed){var c=s.emptyDataMessage||"None";this.$list.append("<span class='empty-message'>"+c+"</span>")}if(s.filter&&n>3){this.filterField=t("<input type='text' class='filter-field' />").keyup(e.bind(this._filterDelegate,this)),s.filterPlaceholder&&"string"==typeof s.filterPlaceholder&&this.filterField.attr("placeholder",s.filterPlaceholder);var u=t("<div class='filter-field-wrapper'></div>").append(this.filterField);u.insertBefore("top"===this.config.filterPosition&&r?o:this.$list)}if(s.expandable&&!l.completed){var f=s.mode||"short";if("full"!==f){var p=t("<div class='drop-down-footer'></div>"),b=this.config.fullModeLabel||"more...";this.$mode=t("<div class='action-link more'>"+b+"</div>").click(e.bind(this._toggleMode,this)).appendTo(p),p.insertAfter(this.$list)}}this.bus.fire("dataRendered",{element:a})},"bus $outerBubbled.ready:last+dataRendered:last":function(){this._createSelectable(),this.bus.fire("focus")},"bus $outerBubbled.show:last":function(){this.bus.fire("focus")},_createSelectable:function(){this.$list.listSelectable({items:".drop-down-option:visible",className:"drop-down-option_hover",keyboardManager:this.config.context.configurator.getKeyBoardManager()}),this.$list.addClass("tau-dropdownlist_selectable_true")},_enableSelectable:function(){this.$list.hasClass("tau-dropdownlist_selectable_true")&&this.$list.data("ui-listSelectable")&&this.$list.listSelectable("enable")},_disableSelectable:function(){this.$list.hasClass("tau-dropdownlist_selectable_true")&&this.$list.data("ui-listSelectable")&&this.$list.listSelectable("disable")},"bus dataRendered:last+focus":function(){this._enableSelectable()},"bus dataRendered:last+refresh":function(){this._enableSelectable()},"bus dataRendered:last+blur":function(){this._disableSelectable()},_toggleMode:function(e){e.stopPropagation();var t="full"===this.config.mode?"short":"full";this.fire("refresh",{mode:t})},clearValue:function(e){e.stopPropagation(),this._updateState(null)},defaultValue:function(e){e.stopPropagation(),this._updateState(this.dataToBind.defaultValue)},onItemSelected:function(e){var i=t(e.currentTarget).data();this._updateState(i.id,i)},_updateState:function(t,i){var s=!0;if(this.config.confirmation&&window.confirm&&(s=window.confirm(this.config.confirmation)),s){var a=i?e.clone(i):{};a.id=t,this.fire("updateState",a)}},_resetList:function(){this.$options.show()},_noResults:function(e){e='"'+e+'" not found',this.$noResults?this.$noResults.text(e):this.$noResults=t("<div class='not-found' />").text(e).insertBefore(this.$list),this.$noResults.show()},_clearNoResults:function(){this.$noResults&&this.$noResults.hide()},_filterDelegate:function(s){var a=s.keyCode;if(a!=jQuery.ui.keyCode.DOWN&&a!=jQuery.ui.keyCode.UP&&a!=jQuery.ui.keyCode.ENTER&&a!=jQuery.ui.keyCode.ESCAPE){if(!this.searchIndex){var l=[];this.searchIndex=new i,this.$options.each(function(e,i){l.push({_id:e,data:t(i).text()}),t(this).data("text",t(i).text())}),this.searchIndex.load(l)}var n=this.filterField.val(),o=this.searchIndex.search(n);this.$options.hide();var r=this.$options;e.forEach(o,function(e){var t=r.eq(e._id),i=t.data("text")+"";i=i.substr(0,e.entry.from)+"<em>"+i.substr(e.entry.from,e.entry.len)+"</em>"+i.substr(e.entry.from+e.entry.len,i.length);var s=t.find(".i-role-optiontext");s.length?s.html(i):t.html(i),t.show(),t.parent().show()}),r.filter(":hidden").parent().not(r.filter(":visible").parent()).hide(),n.length?o.length?this._clearNoResults():this._noResults(n):(this._clearNoResults(),this._resetList()),this.$list.data("ui-listSelectable")&&this.$list.listSelectable("reset"),this.fire("choice.editable.filter.changed",{filter:n})}}})});