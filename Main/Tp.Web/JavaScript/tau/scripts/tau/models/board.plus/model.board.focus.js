define(["Underscore","tau/core/event.emitter"],function(_,a){return a.extend({"bus boardSettings.ready":function(a){var b=a.data.boardSettings,c=this;b.get({fields:["focus"],callback:function(a){c.fire("settings.focus.provided",a.focus)}}),b.bind({fields:["focus"],listener:c,callback:function(a){c.fire("settings.focus.provided",a.focus)}})},"bus boardSettings.ready:last+view.axis.focus.executed:last":function(a){var b=_.values(a)[0].data.boardSettings,c=_.values(a)[1].data;b.set({set:{focus:c},callback:function(a){}})}})})