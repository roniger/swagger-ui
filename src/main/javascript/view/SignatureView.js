'use strict';

SwaggerUi.Views.SignatureView = Backbone.View.extend({
  events: {
    'mousedown .snippet': 'snippetToTextArea'
  },

  initialize: function () {
  },

  render: function () {
    $(this.el).html(Handlebars.templates.signature(this.model));
    this.isParam = this.model.isParam;
    return this;
  },

  applyToTextArea: function () {
    var textArea = $('textarea', $(this.el.parentNode.parentNode.parentNode));
    if ($.trim(textArea.val()) === '') {
      textArea.val(this.model.sampleJSON);
      return true;
    }
    return false;
  },

  // handler for snippet to text area
  snippetToTextArea: function (e) {
    if (this.isParam) {
      if (e) {
        e.preventDefault();
      }

      if (this.applyToTextArea()) {
        // TODO move this code outside of the view and expose an event instead
         if( this.model.jsonEditor && this.model.jsonEditor.isEnabled()){
            this.model.jsonEditor.setValue(JSON.parse(this.model.sampleJSON));
         }
      }
    }
  }
});