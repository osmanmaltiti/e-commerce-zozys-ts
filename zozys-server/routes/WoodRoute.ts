import { Request, Response, Router } from 'express';
import { createWood, getWood } from '../api/wood';

const router = Router();

router.post('/create_wood', async (req: Request, res: Response) => {
  const woodData = req.body;
  const createdWood = await createWood(woodData);

  if (createdWood) {
    const { name } = createdWood;

    name === 'Success'
      ? res.status(200).json(createdWood)
      : res.status(401).json(createdWood);
  }
});

router.get('/', async (_, res: Response) => {
  const woodData = await getWood();
  res.status(200).json(woodData);
});

export default router;
