import { useEffect, useState } from "react"
import useShowToast from "../utility/useShowToast"
import {doc, getDoc} from "firebase/firestore"
import { firestore } from "../../firebaseConfig"

const useGetUserProfileById = (userId) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userProfile, setUserProfile] = useState(null)
  const showToast = useShowToast()

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true)
      setUserProfile(null)
      try {
        const userRef = await getDoc(doc(firestore,"users",userId))
        if(userRef.exists()){
          setUserProfile(userRef.data())
        }
        setIsLoading(false)
      } catch (error) {
        showToast("Error",error.message,"error")
        setIsLoading(false)
      }
    }
  },[showToast,setUserProfile,userId])
  return {isLoading,userProfile,setUserProfile}
}

export default useGetUserProfileById