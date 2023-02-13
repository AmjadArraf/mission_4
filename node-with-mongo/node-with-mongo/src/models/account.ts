import { Schema, model } from 'mongoose'
import { AccountInterface } from '../interfaces/account1';

const accountSchema = new Schema<AccountInterface>({
    accountNumber: Number,
    type: String,
    info: Object,
    date: String
})

export const Account = model<AccountInterface>('accountoperation', accountSchema)