import axios from "axios"


describe('Find Pikachu Wikipedia', () => {
    it('should find and search pikachu wikipedia in google', async () => {
        var res = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu/')

        console.log('PIKACHU ID IS = ' + res.data.id)
        console.log('PIKACHU NAME IS = ' + res.data.name)

        browser.url('google.com');
        const elem = await multiremotebrowser.$('#APjFqb')
        await elem.getInstance('chrome').setValue(`${res.data.name} Wikipedia Indonesia`)
        await browser.pause(10000)

        const elem2 = await multiremotebrowser.$('//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[4]/center[1]/input[1]')
        await elem2.getInstance('chrome').click()
        await browser.pause(10000)

        // const myChromeBrowser = multiremotebrowser.getInstance('chrome')
        // myChromeBrowser.url('google.com');
        // (await myChromeBrowser.$('/html[1]/body[1]/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/textarea[1]')).setValue(`${res.data.name} Wikipedia Indonesia`)
        // myChromeBrowser.pause(10000)
    })
})

