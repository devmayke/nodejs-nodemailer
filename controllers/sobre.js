module.exports = {
    get:(req, res)=>{
        // res.render('about')
        lista = {
            nome:"mayke",
            idade:31           
        }
        res.json({lista})
    }  
}