import { walletApi } from '..';

export async function createWalletFn(body) {
  try {
    const response = await walletApi.post('/toronet/createwallet', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getWalletFn(body) {
  try {
    const response = await walletApi.post('/toronet/getwallet', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getWalletBalanceFn(body) {
  try {
    const response = await walletApi.post('/toronet/ngn-balance', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function transferFundsFn(body) {
  try {
    const response = await walletApi.post('/toronet/sendngn', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function verifyBvnFn(body) {
  try {
    const response = await walletApi.post(
      `/auth/kyc-verification/bvn/${body.userId}`,
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function verifyNinFn(body) {
  try {
    const response = await walletApi.post(
      `/auth/kyc-verification/nin/${body.userId}`,
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
