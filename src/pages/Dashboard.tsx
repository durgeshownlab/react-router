import { useEffect, useState } from "react"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"


const Dashboard = () => {


  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);

    return ()=> clearTimeout(timer)
  }, [])

  return (
    <>
      {
        loading? <LoadingSpinner />: <>
          <h1>Dashboard</h1>
          <p>welcome to our dashboard made in love with react</p>
        </>
      }
      
    </>
  )
}

export default Dashboard
