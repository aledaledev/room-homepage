const heroBanner = document.getElementById('banner-hero')
const getInnerWidth = (url,urlMobile) => {
    const image= window.innerWidth<480?`url(${urlMobile})`:`url(${url})`
    heroBanner.style.backgroundImage=image
}
export default getInnerWidth 