import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore'

const Logout = () => {
    const clearSession = useUserStore((state) => state.clearSession)
    const navigate = useNavigate()

    useEffect(() => {
        clearSession()
        navigate('/')
    }, [])

    return <></>
}

export default Logout