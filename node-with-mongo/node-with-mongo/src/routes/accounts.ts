import { Router, Request, Response } from 'express'
import {
  createAccount,
  // findAccountByNumber,
  // findAccounts,
  findAccountWithNum,
  findAccounts,
} from '../controllers/accounts'

const router: Router = Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const account = await createAccount(req.body)
    res.send(account)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/accNum/:num', async (req: Request, res: Response) => {
  try {
    const { num } = req.params
    const account = await findAccountWithNum(num)
    account.length ? res.send(account) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/', async (req: Request, res: Response) => {
  try {
    console.log('reached')
    const accounts = await findAccounts()
    accounts.length ? res.send(accounts) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})


export default router

