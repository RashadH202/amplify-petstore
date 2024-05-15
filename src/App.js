import './App.css';
import { useState } from 'react';
import { PetProfileCollection, AddPet } from './ui-components';
 import {NavBarHeader} from './ui-components'
 import {MarketingFooter} from './ui-components'
 import {
  PetDetails 
 } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

 function App({user, signOut}) {
  const [showForm, setShowForm] = useState(false)
  const [showDetails, setDetails] = useState(false)
  const [pet, setPet] = useState()
  const [updatePet, setUpdatePet] = useState()

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [breed, setBreed] = useState("")
  const [about, setAbout] = useState("")
  const [color, setColor] = useState("")
  const [image, setImage] = useState("")


  const formOverride = {

    TextField29766922:{
      placeholder: name
    }
    ,
    TextField29766923:{
      placeholder: breed
    },
    TextField29766924:{
      placeholder: about
    },
    TextField38651513:{
      placeholder: color
    },
    TextField38651520:{
      placeholder: age
    },
    TextField38681579:{
      placeholder: image
    },
   
    MyIcon: {
      onClick: () => {
        setShowForm(false);
      }
    },
  }


  const navbarOverrides ={
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        // saveFile();
        setShowForm(!showForm);
      },
    },
    Button39493467:{
      onClick: signOut,
    },
    image: {
      src: user?.attributes?.profile,
      //src: "https://img.icons8.com/color/50/000000/cat",
    },
    "username": {

    }

  }


  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }


  return (
    <div className="App">
     <header ><NavBarHeader width={"100%"} overrides={navbarOverrides} /></header>
      {showForm && (
        <AddPet 
        
        overrides={formOverride}
        pet={updatePet}
      
        
        />
      )}
      {showDetails &&<PetDetails overrides={
        {MyIcon: {
          onClick: () => {
            setDetails(false)
          }, 
          style: {
            cursor:"pointer",
          }
        }}
      } pet={pet}/>}
     
      
      <PetProfileCollection  
      overrideItems={({item, index}) => ({
        overrides : {
          Button29766907:{
            onClick: () => {
              setDetails(!showDetails);
              setPet(item)
            },},
          Button3853451:{
              onClick: () => {
               
                  if (!showForm) setShowForm(true)
                   setUpdatePet(item)
                   setName(item.name)
                   setBreed(item.breed)
                   setAbout(item.about)
                   setColor(item.color)
                   setAge(item.age)
                   setImage(item.image)
                   
              },}
        }
      })}
      />
      <footer >
        <MarketingFooter width={"100%"}/>
      </footer>
    </div>
  );
}

export default withAuthenticator(App);
