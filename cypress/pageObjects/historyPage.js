import { BasePage } from "../pageObjects/basePage";

export class HistoryPage extends BasePage 
{
  static get url() 
  {
    return "/history.php#history/";
  }

  static get historyInfo()
  {
    return cy.get("#history");
  }
}