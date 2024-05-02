import './App.css';

import {PetProfileCollection } from './ui-components';
 import {NavBarHeader} from './ui-components'
 import {MarketingFooter} from './ui-components'
function App() {
  return (
    <div className="App">
     <header ><NavBarHeader width={"100%"}/></header>

        
      
      <PetProfileCollection  />
      <footer >
        <MarketingFooter width={"100%"}/>
      </footer>
    </div>
  );
}

export default App;
