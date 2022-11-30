Ext.define('Tel.store.rdg.RdgStore', {
    extend: 'Ext.data.Store',

    alias: 'store.rdgstore',

    fields: [
        'podname', 'address', 'tel','email',
    ],

    autoLoad:'true',

    // data: { items: [
    //     { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
    //     { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
    //     { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
    //     { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    // ]},

    proxy: {
        type: 'ajax',
        url: 'http://laravelapp.iag.bg/api/rdgpodelenia',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    // pageSize: 2

});