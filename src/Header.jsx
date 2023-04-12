import React, {Component} from "react"

import {UserContext} from "./UserContext"
// import {ThemeContext} from "./ThemeContext"

// class Header extends Component {
//     static contextType = ThemeContext
//     render() {
//         const theme = this.context
//         return (
//             <header className={`${theme}-theme`}>
//                 <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//             </header>
//         )    
//     }
// }

// export default Header


// export default function Header() {
//     return(
//         <ThemeContext.Consumer>
//             {((theme)=> {
//                 return (
//                 <header className={`${theme.value}-theme`}>
//                     <h2>{theme.value === "light" ? "Light" : "Dark"} Theme</h2>
//                 </header>
//                 )
//             })}
//         </ThemeContext.Consumer>
       
//     )
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////



// class Header extends Component {
//     static contextType = UserContext
    
//     render() {
//         const username = this.context
//         return (
            
//         )    
//     }
// }

// export default Header


export default function() {
    return (
        <UserContext.Consumer>
            {((context)=> (
                <header>
                    <p>Welcome, {context.username}!</p>
                </header>
            ))}
        </UserContext.Consumer>
        
    )
}