define(["Underscore","jQuery","tau/configurator","tests/common/testCase","tests/common/componentConfigCreator","tau/components/component.property.isPrivate","tests/common/testData.Generator"],function(_,$,a,b,c,d,e){var f=function(){var a=new e;a.initDefaultData();var f=a.getData(),g=a.getImpediments()[1],h=a.getImpediments()[0],i=new c;i.setEntityIDAndType(g.id,g.__type),i.setSelectedProjects([f.selectByType("project")[0]]),i.setProcesses(f.selectByType("process"));var j=i.getConfig();i=new c,i.setEntityIDAndType(h.id,h.__type),i.setSelectedProjects([f.selectByType("project")[0]]),i.setProcesses(f.selectByType("process"));var k=i.getConfig(),l=new b("[component.isPrivate]");l.initModule({componentConfig:k,data:f},d),l.test("should render valid markup for not private impediment",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("unchecked"),"Is not Private")});var l=new b("[component.isPrivate]");l.initModule({componentConfig:j,data:f},d),l.test("should render valid markup",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("checked"),"Is Private")});var m=_.clone(j),l=new b("[component.isPrivate]");l.initModule({componentConfig:m,data:f},d),l.test("should uncheck on click",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("checked"),"Is Private"),this.serviceMock.registerSaveCommand({config:{$set:{isPrivate:!1},fields:["id"],id:g.id},returnedData:{id:g.id,isPrivate:!1}}),a.find(".ui-checkbox").click(),a=this.element,ok(!a.find(".ui-checkbox").hasClass("checked"),"Is not checked"),ok(a.find(".ui-checkbox").hasClass("unchecked"),"Is unchecked")}),l.test("should uncheck on edit",function(){var a=this.element;ok(a.find(".ui-checkbox").hasClass("checked"),"Is Private"),this.serviceMock.registerSaveCommand({config:{$set:{isPrivate:!1},fields:["id"],id:g.id},returnedData:{id:g.id,isPrivate:!1}}),this.component.fire("edit"),a=this.element,ok(!a.find(".ui-checkbox").hasClass("checked"),"Is not checked"),ok(a.find(".ui-checkbox").hasClass("unchecked"),"Is unchecked")})};return{run:f}})