define(["Underscore","jQuery","tau/core/extension.base"],function(_,$,ExtensionBase){return ExtensionBase.extend({"bus $el.ready":function(evt,$el){this.fire("$form.ready",$el.find(".i-role-form"))},"bus $form.ready":function(evt,$form){var self=this;$form.on("submit",function(e){e.preventDefault();var data={};data.members=[],$form.find(".i-role-members-widget").trigger("process");var $members=$form.find(".i-role-member");$members.each(function(){data.members.push($(this).data())}),self.fire("form.submitted",data)})},"bus configurator.ready:last + $form.ready:last + invitation.success":function(evt,configurator,$form,data){$form.trigger("reset")}})})