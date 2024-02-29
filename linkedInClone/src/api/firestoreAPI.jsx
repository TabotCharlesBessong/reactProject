
import { firestore } from "../firebaseConfig";
import {addDoc,collection,doc} from 'firebase/firestore'
import { toast } from "react-toastify";

const postsRef = collection(firestore, "posts");
const userRef = collection(firestore, "users");


export const postStatus = (object) => {
  addDoc(postsRef, object)
    .then(() => {
      console.log('Posted')
      toast.success("Post has been added successfully");
    })
    .catch((err) => {
      console.log(err);
      toast.error("Failed to post")
    });
};