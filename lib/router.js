
Router.configure({
    layoutTemplate: 'layout'
  });
  
Router.route('/', function () { 
    //name: 'formMainConnect',
    this.layout('layout');

    this.render('formMainConnect');

});

Router.route('/dashboard', function () { 
    // if ( Session.get('isConnected') === true ) {

    //     this.layout('layout');

    // }else{
    //     this.render('formMainConnect');
    // }
    

});