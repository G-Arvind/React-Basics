import React from 'react'
import Names from './Names';

export default function NameList() {

   let persons = [
                    {
                        id:1,
                        name:"abc",
                        age:"22"
                    },
                    {
                        id:2,
                        name:"def",
                        age:"23"
                    },
                    {
                        id:3,
                        name:"axyzbc",
                        age:"24"
                    }
                ];

   const namesList = persons.map(person => <Names key={person.id} names={person}></Names>);

    return (
    <div>{namesList }</div>
    )
}
