export default {
    name: 'game',
    title: 'game',
    type: 'document',
    fields: [{
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'hostingleague',
            title: 'Hosting League',
            type: 'string',
        },
        {
            name: 'addeddate',
            title: 'Added Date',
            type: 'date',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        },


    ],
    preview: {
        select: {
            title: 'caption'
        }
    }
}