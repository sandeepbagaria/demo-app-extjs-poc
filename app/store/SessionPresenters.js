Ext.define('SE.store.SessionPresenters', {
    extend: 'Ext.data.Store',

    requires: [
        'SE.model.SessionPresenter'
    ],

    model: 'SE.model.SessionPresenter',
    autoLoad: true,
    storeId: 'SessionPresenters',
})