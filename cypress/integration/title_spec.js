describe('product title', function() {
  it('validates product title', function() {
    cy.visit('/')
    cy.get('div[data-test]').should(($div) => {
      expect($div).to.contain('Ninja™ Professional Blender')
    })
  })
})
