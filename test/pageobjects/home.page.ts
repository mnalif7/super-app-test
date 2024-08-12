import { $ } from '@wdio/globals'
import Page from './_page.js';

class homePage extends Page {
    driver = this.setDriver()

    public cardInvoice(customer: string, store: string, id: string, paymentMethod: string) {
        return multiremotebrowser.$(`~${customer}\n${store}\nInvoice\nMetode Pembayaran\n${id}\n${paymentMethod}`);
    }

    public get textboxSearchInvoice() {
        return multiremotebrowser.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[3]')
    }

    public get textboxSearchInvoiceAfterClicked() {
        return multiremotebrowser.$('//android.widget.ScrollView/android.widget.ImageView[2]')
    }

    public get buttonProfile() {
        return multiremotebrowser.$('~M');
    }

    public get buttonKeluar() {
        return multiremotebrowser.$('~Keluar');
    }
}

export default new homePage();
