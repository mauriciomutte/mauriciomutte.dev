import puppeteer from 'puppeteer-core'
import { getOptions } from './chromeOptions'

let _page

async function getPage(isDev) {
  if (_page) {
    return _page
  }

  const options = await getOptions(isDev)
  console.log(options)

  const browser = await puppeteer.launch(options)

  _page = await browser.newPage()

  return _page
}

export async function getScreenshot(url, isDev) {
  const page = await getPage(isDev)

  await page.setViewport({ width: 1200, height: 630 })
  await page.goto(url)
  await page.evaluateHandle('document.fonts.ready')

  const file = await page.screenshot({ type: 'png' })

  return file
}
