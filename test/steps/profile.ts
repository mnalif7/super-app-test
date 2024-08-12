import Step from './_step.js';
import homePage from '../pageobjects/home.page.js';
import profilePage from '../pageobjects/profile.page.js';

class Profile extends Step {
    public async logout() {
        await homePage.buttonProfile.click();
        await profilePage.buttonKeluar.click();
        await profilePage.buttonKeluar.click();
    }
}

export default new Profile();
