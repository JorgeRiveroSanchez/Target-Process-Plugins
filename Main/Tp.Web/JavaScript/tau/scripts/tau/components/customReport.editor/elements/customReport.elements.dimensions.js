define(["require","Underscore","../customReport.settings.parser","tau/core/class"],function(e){var t=e("Underscore"),i=e("../customReport.settings.parser"),n=e("tau/core/class"),o=n.extend({init:function(e){this.$el=e.$el},get:function(){var e=[{axis:"x1",getter:this._firstX.bind(this)},{axis:"x2",getter:this._secondX.bind(this)},{axis:"y1",getter:this._firstY.bind(this)},{axis:"y2",getter:this._secondY.bind(this)},{axis:"size",getter:this._size.bind(this)},{axis:"color",getter:this._color.bind(this)}];return t.chain(e).map(function(e){var t=e.getter().val();return t?{model:t,dimension:e}:null}).compact().map(function(e){return this._createDimension(e)}.bind(this)).reduce(function(e,t){return this._groupDimensionByModel(e,t)},[],this).value()},_createDimension:function(e){var t=e.dimension.axis,i=this.$el.find("[name="+t+"_filter]");return{model:e.model,id:t,filter:i.is(":visible")?i.val():""}},_groupDimensionByModel:function(e,i){var n=t.find(e,function(e){return e.model.toLowerCase()===i.model.toLowerCase()&&e.filter.toLowerCase()===i.filter.toLowerCase()});return n?n.axes.push(i.id):e.push({id:i.id,model:i.model,filter:i.filter,axes:[i.id]}),e},set:function(e){return e.get({fields:["reportSettings"]}).then(function(e){var t=new i({reportSettings:e.reportSettings}),n=function(e){return e?e.model||e.id:""},o=n(t.getX2()),s=n(t.getY2());this._firstX().val(n(t.getX1())),this._secondX().val(o),this._firstY().val(n(t.getY1())),this._secondY().val(s),this._color().val(n(t.getColor())),this._size().val(n(t.getSize())),this._bindSecondLevel("x2",o),this._bindSecondLevel("y2",s)}.bind(this))},bindActions:function(){var e=function(e){e.$toggle.on("click",function(t){this._toggleVisibility($(t.currentTarget).hasClass("tau-icon-r-direction"),e.$toggle,e.$section)}.bind(this))}.bind(this);e(this._getSecondLevel("x2")),e(this._getSecondLevel("y2"))},_bindSecondLevel:function(e,t){var i=this._getSecondLevel(e);this._toggleVisibility(Boolean(t),i.$toggle,i.$section)},_getSecondLevel:function(e){return{$toggle:this.$el.find(".i-role-"+e+"-toggle").eq(0),$section:this.$el.find(".i-role-"+e+"-section").eq(0)}
},_toggleVisibility:function(e,t,i){t.toggleClass("tau-icon-r-direction",!e),t.toggleClass("tau-icon-b-direction",e),i.toggleClass("tau-row-show",e),i.toggleClass("tau-row-hide",!e)},_getNameByModel:function(e,i,n){var o=i,s=e.split(".");return e.indexOf("(")>=0?s.length>1&&(o=s[s.length-1]):o=2==s.length||1==s.length?s[0]:s[s.length-2],o=o.charAt(0).toLowerCase()+(o.length>1?o.slice(1):""),t.contains(n,o)&&(o+=n.length),o},_firstX:function(){return this.$el.find("input.i-role-firstX")},_secondX:function(){return this.$el.find("input.i-role-secondX")},_firstY:function(){return this.$el.find("input.i-role-firstY")},_secondY:function(){return this.$el.find("input.i-role-secondY")},_color:function(){return this.$el.find("input.i-role-color")},_size:function(){return this.$el.find("input.i-role-size")}});return o});