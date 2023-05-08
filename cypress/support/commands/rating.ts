import { selectByTestId } from "cypress/helpers/selectByTestId";

export const setRate = (starsCount = 5, feedback = 'feedback') => {
    cy.get(selectByTestId(`StarRating.${starsCount}`)).click();
    cy.get(selectByTestId('RatingCard.Input')).type(feedback);
    cy.get(selectByTestId('RatingCard.Send')).click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
