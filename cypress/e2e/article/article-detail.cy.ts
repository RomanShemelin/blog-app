import { selectByTestId } from "cypress/helpers/selectByTestId";

let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('И видит содержимое статьи', () => {
        cy.get(selectByTestId('ArticleDetails.Info')).should('exist');
    });
    it('И видит список рекоммендаций', () => {
        cy.get(selectByTestId('ArticleRecommendationsList')).should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.get(selectByTestId('ArticleDetails.Info'));
        cy.get(selectByTestId('AddCommentForm')).scrollIntoView();
        cy.addComment('text');
        cy.get(selectByTestId('CommentCard.Content')).should('have.length', 1);
    });
    it('И ставит оценку', () => {
        cy.get(selectByTestId('ArticleDetails.Info'));
        cy.get(selectByTestId('RatingCard')).scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
