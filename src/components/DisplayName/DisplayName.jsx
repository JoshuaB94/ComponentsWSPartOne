/*
Exercise #1:
Create a DisplayName component that renders a person’s first name and last name to the web page

a. Insert the Exercise 1 state object from the ComponentExercisesSeedData.txt file into your App.js component.

b. Pass the first name and last name as props to the component you created to be displayed as <h1> tag in the web page. 
*/

import React from 'react';

const DisplayName = (props) =>{
    return (
        <h1>{props.firstName} {props.lastName}</h1>
    );
}

export default DisplayName;