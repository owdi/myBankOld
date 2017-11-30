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

      Meteor.loginWithPassword(userEmail, userPassword, function (error) {

        if (error) {
          Bert.alert({
            message: 'Le mot de passe ou l\'email ne sont pas valides',
            type: 'danger'
          });
        }else{
            FlowRouter.go('dashboard');
        }
      });
    }

  });

  Template.dashboard.events({
    'click .logout': function (event) {
      event.preventDefault();
    

      Meteor.logout(function(error){ 

        if (!error) {

          Bert.alert({
            message: 'Vous avez bien été déconnecté',
            type: 'info'
          });

          FlowRouter.go('homePage');
        }
      });
    }
  });
  
}
