import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html/')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add movies', async () => {
 
let movieBar = await driver.findElement(By.id("movieName"))

let movieButton = await driver.findElement(By.xpath("//div/button"))

await movieBar.sendKeys('Moana\n');
await driver.sleep(10000)
 
movieButton.click();
await driver.sleep(10000)
})