import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// function luckyNumber(){
//     return Math.floor(Math.random() * 1001);
// }

// function greeting(user){
//     user = {name, luckyNumber};
//     const element = (<div className='container'>
//                         <h1
//                             >Welcome {user.name}
//                         </h1>
//                         <h2 className='text-muted'>
//                             Your lucky number is: {user.luckyNumber}
//                         </h2>
//                     </div>
//     );
//     return element;
// }

// const superMan = [{
//     name: 'Clark Kent', 
//     luckyNumber: luckyNumber()
// }];