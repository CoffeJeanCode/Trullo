import { Response, Request } from "express";
import Board from "../models/Board";

export async function createBoard(req: Request, res: Response) {
  try {
    const { name, userId } = req.body;

    const board = new Board({
      name,
      users: [userId],
    });
    await board.save();
    res.status(200).json({ message: "board created" });
  } catch (e) {
    console.log(e);
  }
}

export async function getAllBoards(req: Request, res: Response) {
  try {
    const { userId } = req.params;

    const boards = Board.find({users: [userId]})

    res.status(200).json({ message: "board created" });

  } catch (e) {
    console.log(e);
  }
}
export async function getOneBoard(req: Request, res: Response) {
  try {
    const { id } = req.params;
    res.status(200).json({ message: "board created" });
  } catch (e) {
    console.log(e);
  }
}
