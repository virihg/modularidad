
const router = (request, response) =>{
    if(request.url === "/pag2"){
    response.end("Pagina 2");
  } else {
    response.end("Pagina default");
  }
}

module.exports = router
