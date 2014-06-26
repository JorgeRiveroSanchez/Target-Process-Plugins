define(["Underscore","jQuery","tau/core/class"],function(t,e,i){return i.extend({init:function(i,r,s){this.connection=s,t.isArray(r)||(r=[r]),this.deferDisconnected=e.Deferred(),this.$cmdOnAbort=e.Deferred(),this.$cmdStart=e.Deferred(),this.$cmdStarted=e.Deferred(),this.$cmdStop=e.Deferred(),this.$cmdStopped=e.Deferred(),this.$cmdNotify=e.Deferred(),this.$cmdBatchNotify=e.Deferred(),this.params=t.map(r,t.bind(function(t){return t.callback=this.$cmdNotify.notify,t.batchCallback=this.$cmdBatchNotify.notify,t.clientId=t.parameters.clientId,t},this)),this.connection.disconnectedOnce(this.deferDisconnected.resolve),this.connection.startAsync(t.bind(function(t){this.setSubscriber(t.createSubscriber(i))},this))},disconnected:function(t){return this.deferDisconnected.done(t),this},aborted:function(t){return this.$cmdOnAbort.done(t),this},start:function(t){return this.$cmdStarted.done(t),this.$cmdStart.resolve(this.params),this},stop:function(t){this.deferDisconnected=e.Deferred(),this.$cmdStopped.done(t),this.$cmdStop.resolve()},on:function(i){var r={},s=function(t){var e=r["*"];e&&e.notify(t);var i=(t.data.modification||"").toLowerCase(),s=r[i];s&&s.notify(t)},n=e.Deferred(),c=function(t){n.notify(t)};this.$cmdNotify.progress(s),this.$cmdBatchNotify.progress(c);var o=(i.eventName||"*").toLowerCase(),d=i.callback||e.noop,h=i.batchCallback||e.noop;t.has(r,o)||(r[o]=e.Deferred()),n.progress(h);var a=r[o];return a.progress(d),this},setSubscriber:function(e){this.subscriber=e,this.subscriber.aborted.done(this.$cmdOnAbort.resolve),this.$cmdStop.done(t.bind(function(){this.subscriber.unsubscribe(this.$cmdStopped.resolve)},this)),this.$cmdStart.done(t.bind(function(t){this.subscriber.subscribe(t,this.$cmdStarted.resolve)},this))}})});