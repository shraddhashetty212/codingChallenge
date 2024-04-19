///<reference types="Cypress" />
import HomePage from "../PageObjects/HomePage"
import ComputerPage from "../PageObjects/ComputerPage"

describe('US01_Adding computer to the system', () => {

  const homePage = new HomePage()
  const computerPage = new ComputerPage()

  beforeEach(() => { 
    cy.visit(Cypress.env('url'))
  })

  it('TC01_Inventory Manager should be able to add a new computer successfully by giving all the correct details', () => {

    homePage.getAddNewComputerButton().click()
    computerPage.getComputerNameTextBox().type("Test Computer")
    computerPage.getIntroducedDateBox().type("1998-03-15")
    computerPage.getDiscontinuedDateBox().type("2008-04-25")
    computerPage.getCompanyNameDropDown().select('Netronics')
    computerPage.getCreateComputerButton().click()
    homePage.getAlertMessage().should('contain', 'Done !  ')
  })

  it('TC02_Inventory Manager should get error message when trying to create computer without giving any details', () => {

    homePage.getAddNewComputerButton().click()
    computerPage.getCreateComputerButton().click()
    computerPage.getErrorMessageForBlankComputerName().should('have.text', "Failed to refine type : Predicate isEmpty() did not fail.")

  })

  it('TC03_Inventory Manager should get error message when giving incorrect information for the date fields while creating', () => {

    homePage.getAddNewComputerButton().click()
    computerPage.getComputerNameTextBox().type("NegativeTest")
    computerPage.getIntroducedDateBox().type("234")
    computerPage.getDiscontinuedDateBox().type("abc")
    computerPage.getCreateComputerButton().click()
    computerPage.getErrorMessageForIncorrectDate().should('contain', 'Failed to decode date')
    

  })

  it('TC04_Inventory Manager should be able to sort the Computer name column', () => {

    //Computer name column would by default be in ascending order
    //sorting the computer name column in descending order
    cy.get(".col-name a[href*='computers']").click()
    //performing assertion to check if its sorted in descending order by checking if the class of the Computer name column contains 'headerSortDown' in it
    cy.get('.col-name').invoke('attr', 'class').should('contain', 'headerSortDown')
    //clicking again the same link to sort in ascending order
    cy.get(".col-name a[href*='computers']").click()
    //again performing asserttion to check if its sorted in ascending order by checking if the class of the Computer name column contains 'headerSortUp' in it
    cy.get('.col-name').invoke('attr', 'class').should('contain', 'headerSortUp')
    //assertion to check the computer name is from Z when we are sorting the Company name in descending order
    cy.get('.computers tbody tr td:nth-child(1)').eq(0).should('contain', 'A')

  })

  it('TC05_Inventory Manager should be able to sort the Introduced column', () => {

    //sorting the introduced column in ascending order
    cy.get(".col-introduced a[href*='introduced']").click()
    //performing assertion to check if its sorted in ascending order by checking if the class of the Introduced column contains 'headerSortUp' in it
    cy.get('.col-introduced').invoke('attr', 'class').should('contain', 'headerSortUp')
    //clicking again the same link to sort in descending order
    cy.get(".col-introduced a[href*='introduced']").click()
    //again performing asserttion to check if its sorted in descending order by checking if the class of the Introduced column contains 'headerSortDown' in it
    cy.get('.col-introduced').invoke('attr', 'class').should('contain', 'headerSortDown')

  })

  it('TC06_Inventory Manager should be able to sort the Discontinued column', () => {

    //sorting the discontinued column in ascending order
    cy.get(".col-discontinued a[href*='discontinued']").click()
    //performing assertion to check if its sorted in ascending order by checking if the class of the Discontinued column contains 'headerSortUp' in it
    cy.get('.col-discontinued').invoke('attr', 'class').should('contain', 'headerSortUp')
    //clicking again the same link to sort in descending order
    cy.get(".col-discontinued a[href*='discontinued']").click()
    //again performing asserttion to check if its sorted in descending order by checking if the class of the Discontinued column contains 'headerSortDown' in it
    cy.get('.col-discontinued').invoke('attr', 'class').should('contain', 'headerSortDown')

  })

  it('TC07_Inventory Manager should be able to sort the Company column', () => {

    //sorting the company column in ascending order
    cy.get(".col-company a[href*='company']").click()
    //performing assertion to check if its sorted in ascending order by checking if the class of the Discontinued column contains 'headerSortUp' in it
    cy.get('.col-company').invoke('attr', 'class').should('contain', 'headerSortUp')
    //clicking again the same link to sort in descending order
    cy.get(".col-company a[href*='company']").click()
    //again performing asserttion to check if its sorted in descending order by checking if the class of the Discontinued column contains 'headerSortDown' in it
    cy.get('.col-company').invoke('attr', 'class').should('contain', 'headerSortDown')
    //assertion to check the company name is from Z when we are sorting the Company name in descending order
    cy.get('.computers tbody tr td:nth-child(4)').eq(0).should('contain', 'Z')

  })
})
