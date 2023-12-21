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
import { useCreateInvoice, useUpdateUser } from '~/lib/hooks';

const Create: NextPage = () => {
  const { data: session, status } = useSession();
  const { trigger: createInvoice } = useCreateInvoice()
    const [customer, setCustomer] = useState<string>('');
    const [item, setItem] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [price, setPrice] = useState<number>(0.0);
    const [issue_date, setIssue_date] = useState<Date>(new Date())
    const [due_date, setDue_date] = useState<Date>()


    const onSubmit = async (e: FormEvent)=>{
      e.preventDefault();
      await createInvoice({data:{customer, item, comment, price, issue_date, due_date:due_date as Date}})
    }
    return(
        <main className='min-h-screen flex items-center justify-center'>
            <form className='w-full max-w-md' onSubmit={onSubmit}>

        <Card>
  <CardHeader>
    <CardTitle>Új számla</CardTitle>
  </CardHeader>
  <CardContent className='flex flex-col gap-4'>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="customer">Vásárló neve</Label>
      <Input type="text" id="customer" placeholder="" value={customer} onChange={(e) => setCustomer(e.currentTarget.value)} />
    </div>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="item">Tétel neve</Label>
      <Input type="text" id="item" placeholder="" value={item} onChange={(e) => setItem(e.currentTarget.value)} />
    </div>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="price">Tétel ára</Label>
      <Input type="number" id="price" placeholder="" value={price} onChange={(e) => setPrice(e.currentTarget.value as unknown as number)} />
    </div>
    <div className='flex justify-between'>
    <div className="grid items-center gap-1.5">
    <Label htmlFor="issue_date">Kiállítás dátuma</Label>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !issue_date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {issue_date ? format(issue_date, "PPP") : <span>Adj meg egy dátumot</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={issue_date}
          onSelect={setIssue_date as any}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
    <div className="grid items-center gap-1.5">
    <Label htmlFor="due_date">Esedékesség dátuma</Label>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !due_date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {due_date ? format(due_date, "PPP") : <span>Adj meg egy dátumot</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={due_date}
          onSelect={setDue_date as any}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
    </div>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="comment">Komment</Label>
      <Input type="text" id="comment" placeholder="" value={comment} onChange={(e) => setComment(e.currentTarget.value)} />
    </div>
  </CardContent>
  <CardFooter className='flex justify-between'>
    <Button type='button' onClick={async ()=> await Router.push('/')}>Vissza</Button>
    <Button type='submit'>Létrehozás</Button>
  </CardFooter>
</Card>
</form>
        </main>
    )

  
};

export default Create;