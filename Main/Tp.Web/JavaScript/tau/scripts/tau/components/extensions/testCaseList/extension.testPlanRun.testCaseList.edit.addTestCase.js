define(["Underscore","jQuery","tau/components/extensions/component.extension.base","tau/utils/utils.urlBuilder","tau/core/termProcessor"],function(_,$,a,b,c){return a.extend({"bus afterRender+permissionsReady+dataBind":function(a){if(a.permissionsReady.data.editable){var d=a.dataBind.data,e=a.afterRender.data.element,f=this.config.context.getTerms(),g=new c(f),h=e.find(".tau-add-testCase"),i=$('<a class="tau-add-testCase">Add '+g.getTerms("TestCase").names+"</a>");i.attr("href",b.getAddTestCaseForTestPlanRunUrl(this.config.context.entity.id)),i.text(h.text()),h.replaceWith(i)}}})})