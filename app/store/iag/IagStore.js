Ext.define('Tel.store.iag.IagStore', {
    extend: 'Ext.data.Store',

    alias: 'store.iagstore',

    fields: [
        'name', 'fam', 'gsm','pod','egn','email','glavpod','picture'
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
        url: 'http://laravelapp.iag.bg/api/iagusers',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    // pageSize: 2

});