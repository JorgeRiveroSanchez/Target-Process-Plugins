define(["Underscore"],function(e){return{isCardOnPage:function(r,n,i,t){if(!n.length)return!0;var u,a,s=e.isNumber(t.prevOrderingValue)?t.prevOrderingValue:e.first(n),d=e.isNumber(t.nextOrderingValue)?t.nextOrderingValue:e.last(n),g=r;return i?(a=g>s,u=d>g):(a=s>g,u=g>d),a=a&&t.hasPrev,u=u&&t.hasNext,!a&&!u}}});