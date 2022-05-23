import { Request, Response, Router } from 'express';
import { createDoor, getDoor } from '../api/door';

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

router.get('/', async (_, res: Response) => {
  const woodData = await getDoor();
  res.status(200).json(woodData);
});

export default router;
