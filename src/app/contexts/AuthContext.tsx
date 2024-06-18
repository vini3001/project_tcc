import { Dispatch, EffectCallback, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { User } from "../entities/User"
import { RecoverPasswordRequestData, RegisterRequestData } from "../entities/Auth"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import Router from "next/router"
import { api } from "@/backend/baseURL"
import storage from "@/utils/localStorage"
import { useEffectOnce } from "@/utils"
import { routeRegister } from "@/backend/auth"

export type SignOutOptions = {
    redirectToLogin: boolean
  }
  
  interface AuthContextData {
    registerData: RegisterRequestData
    setRegisterData: Dispatch<SetStateAction<RegisterRequestData>>
    user?: User
    token?: string
    ready: boolean
    //signIn(credentials: LoginRequestData): Promise<User | undefined>
    signUp(credentials: RegisterRequestData): Promise<User | void>
    signOut(options?: SignOutOptions): Promise<void>
  }
  
  interface AuthProviderProps {
    children: ReactNode
  }
  
  const createAccountPath = 'create-account'
  const materiaDeliveryTokenPath = 'vortex.token'
  
  const AuthContext = createContext({} as AuthContextData)
  
  export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthProvider({ children }: AuthProviderProps) {
    const [ready, setReady] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState<User>()

    /* Register States */
    const [registerData, setRegisterData] = useState({} as RegisterRequestData)
    const [recoverPassword, setRecoverPassword] = useState({} as RecoverPasswordRequestData)

    function saveToken(newToken: string) {
        setCookie(undefined, materiaDeliveryTokenPath, newToken, {
          maxAge: 60 * 60 * 16, // 16 horas
          path: '/',
        })
    }

    async function signOut(options: SignOutOptions = { redirectToLogin: false }) {
        try {
          destroyCookie(undefined, materiaDeliveryTokenPath)
          setCookie(undefined, materiaDeliveryTokenPath, '', { maxAge: -1, path: '/' })
          setUser(undefined)
          setToken('')
          if (options.redirectToLogin) {
            await Router.push('/login/')
          }
        } catch (error) { }
    }

    async function signUp(data: RegisterRequestData) {
        const response = await routeRegister.request(data)
        console.log(response)
        if (response.status === 200 && response.data) {
          const { user } = response.data
    
          setUser(user)
          // api.defaults.headers.Authorization = `Bearer ${token}`
          // saveToken(token)
          // setToken(token)

          console.log("Deu certo!")
    
          return user
        }
    }

    // async function signIn(data: LoginRequestData) {
    //     const response = await routeLogin.request(data)
    //     if (response.success && response.data) {
    //       const { shop, user, token } = response.data
    //       if (!user && !shop && !token) {
    //         return
    //       }
    //       setUser(user)
    //       user.selectedShopAccess = "ADMIN"
    //       user.selectedShopId = shop.id;
    //       api.defaults.headers.Authorization = `Bearer ${token}`
    //       setToken(token)
    //       saveToken(token)
    //       return user
    //     }
    // }

    useEffect(() => {
        if (!ready) {
          return
        }
        async function saveLocalStorage() {
          await storage.setItem(createAccountPath, registerData)
        }
        saveLocalStorage()
    }, [ready, registerData])

    useEffectOnce(() => {
        if (ready) return
        async function loadCacheData() {
          if (ready) return;
          const content: RegisterRequestData | null = await storage.getItem(createAccountPath)
          if (content) setRegisterData(content)
          const cookies = parseCookies(undefined)
          const newToken = cookies[materiaDeliveryTokenPath]
          setToken(newToken)
          setReady(true)
        }
        loadCacheData()
      }, [ready])

      return (
        <AuthContext.Provider
          value={{
            signUp,
            user,
            registerData,
            setRegisterData,
            //signIn,
            signOut,
            token,
            ready,
          }}
        >
          {children}
        </AuthContext.Provider>
      )
}

export function useLoginEffect(
    effect: EffectCallback,
    dependencies: React.DependencyList,
  ) {
    const auth = useAuth()
    return useEffect(() => {
      if (!auth.ready || !auth.user) return
      return effect()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [auth.ready, auth.user, ...dependencies])
}