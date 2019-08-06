module.exports = {
  name: 'ng-fitness',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-fitness',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
