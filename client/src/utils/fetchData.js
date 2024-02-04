import axios from 'axios'
const baseURl = process.env.REACT_APP_BACKEND_URL;

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${baseURl}/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`${baseURl}/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`${baseURl}/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`${baseURl}/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`${baseURl}/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}