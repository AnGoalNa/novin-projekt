/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useState, type FormEvent } from 'react';
import { useCreateUser } from '../lib/hooks';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"

import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import {
    Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  } from "../components/ui/select"

const Signup: NextPage = () => {
  const { data: session, status } = useSession();
  if(status=='authenticated')

    Router.push('/').catch((e)=>console.error(e))
    const [name, setName] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const { trigger: signup } = useCreateUser();

    async function onSignup(e: FormEvent) {
        e.preventDefault();
        try {
            await signup({ data: { name, username, password, role_id: role} });
        } catch (err: any) {
            console.error(err);
            if (err.info?.prisma && err.info?.code === 'P2002') {
                // P2002 is Prisma's error code for unique constraint violations
                alert('A felhasználónév már létezik');
            } else {
                alert('Kérlek töltsd ki a mezőket');
            }
            return;
        }

        // signin to create a session
        await signIn('credentials', { redirect: false, username, password });
        await Router.push('/');
    }

    return(
        <main className='w-full min-h-screen flex items-center justify-center'>
            <form onSubmit={(e) => void onSignup(e)}>

        <Card className='max-w-md w-full'>
  <CardHeader>
    <CardTitle>Regisztráció</CardTitle>
  </CardHeader>
  <CardContent className='flex flex-col gap-4'>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Teljes név</Label>
      <Input type="text" id="name" placeholder="" value={name} onChange={(e) => setName(e.currentTarget.value)} />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username">Felhasználónév</Label>
      <Input type="text" id="username" placeholder="" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
    </div>
    <div className='flex w-full items-end gap-4'>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Jelszó</Label>
      <Input type="password" id="password" placeholder="" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
    </div>
    <Select onValueChange={(e) => setRole(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Szerepkör" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Szerepkörök</SelectLabel>
          <SelectItem value="user">Felhasználó</SelectItem>
          <SelectItem value="accountant">Könyvelő</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  </CardContent>
  <CardFooter className='w-full flex justify-between'>
    <Button type='button' onClick={()=>Router.push('/')}>Vissza</Button>
    <Button type='submit'>Tovább</Button>
  </CardFooter>
</Card>
</form>
        </main>
    )
};

export default Signup;