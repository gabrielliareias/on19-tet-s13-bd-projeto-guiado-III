const app = require("./src/app.js")
const port = 1313

app.listen(port,() => {
    console.log(`A API está rodando na porta : ${port}`)
})

