import Page from './_page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnBoardingPage extends Page {
    /**
     * define selectors using getter methods
     */
    driverAndroid = this.setDriver()

    public get btnMasukSekarang() {
        return $('~Masuk Sekarang');
    }

    public get btnAllowLocation() {
        return $('[resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
    }


    public get textboxUsername() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.EditText[1]');
    }

    public get textboxPassword() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.EditText[2]');
    }

    public get buttonLogin() {
        return $('~Login')
    }
}

export default new OnBoardingPage();
