import CONFIG from '../config';
import {getAccessToken} from "../utils/auth";

const accessToken = getAccessToken();

const ENDPOINTS = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  ADD_STORY: `${CONFIG.BASE_URL}/stories`,
  GET_STORY: `${CONFIG.BASE_URL}/stories`,
  DETAIL_STORY: `${CONFIG.BASE_URL}/stories/:id`,
};

export async function getRegistered({ name, email, password }) {
  const data = JSON.stringify({ name, email, password });

  const fetchResponse = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getLogin({ email, password }) {
  const data = JSON.stringify({ email, password });

  const fetchResponse = await fetch(ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  })
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  }
}

export async function getAllStories() {
  const fetchResponse = await fetch(ENDPOINTS.GET_STORY, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const json = await fetchResponse.json();
  return {
    ...json,
    ok: fetchResponse.ok,
  }
}

export async function getStoriesById(id) {
  const fetchResponse = await fetch(ENDPOINTS.DETAIL_STORY, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  }
}

export async function addStory({
    description,
    image,
    latitude,
    longitude,
}) {
  const formData = new FormData();
  formData.append('image', image);
  formData.set('description', description);
  formData.set('latitude', latitude);
  formData.set('longitude', longitude);

  const fetchResponse = await fetch(ENDPOINTS.ADD_STORY, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    body: formData,
  })
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  }
}