import React from 'react'
import useStore from '../Utilities/Store'
import { useState } from 'react';

function Contact() {

  const{darkMode, setDarkMode} = useStore();
  const [disabledButton, setDisabledButton] = useState(true)

  //Name variables
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNameBlur = () => {
    const nameRegex = /^[A-Za-z\s.'-]+$/
    if (nameRegex.test(name)) {
      setNameError('');
      console.log('no name errors')
    } else {
      setNameError('Please enter a valid Name.');
    }
  };

  //Phone variables
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePhoneBlur = () => {
    const phoneRegex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if (phoneRegex.test(phone)) {
      setPhoneError('');
      console.log('no phone errors')
    } else {
      setPhoneError('Please enter a valid phone.');
    }
  };

  //Email variables
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailBlur = () => {
    const emailRegex = /^\S+@\S+$/i;
    if (emailRegex.test(email)) {
      setEmailError('');
      console.log('no email errors')
    } else {
      setEmailError('Please enter a valid Email.');
    }
  };

   //Subject variables
   const [subject, setSubject] = useState('');
   const [subjectError, setSubjectError] = useState('');
   const handleSubjectChange = (e) => {
     setSubject(e.target.value);
   };
   const handleSubjectBlur = () => {
     const subjectRegex = /^.{2,140}$/;
     if (subjectRegex.test(subject)) {
       setSubjectError('');
       console.log('no subject errors')
    } else {
       setSubjectError('Please enter a valid Subject. It should be 2-140 characters');
     }
   };

   //Message variables
   const [message, setMessage] = useState('');
   const [messageError, setMessageError] = useState('');
   const handleMessageChange = (e) => {
     setMessage(e.target.value);
   };
   const handleMessageBlur = () => {
     const messageRegex = /^.{10,500}$/;
     if (messageRegex.test(message)) {
       setMessageError('');
       console.log('no message errors')
    } else {
       setMessageError('Please write something');
     }
   };

   const handleSubmitButton = () => {
    if (
      nameError === '' &&
      phoneError === '' &&
      emailError === '' &&
      subjectError === '' &&
      messageError === ''
    ) {
      setDisabledButton(false);
    }
  };




  return (
    <div className={`w-full  ${darkMode ? 'bg-cyan-900' : 'bg-sky-100'}`}>
      <div 
      id='contact'
      className='max-w-[1040px] m-auto md:pl-20 py-16'
      >
        <h1 className={`text-4xl md:text-5xl lg:text-6xl pb-6 font-bold text-center ${darkMode 
            ? 'text-sky-300' 
            : 'text-cyan-800'}`}>
            Contact
        </h1>
        
        <form onChange={handleSubmitButton} action="https://api.web3forms.com/submit" method='POST'>
          <input type="hidden" name="access_key" value="f44798db-66a4-45f5-a85e-025824a5fcb1" />
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col ml-2 mr-2'>
              
              <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="name">Name <span className='text-red-600'>{  nameError}</span></label>
              <input 
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              name='name'
              type="text"
              required={true} 
              autoComplete='new-password'
              className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}
              ${(!nameError) ? 'ring ring-emerald-600' : 'ring ring-red-600'} 
              `} />

            </div>
            <div className='flex flex-col ml-2 mr-2'>
              
              <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="phone">Phone <span className='text-red-600'>{phoneError}</span></label>
              <input 
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              name='phone'
              type="text"
              required={true} 
              autoComplete='new-password'
              className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}
              ${(!phoneError) ? 'ring ring-emerald-600' : 'ring ring-red-600'}
              `}/>

            </div>
          </div>
          <div className='flex flex-col py-2 ml-2 mr-2'>
            
            <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Email <span className='text-red-600'>{emailError}</span></label>
            <input 
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            type="email" 
            name="email"
            required={true} 
            autoComplete='new-password'
            className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}
              ${(!emailError) ? 'ring ring-emerald-600' : 'ring ring-red-600'}`}/>
              
          </div>
          <div className='flex flex-col py-2 ml-2 mr-2'>

            <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Subject <span className='text-red-600'>{subjectError}</span></label>
            <input 
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            onBlur={handleSubjectBlur}
            autoComplete='new-password'
            type="text" 
            name="subject"
            required={true} 
            className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}
              ${(!subjectError) ? 'ring ring-emerald-600' : 'ring ring-red-600'}`}
               />

          </div>
          <div className='flex flex-col py-2 ml-2 mr-2'>

            <label className={`uppercase text-sm py-2 font-medium 
              ${darkMode ? 'text-sky-300' : 'text-cyan-800'}`} htmlFor="">Message <span className='text-red-600'>{messageError}</span></label>
            <textarea 
            id="message"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageBlur}
            rows='10' 
            name="message"
            required={true} 
            className={`border-2 rounded-lg p-3 flex outline-none text-lg
              ${darkMode
              ? 'border-sky-300 bg-cyan-900 text-sky-300'
              : 'border-cyan-800 bg-sky-100 text-cyan-800'}
              ${(!messageError) ? 'ring ring-emerald-600' : 'ring ring-red-600'}`} 
              />

          </div>
          
          <button
          type='submit'
          className={`p-3 m-1 my-auto mt-4 rounded-xl font-medium text-lg hover:scale-110  
           duration-700 border-2 block mx-auto
                 ${darkMode 
                 ? 'text-sky-300 shadow-sky-300 bg-cyan-900 border-sky-300' 
                 : 'text-cyan-800 shadow-cyan-800 bg-sky-100 border-cyan-800'}
                 ${disabledButton ? 'hidden' : 'block'}`}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact