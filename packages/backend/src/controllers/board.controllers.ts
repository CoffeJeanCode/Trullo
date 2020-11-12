import { Response, Request } from 'express'
import Board from '../models/Board'

export async function createBoard(req: Request, res: Response) {
  try {
    const { name } = req.body
    const { userId } = res.locals

    const board = new Board({
      name,
      users: [userId],
    })

    const savedBoard = await board.save()

    res.status(200).json({ message: 'board created', board: savedBoard })
  } catch (e) {
    res.status(400).json({ message: e })
  }
}

export async function getAllBoards(req: Request, res: Response) {
  try {
    const { userId } = res.locals

    const boards = await Board.find({ users: { $all: [userId] } })

    res.status(200).json({ message: 'all boards', boards })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export async function getOneBoard(req: Request, res: Response) {
  try {
    const { id } = req.params
    res.status(200).json({ message: 'board created' })
  } catch (e) {
    res.status(400).json({ message: e })
  }
}

export async function deleteBoard(req: Request, res: Response) {
  try {
    const { id } = req.params

    await Board.findByIdAndDelete(id)

    res.status(200).json({ message: 'board deleted' })
  } catch (e) {
    res.status(400).json({ message: e })
  }
}
export async function updateBoard(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { name, users } = req.body
    await Board.findByIdAndUpdate(id, { name, users })
    res.status(200).json({ message: 'board update' })
  } catch (e) {
    console.log(e)
  }
}
