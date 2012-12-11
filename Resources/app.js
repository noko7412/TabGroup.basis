var globals = {};
 
(function() {
    var AppTabGroup = require('ui/AppTabGroup').AppTabGroup,
            ListWindow = require('ui/ListWindow').ListWindow;
 
    globals.tabs = new AppTabGroup(
        {
            title: 'Todo',
            icon: 'images/KS_nav_ui.png',
            window: new ListWindow({
                title: 'Todo',
                backgroundColor: '#fff',
                navBarHidden: false,
            })
        },
 
        {
            title: 'Done',
            icon: 'images/KS_nav_views.png',
            window: new ListWindow({
                title: 'Done',
                backgroundColor: '#fff',
                navBarHidden: false,
            })
        }
    );
 
    globals.tabs.open();
})();