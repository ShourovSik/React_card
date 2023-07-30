import React from "react";

import Card from "./components/cards";
import Data from "./data.json";



function App(){

    let items = [];
   items = Data.map((items , index) => <Card key={index} stName={items.name} stBio={items.bio}/>)

return <div>

        {items}

</div>}

export default App;