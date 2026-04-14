describe('Banking Login Workflow', () => { 
it('should login successfully with valid credentials', () => { 
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
}) 
}) 