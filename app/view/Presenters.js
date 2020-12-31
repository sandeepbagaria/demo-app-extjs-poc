Ext.define('SE.view.Presenters', {
    extend: 'Ext.grid.Panel',

    title: 'Presenter(s)',
    alias: 'widget.presenters',

    store: "Presenters",

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'preferredFullName',
            text: 'Presenter name',
            flex: 1
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'id',
            text: 'Id'
        }
    ]
})