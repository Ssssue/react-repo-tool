// import config from './config';

let apis = {};

const files = require['context']('./apis', true, /\.ts$/);

files.keys().forEach((key: any) => {
  apis = { ...files(key).default, ...apis };
});

export default {
  ...apis
};