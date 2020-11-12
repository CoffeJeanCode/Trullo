import { Request, Response } from 'express'
import User from '../models/User'
import * as jwt from 'jsonwebtoken'
import { encryptPassword, validatePassword } from '../libs/passwordHelpers'

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body

    const user = new User({
      username,
      email,
      password: await encryptPassword(password),
    })

    const savedUser = await user.save()

    const token: string = jwt.sign(
      { _id: savedUser._id },
      process.env.JWT_SECRET ||
        'helloiamthesecretkeyforjwtanyoutshouldputinafile',
      { expiresIn: 172800 }
    )

    res.status(200).json({ message: 'user created and saved', data: token })
  } catch (e) {
    res.status(400).json({ message: e })
  }
}

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) return res.status(400).json({ message: 'User not found' })

    const correctPassword: boolean = await validatePassword(
      password,
      user.password
    )

    if (!correctPassword)
      return res.send(400).json({ message: 'password is wrong' })

    const token: string = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET ||
        'helloiamthesecretkeyforjwtanyoutshouldputinafile',
      { expiresIn: 172800 }
    )

    res.header('auth-token', token).json(user)
  } catch (e) {
    res.status(400).json({ message: e })
  }
}

export const profile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(res.locals.userId)

    if (!user) return res.status(404).json({ message: 'user not found' })

    res.status(200).json(user)
  } catch (e) {
    res.status(400).json({ message: e })
  }
}
