import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";
import { ConfirmationPage } from "../pageObjects/confirmationPage";
import { HistoryPage } from "../pageObjects/historyPage";

describe("Homework2", () => 
{
  beforeEach(() => 
  {
    HomePage.visit();
  });

  it("Make an Appointment", () => 
  {
    HomePage.appointmnetButton.click();

    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();

    AppointmentPage.facilityCombo.select("Tokyo CURA Healthcare Center");
    AppointmentPage.check.click();
    AppointmentPage.healthProg.click();
    AppointmentPage.visitDate.click();
    AppointmentPage.visitDateDays.contains("30").click();
    AppointmentPage.commentField.type("CURA Healthcare Service");
    AppointmentPage.bookButton.click();

    ConfirmationPage.facility.should("contain.text", "Tokyo CURA Healthcare Center");
    ConfirmationPage.readmission.should("contain.text", "Yes");
    ConfirmationPage.programme.should("contain.text", "Medicaid");
    ConfirmationPage.date.should("contain.text", "30");
    ConfirmationPage.comment.should("contain.text", "CURA Healthcare Service");
  });

  it("Appointment history empty", () =>
  {
    HomePage.appointmnetButton.click();

    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    LoginPage.loginButton.click();

    AppointmentPage.burger.click();
    AppointmentPage.sidebar.should("have.class", "active");
    AppointmentPage.history.click();

    HistoryPage.historyInfo.should("contain.text", "No appointment.");
  });
})
