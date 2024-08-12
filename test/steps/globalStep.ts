import Step from './_step.js';
import globalObject from '../pageobjects/globalObject.js';
import { $ } from '@wdio/globals'

class GlobalStep extends Step {
    public async back() {
        await (globalObject.buttonBack).click()
    }
}

export default new GlobalStep();
