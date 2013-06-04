// both client and server code here


if (Meteor.isClient) {

  Template.chat.chat = function() {
    return Messages.find({}).fetch();
  };

  Template.chat.events({
    'click #submit, keyup #message': function(e) {
      if (e.keyCode === 13 || e.type === 'click') {
          message = $('#message').val()
          Messages.insert({message: message, owner: Meteor.userId(), username: Meteor.user().emails[0].address.replace(/\@.*$/, '')});
          $('#message').val('');
      }
      return false;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}