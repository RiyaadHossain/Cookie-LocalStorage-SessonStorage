// How to get cookie data from the Browser
const getCookie = () => {
    const allCookie = document.cookie.split("; ") // all cookies within an array
    if (allCookie) {
       const singleCookie = allCookie.map(c => c.split('=')) 
       const cookieValue = singleCookie[1]
        return singleCookie, cookieValue;
    }
}