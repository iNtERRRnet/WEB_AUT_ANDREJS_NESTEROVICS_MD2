import { BasePage } from "../pageObjects/basePage";

export class ConfirmationPage extends BasePage 
{
  static get url() 
  {
    return "/#summary/";
  }

  static get facility()
  {
    return cy.get("#facility");
  }

  static get readmission()
  {
    return cy.get("#hospital_readmission");
  }

  static get programme()
  {
    return cy.get("#program");
  }

  static get date()
  {
    return cy.get("#visit_date");
  }

  static get comment()
  {
    return cy.get("#comment");
  }
}