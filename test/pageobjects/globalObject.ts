import { $ } from '@wdio/globals'
import Page from './_page.js';

class ProfilePage extends Page {
    driver = this.setDriver()

    public get buttonBack() {
        //this should have ID, Not XPath
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
    }
}

export default new ProfilePage();
