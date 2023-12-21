/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { signIn, useSession } from 'next-auth/react';
import Router from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"

import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { NextPage } from 'next';
import { useUpdateUser } from '~/lib/hooks';

const Signup: NextPage = () => {
  const { data: session, status } = useSession();
  const { trigger: updateUser } = useUpdateUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      (async () => {
        if(status=='authenticated'){
          await updateUser({where: {id:session?.user.id}, include: {role: true}, data: {last_login: new Date()}});
          await Router.push('/');
        }
      })().catch((err)=>(console.log(err)));
    
    }, [status]);

    const onSubmit = (e: FormEvent)=>{
      e.preventDefault();
      void signIn('credentials', { redirect: false, username, password }).then((res) => {
      if(res?.error){
          alert(res?.error)
       }
    })
    }
    return(
        <main className='min-h-screen flex items-center justify-center'>
            <form className='w-full max-w-md' onSubmit={onSubmit}>

        <Card>
  <CardHeader>
    <CardTitle>Számlakezelő</CardTitle>
  </CardHeader>
  <CardContent className='flex flex-col gap-4'>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="username">Felhasználónév</Label>
      <Input type="text" id="username" placeholder="" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
    </div>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="password">Jelszó</Label>
      <Input type="password" id="password" placeholder="" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
    </div>
  </CardContent>
  <CardFooter className='flex justify-between'>
    <Button type='button' onClick={async ()=>await Router.push('/signup')}>Regisztráció</Button>
    <Button type='submit'>Bejelentkezés</Button>
  </CardFooter>
</Card>
</form>
        </main>
    )

  
};

export default Signup;