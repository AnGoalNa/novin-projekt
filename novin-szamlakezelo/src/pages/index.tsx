/* eslint-disable @typescript-eslint/no-explicit-any */

import Head from "next/head";
import { signOut, useSession } from 'next-auth/react';
import Router from 'next/router';
import { useFindFirstUser } from '../lib/hooks'
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Badge } from "../components/ui/badge"


const UserData =({ name, username, role, last_login}: { name?: string, username?: string, role?: any, last_login?: Date|null})=>{

  return ( <><Card className="w-full">
  <CardHeader>
    <CardTitle>
      {name??'Töltés'}
      </CardTitle>
    <CardDescription><Badge>{role?.name??'Töltés'}: {username??'Töltés'}</Badge></CardDescription>
  </CardHeader>
  <CardContent>
    
  </CardContent>
  <CardFooter className="flex flex-wrap justify-between">
    <h2>Utolsó bejelentkezés:</h2>
    <p>{last_login?.toLocaleString()??'Ismeretlen'}</p>
  </CardFooter>
</Card></>)
}

export default function Home() {

  const { data: session, status } = useSession();
  if(status=='unauthenticated')
    Router.push('/login').catch((e)=>console.error(e))

  const { data, error} = useFindFirstUser({where: {id: session?.user.id}, include: {role: true}})
  console.log(data, error)
  return (
    <>
      <Head>
        <title>Számlakezelő</title>
        <meta name="description" content="Számlakezelő" />
      </Head>
     <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
                {session?.user ? (
                  <div className="flex items-center w-full justify-between max-w-2xl gap-12 lg:gap-24">
                    <UserData name={data?.name} username={data?.username} role={data?.role} last_login={data?.last_login} />
                    <div className="flex flex-col">
                      <Button type='button' onClick={()=>signOut()}>Kijelentkezés</Button>
                    </div>
                  </div>
                ) : (
                    // if not logged in
                    "Loading..."
                )}
            </div>
        </main>
    </>
  );
}
