import { dScript, func, functionBuilder } from "./dscript/dscript.js";
import { global } from "./dscript/frawem.dscript.js"

let ed = false

export const codeInput = func(main => {
    return functionBuilder(main, {}, text=>text,
        (text,data) => {
            return `
<div style="white-space:pre;" contenteditable="true" placeholder="here starts your dScript code" codeinput spellcheck="false">${text}</div>`
        })
})

export const dt = func(main => {
    return `
<div class="dt" cont='${main[0]}'>${main[1] || main[0]}</div>`
})

export function main() {
    document.querySelector("[codeinput]").addEventListener("input", ()=>{
        ed=true
        
    })


    document.querySelectorAll(".dt").forEach(e=>{
        e.addEventListener("click",()=>{
            $("[codeinput]").insertAtCursor(e.getAttribute("cont") || "")
            $("[codeinput]").focus()
        })
    })

    setInterval(()=>{
        if(ed) {
            let t = document.querySelector("[codeinput]").innerText
            ed = false
            let m = `
html(
    :target("#main")
    :setnew()
    ${t}
)
            `
            console.log(m)
            eval(dScript.create(m))
           
            
            // change html from input as dscript
        }
    },3000)
}
