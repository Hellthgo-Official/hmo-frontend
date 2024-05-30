import { authApi } from '..';

export async function signupUserFn(body) {
  try {
    const response = await authApi.post('/auth/signup', body);
    return response.data;
  } catch (error) {
    // console.error(error);
    throw error.response.data.message
  }
}

export async function signinUserFn(body) {
  try {
    const response = await authApi.post('/auth/signin', body);
    return response.data;
  } catch (error) {
    // console.log(error)
    throw error.response.data.error
    // throw new Error(`${error.response.data.error}`);
  }
}

export async function resetPasswordFn(body) {
  try {
    const response = await authApi.post('/auth/reset-password', body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response
    // throw new Error(error.response.data.message);
  }
}

export async function recoverPasswordByMailFn(email) {
  try {
    const response = await authApi.get(`/auth/recover-password/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error.response.data.message);
    throw error.response.data.error;
  }
}

export async function verifyEmailFn(body) {
  try {
    const response = await authApi.post(`/auth/email/verify/${body.email}`, {
      otp: body.otp,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error.response.data.message);
    throw error.response;
  }
}

export async function resendVerificationEmailFn(email) {
  try {
    const response = await authApi.get(`/auth/email/resend/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error.response.data.message);
    throw error.response;
  }
}

export async function confirmPasswordTokenFn(body) {
  try {
    const response = await authApi.post('/auth/confirm-token', body);
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error.response.data.message);
    throw error.response;
  }
}

export async function getRefferalsFn(code) {
  try {
    const response = await authApi.get(`/auth/refferals/${code}`);
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error.response.data.message);
    throw error.response;
  }
}

export async function updateUserRecordFn(body) {
  try {
    const response = await authApi.post(
      `/auth/update-records/${body.userId}`,
      body,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

