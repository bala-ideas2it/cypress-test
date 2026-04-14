describe('Teller Dashboard Workflow', () => { 
it('should approve a pending transfer', () => { 

// Step 1: Visit demo banking site 
cy.visit('http://demo.testfire.net/login.jsp') 
// Step 2: Enter username 
cy.get('input[name="uid"]').type('jsmith') 
// Step 3: Enter password 
cy.get('input[name="passw"]').type('demo1234') 
// Step 4: Click login 
// cy.get('input[type="submit"]').click() 
cy.get('input[name="btnSubmit"]').click() 

// Step 5: Verify welcome message 
cy.contains('Hello John Smith').should('be.visible') 

// Step 1: Visit demo teller dashboard (mock banking site) 
// cy.visit('http://demo.testfire.net/bank/main.jsp') 
// Step 2: Navigate to transfer requests page 
cy.contains('Transfer Funds').click() 
// Step 3: Select account and enter transfer details 
cy.get('select[name="fromAccount"]').select('800002') // Savings 
cy.get('select[name="toAccount"]').select('800003')   // Checking 
cy.get('input[name="transferAmount"]').type('100') 
// Step 4: Submit transfer 
cy.get('input[name="transfer"]').click() 
// Step 5: Verify confirmation message 
cy.contains('was successfully transferred from').should('be.visible') 
// Step 6: Verify updated balance is displayed 
// cy.contains('Balance').should('exist') 
}) 
}) 
