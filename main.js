const quote = document.querySelector("#quote")
const copy_btn = document.querySelector(".copy-btn")
const new_quote = document.querySelector(".new-quote")
const credits_name = document.querySelector("#credits-name")


quote_gen()

function quote_gen(){

    
    fetch("https://api.quotable.io/random")
    .then (Response => Response.json())
    .then (data => {
        quote.textContent = data.content;
        credits_name.textContent = data.author;
        // console.log(data.author);
    })
    
}


new_quote.addEventListener("click", ()=>{
    quote_gen()
})

copy_btn.addEventListener("click", ()=>{

    quote.select()
})