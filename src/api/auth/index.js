import { authApi } from "..";

export async function signupUserFn(email, firstName, lastName, password, confirmPassword, number) {
  try {
    const body = {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      number
    };

    const response = await authApi.post('/auth/signup', body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

export async function signinUserFn(login, password) {
  try {
    const body = {
      login,
      password
    };

    const response = await authApi.post('/auth/signin', body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

export async function resetPasswordFn (email, password) {
  try {
    const body = {
      email,
      password
    };

    const response = await authApi.post('/auth/reset-password', body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

export async function recoverPasswordFn (email) {
  try {
    const response = await authApi.get(`/auth/recover-password/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

export async function verifyEmailFn (email, otp) {
  try {
    const body = { otp };
    const response = await authApi.post(`/auth/email/verify/${email}`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

export async function resendVerificationEmailFn (email, password) {
  try {
    const body = { email, password };
    const response = await authApi.get(`/auth/email/resend/${email}`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

export async function confirmPasswordTokenFn (email, token) {
  try {
    const body = { email, token };
    const response = await authApi.get('/auth/confirm-token', body);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}

export async function getRefferalsFn (code) {
  try {
    const response = await authApi.get(`/auth/refferals/${code}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
}