define(["tau/core/templates-factory"],function(templates){var config={name:"board.overview",engine:"jqote2",markup:['<% if (this.viewMode == "board"){ %>','<div class="tau-boardoverview <% if (this.isCollapsed == false) { %>tau-boardoverview_active_true<% } %>"  >','<div role="holder" class="tau-boardoverview__holder">',"</div>","</div>","<% } else { %>","<div></div>","<% } %>"],dependencies:[]};return templates.register(config)})