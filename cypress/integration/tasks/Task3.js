///<reference types="Cypress" />
import HomePage from "../PageObjects/HomePage"
import ComputerPage from "../PageObjects/ComputerPage"

describe('US03_Edit the details of the specific computer in the system', () => {

  const homePage = new HomePage()
  const computerPage = new ComputerPage()

  beforeEach(() => { 
    cy.visit(Cypress.env('url'))
  })

  it('TC01_Search and edit the details successfully by selecting a name from the list', () => {

    homePage.goToNextPageButton().click({force: true})
    cy.get('.computers tbody tr:nth-child(4) td a').click()
    computerPage.getEditComputerHeading().should('contain', 'Edit computer')
    computerPage.getComputerNameTextBox().clear().type('EditedName')
    computerPage.getIntroducedDateBox().clear().type('2018-09-17')
    computerPage.getDiscontinuedDateBox().clear().type('2023-12-24')
    computerPage.getCompanyNameDropDown().select(2)
    computerPage.getSaveComputerButton().click()
    homePage.getAlertMessage().should('contain', 'has been updated')


  })

  it('TC02_Search and edit the details successfully by searching a name from the searchbox', () => {

    homePage.getFilterTextBox().type('bark')
    homePage.getFilterButton().click()
    cy.get('.computers tbody td a').click()
    computerPage.getEditComputerHeading().should('contain', 'Edit computer')
    computerPage.getComputerNameTextBox().clear().type('BOUNCE')
    computerPage.getIntroducedDateBox().clear().type('1986-12-30')
    computerPage.getDiscontinuedDateBox().clear().type('2024-12-24')
    computerPage.getCompanyNameDropDown().select(8)
    computerPage.getSaveComputerButton().click()
    homePage.getAlertMessage().should('contain', 'has been updated')


  })
})