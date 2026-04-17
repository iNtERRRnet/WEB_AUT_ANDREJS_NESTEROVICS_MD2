import { BasePage } from "../pageObjects/basePage";

export class AppointmentPage extends BasePage 
{
  static get url() 
  {
    return "/#appointment/";
  }

  static get facilityCombo()
  {
    return cy.get("#combo_facility");
  }

  static get check()
  {
    return cy.get("#chk_hospotal_readmission");
  }

  static get healthProg()
  {
    return cy.get("#radio_program_medicaid");
  }

  static get visitDate()
  {
    return cy.get("#txt_visit_date");
  }

  static get visitDateDays()
  {
    return cy.get('[class="datepicker-days"]');
  }

  static get commentField()
  {
    return cy.get("#txt_comment");
  }

  static get bookButton()
  {
    return cy.get("#btn-book-appointment");
  }

  static get burger()
  {
    return cy.get('[class="fa fa-bars"]');
  }

  static get sidebar()
  {
    return cy.get("#sidebar-wrapper");
  }

  static get history()
  {
    return cy.get('[href="history.php#history"]');
  }
}