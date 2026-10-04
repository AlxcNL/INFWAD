function createPage() {
    const app = document.getElementById("app")
    const nav = document.createElement("nav")
    const homeLink = document.createElement('a')

    nav.appendChild(homeLink)
    app.appendChild(nav)

}

/* Filename: script.js*/

createPage()