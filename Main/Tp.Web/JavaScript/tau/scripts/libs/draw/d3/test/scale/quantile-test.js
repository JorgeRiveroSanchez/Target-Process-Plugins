require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.scale.quantile");suite.addBatch({quantile:{topic:function(){return d3.scale.quantile},"has the empty domain by default":function(a){assert.isEmpty(a().domain())},"has the empty range by default":function(a){assert.isEmpty(a().range())},"uses the R-7 algorithm to compute quantiles":function(a){var b=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual([3,6,6.9,7,7.1].map(b),[0,0,0,0,0]),assert.deepEqual([8,8.9].map(b),[1,1]),assert.deepEqual([9,9.1,10,13].map(b),[2,2,2,2]),assert.deepEqual([14.9,15,15.1,16,20].map(b),[3,3,3,3,3]);var b=d3.scale.quantile().domain([3,6,7,8,8,9,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual([3,6,6.9,7,7.1].map(b),[0,0,0,0,0]),assert.deepEqual([8,8.9].map(b),[1,1]),assert.deepEqual([9,9.1,10,13].map(b),[2,2,2,2]),assert.deepEqual([14.9,15,15.1,16,20].map(b),[3,3,3,3,3])},"domain values are sorted in ascending order":function(a){var b=d3.scale.quantile().domain([6,3,7,8,8,13,20,15,16,10]);assert.deepEqual(b.domain(),[3,6,7,8,8,10,13,15,16,20])},"non-numeric domain values are ignored":function(a){var b=d3.scale.quantile().domain([6,3,NaN,undefined,7,8,8,13,20,15,16,10,NaN]);assert.deepEqual(b.domain(),[3,6,7,8,8,10,13,15,16,20])},"quantiles returns the inner thresholds":function(a){var b=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual(b.quantiles(),[7.25,9,14.5]);var b=d3.scale.quantile().domain([3,6,7,8,8,9,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual(b.quantiles(),[7.5,9,14])},"range cardinality determines the number of quantiles":function(a){var b=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]);assert.deepEqual(b.range([0,1,2,3]).quantiles(),[7.25,9,14.5]),assert.deepEqual(b.range([0,1]).quantiles(),[9]),assert.deepEqual(b.range([,,,,,]).quantiles(),[6.8,8,11.2,15.2]),assert.deepEqual(b.range([,,,,,,]).quantiles(),[6.5,8,9,13,15.5])},"range values are arbitrary":function(a){var b=new Object,c=new Object,d=new Object,e=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]).range([b,c,d,b]);assert.deepEqual([3,6,6.9,7,7.1].map(e),[b,b,b,b,b]),assert.deepEqual([8,8.9].map(e),[c,c]),assert.deepEqual([9,9.1,10,13].map(e),[d,d,d,d]),assert.deepEqual([14.9,15,15.1,16,20].map(e),[b,b,b,b,b])}}}),suite.export(module)