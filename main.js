const d = document

const singleImg = d.createElement("img")




// Invocacion del objeto
const xhr = new XMLHttpRequest()

// Validaciones

xhr.addEventListener("readystatechange",(e)=>{
    if(xhr.readyState === 4){
        if(xhr.status >=200 && xhr.status<= 300){
            let json = JSON.parse(xhr.responseText)
            console.log(json)

            json.forEach(e => {
                console.log(e.identifier)
                singleImg.setAttribute("src",`https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_${e.identifier}.png?api_key=cQwFhbWPEyulaz7g7WMBYdNdmdMdg9Jr5X9S09BI`)
            });

            
            d.querySelector(".galery").append(singleImg)
        }
    } else{
        console.log("No se completo el state")
    }
});


// Metodo de recepcion y/o envio
xhr.open("GET","https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=cQwFhbWPEyulaz7g7WMBYdNdmdMdg9Jr5X9S09BI")

// Envio
xhr.send()

