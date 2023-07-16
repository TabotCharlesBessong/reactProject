import React, { useMemo, useState } from "react";
// import { getCurrentUser } from "../api/FirestoreAPI";
import {Home} from '../pages'
import {Header} from '../components'

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  // useMemo(() => {
  //   getCurrentUser(setCurrentUser);
  // }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Home currentUser={currentUser} />
    </div>
  );
}
