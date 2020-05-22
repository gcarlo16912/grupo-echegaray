//script formulario de contacto
export function formContact(name, email, phone){
    let data = new FormData()
    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);

    fetch('./app/app.php', {
        method: 'post',
        body: data
    })
    .then(r => r.text())
    .then(r => {
        console.log(r)
    })
}