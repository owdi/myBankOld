if (Meteor.isClient) {
  Template.formRegister.events({
    'submit form': function (event) {
      event.preventDefault();
      var userEmail = event.target.registerEmail.value;
      var userPassword = event.target.registerPassword.value;
      Accounts.createUser({
        email: userEmail,
        password: userPassword
      });
    }
  });

  Template.formLogin.events({
    'submit form': function (event) {
      event.preventDefault();
      var userEmail = event.target.loginEmail.value;
      var userPassword = event.target.loginPassword.value;

      Meteor.loginWithPassword(userEmail, userPassword, function (err) {

        if (err) {
          Bert.alert({
            message: 'Le mot de passe ou l\'email ne sont pas valides',
            type: 'danger'
          });
        }else{
          console.log('toto');
            Session.set('isConnected', true);
            Router.go('/dashboard');
        }
      });
    }

  });

  Template.dashboard.events({
    'click .logout': function (event) {
      event.preventDefault();
      Meteor.logout();
    }
  });
}
