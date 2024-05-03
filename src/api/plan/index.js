import { walletApi } from '..';

export async function onrampFn(body) {
  try {
    const response = await walletApi.post('/toronet/on-ramp', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function confirmPaymentFn(body) {
  try {
    const response = await walletApi.post(
      '/toronet/first-confirm-payment',
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

