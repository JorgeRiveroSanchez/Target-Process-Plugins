define(["require","Underscore"],function(e){var r=e("Underscore");return{createFromRawData:function(e,t,i,n){var s,o=!1;try{var a,c=this._parseDefinition(t);if(i)a=this._parseDefinition(i);else{a={type:"scatterplot"};var f=c.dimensions,p=["x","y","color","size"],u=r.zip(p,f);r.each(u,function(e){e[0]&&e[1]&&(a[e[0]]=e[1].id)}),o=!0}s=this.createFromDefinition(e,c,a,n)}catch(m){e.set({set:{reportError:{message:m.message,name:m.name}}})}return{reportSettings:s,isReportGuessed:o}},createFromDefinition:function(e,r,t,i){var n={dataSource:r,report:t,tick:i};return e.set({set:{reportSettings:n}}),n},_parseDefinition:function(e){return JSON.parse(e)}}});