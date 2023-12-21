import { NextRequestHandler } from '@zenstackhq/server/next';
import { enhance } from '@zenstackhq/runtime';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerAuthSession } from '../../../server/auth';
import { db } from '../../../server/db';

async function getPrisma(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerAuthSession({ req, res });
    // create a wrapper of Prisma client that enforces access policy,
    // data validation, and @password, @omit behaviors
    if(session?.user){
        const user = await db.user.findUniqueOrThrow({ where: { id: session?.user.id}, select:{id:true, role:true, roleId: true} }); 
        return enhance(db, { user });
    }
    else
    return enhance(db, { user: session?.user });
}

export default NextRequestHandler({ getPrisma });