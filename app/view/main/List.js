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

    itemTpl:'Име: {name} Тел: {phone}',

    // columns: [
    //     { text: 'Name',  dataIndex: 'name', width: 100 },
    //     { text: 'Email', dataIndex: 'email', width: 230 },
    //     { text: 'Phone', dataIndex: 'phone', width: 150 }
    // ],

    listeners: {
        select: 'onItemSelected'
    }
});
