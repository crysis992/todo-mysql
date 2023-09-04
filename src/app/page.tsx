import Categories from '@/components/category/Categories'
import TodoEntry from '@/components/todo/TodoEntry'
import AddTodoList from '@/components/todo/AddTodoList'
import { Separator } from '@/components/ui/Separator'
import UserPanel from '@/components/user/UserPanel'
import React from 'react'

export default function Home() {
  return (
    <main className='container mt-3'>

      <div className='grid grid-cols-3 gap-x-10 gap-y-2'>

        <section className='w-full p-2 row-span-2 col-span-2 shadow-sm shadow-amber-800'>
          <h1 className='font-bold'>Kategorien</h1>
          <Separator className='my-1' />
          <Categories />
        </section>

        <section className='w-full row-span-1 p-2 shadow-sm shadow-amber-800'>
          <h1>Benutzer</h1>
          <Separator className='my-1' />
          <UserPanel />
        </section>


        <section className='w-full col-span-2 p-2 shadow-sm shadow-amber-800'>
          <h1>Todo</h1>
          <Separator className='my-1' />

          <TodoEntry />
        </section>

        <section className='w-full col-span-1 p-2 shadow-sm shadow-amber-800'>
          <h1>Liste Hinzufügen</h1>
          <Separator className='my-1' />
          <AddTodoList />
        </section>

      </div>

    </main>

  )
}
