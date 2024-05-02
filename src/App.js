import './App.css';
import { useState } from 'react';
import {PetProfile, PetProfileCollection, AddPet } from './ui-components';
 import {NavBarHeader} from './ui-components'
 import {MarketingFooter} from './ui-components'


 function App() {
  const [showForm, setShowForm] = useState(false)
  const navbarOverrides ={
    "Add Pet": {
      onClick: ()=> {
        setShowForm(!showForm)
      }
    }
  }


  return (
    <div className="App">
     <header ><NavBarHeader width={"100%"} overrides={navbarOverrides} /></header>
      {showForm && (
        <AddPet/>
      )}
        <PetProfile/>
      
      <PetProfileCollection  />
      <footer >
        <MarketingFooter width={"100%"}/>
      </footer>
    </div>
  );
}

export default App;
