if (Meteor.isClient) {
    Bert.defaults = {
        animated: true,
        animationSpeed: 300,
        autoHide: false,
        dismissable: true,
        hideDelay: 5000,
        style: "growl-top-right",
        type: "default"
    }
}