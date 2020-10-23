const proceso1 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Comprar Casco")  
        },1000)
    })
}

const proceso2 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Comprar guantes")  
        },2000)
    })
}

const proceso3 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Ir de paseo en bici")  
        },8000)
    })
}

const proceso4 = async () =>{
    const procesoCasco = await proceso1();
    const procesoGuantes = await proceso2();
    const procesoBici = await proceso3();
    return [procesoCasco, procesoGuantes, procesoBici]
}

proceso4()
.then(compras =>{
    console.log(compras)
})