/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useSession } from 'next-auth/react';
import Router from 'next/router';

   
import { Button } from "~/components/ui/button"
import { NextPage } from 'next';
import { useFindFirstUser, useFindManyInvoice } from '~/lib/hooks';

const List: NextPage = () => {
  const { data: session, status } = useSession();

  if(status=='unauthenticated')
  Router.push('/login').catch((e)=>console.error(e))

  const {data:user} = useFindFirstUser()
  const {data: data2} = useFindManyInvoice()
  let keys: String[] = []
  if(data2?.length && data2?.length>0)
    keys=Object.keys(data2?.[0]).slice(1)
    console.log(user)
    return(
    <main className='flex flex-col items-center my-12 text-center gap-0.5'>
      <div className='flex w-full max-w-sm justify-between mb-12'>

      <Button onClick={async ()=>await Router.push('/')}>Vissza</Button>
      {status=='authenticated' && (user?.roleId=='accountant' || user?.roleId=='admin') && <Button onClick={async ()=>await Router.push('invoice/create')}>Létrehozás</Button>}
      </div>
      <div className='flex w-full'>
      {['Vásárló neve','Kiállítás dátuma','Esedékesség dátuma','Tétel neve','Komment','Ár'].map((x,i)=>{
        return <div className='w-full' key={i}>{x}</div>
      })}
      </div>
      {data2?.length && data2?.length>0 && data2.map((x,i)=>{
      return<div key={i} className='flex w-full'>
        {keys.map((y,i)=>{
        return <div className='w-full border-2' key={i}>{String((x as any)[y as keyof typeof x])}</div>
      })}
      </div>})}
    </main>
    )
  
};

export default List;