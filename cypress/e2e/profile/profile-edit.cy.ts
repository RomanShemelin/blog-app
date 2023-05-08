import { selectByTestId } from 'cypress/helpers/selectByTestId';

let profileId = ''

describe('Пользователь заходит на страницу пользователя', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`profile/${data.id}`);
    });
  });
  it('И профиль успешно загружается', () => {
    cy.get(selectByTestId('ProfileCard.firstname')).should(
      'have.value',
      'test'
    );
  });
  afterEach(()=>{
    cy.resetProfile(profileId)
  })
  it('И редактирует его', () => {
    const firstName = 'newname';
    const lastName = 'newlastname';
    cy.updateProfile(firstName, lastName);
    cy.get(selectByTestId('ProfileCard.firstname')).should(
      'have.value',
      firstName
    );
    cy.get(selectByTestId('ProfileCard.lastname')).should(
      'have.value',
      lastName
    );
  });
});
