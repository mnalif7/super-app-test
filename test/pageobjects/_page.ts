
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    driver: any;

    public setDriver() {
        return multiremotebrowser.getInstance('androidEmulator')
    }
}
