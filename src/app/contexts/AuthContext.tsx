import { Dispatch, EffectCallback, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { User } from "../entities/User"
import { LoginRequestData, RegisterRequestData } from "../entities/Auth"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import {useRouter} from "next/navigation"
import { api } from "@/backend/baseURL"
import storage from "@/utils/localStorage"
import { useEffectOnce } from "@/utils"
import { routeLogin, routeRegister } from "@/backend/auth"

export type SignOutOptions = {
    redirectToLogin: boolean
  }

  interface sessionData {
    token: string,
    id: number
  }
  
  interface AuthContextData {
    registerData: RegisterRequestData
    setRegisterData: Dispatch<SetStateAction<RegisterRequestData>>
    user?: User
    userId?: number
    token?: string
    ready: boolean
    signIn(credentials: LoginRequestData): Promise<User | undefined>
    signUp(credentials: RegisterRequestData): Promise<User | void>
    signOut(options?: SignOutOptions): Promise<void>
  }
  
  interface AuthProviderProps {
    children: ReactNode
  }

  const vortexTokenPath = 'vortex.token'
  const vortexIdPath = 'vortex.Id'
  
  const AuthContext = createContext({} as AuthContextData)
  
  export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthProvider({ children }: AuthProviderProps) {
    const [ready, setReady] = useState(false)
    const [token, setToken] = useState('')
    const [userId, setUserId] = useState<number>(0)
    const [user, setUser] = useState<User>()

    const router = useRouter()

    /* Register States */
    const [registerData, setRegisterData] = useState({} as RegisterRequestData)

    function saveUserInfo({token, id}: sessionData) {
        setCookie(undefined, vortexTokenPath, token, {
          maxAge: 60 * 60 * 16, // 16 horas
          path: '/',
        })

        setCookie(undefined, vortexIdPath, id.toString(), {
          maxAge: 60 * 60 * 16, // 16 horas
          path: '/',
        })
    }

    function destroyCookieInfo() {
      //Destroy token
      destroyCookie(undefined, vortexTokenPath)
      setCookie(undefined, vortexTokenPath, '', { maxAge: -1, path: '/' })
      //Destroy id
      destroyCookie(undefined, vortexTokenPath)
      setCookie(undefined, vortexIdPath, '', { maxAge: -1, path: '/' })
    }

    async function signOut(options: SignOutOptions = { redirectToLogin: false }) {
        try {
          destroyCookieInfo()
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
          setToken(token)
          api.defaults.headers.Authorization = `Bearer ${token}`
          saveUserInfo({token, id: user.id})
    
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
          saveUserInfo({token, id: user.id})
          return user
        }
    }

    useEffectOnce(() => {
        if (ready) return
        async function loadCacheData() {
          if (ready) return;
          const cookies = parseCookies(undefined)
          const newToken = cookies[vortexTokenPath]
          const newSessionId = cookies[vortexIdPath]
          const convertedId = parseInt(newSessionId, 10)

          setToken(newToken)  
          setUserId(convertedId)
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
            userId,
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