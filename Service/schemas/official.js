export default {
    name: 'official',
    title: 'official', 
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'legalname',
            title: 'Legal Name',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'official_type',
        },
    ]
}