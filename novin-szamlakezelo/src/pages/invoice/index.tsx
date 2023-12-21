/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "~/components/ui/card"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
  
import { cn } from "~/lib/utils"
import { Calendar } from "~/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
   
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { NextPage } from 'next';
import { useFindManyInvoice } from '~/lib/hooks';

const List: NextPage = () => {
  const { data: session, status } = useSession();
  const {data: data2} = useFindManyInvoice()
  let keys: String[] = []
  if(data2?.length && data2?.length>0)
    keys=Object.keys(data2?.[0])

    console.log(keys)
    return(
    <main className='flex flex-col items-center my-12'>
      <div className='flex w-full max-w-4xl'>
      {keys.map((x,i)=>{
        return <div className='w-full' key={i}>x</div>
      })}
      </div>
    </main>
    )
  
};

export default List;