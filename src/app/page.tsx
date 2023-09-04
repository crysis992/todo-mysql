import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <main className='container'>

      <div className='grid grid-cols-2 gap-x-10 gap-y-2'>

        <section className='w-full border-2 border-sky-600 p-2'>
          <h1>Categories</h1>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
        </section>

        <section className='w-full border-2 border-sky-600 row-span-2 p-2'>
          <h1>User</h1>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
        </section>


        <section className='w-full border-2 border-sky-600 col-span-2 p-2'>
          <h1>Todo</h1>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
        </section>

        <section className='w-full border-2 border-sky-600 col-span-2 p-2'>
          <h1>Todo</h1>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet?</div>
        </section>

      </div>

    </main>

  )
}
