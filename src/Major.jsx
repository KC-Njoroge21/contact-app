import React from 'react'
import contact from './contact'

const Major = () => {

  const [contactList, setContactList] = React.useState(contact)

  const contactElements = contactList.map((item) => {
    return (
      <div key={item.id}>

        <div>
          <img src={item.img} alt="" />
        </div>

        <div>
          <h2>{item.name}</h2>
          <h2>{item.number}</h2>
          <h2>{item.email}</h2>
          <h2>{item.gender}</h2>
          

        </div>

        <button>isfavorite</button>
      </div>
    )
  } )

  return (
    <div>
      {contactElements}
    </div>
  )
}

export default Major