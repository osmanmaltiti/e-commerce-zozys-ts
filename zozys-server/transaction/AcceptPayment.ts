import { Request, Response } from 'express';
import request from 'request';

export const acceptPayment = (req: Request, res: Response) => {
  const secret_key = 'Bearer sk_test_c0fd05e3e9e1d2dd47af65cf4c12557b955298f1';
  const form = req.body;

  const options = {
    url: 'https://api.paystack.co/transaction/initialize',
    headers: {
      authorization: secret_key,
      'content-type': 'application/json',
      'cache-control': 'no-cache',
    },
    form,
  };

  request.post(options, (err, data: any) => {
    if (err) {
      res.status(401).json({ status: 'Failed', message: err.message });
    } else {
      res.json({ status: 'success', data: JSON.parse(data.body) });
    }
  });
};
