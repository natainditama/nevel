module.exports = {
  '*.js': ['eslint --fix', 'git add'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'git add'],
  '*.css': ['prettier --write --parser postcss', 'git add'],
};
