import { $ } from '@wdio/globals'
import Page from './_page.js';

class ProfilePage extends Page {
    driver = this.setDriver()

    public get buttonKeluar() {
        return this.driver.$('~Keluar');
    }
}

export default new ProfilePage();
