//signup, login, logout ajax requests

export const signup = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
}

export const login = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
}

export const logut = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}