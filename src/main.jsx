import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import UserContext from './UserContext';
import ThemeContext from './ThemeContext';

const {Consumer, Provider} = ThemeContext;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider value='dark'>
        <App></App>
    </Provider>
)
   

// root.render(
//     <UserContext.Provider value={"sally123"}>
//         <App />
//     </UserContext.Provider>, 
// )
    
  
/////////////////////////////////////////////////////////////////////////////////////////////////