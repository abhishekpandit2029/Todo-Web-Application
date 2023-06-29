import { comments } from '../../../data/comments';
import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  const { commentId } = req.query as { commentId: string };
  if (req.method === 'GET') {
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(
      comment => comment.id === parseInt(commentId)
    );
    const index = comments.findIndex(
      comment => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  } else if (req.method === 'PUT') {
    const updatedComment = comments.find(
      comment => comment.id === parseInt(commentId)
    );
    if (updatedComment) {
      const { text }: { text: string } = req.body;
      updatedComment.text = text;
      res.status(200).json(updatedComment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  }
}