import axios from 'axios';
import { authApi, walletApi } from '..';

export async function createWalletFn(body) {
  try {
    const response = await walletApi.post('/createwallet', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getWalletFn(body) {
  try {
    const response = await walletApi.post('/getwallet', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getWalletBalanceFn(body) {
  try {
    const response = await walletApi.post('/ngn-balance', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function transferFundsFn(body) {
  try {
    const response = await walletApi.post('/sendngn', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function verifyBvnFn(body) {
  try {
    const response = await authApi.post(
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
    const response = await authApi.post(
      `/auth/kyc-verification/nin/${body.userId}`,
      body,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function getBanksFn() {
  try {
    const response = await axios.post(
      `https://www.toronet.org/api/payment/toro/`,
      {
        op: 'getbanklist_ngn',
        params: [],
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function getHospitalsFn(body) {
  try {
    const response = await walletApi.get(`/fetch-hospitals/${body.planName}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function resolveBankFn(body) {
  try {
    const response = await walletApi.post(`/resolve-bank`, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function onrampFn(body) {
  try {
    const response = await walletApi.post('/on-ramp', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function offrampFn(body) {
  try {
    const response = await walletApi.post('/off-ramp', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function confirmPaymentFn(body) {
  try {
    const response = await walletApi.post('/first-confirm-payment', body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

