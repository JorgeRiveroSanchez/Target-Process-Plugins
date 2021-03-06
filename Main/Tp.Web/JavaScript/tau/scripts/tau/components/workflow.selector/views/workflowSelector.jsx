define(function(require) {
    'use strict';

    var React = require('libs/react/react-ex'),
        _ = require('Underscore'),
        WorkflowUtils = require('../utils/workflow.utils'),
        EntityTypeWorkflowSelector = require('jsx!tau/components/workflow.selector/views/entityTypeWorkflowSelector');

    return React.createClass({
        displayName: 'Workflows selector',

        getDefaultWorkflow: function(entityType) {
            return WorkflowUtils.findDefaultWorkflow(this.props.workflows, entityType);
        },
        getCustomizedWorkflow: function(entityType) {
            return this.props.customizedWorkflows[entityType];
        },
        getSelectedWorkflow: function(entityType) {
            return this.getCustomizedWorkflow(entityType) || this.getDefaultWorkflow(entityType);
        },

        selectWorkflow: function(entityType, evt) {
            var newWorkflowId = parseInt(evt.target.value);
            this.changeSelected(entityType, _.findWhere(this.props.workflows, {id: newWorkflowId}));
        },

        changeSelected: function(entityType, newWorkflow) {
            var prevWorkflow = this.getSelectedWorkflow(entityType);
            if (newWorkflow == this.getDefaultWorkflow(entityType)) {
                if (this.props.customizedWorkflows[entityType]) {
                    delete this.props.customizedWorkflows[entityType];
                }
            }
            else {
                this.props.customizedWorkflows[entityType] = newWorkflow;
            }

            this.setState(this.props.customizedWorkflows);

            if (newWorkflow != prevWorkflow) {
                var groupState = {
                    group: this.props.group,
                    customizedWorkflows: this.props.customizedWorkflows
                };
                this.props.onWorkflowChanged(groupState);
            }
        },

        getWorkflows: function(entityType) {
            return WorkflowUtils.findWorkflows(this.props.workflows, entityType);
        },

        render: function() {
            var entityTypes = _.chain(this.props.entityTypes)
                .map(function(entityType) {
                    return {
                        entityType: entityType,
                        workflows: this.getWorkflows(entityType)
                    }
                }, this)
                .filter(function(data) {
                    return _.some(data.workflows);
                }, this)
                .map(function(data) {
                    return (
                        <EntityTypeWorkflowSelector
                            key={data.entityType}
                            terms= {this.props.terms}
                            group= {this.props.group}
                            entityType={data.entityType}
                            workflows={data.workflows}
                            selectWorkflow={this.selectWorkflow.bind(this, data.entityType)}
                            selectedWorkflow = {this.getSelectedWorkflow(data.entityType)}/>
                    );
                }, this)
                .value();

            var classes = {
                'tau-active': true,
                'tau-category-items-workflow-settings': true
            };
            return (
                <ul className={React.addons.classSet(classes)} key={'group' + this.props.group}>
                    {entityTypes}
                </ul>);
        }
    });
});