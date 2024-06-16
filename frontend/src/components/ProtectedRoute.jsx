import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";
function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(()=>
            setIsAuthorized(false)
        )
    //   first
    
    //   return () => {
    //     second
    //   }
    }, [])
    

    const refreshToken = async () => {
        //to refresh the token
        const refreshTokens = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh/", { refresh: refreshTokens });
            if (res.status==200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true);
            }
            else{
                setIsAuthorized(false)
            }

        } catch (error) {
            console.log(error)//error setter
            setIsAuthorized(false)
        }
    }
    const auth = async () => {
        //if we have to refresh token or good to go see if access token there and if expired or not
        //if expired auto refresh token for automation, 
        //if we cannot refreshed or if that is expired ask user to login again due to session exiry
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenexp = decoded.exp
        const now = Date.now() / 1000
        if (tokenexp < now)
            await refreshToken()
        else {
            setIsAuthorized(true)
        }

    }
    if (isAuthorized == null)
        return <div>Loading...</div>
    return isAuthorized ? children : <Navigate to="/login" />
}
export default ProtectedRoute