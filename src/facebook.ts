import fetch from 'isomorphic-fetch'

export interface FacebookUser {
    id: string,
    name: string,
    email: string,
}

const getGraphAPIUrl = token => `https://graph.facebook.com/v2.10/me?fields=id%2Cname%2Cemail%2Cpicture&access_token=${token}`

export const getFacebookUser = async (facebookToken: string): Promise<FacebookUser> => {
    return fetch(getGraphAPIUrl(facebookToken))
    .then(response => response.json())
    .then(parsedResponse => {
        if (parsedResponse.error) {
            Promise.reject(parsedResponse.error)
        }
        return parsedResponse
    })
}