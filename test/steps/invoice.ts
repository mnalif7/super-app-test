import Step from './_step.js';
import invoiceDetailPage from '../pageobjects/invoiceDetail.page.js';
import homePage from '../pageobjects/home.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Invoice extends Step {
    public async selectInvoice(customer: string, store: string, id: string, paymentMethod: string) {
        await homePage.cardInvoice(customer, store, id, paymentMethod).getInstance('androidEmulator').click();
    }

    public async clickSearchInvoice() {
        await homePage.textboxSearchInvoice.getInstance('androidEmulator').click();
    }

    public async setSearchInvoice(keyword: string | number) {
        await homePage.textboxSearchInvoiceAfterClicked.getInstance('androidEmulator').setValue(keyword);
    }

    public async tapSiapDiterima() {
        await invoiceDetailPage.buttonSiapDiterima.getInstance('androidEmulator').click();
    }

    public async searchInvoice(keyword: string | number) {
        await this.clickSearchInvoice();
        await this.setSearchInvoice(keyword);
    }

    public async selectStatusPenerimaan(status: string) {
        await invoiceDetailPage.dropdownPilihStatusPenerimaan.getInstance('androidEmulator').click()
        switch (status) {
            case 'Diterima Semua': {
                await invoiceDetailPage.optionDiterimaSemua.getInstance('androidEmulator').click();
                break
            }

            case 'Ditolak Sebagian': {
                await invoiceDetailPage.optionDitolakSebagian.getInstance('androidEmulator').click();
                break;
            }

            case 'Ditolak Semua': {
                await invoiceDetailPage.optionDitolakSemua.getInstance('androidEmulator').click();
                break;
            }
        }
        await invoiceDetailPage.buttonKonfirmasi.getInstance('androidEmulator').click()
    }
}

export default new Invoice();
