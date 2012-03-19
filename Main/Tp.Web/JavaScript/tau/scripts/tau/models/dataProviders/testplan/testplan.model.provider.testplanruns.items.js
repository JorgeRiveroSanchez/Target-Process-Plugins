define(["Underscore","tau/models/dataProviders/model.provider.items.base","tau/configurator"],function(_,a,b){return a.extend({fetch:function(a){this._fetch("testPlanRuns","testPlanRun","severity",a)},_createDetailCommand:function(a){var b={};b[a]=["id","name","numericPriority","tags","effort","effortCompleted","effortToDo","timeSpent","timeRemain","passedCount","failedCount","notRunCount","testCaseRuns-count",{entityState:["id","name","isInitial","isFinal","numericPriority","isCommentRequired",{nextStates:["id"]}]},{roleEfforts:["id","effort","effortToDo",{role:["id","name","isPair","hasEffort"]}]},{assignments:["id",{role:["id"]},{generalUser:["id","firstName","lastName"]}]},{release:["id","name"]},{iteration:["id","name"]},{build:["id","name"]}];var c={project:["id"]};return this.config.multiprojects&&c.project.push("abbreviation"),b[a].push(c),this.config.additionalFields&&_.indexOf(this.config.additionalFields,"iteration")>-1&&b[a].push({iteration:["id","name"]}),b},_convertData:function(a){return a=this._super(a),_.sortBy(a,function(a){var b=a.numericPriority||0;return b})},_convertItem:function(a){var c=this,d=!0;this.config.context.isPracticeAvailable("Iterations")||(d=!1);var e=b.getApplicationPath(),f={id:a.id,name:a.name,numericPriority:a.numericPriority,__type:a.__type,entityState:{id:a.entityState.id,name:a.entityState.name,isInitial:a.entityState.isInitial,isFinal:a.entityState.isFinal,numericPriority:a.entityState.numericPriority},assignments:this._processAssignments(a),projectId:a.project.id,entitiesCount:0,release:a.release,iteration:a.iteration,build:a.build,passedCount:_.toNumber(a.passedCount)||0,failedCount:_.toNumber(a.failedCount)||0,notRunCount:_.toNumber(a.notRunCount)||0,isAvailableIteration:d,additionalActions:{}};return this.config.multiprojects&&(f.project={id:a.project.id,abbreviation:a.project.abbreviation}),this.config.additionalFields&&_.indexOf(this.config.additionalFields,"iteration")>-1&&(f.iteration={id:a.iteration?a.iteration.id:null,name:a.iteration?a.iteration.name:null}),f}})})