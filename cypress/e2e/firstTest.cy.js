describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.bing.com/images/create?FORM=GENILP')
    cy.get("[data-sm='Surprise Me']").click();
    cy.get("[title='Sign in with a personal account']").click();
    cy.get("[name='loginfmt']").type("9765539236")
    cy.get("[name='passwd']").type("Kanha@2306")
    cy.get("#acceptButton").click();
    cy.get(".b_searchbox gi_sb").type("A bird with an arsenal Tshirt")
    cy.get("[name='Create']").click();
    cy.wait(10000)
  })
})