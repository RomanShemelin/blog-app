import { selectByTestId } from "cypress/helpers/selectByTestId";

export const updateProfile = (firstname: string, lastname: string) => {
  cy.get(selectByTestId('EditableProfileCardHeader.EditButton')).click();
  cy.get(selectByTestId('ProfileCard.firstname')).clear().type(firstname);
  cy.get(selectByTestId('ProfileCard.lastname')).clear().type(lastname);
  cy.get(selectByTestId('EditableProfileCardHeader.SaveButton')).click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'qwerty' },
    body: {
      id: '4',
      firstname: 'test',
      lastname: 'user',
      currency: 'RUB',
      country: 'Belarus',
      city: 'Minsk',
      username: 'testuser',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLOUZx2HrmJ-D0IrUpq-46n5NcX5umxo2Og&usqp=CAU',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
