import React from 'react';
import Table from './table';

function App(){
    return (<div className='container'>
                <h1>Student Grade Table</h1>
                <Table data={students}/>
            </div>
    )
}

const students = [
   {
       student: 'Walter White',
       course: 'Chemistry',
       grade: '90'
   },
   {
       student: 'Jesse Pinkman',
       course: 'Cooking',
       grade: '92.3'
   },
   {
       student: 'Gus Fringe',
       course: 'Business',
       grade: '89'
   }
];

export default App;

