Template.autoformTinyMCE.onRendered(function() {
    var initOptions = this.data || {};
    var id = this.firstNode.id;
    initOptions.selector = '#' + id;
    initOptions.skin_url = Meteor.absoulteUrl('/packages/teamon_tinymce/skins/lightgray');
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
