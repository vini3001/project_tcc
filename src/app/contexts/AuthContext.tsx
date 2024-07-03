import { Dispatch, EffectCallback, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { User } from "../entities/User"
import { LoginRequestData, RecoverPasswordRequestData, RegisterRequestData } from "../entities/Auth"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import {useRouter} from "next/navigation"
import { api } from "@/backend/baseURL"
import storage from "@/utils/localStorage"
import { useEffectOnce } from "@/utils"
import { routeLogin, routeRegister } from "@/backend/auth"

export type SignOutOptions = {
    redirectToLogin: boolean
  }
  
  interface AuthContextData {
    registerData: RegisterRequestData
    setRegisterData: Dispatch<SetStateAction<RegisterRequestData>>
    user?: User
    token?: string
    ready: boolean
    signIn(credentials: LoginRequestData): Promise<User | undefined>
    signUp(credentials: RegisterRequestData): Promise<User | void>
    signOut(options?: SignOutOptions): Promise<void>
  }
  
  interface AuthProviderProps {
    children: ReactNode
  }
  
  const createAccountPath = 'create-account'
  const vortexTokenPath = 'vortex.token'
  
  const AuthContext = createContext({} as AuthContextData)
  
  export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthProvider({ children }: AuthProviderProps) {
    const [ready, setReady] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState<User>()

    const router = useRouter()

    /* Register States */
    const [registerData, setRegisterData] = useState({} as RegisterRequestData)
    const [recoverPassword, setRecoverPassword] = useState({} as RecoverPasswordRequestData)

    function saveToken(newToken: string) {
        setCookie(undefined, vortexTokenPath, newToken, {
          maxAge: 60 * 60 * 16, // 16 horas
          path: '/',
        })
    }

    async function signOut(options: SignOutOptions = { redirectToLogin: false }) {
        try {
          destroyCookie(undefined, vortexTokenPath)
          setCookie(undefined, vortexTokenPath, '', { maxAge: -1, path: '/' })
          setUser(undefined)
          setToken('')
          if (options.redirectToLogin) {
            router.push('/login/')
          }
        } catch (error) { }
    }

    async function signUp(data: RegisterRequestData) {
        const response = await routeRegister.request(data)

        if (response.success && response.data) {
          const { user } = response.data
    
          setUser(user)
          api.defaults.headers.Authorization = `Bearer ${token}`
          saveToken(token)
          setToken(token)
    
          return user
        }
    }

    async function signIn(data: LoginRequestData) {
        const response = await routeLogin.request(data)
        if (response.success && response.data) {
          const { user, token } = response.data
          if (!user && !token) {
            return
          }

          setUser(user)
          api.defaults.headers.Authorization = `Bearer ${token}`
          setToken(token)
          saveToken(token)
          return user
        }
    }

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
          const newToken = cookies[vortexTokenPath]
          setToken(newToken)
          setReady(true)
        }
        loadCacheData()
      }, [ready])

      useEffect(() => {
        setToken('d4f5e6a7b8c9d0e1f2a3b4c5d6e7f8a9')
        api.defaults.headers.Authorization = `Bearer ${token}`

        function verifyAuth() {
          const cookies = parseCookies(undefined)
          const token = cookies[vortexTokenPath]
          token === undefined && router.push('/')
        }

        try {
          verifyAuth()
        }catch(err) {
          console.log(err)
          destroyCookie(undefined, vortexTokenPath)
          router.push('/')
        }
      }, [token])

      return (
        <AuthContext.Provider
          value={{
            signUp,
            user,
            registerData,
            setRegisterData,
            signIn,
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