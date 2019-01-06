const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'kmjldwk7',
    dataset: 'production',
    useCdn: true
})

export const QueryAPI = (query, params) => new Promise((resolve) => {
    client.fetch(query, params).then(result => {
        resolve(result)
    })
});
