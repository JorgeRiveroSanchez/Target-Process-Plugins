(function(){science.lin={},science.lin.tridag=function(a,b,c,d,e,f){var g,h;for(g=1;g<f;g++)h=a[g]/b[g-1],b[g]-=h*c[g-1],d[g]-=h*d[g-1];e[f-1]=d[f-1]/b[f-1];for(g=f-2;g>=0;g--)e[g]=(d[g]-c[g]*e[g+1])/b[g]}})()