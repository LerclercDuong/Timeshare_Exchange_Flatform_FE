import {api} from "../api";

function GetAllTimeshare() {
    return api.get('/timeshare/list-timeshare')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            throw err
        })
}


export {GetAllTimeshare}