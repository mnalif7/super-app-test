import { $ } from '@wdio/globals'
import Step from './_step.js';
import onboardingPage from '../pageobjects/onboarding.page.js';

class OnBoarding extends Step {

    public async clickMasukSekarang() {
        await onboardingPage.btnMasukSekarang.click();
    }

    public async allowLocation() {
        await onboardingPage.btnAllowLocation.click();
    }
}

export default new OnBoarding();
