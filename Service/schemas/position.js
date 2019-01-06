export default {
    name: 'position',
    title: 'position', 
    type: 'document',
    fields: [
        {
            name: 'code',
            title: 'Code',
            type: 'string',
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        }
    ],
    preview: {
        select: {title: 'caption'}
      }
}