define(["Underscore","jQuery","tau/core/extension.base"],function(e,t,i){return i.extend({"bus beforeInit + configurator.ready":function(t,i,n){var r=e.bind(function(e){var t=e.data,i={project:{id:t.project.id}},n={id:t.entity.id,changes:i,cmd:{config:{$set:i}}};this.fire("integration.react",n)},this),a=e.bind(function(e){var t=e.data,i={},n={id:t.bugId,changes:i,cmd:{config:{$set:i}}};this.fire("integration.react",n)},this),o=n.getGlobalBus();o.removeAllListeners(this),o.on("bugWasMarkedAsDuplicate",a,this),o.on("entityWasMovedToProject",r,this);var s=n.getStore();s.unbind(this);var d=e.bind(function(e){this.fire("integration.react",e.data)},this),c=["general","assignment","roleEffort"];e.each(c,e.bind(function(e){s.on({type:e,eventName:"afterSave",listener:this},d),s.on({type:e,eventName:"afterRemove",listener:this},d)},this))},"bus options.ready + beforeInit":function(e,i){t("body").delegate("a[href=#]","click",function(e){e.preventDefault()});var n=i.integration.reloadCallback,r=i.integration.progress;r&&this.fire("progress.ready",r),n&&this.fire("reloadCallback.ready",n)},"bus progress.ready:last + initProgress":function(e,t){t.show("Reloading...")},"bus progress.ready:last + application.error":function(e,t){t.hide()},"bus reloadCallback.ready:last + integration.react":function(e,t,i){t({data:i})},"bus configurator.ready > destroy":function(e,t){t.getStore().unbind(this),t.getGlobalBus().removeAllListeners(this)}})});