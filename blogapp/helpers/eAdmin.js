// Verificar se o usuário está autenticado ou ele é um Admin
module.exports = {
    // Permitir apenas usuário autenticados entrem em certas rotas no sistema
    eAdmin: (req, res, next) => {
        // O admin tem que ser igual a 1
        if(req.isAuthenticated() && req.user.eAdmin == 1){
            return next();
        }
        req.flash("error_msg", "Você precisa ser um Admin!")
        res.redirect("/usuarios/login")
    }
}