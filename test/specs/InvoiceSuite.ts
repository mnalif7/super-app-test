import onboarding from '../steps/onboarding.js'
import login from '../steps/login.js'
import invoice from '../steps/invoice.js'
import profile from '../steps/profile.js'
import globalStep from '../steps/globalStep.js'

describe('Invoice Suite', () => {
    it('Success Search and Select Invoice', async () => {
        await onboarding.clickMasukSekarang()
        await login.login('maulanastg', 123456)

        await invoice.searchInvoice('T240724-670')
        await invoice.selectInvoice('Test Challenge Tiga', 'TEST SUPER', 'T240724-670', 'Cod')
        await globalStep.back()
    })

    it('Success Logout', async () => {
        await profile.logout()
    })
})

