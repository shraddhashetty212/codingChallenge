///<reference types="Cypress" />
import HomePage from "../PageObjects/HomePage"

describe('US02_Filter computers by their names', () => {

  const homePage = new HomePage()

  beforeEach(() => { 
    cy.visit(Cypress.env('url'))
  })


  it('TC01_Filtering the search result by using 2 letters', () => {

    homePage.getFilterTextBox().type('ss')
    homePage.getFilterButton().click()
    //checking in the table bodyafter searching with the letter if results are displayed.
    //so I have added the assertion to check if the length of the computers displayed are more than 0
    homePage.getTableRowContent().should('have.length.above', 0)
    //performing assertion to check if the company name after searching contains the letters entered by the Inventory Manager.
    //If it contains the letters then it just prints the company name in the cypress log.
    homePage.getComputerNameColumnContent().each((el, index, list) => {

      const computerName = el.text().toLowerCase()
      if (computerName.includes('ss'))
      {
        cy.log(computerName)
      }
    })

  })

  it('TC02_Filtering the search result by using just 1 letter', () => {

    homePage.getFilterTextBox().type('x')
    homePage.getFilterButton().click()
    homePage.getTableRowContent().should('have.length.above', 0)
    homePage.getComputerNameColumnContent().each((el, index, list) => {

      const computerName = el.text().toLowerCase()
      if (computerName.includes('x'))
      {
        cy.log(computerName)
      }
    })
  })

  it('TC03_Trying to filter with an incorrect name', () => {

    homePage.getFilterTextBox().type('wec')
    homePage.getFilterButton().click()
    homePage.getNothingToDisplayBlock().should('contain', "Nothing to display")
    homePage.getHeading().should('contain', 'No computer')
  })

  it('TC04_Should not get the result while searching through year', () => {

    homePage.getFilterTextBox().type('1960')
    homePage.getFilterButton().click()
    homePage.getNothingToDisplayBlock().should('contain', "Nothing to display")
    homePage.getHeading().should('contain', 'No computer')
  })

  it('TC05_Should not get the result while searching through Company', () => {

    homePage.getFilterTextBox().type('Netronics')
    homePage.getFilterButton().click()
    homePage.getNothingToDisplayBlock().should('contain', "Nothing to display")
    homePage.getHeading().should('contain', 'No computer')
  })
})