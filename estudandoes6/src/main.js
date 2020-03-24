
const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000)
})

// minhaPromisse().then(response => {
//     console.log(response)
// })

async function executaPromisse(){
    // const response = await minhaPromisse()
    // console.log(response)
    console.log('iniciou função')
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
    console.log('finalizou função')
}

executaPromisse()
console.log('Aqui nem esperou')