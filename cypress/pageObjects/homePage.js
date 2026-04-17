import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage 
{
  static get url() 
  {
    return "/#/";
  }

  static get appointmnetButton()
  {
    return cy.get("#btn-make-appointment");
  }
}