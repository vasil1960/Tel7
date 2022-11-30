/**
 * This view is an example list of people.
 */
 Ext.define('Tel.view.rdg.RdgList', {
    extend: 'Ext.dataview.List',
    xtype: 'rdglist',

    requires: [
        'Tel.store.rdg.RdgStore'
    ],  
    
    title: 'rdg',

    store: {
        type: 'rdgstore'
    },

    itemTpl: [
        '<table>',
        '    <tr>',
        '            <table>',
        '                <tr>',
        '                    <td><b>{podname}</b></td>',
        '                </tr> ',
        '                <tr>',
        '                    <td><small>{address}</small></td>',
        '                </tr>',
        '                <tr>',
        '                    <td><small>{email}</small></td>',
        '                </tr>',
        '                <tr>',
        '                    <td><small>{tel}</small></td>',
        '                </tr>',
        '            </table>',
        '    </tr>',
        '</table>'
    ],

    // plugins: {
    //     listpaging: {
    //         autoPaging: true
    //     },
    //     listswiper: {
    //         widget: {
    //             xtype: 'listswiperstepper'
    //         },

    //         right: [{
    //             iconCls: 'x-fa fa-envelope',
    //             text: 'Message',
    //             ui: 'confirm',
    //             commit: 'onMessage'
    //         }, {
    //             iconCls: 'x-fa fa-phone',
    //             text: 'Call',
    //             ui: 'action',
    //             commit: 'onCall',

    //             undoable: true
    //         }, {
    //             iconCls: 'x-fa fa-trash-alt',
    //             text: 'Delete',
    //             ui: 'decline',

    //             precommit: 'onDeleteItem',
    //             commit: 'onCommitDeleteItem',
    //             revert: 'onUndoDeleteItem',
    //             undoable: true
    //         }],
    //     }
    

   
    // },
                

    // columns: [
    //     { text: 'Name',  dataIndex: 'name', width: 100 },
    //     { text: 'Email', dataIndex: 'email', width: 230 },
    //     { text: 'Phone', dataIndex: 'phone', width: 150 }
    // ],

    listeners: {
        select: 'onItemSelected'
    },
});
