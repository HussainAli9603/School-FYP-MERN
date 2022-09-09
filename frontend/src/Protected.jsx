import React from 'react'

const Protected = (props) => {
    let Cmp=props.Cmp;
    let name=props.name;
  
    // if(localStorage.getItem('user'))
  return (
    <>
<Cmp name={name}/>
    </>
  )
}

export default Protected