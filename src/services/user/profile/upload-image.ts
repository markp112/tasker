import { axiosClient } from 'services/axios/client';

const route = 'user/profile/avatar';

function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  return new Promise((resolve, reject) => {
    axiosClient().post<File>(route, file)
    .then(response => {
      console.log('%c%s', 'color: #997326', response);
      resolve('f');
    })

  })
}

export { uploadImage };
