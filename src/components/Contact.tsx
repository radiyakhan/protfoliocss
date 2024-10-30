import React from 'react'

const Contact = () => {
  return (
    <div>
      
  <div className="main">
    
    <div>
      <h2 className="main1">
        Contact
      </h2>
      
      <div className="name">
        <label htmlFor="name" className="name1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="name2"
        />
      </div>
      <div className="email">
        <label htmlFor="email" className="email1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="email2"
        />
      </div>
      <div className="msg">
        <label htmlFor="message" className="msg1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="msg2"
          defaultValue={""}
        />
      </div>
      <button className="btn2">
        Button
      </button>
      
    </div>
  </div>
  <h1 className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'></h1>

    </div>
  )
}

export default Contact



