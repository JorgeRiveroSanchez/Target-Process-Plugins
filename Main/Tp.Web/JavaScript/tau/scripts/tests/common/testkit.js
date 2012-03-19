define(["Underscore","jQuery","tau/core/class","tau/configurator","tests/common/applicationContext.simple","tau/models/dataprocessor/model.processor.context","tests/components/common/common.setup","tests/components/component.specs","tests/common/service.mock","tau/utils/utils.fixturesLoader"],function(_,$,a,b,c,d,e,f,g,h){return a.extend({init:function(a,b){this.name=a,this.Component=b,this.appContext=new c,this.tests=[]},loadFixtures:function(a){var b=new h({generateId:!0,setType:!0});return b.load(a)},addTest:function(a){this.tests.push(a)},setData:function(a){this.data=a},setEntity:function(a){this.entity=a},selectProject:function(a,b){this.appContext.selectProject(a,b)},selectDefaultProject:function(){this.appContext.selectDefaultProject()},loginAs:function(a){this.appContext.loginAs(a)},getService:function(){return b.getService()},run:function(a){a=_.extend(a||{},{context:{applicationContext:this.appContext}}),d(a.context);var c=[];_.forEach(this.data,function(a,b){c=c.concat(_.values(a))});var h=e.create(this.name,c,this.Component,a,this.appContext),i={context:{type:this.entity.__type,id:this.entity.id}},j=f.create(h,i),k=_.bind(function(){var a=new g;b.setService(a),_.forEach(_.keys(this.data),function(a){b.getProxy().markRecordSetAsCompleteLoaded(a)})},this);j.viewShouldFollowDataComponentLifeCycle(function(){k()});var l=[];_.forEach(this.tests,function(a){l.push({name:a.name,context:a.context||null,preSetup:function(){k()},test:a.test})}),j.viewShouldPassTests(l),j.done()}})})