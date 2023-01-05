/*
We don’t recommend using indexes for keys if the order of items may change. 
This can negatively impact performance and may cause issues with component state. 
Check out Robin Pokorny’s article for an in-depth explanation on the negative impacts of using an 
index as a key. If you choose not to assign an explicit key to list items then React will default
 to using indexes as keys.
 
 Keys help React identify which items have changed, are added, or are removed. 
 Keys should be given to the elements inside the array to give the elements a stable identity
*/

import React from 'react'

export default function Lists(props) {
    const numbers = props.numbers;
    
    return (
      <ul>
      {numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
      )}
    </ul>
    );
}
