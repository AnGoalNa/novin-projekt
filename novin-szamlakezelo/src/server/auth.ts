/* eslint-disable @typescript-eslint/prefer-optional-chain */

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import type { GetServerSidePropsContext } from 'next';
import NextAuth, { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from './db';
/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session` object and keep type
 * safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks,
 * etc.
 *
 * @see https://next-auth.js.org/configuration/options
 **/
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    // Include user.id on session
    callbacks: {
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub!;
            }
            return session;
        },
    },
    // Configure one or more authentication providers
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            credentials: {
                username: { type: 'text' },
                password: { type: 'password' },
            },
            authorize: authorize(db),
        }),
    ],
};

function authorize(prisma: PrismaClient) {
    return async (credentials: Record<'username' | 'password', string> | undefined) => {
        if (!credentials) throw new Error('Töltsd ki a kötelező mezőket!');
        if (!credentials.username) throw new Error('A felhasználónevet kötelező megadni!');
        if (!credentials.password) throw new Error('A jelszót kötelező megadni!');
        const maybeUser = await prisma.user.findFirst({
            where: { username: credentials.username },
            select: { id: true, username: true, password: true },
        });
        if (!maybeUser || !maybeUser.password) throw new Error('Sikertelen bejelentkezés!');
        // verify the input password with stored hash
        const isValid = await compare(credentials.password, maybeUser.password);
        if (!isValid) throw new Error('Sikertelen bejelentkezés!');
        return { id: maybeUser.id, username: maybeUser.username };
    };
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext['req'];
    res: GetServerSidePropsContext['res'];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};

export default NextAuth(authOptions);