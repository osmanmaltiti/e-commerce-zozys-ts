import { Request, Response, Router } from 'express';
import { createDoor, getDoor } from '../controllers/door';

const router = Router();

router.post('/create_door', async (req: Request, res: Response) => {
  const doorData = req.body;
  const createdDoor = await createDoor(doorData);

  if (createdDoor) {
    const { name } = createdDoor;

    name === 'Success'
      ? res.status(200).json(createdDoor)
      : res.status(401).json(createdDoor);
  }
});

router.get('/', async (req: Request, res: Response) => {
  const { filter } = req.query;
  const doorData = await getDoor(filter as string);
  res.status(200).json(doorData);
});

export default router;
