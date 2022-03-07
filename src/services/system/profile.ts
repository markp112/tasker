
import { FieldControl } from 'components/form-fields/types';
import { axiosClient } from 'services/axios/client';

function getProfileFields(): Promise<FieldControl[]> {
  return new Promise((resolve, reject) => {
    axiosClient().get<FieldControl[]>('system/profile/fields')
    .then((fieldControls) => {
      resolve(fieldControls as FieldControl[]);
    })
    .catch ((err) => {
      console.log('%c⧭', 'color: #00b300', err);
      reject(err)
    });

  })
}

export {
  getProfileFields,
}