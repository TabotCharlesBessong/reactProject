import { getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import useUserProfileStore from "../../store/userProfileStore";
import useShowToast from "../utility/useShowToast";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const {userProfile,setUserProfile} = useUserProfileStore()
  const showToast = useShowToast();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return setUserProfile(null);

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        setUserProfile(userDoc);
        console.log(userDoc);
        setIsLoading(false)
      } catch (error) {
        showToast("Error", error.message, "error");
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, username, showToast]);
  return {isLoading,userProfile}
}

export default useGetUserProfileByUsername