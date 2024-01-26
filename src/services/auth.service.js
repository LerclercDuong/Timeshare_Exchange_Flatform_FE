import {api} from '../api'
import {GetAccessToken, GetRefreshToken, SetRefreshToken, SetAccessToken} from "../utils/tokens";

const LoginWithUsernameAndPassword = async (username, password) => {
    return api.post(
        '/auth/login',
        {username, password})
        .then((res) => {
            const responseData = res.data;
            if (responseData) {
                SetAccessToken(responseData.tokens.access.token);
                SetRefreshToken(responseData.tokens.refresh.token);
                return responseData;
            }
        })
        .catch((err) => {
            throw err.response;
        })
}
const SignUpWithUsernameAndPassword = async ({firstname, lastname, username, password, repeatPassword}) => {
    return api.post(
        '/auth/register',
        {firstname, lastname, username, password, repeatPassword})
        .then((res) => {
            const responseData = res.data;
            if (responseData) {
                return responseData;
            }
        })
        .catch((err) => {
            throw err.response
        })
}

// class AuthService{
//     register = (username, email, password) => {
//         return axios.post(API_URL + "/auth/signup", {
//             username,
//             email,
//             password,
//         });
//     };
//     login = (username, password) => {
//         return axios
//             .post(API_URL + "/auth/login", {
//                 username,
//                 password,
//             })
//             .then((response) => {
//                 if (response.data) {
//                     localStorage.setItem("userData", JSON.stringify(response.data.data));
//                     localStorage.setItem("tokenId", response.data.data.tokenId);
//                 }
//                 return response.data;
//             });
//     };
//     logout = () => {
//         localStorage.removeItem("userData");
//     };
// }
//
//
//

// export default new AuthService;
export {
    SignUpWithUsernameAndPassword,
    LoginWithUsernameAndPassword
}