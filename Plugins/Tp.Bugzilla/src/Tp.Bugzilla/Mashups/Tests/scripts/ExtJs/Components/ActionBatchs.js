UserStoryActionBatchManager = function () {
    return new function () {
        this.init = function (messageControlId) {
            return {
                bugTrackingNotAvailable: false,

                testCasesNotAvailable: false,

                warningMessageTemplate: 'Target project has {practices} practice(s) disabled. Related entities will not be moved.',

                onChangeMoveTargetProject: function (ctrl) {
                    var selectedProjectId = ctrl.options[ctrl.selectedIndex].value;

                    if (!selectedProjectId || Number(selectedProjectId) <= 0) {
                        this.setDivMessage('');
                        return;
                    }
                    WebMethods.IsPracticeAvailable(Number(selectedProjectId), 'BugTracking', this.onDoneBugTracking, null, this);
                    WebMethods.IsPracticeAvailable(Number(selectedProjectId), 'TestCases', this.onDoneTestCases, null, this);
                },

                onDoneBugTracking: function (result, context) {
                    context.bugTrackingNotAvailable = !result;
                    context.onDone();
                },

                onDoneTestCases: function (result, context) {
                    context.testCasesNotAvailable = !result;
                    context.onDone();
                },

                onDone: function () {
                    var practices = this.bugTrackingNotAvailable ? 'BugTracking' : '';
                    practices += this.bugTrackingNotAvailable && this.testCasesNotAvailable ? ', ' : '';
                    practices += this.testCasesNotAvailable ? 'TestCases' : '';

                    if (practices != '') {
                        var message = this.warningMessageTemplate.replace('{practices}', practices);
                        this.setDivMessage(message);

                        divWarningMessage.show();
                    }
                    else {
                        this.setDivMessage('');
                    }
                },

                setDivMessage: function (message) {
                    var divWarningMessage = Ext.get(messageControlId);
                    divWarningMessage.dom.innerHTML = message;
                }
            }
        };
    }
}();

RequestActionBatchAction = function(){
    return new function(){
         this.init = function(messageControlId) {
            return {

                bugTrackingNotAvailable: false,

                testCasesNotAvailable: false,

                warningMessageTemplate: 'Target project has {practices} practice(s) disabled. Related entities will not be moved.',

                onChangeMoveTargetProject: function (ctrl) {
                    var selectedProjectId = ctrl.options[ctrl.selectedIndex].value;

                    if (!selectedProjectId || Number(selectedProjectId) <= 0) {
                        this.setDivMessage('');
                        return;
                    }
                    WebMethods.IsPracticeAvailable(Number(selectedProjectId), 'BugTracking', this.onDoneBugTracking, null, this);
                },

                onDoneBugTracking: function (result, context) {
                    context.bugTrackingNotAvailable = !result;
                    context.onDone();
                },

                onDoneTestCases: function (result, context) {
                    context.testCasesNotAvailable = !result;
                    context.onDone();
                },

                onDone: function () {
                    var practices = this.bugTrackingNotAvailable ? 'BugTracking' : '';
                    practices += this.bugTrackingNotAvailable && this.testCasesNotAvailable ? ', ' : '';
                    practices += this.testCasesNotAvailable ? 'TestCases' : '';

                    if (practices != '') {
                        var message = this.warningMessageTemplate.replace('{practices}', practices);
                        this.setDivMessage(message);
                        //divWarningMessage.setVisibilityMode(Ext.Element.DISPLAY);
                        divWarningMessage.show();
                    }
                    else {
                        this.setDivMessage('');
                        //divWarningMessage.hide();
                    }
                },

                setDivMessage: function (message) {
                    var divWarningMessage = Ext.get(messageControlId);
                    divWarningMessage.dom.innerHTML = message;
                }
            };
        };
    };
}();