import hashPassword from './hashPassword'

export default async function isValidPassword(password: string, hashedPassword: string) {
    return await hashPassword(password) === hashedPassword 
}