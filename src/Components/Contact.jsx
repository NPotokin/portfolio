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
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2' htmlFor="">Name</label>
            <input className='border-2 rounded-lg p-3 flex border-cyan-800' type="text" name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2' htmlFor="">Phone</label>
            <input className='border-2 rounded-lg p-3 flex border-cyan-800' type="text" name='phone' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2' htmlFor="">Email</label>
          <input className='border-2 rounded-lg p-3 flex border-cyan-800'  type="email" name="email"/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2' htmlFor="">Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-cyan-800' type="text" name="subject"/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2' htmlFor="">Message</label>
          <textarea className='border-2 rounded-lg p-3 flex border-cyan-800' rows='10' name="message"/>
        </div>
        <button className='bg-cyan-200 text-slate-800 mt-4 w-full p-4 rounded-lg'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact