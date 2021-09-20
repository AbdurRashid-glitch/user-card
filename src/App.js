import React from "react";
import SingleComment from "./SingleComment";
import Profile1 from './images/pexels1.jpg';
import Profile2 from './images/pexels2.jpg';
import Profile3 from './images/pexels3.jpg';
import UserCard from "./UserCard";


class App extends React.Component{

    render(){
        return(
            <div className='ui comments'> 
               <UserCard>
               <SingleComment 
               picture = {Profile1}
               name='Sarah' 
               date='Today at 6:00PM' 
               comment='Its Awesome!'
               />
               </UserCard>
               
              <UserCard>
               <SingleComment 
               picture={Profile2}
               name='Alvie'  
               date='Today at 8:00PM' 
               comment='Its Wonderful!'
               />

               </UserCard>
              
               <UserCard>
                <SingleComment 
                picture={Profile3}
                name='Amy'  
                date='Today at 10:00PM' 
                comment='Its Fabolous!'
                />
              </UserCard>
            </div>
        )
    }
}

export default App;
