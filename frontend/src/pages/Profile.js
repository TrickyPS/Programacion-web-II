import React from "react";
import NavBar from "../components/Layout/NavBar";
import './Profile.css'
import { useInitFirestore, StorageProvider } from "reactfire";
import Profilecom from "../components/Profile/profileco"
import {
  enableIndexedDbPersistence,
  initializeFirestore
} from "firebase/firestore";
const Profilepage = ()=>{
  const { status, data: firestoreInstance } = useInitFirestore(async (firebaseApp) => {
    const db = initializeFirestore(firebaseApp, {});
    await enableIndexedDbPersistence(db);
    return db;
  });
    // firestore init isn't complete yet
    if (status === 'loading') {
      return <div className=" bg-white d-flex align-items-center justify-content-center" style={{width:"100vw",height:"100vh"}}> 
        <div class="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    return (
 
  <div className="over colorbk">
    <NavBar></NavBar>
<Profilecom></Profilecom>
<StorageProvider sdk={firestoreInstance}></StorageProvider>
  </div>
    )
}

export default Profilepage;