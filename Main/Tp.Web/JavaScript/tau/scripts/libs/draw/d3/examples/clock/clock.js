function fields(){function b(){return 32-(new Date(a.getYear(),a.getMonth(),32)).getDate()}var a=new Date,c=(a.getSeconds()+a.getMilliseconds()/1e3)/60,d=(a.getMinutes()+c)/60,e=(a.getHours()+d)/24,f=(a.getDay()+e)/7,g=(a.getDate()-1+e)/b(),h=(a.getMonth()+g)/12;return[{value:c,index:.7,text:fsec(a)},{value:d,index:.6,text:fmin(a)},{value:e,index:.5,text:fhou(a)},{value:f,index:.3,text:fwee(a)},{value:g,index:.2,text:fdat(a)},{value:h,index:.1,text:fmon(a)}]}var w=960,h=700,r=Math.min(w,h)/1.8,s=.09,fsec=d3.time.format("%S s"),fmin=d3.time.format("%M m"),fhou=d3.time.format("%H h"),fwee=d3.time.format("%a"),fdat=d3.time.format("%d d"),fmon=d3.time.format("%b"),fill=d3.scale.linear().range(["hsl(-180, 50%, 50%)","hsl(180, 50%, 50%)"]).interpolate(d3.interpolateHsl),arc=d3.svg.arc().startAngle(0).endAngle(function(a){return a.value*2*Math.PI}).innerRadius(function(a){return a.index*r}).outerRadius(function(a){return(a.index+s)*r}),vis=d3.select("#clock").append("svg").attr("width",w).attr("height",h).append("g").attr("transform","translate("+w/2+","+h/2+")"),g=vis.selectAll("g").data(fields).enter().append("g");g.append("path").style("fill",function(a){return fill(a.value)}).attr("d",arc),g.append("text").attr("text-anchor","middle").attr("dy","1em").text(function(a){return a.text}),d3.timer(function(){var a=vis.selectAll("g").data(fields);a.select("path").style("fill",function(a){return fill(a.value)}).attr("d",arc),a.select("text").attr("dy",function(a){return a.value<.5?"-.5em":"1em"}).attr("transform",function(a){return"rotate("+360*a.value+")"+"translate(0,"+ -(a.index+s/2)*r+")"+"rotate("+(a.value<.5?-90:90)+")"}).text(function(a){return a.text})})