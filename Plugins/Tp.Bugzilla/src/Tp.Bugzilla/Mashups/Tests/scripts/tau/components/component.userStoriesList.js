define(["tau/components/component.list.creator","tau/core/termProcessor","tau/models/model.userStoriesList","tau/ui/templates/userStoriesList/ui.template.userStoriesList"],function(a,b,c,d){return{create:function(e){var f=e.context.applicationContext.processes[0].terms,g=new b(f),h={ModelType:c,template:d,message:"No "+g.getTerms("userStory").names.toLowerCase()+" found"};return a.create(h,e)}}})