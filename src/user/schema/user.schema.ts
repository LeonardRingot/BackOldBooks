import { boolean, object, string, TypeOf } from "zod";


export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required'
        }),
        code: string({
            required_error: 'Code is required'
        }),
        admin: boolean({
            required_error: 'user status is required'
        }),
        password: string({
            required_error: 'password is required'
        }).min(5, 'Short password, it must have at least 5 characters'),
        passwordConfirm: string({
            required_error: 'Confirmation password is required'
        }),
    }).refine((data) => data.password === data.passwordConfirm, {
        message: 'Password do not match',
        path: ['passwordConfirm'],
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>;