import Step from './_step.js';
import onboardingPage from '../pageobjects/onboarding.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Step {
    public async setUsername(username: string | number) {
        await onboardingPage.textboxUsername.setValue(username);
    }
    public async clickUsername() {
        await onboardingPage.textboxUsername.click();
    }

    public async setPassword(password: string | number) {
        await onboardingPage.textboxPassword.setValue(password);
    }

    public async clickPassword() {
        await onboardingPage.textboxPassword.click();
    }

    public async clickLogin() {
        await onboardingPage.buttonLogin.click();
    }

    public async login(username: string | number, password: string | number) {
        await this.clickUsername()
        await this.setUsername(username)
        await this.clickPassword()
        await this.setPassword(password)
        await onboardingPage.buttonLogin.click();
    }
}

export default new Login();
