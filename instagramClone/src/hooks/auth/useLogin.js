import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "../utility/useShowToast";
import { auth, firestore } from "../../firebaseConfig";
import useAuthStore from "../../store/authStore";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password)
      return showToast("Error", "Please fill in all the fields", "error");
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { loading, error, login };
};

export default useLogin;
