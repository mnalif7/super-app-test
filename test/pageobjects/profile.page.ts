import { $ } from '@wdio/globals'
import Page from './_page.js';

class ProfilePage extends Page {
    public get buttonKeluar() {
        return $('~Keluar');
    }
}

export default new ProfilePage();
