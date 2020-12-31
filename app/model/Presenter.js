Ext.define('SE.model.Presenter', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'id'
        },
        // {
        //     firstname: 'firstname'
        // },
        // {
        //     lastname: 'lastname'
        // },
        {
            preferredFullName: 'preferredFullName'
        }
        // {
        //     emailAddress: 'emailAddress'
        // }
    ],
    proxy: {
        type: 'rest',
        url: 'app/data/presenters.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
})