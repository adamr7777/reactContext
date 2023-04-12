import React from 'react';
import Header from "./Header"

import {UserContext} from "./UserContext"
// import Button from './Button';
// import Header from './Header';
// import {ThemeContext} from './ThemeContext';



// export default function App() {
//     return (
//         <>  
//             <Header/>
//             <Button/>
//         </>
        
//     )
// };


///////////////////////////////////////////////////////////////////////////////////////////////////////



// class App extends React.Component {
//     static contextType = UserContext
    
//     render() {
//         const username = this.context
//         return (
//             <div>
//                 <Header />
//                 <main>
//                     <p className="main">No new notifications, {username}! 🎉</p>
//                 </main>
//             </div>
//         )
//     }
// }

// export default App


export default function App() {
    const [stateA, setStateA] = React.useState('');

    function updateV(event) {
        setStateA(event.target.value);
    }

    return(
        <>      
            <Header />
            <UserContext.Consumer>
                {((context)=> (
                    <>
                    <main>
                        <p className="main">No new notifications, {context.username}! 🎉</p>
                    </main>
                    <input
                        type="text"
                        name="username"
                        placeholder="New username"
                        value={stateA}
                        onChange={updateV}
                    />
                    <button onClick={()=>context.changeUsername(stateA)}>Change Username</button>
                    </>
                ))}
            </UserContext.Consumer>
        </>
    )
}

// add context.consumer