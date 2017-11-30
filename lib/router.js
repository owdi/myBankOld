FlowRouter.route('/', {
    name: 'homePage',
    action: function() {
        BlazeLayout.render('layout', {main: 'formMainConnect'});
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action: function() {
        if (!Meteor.userId()) {
            FlowRouter.go('homePage');
        }else{
            BlazeLayout.render('layout', {main: 'dashboard'});
        }
    }
});
