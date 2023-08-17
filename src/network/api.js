import axios from 'axios'

export const api = async (path, method, body) => {
    const init = method === "GET" ? {} : {
        method
        , headers: { "Content-Type": "application/json" }
        , body: JSON.stringify(body)
    }
    // const response = { body: "", status: "" }
    try {
        const response = await fetch(`http://localhost:8080/api/v1/client`, init)
        // .then((res) => {
        //     return res.json()
        // }).then((member) => {
        //     response.body = member
        //     response.status = "success"
        // }).catch((err) => {
        //     console.log(err)
        //     response.status = "error"
        // })
        const body = await response.json()
        return { body, status: "success" }
    } catch (error) {
        return { body, status: "error" }
    }

}

axios.defaults.baseURL = "http://localhost:8080"

export const myAxios = async (url, method, body) => {
    try {
        const { status, data } = await axios({
            method, url, data: body, headers: {"Content-Type": "application/json"}
        })
        return { body: data, status: "success" }
    } catch (error) {
        return { body: null, status: "error" }
    }
}
