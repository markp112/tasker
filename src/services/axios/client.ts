import axios, { AxiosRequestConfig, Method } from 'axios';

const LOCAL_HOST = '//localhost:4200/';
const API = 'api/v1.0/';

const backEndClient = axios.create({
  baseURL: LOCAL_HOST,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

type RequestType = 'get' | 'post' | 'delete';
type Response = {
  status: number,
  data: Record<string, unknown>,
  err?: {
    msg: string,
    systemErr: string,
  },
};

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
  });
}

async function getBase64(url: string) {
  return backEndClient.get(url, { responseType: 'arraybuffer' })
  .then(response => Buffer.from(response.data, 'binary').toString('base64'));
}

async function performPost<T>(path: string, payload: T, config: AxiosRequestConfig = {}): Promise<Record<string, unknown>> {
  const route = getRoute(path);
  const response: Response = await backEndClient.post(route, payload, config);
  console.log('%c⧭', 'color: #33cc99', response);
  return new Promise((resolve, reject) => {
    switch(response.status) {
      case 200:
        resolve(response.data);
        break;
      case 201: 
        resolve(response.data);
        break;
      default: 
        console.log(response, ' - resolved with')
        reject('error')
    }
  })
}

function axiosClient() {

  async function get<T>(path: string): Promise<T> {
    return await performGet<T>(path);
  }

  async function post<T>(path: string, payload: T, config: AxiosRequestConfig = {}): Promise<Record<string, unknown>> {
    return await performPost<T>(path, payload, config);
  }

  async function get64(path: string): Promise<string> {
    return await getBase64(path);
  }

  return { get, post, get64 };
} 

export {
  axiosClient,
};
