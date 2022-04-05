const tinymce = require("tinymce");

Template.autoformTinyMCE.onRendered(function() {
    var initOptions = this.data || {};
    var id = this.firstNode.id;
    initOptions.selector = '#' + id;
    initOptions.base_url = '/tinymce';
    initOptions.plugins = initOptions.plugins || 'link table';
    initOptions.toolbar = initOptions.toolbar || 'table link';
    initOptions.menubar = false;
    initOptions.statusbar = false;
    tinymce.init(initOptions);

    var editor = tinymce.get(id);
    this.autorun(function() {
        editor.setContent(Template.currentData().value);
    });
});

Template.autoformTinyMCE.helpers({
    schemaKey: function() {
        return this.atts['data-schema-key'];
    },
    text: function() {
        return Template.currentData().value;
    },
    id: function() {
        return Math.random().toString(36).substring(7);
    }
});

AutoForm.addInputType('tinyMCE', {
    template: "autoformTinyMCE",
    valueOut: function() {
        return this.val();
    }
});
