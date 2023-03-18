import React from 'react'

export default function ThemeExample() {
  return (
    <div>
        <div class="w-full h-full bg-sky-100  p-6 mx-auto justify-center">
  <div class="max-w-4xl container flex flex-col m-3 p-3 mx-auto">
  <p class="m-1 font-black text-6xl text-cyan-800 ">Primary text</p>
  <p class="m-1 font-bold text-5xl text-slate-800">Secondary text</p>
  <p class="m-1 font-bold text-3xl text-slate-800">This is Light mode color pallete </p>
  <div class="justify-center">
    <button
    class="mx-6 border-2 border-slate-800  m-3 p-3 rounded-full bg-cyan-200 font-bold text-xl text-slate-800"
    >Secondary Accent</button>
    <button
    class="mx-6 border-2 border-slate-800  m-3 p-3 rounded-full bg-cyan-600 font-bold text-xl text-slate-800"
    >Primary Accent</button>
    
  </div>
  
  <div class="justify-center">
    <button
    class="mx-6 border-2 border-cyan-800  m-3 p-3 rounded-full bg-cyan-200 font-bold text-xl text-cyan-800"
    >Secondary Accent</button>
    <button
    class="mx-6 border-2 border-cyan-800  m-3 p-3 rounded-full bg-cyan-600 font-bold text-xl text-cyan-800"
    >Primary Accent</button>
   
  </div>
  </div>
</div>

<div class="w-full h-full bg-cyan-900  p-6 mx-auto justify-center">
  <div class="max-w-4xl container flex flex-col m-3 p-3 mx-auto">
  <p class="m-1 font-extrabold text-6xl text-sky-300">Primary text</p>
  <p class="m-1 font-bold text-5xl text-slate-100">Secondary text</p>
  <p class="m-1 font-bold text-3xl text-slate-100">This is Dark mode color pallete </p>
  <div class="justify-center">
   <button
    class="mx-6 border-2 border-slate-100  m-3 p-3 rounded-full bg-sky-400 font-bold text-xl text-slate-100"
    >Primary Accent</button>
    <button
    class="mx-6 border-2 border-slate-100  m-3 p-3 rounded-full bg-sky-700 font-bold text-xl text-slate-200"
    >Secondary Accent</button>
    
  </div>
  <div class="justify-center">
    <button
    class="mx-6 border-2 border-sky-300  m-3 p-3 rounded-full bg-sky-400 font-bold text-xl text-sky-300"
    >Primary Accent</button>
    <button
    class="mx-6 border-2 border-sky-300  m-3 p-3 rounded-full bg-sky-700 font-bold text-xl text-sky-300"
    >Secondary Accent</button>
  </div>
  </div>
</div>
    </div>
  )
}
