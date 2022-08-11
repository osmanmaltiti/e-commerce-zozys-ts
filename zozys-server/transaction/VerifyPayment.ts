import { Request, Response } from 'express';
import request from 'request';

export const verifyPayment = (req: Request, res: Response) => {
  const secret_key = 'Bearer sk_test_c0fd05e3e9e1d2dd47af65cf4c12557b955298f1';
  const ref = '';

  const options = {
    url: `https://api.paystack.co/transaction/verify/${encodeURIComponent(
      ref
    )}`,
    headers: {
      authorization: secret_key,
      'content-type': 'application/json',
      'cache-control': 'no-cache',
    },
  };

  request.post(options, (err, body: any) => {
    if (err) {
      res.redirect('/error');
    } else {
      const response = JSON.parse(body);

      //save in database
    }
  });
};
