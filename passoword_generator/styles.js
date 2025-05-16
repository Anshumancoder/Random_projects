const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIconEl = document.querySelector(".fa-copy")
const alertcontainerEL = document.querySelector(".alert")

btnEl.addEventListener("click", () => {
    createPassword()
    copyPassword()
    if (inputEl.value) {
        alertcontainerEL.classList.remove("active")
        setTimeout(() => {
            alertcontainerEL.classList.add("active")
        }, 2000)
    }
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ?><}{[]/.,"
    const passwordLength = 14
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        password += chars[randomIndex]
    }
    inputEl.value = password
    alertcontainerEL.innerText = password + " copied!!"
}

function copyPassword() {
    inputEl.select()
    inputEl.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputEl.value)
}
