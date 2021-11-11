describe("user-onboarding", () => {
    beforeEach ( () => {
        cy.visit("http://192.168.1.4:3000")
    })

    const firstNameInput = () => cy.get("input[name='first_name']")
    const lastNameInput = () => cy.get("input[name='last_name']")
    const emailInput = () => cy.get("input[name='email']")
    const passwordInput = () => cy.get("input[name='password']")
    const checkboxInput = () => cy.get("input[type='checkbox']")
    const submitButton = () => cy.get("button[id='submitButton']")
    const foobarInput = () => cy.get("input[name='foobar']")

    it("sanity check to make sure tests work", () => {
        expect(1 + 2 ).to.equal(3);
        expect( {} ).not.to.equal( {} );
    })
    
    it("the proper elements are showing", ()=>{
        firstNameInput().should("exist");
        lastNameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        checkboxInput().should("exist");
        submitButton().should("exist");
        foobarInput().should("not.exist");
    })

    it("submit button starts out disabled", () => {
        submitButton().should("be.disabled");
    })



    const first_name = "Anthony"
    const last_name = "LeRois"
    const email = "anthonylerois@example.com"
    const password = "123456abc"

    it("can type in the inputs", () => {

        firstNameInput().type(first_name).should("have.value",first_name)
        lastNameInput().type(last_name).should("have.value",last_name)
        emailInput().type(email).should("have.value",email)
        passwordInput().type(password).should("have.value",password)

    })

    it("submit button enables when both inputs and filled out", () => {
        checkboxInput().check().should("be.checked")
        submitButton().should("not.be.disabled")
        submitButton().click()
    })
})