
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Step {
    public setDriver() {
        return multiremotebrowser.getInstance('androidEmulator')
    }
}
