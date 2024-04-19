class HomePage
{
  getAddNewComputerButton()
  {
    return cy.get("#add")
  }
  getAlertMessage()
  {
    return cy.get(".alert-message")
  }
  getFilterTextBox()
  {
    return cy.get('#searchbox')
  }
  getFilterButton()
  {
    return cy.get('#searchsubmit')
  }
  getTableRowContent()
  {
    return cy.get('.computers tbody tr')
  }
  getComputerNameColumnContent()
  {
    return cy.get('.computers tbody tr td:nth-child(1)')
  }
  getNothingToDisplayBlock()
  {
    return cy.get('.well em')
  }
  getHeading()
  {
    return cy.get('h1')
  }
  goToNextPageButton()
  {
    return cy.get('.next')
  }


}

export default HomePage;