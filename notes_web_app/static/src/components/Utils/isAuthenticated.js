const isAuthenticated = () => {
    return window.sessionStorage.getItem('token') != undefined
}
export default isAuthenticated;