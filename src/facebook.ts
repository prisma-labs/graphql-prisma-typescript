

export interface FacebookUser {
    id: string,
    name: string,
    email: string,
}

export const getFacebookUser = async (facebookToken: string): Promise<FacebookUser> => {
    return {
        id: '',
        name: '',
        email: ''
    }
}