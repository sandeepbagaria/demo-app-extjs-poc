Ext.define("SE.view.Sessions", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessiongridpanel',

    // itemId: 'session',

    store: 'Sessions',
//Moved to controllers folder - But not working in Chrome browser so commenting it here
    // listeners: {
    //     itemdblclick: function(gridpanel, record, item, index, e) {
    //         var formWindow = Ext.create('SE.view.SessionForm');
    //         var form = formWindow.down('form');
    //         form.loadRecord(record)
    //         formWindow.show()
    //     }
    // },

    // features: [
    //     {
    //         ftype: 'grouping',
    //         startCollapsed: false,
    //         groupHeaderTpl: [
    //             '{[values.rows[0].get(\'sessionTimePretty\')]} (Session'
    //         ]
    //     }
    // ],
    
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'title',
            text: 'Title',
            flex: 1,
            minWidth: 150
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'id',
            text: 'Id',            
        },
        // {
        //     xtype: 'gridcolumn',
        //     width: 200,
        //     dataIndex: 'sessionTimePretty',
        //     text: 'Session Time'
        // },
        {
            xtype: 'checkcolumn',
            dataIndex: 'approved',
            text: 'Approved'
        }
    ]
})