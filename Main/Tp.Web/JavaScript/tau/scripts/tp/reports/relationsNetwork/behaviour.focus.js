define(["libs/d3/d3"],function(t){function e(e){return t.select(e.placeholder.parentNode.parentNode.parentNode)}function c(t,e){return t.push(e),e.links.forEach(function(e){-1==t.indexOf(e)&&t.push(e),-1==t.indexOf(e.source)&&c(t,e.source),-1==t.indexOf(e.target)&&c(t,e.target)}),t}function s(t){return!t.selectAll(".tau-chart-focused").empty()}function n(e){return function(){this.each(function(){t.select(this).classed("tau-chart-focused",e),t.select(this).style("z-index",e?100:void 0)})}}function i(t){t.classed("tau-chart-focus",!1),t.selectAll(".tau-chart-focused").call(n(!1))}function r(t,e){function c(e){return t.selectAll('[data-entity-id="'+e+'"]')}i(t),t.classed("tau-chart-focus",!0),e.forEach(function(t){c(t.id).call(n(!0))})}return{"dragstart.behavior":function(c,n){s(t.select(this))||i(e(n))},click:function(n,u){var a=t.select(t.event.target).attr("class");!a||a.indexOf("tau-id")>-1||(s(t.select(this))?i(e(u)):t.select(this).classed("i-trigger-set-focus")?r(e(u),c([],n)):t.select(this).classed("i-trigger-reset-focus")&&i(e(u)))}}});