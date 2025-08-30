import { useEffect, useState, type FC } from "react"
import { useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../state/store"
import { useDispatch } from "react-redux"
import { getUserProfileThunk } from "../state/authSlice"


const Profile: FC = () => {

  const dispatch = useDispatch<AppDispatch>()
  const {user, loading} = useSelector((state: RootState)=>state.auth)
  const [localLoading, setLocalLoading] = useState<boolean>(false)

  useEffect(()=>{

    if(!user) {
      setLocalLoading(true)
      dispatch(getUserProfileThunk())
      const timer = setTimeout(()=>{
        setLocalLoading(false)
      }, 100);
      return ()=> clearTimeout(timer)
    }
  }, [dispatch, user])

  if(loading || localLoading) {
    return <div>Loading...</div>
  }

  if(!user) {
    return <div>
      <p>Error</p>
      <p>Error Fetching profile information. please try again later</p>
    </div>
  }

  return (
    <>
      <h1>Profile</h1>
      <div>
        <img src={user.avatar} alt="" />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Id: {user.id}</p>
      </div>
    </>
  )
}

export default Profile
