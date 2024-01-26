import {api} from "../api";

function GetAllTimeshare() {
    return api.get('/timeshare/list-timeshare')
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}


export {
    GetAllTimeshare
}