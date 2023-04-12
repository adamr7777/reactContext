import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {UserContext, ContProvider} from './UserContext';
// import {ThemeContext, ProviderContext} from './ThemeContext';

// const {Consumer, Provider} = ThemeContext;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <ProviderContext>
//         <App></App>
//     </ProviderContext>
// )
/////////////////////////////////////////////////////////////////////////////////////////////////


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContProvider>
        <App />
    </ContProvider>, 
)
    
  
/////////////////////////////////////////////////////////////////////////////////////////////////