define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tp/reports/chart.plot","tp/reports/cycleTimeDistribution/chart.scales","tp/reports/cycleTimeDistribution/chart.histogram","tp/reports/cycleTimeDistribution/chart.maxValues","tp/reports/cycleTimeDistribution/chart.probability","tp/reports/cycleTimeDistribution/chart.hover","libs/d3/d3","tp/reports/cycleTimeDistribution/chart.axes","tp/reports/cycleTimeDistribution/behaviour.hover.bars","tp/reports/cycleTimeDistribution/behaviour.hover.probability"],function(e,t,r,n,i,o,a,s,c,l,u,d,p){return r.extend({"bus afterRender + contextProvider.ready + configurator.ready:last":function(e,t,r,l){var h=p.create({placeholder:t.element}),f=d.create({placeholder:t.element,contextProvider:r}),y=new n({scales:new i,placeholder:t.element.find(".tau-chart-plot").get(0),axes:[u.x,u.y],size:l.service("chart.size"),charts:[new a({contextProvider:r}),new s,new c({handlers:[h]}),new o({handlers:[f,h]})]});this.fire("plot.ready",y)},"bus afterRender:last + plot.afterRender":function(e,t){var r=t.element.find(".chart:has(g.probability)"),n=l.select(r[0]);t.element.find(".chart").on("mouseover",function(){n.transition().attr("opacity",1)}),t.element.find(".chart").on("mouseout",function(){n.transition().attr("opacity",0)})},_hist:function(e){var r=l.range(0,Math.min(Math.round(l.max(e,function(e){return e.y}))+1,i.xMax+1)+1),n=l.layout.histogram().bins(r).frequency(!1).value(function(e){return e.y});return l.nest().key(function(e){return e.fill}).rollup(function(e){return t.extend(n(e),{count:e.length})}).entries(e)},"bus plot.ready:last + beforeLoad":function(e,t){t.loading(!0)},"bus plot.ready:last + afterLoad":function(e,t){t.loading(!1)},"bus plot.ready:last + data.ready":function(e,t,r){t.data({nodes:this._hist(r.data)},r.settings),this.fire("plot.afterRender",t)}})});