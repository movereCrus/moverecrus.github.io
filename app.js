let tg = window.Telegram.WebApp

let wrap = document.getElementById("test")
let p = document.createElement("p")
p.innerText = `${tg.initDataUnsafe.user}`
wrap.appendChild(p)
