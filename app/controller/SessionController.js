Ext.define("SE.controller.SessionController", {
    extend: 'Ext.app.Controller',

    stores: [
        'Sessions',
        'Presenters',
        'SessionPresenters' 
    ],

    refs: [
        {
            ref: 'details',
            selector: 'detailpanel'
        },
        {
            ref: 'presenters',
            selector: 'presenters' 
        },
        {
            ref: 'sessions',
            selector: 'sessiongridpanel' 
        }
    ],

    init: function() {
        this.control({
            "sessiongridpanel": {
                itemdblclick: function(gridpanel, record, item, index, e) {
                    var formWindow = Ext.create('SE.view.SessionForm');
                    var form = formWindow.down('form');
                    form.loadRecord(record)
                    formWindow.show()
                },
                select: function(rowmodel, record, index, eOpts) {
                    Ext.suspendLayouts();
                    var sessionId = record.get('id')
                    // console.log(sessionId)

                    var presenterIds = []

                    var spStore = this.getSessionPresentersStore()
                    //console.log(spStore)

                    spStore.each(function(rec) {
                        if(rec.get('sessionId') === sessionId) {
                            //console.log(rec.get("presenterId"))
                            presenterIds.push(rec.get("presenterId"))
                        }
                    })
                    // console.log(presenterIds)

                    this.getPresentersStore().clearFilter()
                    // console.log(this.getPresentersStore())
                    this.getPresentersStore().filterBy(function(rec) {
                        console.log('I am in')

                        let foundMatch = false;
                        for (let i = 0; i < presenterIds.length; i++) {
                            console.log(rec.get('id'))
                            if(rec.get('id') === presenterIds[i]) {
                                foundMatch = true
                            }
                        }
                        console.log(foundMatch)
                        return foundMatch
                    })

                    var sessions = record.getData()

                    sessions.presenters = []
                    this.getPresentersStore().each(function(presenterRecord) {
                        console.log(presenterRecord.getData())
                        sessions.presenters.push(presenterRecord.getData())
                    })
                    var detailsPanel = this.getDetails();

                    sessions.presenters = []
                    this.getPresentersStore().each(function(presenterRecord) {
                        sessions.presenters.push(presenterRecord.getData())
                    })

                    detailsPanel.update(sessions)

                    Ext.resumeLayouts();
                    console.log('In selecter property')

                }
            }
        })
    }
})