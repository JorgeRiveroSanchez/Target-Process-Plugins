define(["Underscore","jQuery","tau/configurator","tau/components/component.assignmentsList","tests/common/testCase","tests/common/componentConfigCreator","tests/common/testData.Generator"],function(_,$,a,b,c,d,e){var f=function(){var f=new e;f.clear(),f.initDefaultData();var g=f.getUserStories(),h=f.getData(),i=f.getRoles(),j=g[3],k=j.id,l=new d;l.setEntityIDAndType(k,j.__type),l.setSelectedProjects([h.selectByType("project")[0]]),l.setProcesses(h.selectByType("process"));var m=l.getConfig(),n=new c("[component.assignmentsList]");m.editable=!0,n.initModule({componentConfig:m,data:h},b),n.test("should not refresh on save assignment from other entity",function(){var b=this.element,c=!1;this.component.on("refresh",function(){c=!0},this);var d=a.getStore(),e=i[1].id,f=g[0].assignments[0].id;this.serviceMock.registerSaveCommand({config:{id:f,$set:{role:{id:e}},fields:["id"]},returnedData:{id:f}}),d.save("assignment",{id:f,$set:{role:{id:e}}}).done(),this.component.removeAllListeners(this),equal(c,!1,"Refresh is not fired")}),n.test("should not refresh on remove assignment from other entity",function(){var b=!1;this.component.on("refresh",function(){b=!0},this);var c=a.getStore(),d=g[0].assignments[0].id;this.serviceMock.registerRemoveCommand({config:{id:d,fields:["id"]},returnedData:{id:d}}),c.remove("assignment",{id:d}).done(),this.component.removeAllListeners(this),equal(b,!1,"Refresh is not fired")}),n.test("should not refresh on save roleEffort from other entity",function(){var b=this.element,c=!1;this.component.on("refresh",function(){c=!0},this);var d=a.getStore(),e=i[1].id,f=g[0].roleEfforts[0].id;this.serviceMock.registerSaveCommand({config:{id:f,$set:{effortToDo:7},fields:["id"]},returnedData:{id:f}}),d.save("roleEffort",{id:f,$set:{effortToDo:7}}).done(),this.component.removeAllListeners(this),equal(c,!1,"Refresh is not fired")}),n.test("should not refresh when description of entity changed",function(){var b=!1;this.component.on("refresh",function(){b=!0},this);var c=a.getStore(),d={description:"New Description"};this.serviceMock.registerSaveCommand({config:{id:k,$set:d,fields:["id"]},returnedData:_.extend({id:k},d)}),c.save(j.__type,{id:k,$set:d}).done(),this.component.removeAllListeners(this),equal(b,!1,"Refresh is not fired")})};return{run:f}})