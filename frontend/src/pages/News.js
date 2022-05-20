import React from "react";
import NavBar from "../components/Layout/NavBar";
import "./News.css";
import Newsindex from "../components/AddNews/news";
import {
  enableIndexedDbPersistence,
  initializeFirestore
} from "firebase/firestore";
import { useInitFirestore, StorageProvider } from "reactfire";


const News = () => {
  
  const { status, data: firestoreInstance } = useInitFirestore(async (firebaseApp) => {
    const db = initializeFirestore(firebaseApp, {});
    await enableIndexedDbPersistence(db);
    return db;
  });

  // firestore init isn't complete yet
  if (status === 'loading') {
    return <div className=" bg-white d-flex align-items-center justify-content-center" style={{width:"100vw",height:"100vh"}}> 
      <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }
  return (
    <StorageProvider sdk={firestoreInstance} >
      <div className="over colorbk">
        <NavBar></NavBar>
        <Newsindex></Newsindex>
      </div>
    </StorageProvider>
  );
};

export default News;
