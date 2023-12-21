/* eslint-disable */
const metadata = {
    fields: {
        invoice: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            customer: {
                name: 'customer',
                type: 'String',
            },
            issue_date: {
                name: 'issue_date',
                type: 'DateTime',
                attributes: [{ name: '@default', args: [] }],
            },
            due_date: {
                name: 'due_date',
                type: 'DateTime',
            },
            item: {
                name: 'item',
                type: 'String',
            },
            comment: {
                name: 'comment',
                type: 'String',
            },
            price: {
                name: 'price',
                type: 'Float',
            },
        },
        role: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
            },
            name: {
                name: 'name',
                type: 'String',
            },
            description: {
                name: 'description',
                type: 'String',
                isOptional: true,
            },
            users: {
                name: 'users',
                type: 'User',
                isDataModel: true,
                isArray: true,
                backLink: 'role',
            },
        },
        account: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            type: {
                name: 'type',
                type: 'String',
            },
            provider: {
                name: 'provider',
                type: 'String',
            },
            providerAccountId: {
                name: 'providerAccountId',
                type: 'String',
            },
            refresh_token: {
                name: 'refresh_token',
                type: 'String',
                isOptional: true,
            },
            access_token: {
                name: 'access_token',
                type: 'String',
                isOptional: true,
            },
            expires_at: {
                name: 'expires_at',
                type: 'Int',
                isOptional: true,
            },
            token_type: {
                name: 'token_type',
                type: 'String',
                isOptional: true,
            },
            scope: {
                name: 'scope',
                type: 'String',
                isOptional: true,
            },
            id_token: {
                name: 'id_token',
                type: 'String',
                isOptional: true,
            },
            session_state: {
                name: 'session_state',
                type: 'String',
                isOptional: true,
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'accounts',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
        session: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            sessionToken: {
                name: 'sessionToken',
                type: 'String',
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            expires: {
                name: 'expires',
                type: 'DateTime',
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'sessions',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
        user: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            name: {
                name: 'name',
                type: 'String',
            },
            username: {
                name: 'username',
                type: 'String',
            },
            last_login: {
                name: 'last_login',
                type: 'DateTime',
                isOptional: true,
                attributes: [{ name: '@default', args: [] }],
            },
            password: {
                name: 'password',
                type: 'String',
            },
            accounts: {
                name: 'accounts',
                type: 'Account',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            sessions: {
                name: 'sessions',
                type: 'Session',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            role: {
                name: 'role',
                type: 'Role',
                isDataModel: true,
                backLink: 'users',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'roleId' },
            },
            roleId: {
                name: 'roleId',
                type: 'String',
                isForeignKey: true,
            },
        },
        verificationToken: {
            identifier: {
                name: 'identifier',
                type: 'String',
            },
            token: {
                name: 'token',
                type: 'String',
                isId: true,
            },
            expires: {
                name: 'expires',
                type: 'DateTime',
            },
        },
    },
    uniqueConstraints: {
        invoice: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        role: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        account: {
            provider_providerAccountId: {
                name: 'provider_providerAccountId',
                fields: ['provider', 'providerAccountId'],
            },
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        session: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            sessionToken: {
                name: 'sessionToken',
                fields: ['sessionToken'],
            },
        },
        user: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            username: {
                name: 'username',
                fields: ['username'],
            },
        },
        verificationToken: {
            identifier_token: {
                name: 'identifier_token',
                fields: ['identifier', 'token'],
            },
            token: {
                name: 'token',
                fields: ['token'],
            },
        },
    },
    deleteCascade: {
        user: ['Account', 'Session'],
    },
    authModel: 'User',
};
export default metadata;
