import React from 'react'

function TitleComponent({ f_color= 'black', bg_color="blue", title= "Default description" }) {
  return (
    <div>
        <h1 style={{ backgroundColor:bg_color, color:f_color}}> {title}</h1>
    </div>
  )
}

export default TitleComponent