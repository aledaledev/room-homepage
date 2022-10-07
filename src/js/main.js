import getData from "./getData.js"
import handleHero from "./handleHero.js"
import printView from "./printView.js"
import getInnerWidth from "./getInnerWidth.js"
const next = document.getElementById('next-hero')
const preview = document.getElementById('preview-hero')
export const data = await getData()
const {index, prevHero, nextHero} = handleHero
const {url,urlMobile} = data[index] 
window.addEventListener('resize', () => getInnerWidth(url,urlMobile))
next.addEventListener('click',nextHero)
preview.addEventListener('click',prevHero)
printView(data[index])