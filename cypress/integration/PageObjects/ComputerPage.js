class ComputerPage
{
  getComputerNameTextBox()
  {
    return cy.get("#name")
  }
  getIntroducedDateBox()
  {
    return cy.get("#introduced")
  }
  getDiscontinuedDateBox()
  {
    return cy.get("#discontinued")
  }
  getCompanyNameDropDown()
  {
    return cy.get('select')
  }
  getCreateComputerButton()
  {
    return cy.get(".btn.primary")
  }
  getErrorMessageForBlankComputerName()
  {
    return cy.get("div[class='clearfix error'] span[class='help-inline']")
  }
  getErrorMessageForIncorrectDate()
  {
    return cy.get(".clearfix.error span:nth-child(2)")
  }
  getEditComputerHeading()
  {
    return cy.get('h1')
  }
  getSaveComputerButton()
  {
    return cy.contains('Save this computer')
  }
}

export default ComputerPage;