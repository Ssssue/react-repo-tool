import axios from 'axios';

// const CancelToken = axios.CancelToken;
// let cancel;

axios.defaults.baseURL = 'http://git.southsmart.com';

interface Params {
  page: any;
  size: any;
}

const config = {
  doGetPromise(url: string, params?: Params, options = {}): Promise<void> {
    const timeout = 30000;
    const { ...arg } = options;
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          timeout,
          ...arg,
          params: {
            ...params,
            t: new Date().getTime()
          },
          // cancelToken: new CancelToken(function executor(){
          //   cancel = c;
          // })
        })
        .then(response => {
          resolve(response?.data);
        })
        .catch(response => {
          reject(response);
        });
    });
  }
};

export default config;

export { Params };