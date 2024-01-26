import {api} from '../api'

export function GetAllUsers() {
    return api.get('/booking/post-timeshare')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            throw err
        })
}

export function GetUser(userId) {
    return api.get('/booking/post-timeshare')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            throw err
        })
}

export function GetTimeshareBelongToUser(userId) {
    return api.get('/booking/post-timeshare')
        .then((res) => {
            console.log(res.data)
            return res.data
        })
        .catch((err) => {
            throw err
        })
}
