import { dScript } from "./dscript/dscript.js";
import { global } from "./dscript/frawem.dscript.js";
import { codeInput, dt, main } from "./functions.js"

var code = `
html(
    view(
        :class("window wmain")
        :id("main")
        "cs"
    )
    view(
        :class("window wcodes")
        view(
            :class("chars")
            ;dt(
                String("   ")
                String("tab")
            )
            ;dt(":")
            ;dt("$s2")
            ;dt("(")
            ;dt(")")
            
        )
        ;codeInput("hi")
    )
)
`
eval(dScript.create(code))
main()