function getCookie(name, cookie) {
    const regText = new RegExp(`${name}=(\\S*);`)
    let value = ''
    cookie.replace(regText, function () {
        value = arguments[1]
    })
    return value
}