files = [
  JASMINE,
  JASMINE_ADAPTER,
  '*.coffee'
];

exclude = [];

autoWatch = true;

browsers = [{ name: 'Chrome' }];

preprocessors = {
  '**/*.coffee': 'coffee'
};
