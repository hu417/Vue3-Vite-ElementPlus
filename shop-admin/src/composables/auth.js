// useCookies引入
import { useCookies} from "@vueuse/integrations/useCookies"

const TokenKey = "admin-token"
const cookie = useCookies()

// token相关处理方法
export function setToken(token){
    return cookie.set(TokenKey, token)
}
export function getToken(){
    return cookie.get(TokenKey)
}
export function removeToken(){
    return cookie.remove(TokenKey)
}



