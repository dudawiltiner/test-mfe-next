module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', ['upper-case']],
    'scope-min-length': [2, 'always', 7],
  },
};
