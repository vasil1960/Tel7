/**
 * This view is an example list of people.
 */
Ext.define('Tel.view.main.List', {
    extend: 'Ext.dataview.List',
    xtype: 'mainlist',

    requires: [
        'Tel.store.Personnel'
    ],  
    
    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    itemTpl:['<div class="contact">Име: {name} {fam}</div>',
                '<div>Длъжност: {dlagnost}</div>',
                '<div>Поделение: {pod}</div>',
                '<div>Моб. тел: {gsm}</div>',
                '<div>ЕГН: {egn}</div>',
                '<div>Ел. поща: {email}</div>'],
    
    plugins: {
        listpaging: {
            autoPaging: true
        },
        listswiper: {
            widget: {
                xtype: 'listswiperstepper'
            },

            right: [{
                iconCls: 'x-fa fa-envelope',
                text: 'Message',
                ui: 'confirm',
                commit: 'onMessage'
            }, {
                iconCls: 'x-fa fa-phone',
                text: 'Call',
                ui: 'action',
                commit: 'onCall',

                undoable: true
            }, {
                iconCls: 'x-fa fa-trash-alt',
                text: 'Delete',
                ui: 'decline',

                precommit: 'onDeleteItem',
                commit: 'onCommitDeleteItem',
                revert: 'onUndoDeleteItem',
                undoable: true
            }],
        }
    

   
    },
                

    // columns: [
    //     { text: 'Name',  dataIndex: 'name', width: 100 },
    //     { text: 'Email', dataIndex: 'email', width: 230 },
    //     { text: 'Phone', dataIndex: 'phone', width: 150 }
    // ],

    // listeners: {
    //     select: 'onItemSelected'
    // },
});
