const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
const bcrypt = require("bcryptjs")

router.get("/registro", (req, res) => {
    res.render("usuarios/registro")
})

router.post("/registro", (req, res) => {
    let erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({
            texto: "Nome inválido"
        })
    }
    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({
            texto: "E-mail inválido"
        })
    }
    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({
            texto: "Senha inválida"
        })
    }
    if(req.body.senha.length < 4){
        erros.push({
            texto: "Senha muito curta"
        })
    }
    if(req.body.senha != req.body.senha2){
        erros.push({
            texto: "As senhas são diferentes, tente novamente!"
        })
    }
    if(erros.length > 0){
        res.render("usuarios/registro", {erros: erros})
    }else{
        //Pesquinsando um usuário que tem um email igual, caso o usuário tentar se cadastrar 
        Usuario.findOne({email: req.body.email}).then((usuario) => {
            if(usuario){
                req.flash("error_msg", "Já existe um conta com esse e-mail no nosso sistema")
                res.redirect("/usuarios/registro")
            }else{
                const novoUsuario = new Usuario({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })
                // decriptar a senha
                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                        if(erro){
                            req.flash("error_msg", "Houve um erro durante o salvamento do usuário")
                            res.redirect("/")
                        }
                        // pegando atributo senha do novoUsuario, falando a senha do novoUsuario vai ser igual hash que foi gerado
                        novoUsuario.senha = hash

                        novoUsuario.save().then(() => {
                            req.flash("success_msg", "Usuário criado com sucesso!")
                            res.redirect("/")
                        }).catch((err) => {
                            req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente!")
                            res.redirect("/usuarios/registro")
                        })
                    })
                })
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno")
            res.redirect("/")
        })
    }
})

router.get("/login", (req, res) => {
    res.render("usuarios/login")
})


module.exports = router