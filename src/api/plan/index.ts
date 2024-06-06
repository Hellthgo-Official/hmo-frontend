import { planApi } from '..';

export async function fetchPlans(id: string) {
  const url = !id ? 'fetch-plans' : `/fetch-plan/${id}`;
  try {
    const response = !id ? await planApi.get(url) : await planApi.post(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function fetchPlanBenefits() {
  try {
    const response = await planApi.get('/pricing');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function makeFirstPayment(body: {
  paymentFrequency: string;
  planId: string;
  userId: string;
}) {
  try {
    const response = await planApi.post('/make-first-payment', body);
    return response.data;
  } catch (error) {
    console.log(error);

    throw new Error(error.response.data.error);
  }
}

