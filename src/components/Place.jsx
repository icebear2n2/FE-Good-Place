import { useState } from "react";
import { Alert, Input, Spinner } from "reactstrap"
import { myAxios } from "../network/api";

const Login = () => {
    const [query, setQuery] = useState("")
    const [status, setStatus] = useState("idle")
    // idle || error || loading || success
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setStatus("loading")

        const response = await myAxios("/api/v1/client?query="+ query, "GET")
        setStatus(response.status)
        console.log(response)
    }
    return <>
        {status === "loading" && <Spinner />}
        {status === "success" && <Alert>성공</Alert>}
        {status === "error" && <Alert color="danger">실패</Alert>}
        <form onSubmit={onSubmitHandler}>
            <Input
                placeholder="name"
                onChange={(e) => setQuery(e.target.value)}></Input>
            <Input type="submit" ></Input>
        </form>
    </>
}
export default Login
