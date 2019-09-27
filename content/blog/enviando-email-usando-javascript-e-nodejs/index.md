---
layout: post
title: "Enviando e-mail usando JavaScript e NodeJS"
date: 2018-10-11 13:00:00 -0200
description: Navegando pela internet eu descobri como enviar e-mails usando JavaScript e NodeJS de uma maneira super rápida, isso quebrou a minha crença de que mandar e-mail usando uma linguagem de programação é algo difícil.
categories: [NodeJS]
image: /assets/images/enviando-email-usando-javascript-e-nodejs/main.jpg
---

Se você caiu de paraquedas nesse post, prazer, me chamo Maurício e seja bem vindo ao meu blog! Navegando pela internet eu descobri como enviar e-mails usando JavaScript e NodeJS de uma maneira super rápida, isso quebrou a minha crença de que mandar e-mail usando uma linguagem de programação é algo difícil.

## Instalando o NodeJS

*Obs: caso você já tenha o NodeJS instalado, pule para próxima etapa*


Para instalar o NodeJS é fácil:
- Vá ao [site oficial](https://nodejs.org/en/download/) 

- Escolha a opção do seu sistema operacional

- Instale normalmente.


## Baixando o Nodemailer

Antes de baixar os pacotes do Nodemailer, você terá que:

- Criar uma pasta para o projeto

- Abrir o terminal no diretório da pasta do projeto

- Rodar o comando: *npm init -y*

- Criar o arquivo: *send.js*

Após isso, baixe o Nodemailer com NPM executando no terminal o comando:

```command
$ npm install nodemailer 
```

## Indo ao que interessa, ao código

Para começar, chame o Nodemailer:

```javascript
const nodemailer = require('nodemailer')
```


Defina o endereço de e-mail que você usará e o e-mail destinado:

```javascript
const seuemail = 'seuemail@hotmail.com'
const emaildestinado = 'emaildestinado@email.com'
```


Para configurar o envio, você precisará definir o serviço de e-mail (eu recomendo o Outlook, eu não consegui enviar com o Gmail), o seu e-mail e a senha (não se preocupe, sua senha  não será salva):

```javascript
const transporter = nodemailer.createTransport({
 service: 'outlook',
 auth: {
   user: seuemail,
   pass: 'senha'
 }
})
```


Na configuração da mensagem, você precisará do seu e-mail e do e-mail destinado que foram definidos acima, escrever o assunto e sua mensagem:

```javascript
const mailOptions = {
 from: seuemail,
 to: emaildestinado,
 subject: 'Enviando e-mail usando JavaScript e NodeJS',
 text: 'Esta mensagem está sendo enviada utilizando JavaScript com NodeJS'
}
```


Configurando a resposta para o Terminal:

```javascript
transporter.sendMail(mailOptions, (error) => {
 if (error) {
   return console.log(error)
 }
 console.log('E-mail enviado com sucesso!')
})
```


## Enviando o e-mail

Por fim, para enviar o e-mail, você só precisará executar o seguinte comando no Terminal:

```command
$ node send.js
```

## Código final:

```javascript
const nodemailer = require('nodemailer')

const seuemail = 'seuemail@hotmail.com'
const emaildestinado = 'emaildestinado@email.com'

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: seuemail,
    pass: 'senha'
  }
})
 
const mailOptions = {
  from: seuemail,
  to: emaildestinado,
  subject: 'Enviando e-mail usando JavaScript e NodeJS',
  text: 'Esta mensagem está sendo enviada utilizando JavaScript com NodeJS'
}
 
transporter.sendMail(mailOptions, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log('E-mail enviado com sucesso!')
})
```