(function(){
    App.init('login');

    $('body').on('click', '.logBtn', function() {
        App.init('login');
    });

    $('body').on('click', '.submitBtn', function() {
        App.login();
    });

    $('body').on('click', '.reg', function() {
        App.init('reg');
    });

    $('body').on('click', '.submit', function() {
        App.getID();
    });
}());
