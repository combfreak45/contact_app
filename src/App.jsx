import { useCallback, useEffect, useState } from "react";
import NavBar from "./Components/NavBar"
import Search from "./Components/Search"
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection,getDocs} from 'firebase/firestore'
import {db} from './config/firebase'
import ContactCard from "./Components/ContactCard";
import Modal from "./Components/Modal";


function App() {

  const [contacts,setContacts] = useState([]);
  const [isopen,setIsopen] = useState(false);


  const onOpen = () =>{
    setIsopen(true);
  }

  const onClose = () =>{
    setIsopen(false);
  }

  useEffect(()=>{
   const getContacts= async ()=>{ 
    try {
        const  contactRef = collection(db,"contact");
        const  contactSnap = await getDocs(contactRef);
        const contactList = contactSnap.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data(),
          }
        })
        setContacts(contactList);
    } catch (error) {
      console.log(error);
    }
   }
   getContacts();
  },[])

  return (
    <>
    <div className="max-w-[20rem] mx-auto px-4">
      <NavBar />
      <div className="flex gap-2">
        <Search />
        <AiFillPlusCircle className="text-white text-3xl cursor-pointer" onClick={onOpen} />
      </div>
      <div className="my-2 flex flex-col gap-2">
        {contacts.map((contact) => (
           <ContactCard contact={contact}/>
        ))}
      </div>
    </div>
    <Modal isopen={isopen} onClose={onClose} />
    </>
  );
}

export default App
