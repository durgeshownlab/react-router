import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import type { AppDispatch, RootState } from "../../state/store"
import { getUserProfileThunk, logoutUserThunk } from "../../state/authSlice"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Navbar = () => {

  const dispatch = useDispatch<AppDispatch>()
  const {isAuthenticated, user} = useSelector((state: RootState)=>state.auth)
  const navigate = useNavigate()


  const handleLogout = async ()=>{
    dispatch(logoutUserThunk()).then(()=>{
      navigate("/login")
    })
  }

  useEffect(()=>{
    if(isAuthenticated && !user) {
      dispatch(getUserProfileThunk())
    }
  }, [dispatch, user, isAuthenticated])

  return (
    <>
      <nav className="w-full h-14 bg-blue-100 flex items-center gap-x-5 p-2 ">
        <Link to={'/'} className=" px-4 py-2 hover:bg-amber-500 rounded-xl">Home</Link>
        <Link to={'menu'} className=" px-4 py-2 hover:bg-amber-500 rounded-xl">Menu</Link>
        <Link to={'about'} className=" px-4 py-2 hover:bg-amber-500 rounded-xl" >About</Link>
        {
          isAuthenticated && user && <>
            <Link to={'dashboard'} className=" px-4 py-2 hover:bg-amber-500 rounded-xl" >Dashboard</Link>
            <Link to={'profile'} className=" px-4 py-2 hover:bg-amber-500 rounded-xl" >Profile</Link>
          </>
        }

        {
          isAuthenticated && user && <button className=" px-4 py-2 bg-red-500 cursor-pointer rounded-xl" onClick={handleLogout} >Logout</button>
        }
        {
          !isAuthenticated && <Link to={'login'} className=" px-4 py-2 hover:bg-amber-500 rounded-xl" >Login</Link>
        }
      </nav>
    </>
  )
}

export default Navbar
