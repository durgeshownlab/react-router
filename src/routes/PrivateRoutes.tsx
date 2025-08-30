

import { type FC, type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../state/store'
import { Navigate } from 'react-router-dom'

interface PrivateRoutesProps {
  children: ReactNode
}

const PrivateRoutes: FC<PrivateRoutesProps> = ({children}) => {
  const {isAuthenticated} = useSelector((state: RootState)=> state.auth)

  return isAuthenticated ? children : <Navigate to='/login' replace />
}

export default PrivateRoutes
