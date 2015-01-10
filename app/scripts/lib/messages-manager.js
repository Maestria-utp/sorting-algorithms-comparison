'use strict';

(function( messagesManager, undefined ) {

  messagesManager.values = [];

  messagesManager.addMessage = function(type, message) {
    var value = {
      type: type,
      value: message
    };

    messagesManager.values[0] = value;
  };

  messagesManager.clearMessages = function() {
    messagesManager.values = [];
  };

}( window.messagesManager = window.messagesManager || {} ));
