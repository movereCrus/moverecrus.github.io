let tg = window.Telegram.WebApp

let wrap = document.getElementById("test")
let p = document.createElement("p")
let initData = tg.initDataUnsafe
console.log(initData)
p.innerText = `${initData.user.first_name}`
wrap.appendChild(p)

axios.post('https://localhost:8000/api/auth', {
    auth_date: initData.auth_date,
    user_id: initData.user.id,
    first_name: initData.user.first_name,
    last_name: initData.user.last_name,
    username: initData.user.username,
    language_code: initData.user.language_code,
    allows_write_to_pm: initData.user.allows_write_to_pm,
    hash: initData.hash,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
