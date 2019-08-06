import { getGreeting } from '../support/app.po';

describe('ng-fitness', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ng-fitness!');
  });
});
