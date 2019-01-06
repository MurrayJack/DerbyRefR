export default {
    name: 'official',
    title: 'official',
    type: 'document',
    fields: [{
            name: 'token',
            title: 'token',
            type: 'string',
        },
        {
            name: 'derbyname',
            title: 'Derby Name',
            type: 'string',
        },
        {
            name: 'legalname',
            title: 'Legal Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'league',
            title: 'League',
            type: 'string',
        },
        {
            name: 'contactnumber',
            title: 'Contact Number',
            type: 'string',
        },
        {
            name: 'refumeurl',
            title: 'Refume URL',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',
        },
        {
            name: 'postcode',
            title: 'PostCode',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'derbyname'
        }
    }
}