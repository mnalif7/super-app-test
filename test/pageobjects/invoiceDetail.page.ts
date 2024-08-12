import { $ } from '@wdio/globals'
import Page from './_page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class invoiceDetailPage extends Page {
    driver = this.setDriver()

    public get buttonSiapDiterima() {
        return $('~Siap Diterima');
    }

    public get dropdownPilihStatusPenerimaan() {
        return $('~Pilih status penerimaan');
    }

    public get optionDiterimaSemua() {
        return $('~Diterima Semua');
    }

    public get optionDitolakSebagian() {
        return $('~Ditolak Sebagian');
    }

    public get optionDitolakSemua() {
        return $('~Ditolak Semua');
    }

    public get buttonKonfirmasi() {
        return $('~Konfirmasi');
    }
}

export default new invoiceDetailPage();
