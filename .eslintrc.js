module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': ['error', process.env.REACT_APP_DEV_ENV],
  },
};
