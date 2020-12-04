---
layout: post
date: 2020-12-03 10:55:43
image: /assets/img/thumb.jpg
title: Utilizando Google Analytics apenas em produção no Gatsby
description: Tenha controle do seu site em produção
category: Gatsby
---
Ter o controle das atividades dos usuários dentro do seu site é muito importante para definir estratégias. Com o Google Analytics, você consegue rastrear visualizações de páginas, ver as páginas com melhor desempenho, tempo de carregamento do site, taxa de rejeição e outros dados.

# Como configurar uma conta no Google Analytics?

A primeira etapa é criar uma conta e configurar uma propriedade no Google Analytics. Se você já fez isso, pode pular para a próxima etapa.

## Passo a passo:

- Faça login no Google Analytics.
- Vá para seção "Administrador".
- Na seleção de propriedade, clique em "+ criar propriedade".
- Prossiga inserindo o nome do seu site, URL, categoria do seto, fuso horário e outro detalhes da sua aplicação.
- Clique em "Criar" para finalizar.

Agora você receberá um código de rastreamento no formato ‘UA-XXXXXXXXX-X’. Você pode encontrá-lo em: Administrador > Informações de acompanhamento > Código de acompanhamento.

# Adicionando Google Analytics ao GatsbyJS

Como tudo no Gatsby, existe um plugin de fácil instalação para o Google Analytics.

Instale o `gatsby-plugin-google-analytics` :

```shell
$ yarn add gatsby-plugin-google-analytics
```

# Configurando o Gatsby e as variáveis de ambiente

Nas variáveis de ambiente você pode adicionar o contexto do build (desenvolvimento ou produção) e armazenar o código de rastreamento do Google Analytics.

```javascript
CONTEXT=development
GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

No arquivo de configuração do Gatsby (`gatsby-config.js`) vamos começar chamando a configuração do "dotenv". Após isso, o array com as configurações dos plugins será atribuído a uma constante. Com isso conseguimos criar uma condição que injeta o plugin do Google Analytics caso esteja em ambiente de produção. Para finalizar, basta exportar os plugins normalmente.

```javascript
require('dotenv').config();

const pluginsConfig = [];

if (process.env.CONTEXT === 'production') {
	const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false
    }
  };
	
	pluginsConfig.push(analytics);
}

module.exports = {
	plugins: pluginsConfig
}
```

Você pode ver mais sobre o tema na [documentação oficial do Gatsby](https://www.gatsbyjs.com/docs/adding-analytics) e no [plugin do Google Analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/).
