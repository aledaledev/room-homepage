import getInnerWidth from "./getInnerWidth.js"
const heroTitle = document.getElementById('title-hero')
const heroDescription = document.getElementById('description-hero')
const printView = ({url,urlMobile,title,description}) => {
    getInnerWidth(url,urlMobile)
    heroTitle.innerText=title
    heroDescription.innerText=description
}
export default printView