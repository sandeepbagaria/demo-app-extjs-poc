Ext.define('SE.view.MainView', {
    extend: 'Ext.container.Viewport',
    // requires:[
    //     'Ext.layout.container.Fit',
    //     'SE.view.Main'
    // ],

    layout: 'fit',

    items: [
        {
            xtype: 'panel',
            resizable: false,
            layout: {
                type: 'border'
            },
            collapsed: false,
            items: [
                {
                    xtype: 'container',
                    region: 'center',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'sessiongridpanel',
                            flex: 3
                        },
                        {
                            xtype: 'splitter'
                        },
                        {
                            // html: 'Presenters',
                            xtype: 'presenters',
                            flex: 2
                        }
                    ]
                },
                {
                    // html: 'Session Details',
                    xtype: 'detailpanel',
                    flex: 2,
                    region: 'east',
                    split: true
                }
            ]
        }
    ]
});
