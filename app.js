/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'SE',

//    extend: 'SE.Application',
    
//    autoCreateViewport: true

    requires: [
        'SE.view.MainView'
    ],

    controllers: [
        'SE.controller.SessionController'
    ],

    stores: [
        'Sessions',
        'SessionPresenters',
        'Presenters'
    ],

    models: [
        'Session',
        'SessionPresenter',
        'Presenter'
    ],

    views: [
        'Sessions',
        'SessionForm',
        'Presenters',
        'Details'
    ],

    launch: function() {
        Ext.create('SE.view.MainView');
    }

});
