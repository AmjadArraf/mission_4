import { AccountInterface } from '../interfaces/account1'
import { Account } from '../models/account'
import { Document, Types } from 'mongoose'
import { ObjectID } from 'typeorm'

//create
export const createAccount = async (
  doc: AccountInterface
): Promise<Document<unknown, any, AccountInterface>> => {
  const account = new Account(doc)
  return await account.save()
}

//read/find
// export const findAccountByNumber = async (
//   accNum: string
// ): Promise<Document<unknown, any, AccountInterface> | null> => {
//   return await Account.find({accountNumber: `${accNum}`})
// }


// export const findCourses = async (filter: {
//   isOnline?: string
//   startDate?: Date
// }): Promise<Document<unknown, any, Icourse>[]> => {
//   const { isOnline, startDate } = filter
//   console.log(new Date(startDate as Date))
//   switch (true) {
//     case isOnline !== undefined && startDate !== undefined:
//       return await Course.find({
//         isOnline: isOnline === 'true',
//         startDate: {
//           $lte: new Date(startDate as Date),
//         },
//       })
//     case isOnline !== undefined:
//       return await Course.find({
//         isOnline: isOnline === 'true',
//       })
//     case startDate !== undefined:
//       return await Course.find({
//         startDate: {
//           $lte: new Date(startDate as Date),
//         },
//       })
//     default:
//       return await Course.find()
//   }
// }

// export const findCoursesWithLimitSortSelect = async (
//   limit: number,
//   sortBy: string,
//   keys: string[],
//   desc: boolean
// ): Promise<Document<unknown, any, Icourse>[]> => {
//   const select: any = {}
//   for (const key of keys) {
//     select[key] = 1
//   }
//   return await Course.find()
//     .limit(limit)
//     .sort({ [sortBy]: desc ? -1 : 1 })
//     .select(select)
//   // keys = ["name", "price"]
//   // select = {
//   //     "name": 1
//   //     "price" : 1
//   // }
// }

export const findAccountWithNum = async (
  num: string
): Promise<Document<unknown, any, AccountInterface>[]> => {
  return await Account.find({ accountNumber: `${num}`})
}

export const findAccounts = async (
): Promise<Document<unknown, any, AccountInterface>[]> => {
  return await Account.find()
}
