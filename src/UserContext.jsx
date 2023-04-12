import React, {Component} from 'react';



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const ThemeContext = React.createContext();



// class ProviderContext extends Component {
//     constructor() {
//         super();
//         this.state= {value: 'dark'};
//         this.flipIt = this.flipIt.bind(this);
//     }

//     flipIt() {
//         this.setState((prevState)=> {
//             return {value: prevState.value === 'light' ? 'dark' : 'light'}
//         })
//     }

//     render() {
//         return(
//             <ThemeContext.Provider value={{value: this.state.value, flipIt: this.flipIt}}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         )
//     }
// }


// export {ThemeContext, ProviderContext};


// function ProviderContext(props) {
//     const [theme, setTheme] = React.useState('dark');

//     function flipIt() {
//         setTheme((prevState)=> prevState === 'light' ? 'dark' : 'light')
//     }
//     return(
//         <ThemeContext.Provider value={{value: theme, flipIt: flipIt}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }


// export {ThemeContext, ProviderContext};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const UserContext = React.createContext()



class ContProvider extends Component {
    constructor() {
        super();
        this.state = {value: 'sally123'}
        this.changeUsername = this.changeUsername.bind(this);
    }

    changeUsername(newUsername) {
        this.setState({value: newUsername});
    }

    render() {
        return(
            <UserContext.Provider value={{username: this.state.value, changeUsername: this.changeUsername}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export {UserContext, ContProvider};


