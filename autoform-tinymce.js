// Write your package code here!

Template.autoformTinyMCE.onRendered(function(){
    tinymce.init({
        selector: '.tinyMceTarget',
        skin_url: '/packages/teamon_tinymce/skins/lightgray'
    });
});

Template.autoformTinyMCE.helpers({
    schemaKey: function() {
        return this.atts['data-schema-key'];
    }
})

AutoForm.addInputType('tinyMCE', {
    template: "autoformTinyMCE",
    valueOut: function(){
        return this.val();
    }
});