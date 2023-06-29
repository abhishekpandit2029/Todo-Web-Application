import { Request, Response } from 'express';
import { comments } from '../../../data/comments';

export default function handler(req: Request, res: Response): void {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const comment: string = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
    console.log(comment);
  }
}