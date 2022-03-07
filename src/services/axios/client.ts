import axios, { AxiosRequestConfig, Method } from 'axios';

const LOCAL_HOST = '//localhost:4200/';
const API = 'api/v1.0/';

const backEndClient = axios.create({
  baseURL: LOCAL_HOST,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
  },
});

type RequestType = 'get' | 'post' | 'delete';

function getRoute(path: string): string {
  return `${LOCAL_HOST}${API}${path}`;
}

async function performGet<T>(path: string): Promise<T> {
  const route = getRoute(path);
  const response = await backEndClient.get(route);
  return new Promise((resolve, reject) => {
    if (response.status !== 200) {
      reject(response.data.err);
    } else {
      resolve(response.data.data);
    }
  })
}

async function performPost<T>(path: string, payload: T): Promise<string> {
  const route = getRoute(path);
  const response = await backEndClient.post(route, payload);
  return new Promise((resolve, reject) => {
    if (response.status !== 200) {
      reject(response.data.err);
    } else {
      resolve(response.data.data);
    }
  })
} 


function axiosClient() {

  async function get<T>(path: string): Promise<T> {
    return await performGet<T>(path);
  }

  async function post<T>(path: string, payload: T): Promise<string> {
    return await performPost<T>(path, payload);
  }

  return { get, post, };
} 

export {
  axiosClient,
};
