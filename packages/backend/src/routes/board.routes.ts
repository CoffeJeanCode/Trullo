import { Router } from 'express'
import {
  createBoard,
  getAllBoards,
  getOneBoard,
  deleteBoard,
  updateBoard,
} from '../controllers/board.controllers'
import { validateToken } from '../libs/validateToken'

const router = Router()

router.post('/create', validateToken, createBoard)
router.get('/getall', validateToken, getAllBoards)
router.get('/get/:id', validateToken, getOneBoard)
router.delete('/delete/:id', validateToken, deleteBoard)
router.put('/update/:id', validateToken, updateBoard)

export default router
