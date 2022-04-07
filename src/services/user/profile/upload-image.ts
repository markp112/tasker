import { axiosClient } from 'services/axios/client';

const ROUTE = 'user/profile/avatar';

type avatarResponse = {
  result: string,
  filename: string,
};

function uploadImage(email: string, file: File): Promise<string> {
  const formData = new FormData();
  formData.append('avatarImage', file);
  formData.append('email', email);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  return new Promise((resolve, reject) => {
    axiosClient().post<FormData>(ROUTE, formData, config)
    .then(response => {
      console.log('%c', 'color: #997326', response, 'response');
      resolve('f');
    })
    .catch((err) => {
      console.log('%c⧭', 'color: #ffcc00', err);
    })
  })
}

export { uploadImage };
