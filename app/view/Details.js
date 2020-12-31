Ext.define('SE.view.Details', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.detailpanel',

    autoScroll: true,
    bodyPadding: 10,
    tpl: [
        '<br/>Title: {title}',
        '</br>Presenters: {firstName} {lastName}',
        '</br>',
        '<tpl for ="presenters">',
        '</br>Presenters: {firstName} {lastName}',
        '</tpl>'
    ],
    data: {
        title: 'this is my title'
    }
})