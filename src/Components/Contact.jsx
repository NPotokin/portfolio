import React from 'react'

function Contact() {
  return (
    <div 
    id='contact'
    className='max-w-[1040px] m-auto md:pl-20 py-16'
    >
      <h1 className='py-4 text-4xl font-bold text-slate-800 text-center'>
        Contact
      </h1>
      <h1 className='py-4 text-2xl font-bold text-cyan-800 text-center'>
        some text about how its cool to chat with me
      </h1>
      <form action="" method='POST' encType='multipart/form-data'>
        <div>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" name='name' />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input type="text" name='phone' />
          </div>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email"/>
        </div>
        <div>
          <label htmlFor="">Subject</label>
          <input type="text" name="subject"/>
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea rows='10' name="message"/>
        </div>
      </form>
    </div>
  )
}

export default Contact