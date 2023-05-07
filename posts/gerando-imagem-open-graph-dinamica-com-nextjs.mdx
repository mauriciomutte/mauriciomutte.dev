---
date: '2022-09-28'
title: Gerando imagem Open Graph dinâmica com Next.js
description: Criando um gerador de imagem dinâmica para utilizar com Open Graph
tags: ['next.js', 'serverless']
---

Um dos objetivos da nova versão do meu blog (esse mesmo em que você está lendo) foi tornar a usabilidade mais simples. Além disso, eu queria facilitar a criação de novas publicações. Por conta desses pontos, decidi abandonar o uso de "banners” para cada publicação.

Porém, na hora de compartilhar as publicações nas redes sociais, não era exibida nenhuma imagem. Para evitar a criação manual de uma imagem dessa para cada publicação, uma abordagem melhor seria criar dinamicamente as imagens.

Foi então que descobri a possibilidade de criar um serviço simples de gerador de imagens utilizando o Next e a sua funcionalidade de API.

![Exemplo do OG Image no Twitter](/static/images/blog/gerando-imagem-open-graph-dinamica-com-nextjs-a.png)

[Veja o projeto completo no Github](https://github.com/mauriciomutte/og-generator)

## O que é uma imagem Open Graph

Como mencionei, basicamente, a imagem Open Graph é aquela imagem exibida quando você compartilha um link no Twitter, Facebook, Slack, etc.

### Como adicionar na sua página

Dentro de `<head>` é possível inserir tags `<meta>` com diferentes responsabilidades. Você pode utilizar uma dessas tags para definir exatamente qual imagem será exibida ao compartilhar o link daquela página.

```html
<head>
  <title>Hello World</title>
  <meta property="og:image" content="https://mauriciomutte.dev/Hello%20World.png" />
</head>
```

## Gerando uma imagem dinâmica

Antes de mais nada, precisamos idealizar e montar ela de alguma forma. Vou utilizar React com Next.js para criar o template e CSS puro para dar o estilo.

### Template

A página de home do Next, o `index.js`, será o local onde vou deixar o template. É importante adicionar um tamanho fixo para o template pois este será o tamanho da imagem. No meu caso, ficou `1200px` de largura e `630px` de altura.

Podemos receber os dados dinâmicos por meio das query params da URL. Estou utilizando apenas o `title` pois este será o único dado dinâmico do meu template.

Agora é só criar o template. O resultado ficou assim:

![Print de como ficou o template](/static/images/blog/gerando-imagem-open-graph-dinamica-com-nextjs-b.png)


### Instalação das bibliotecas

É necessário a instalação das bibliotecas [puppeteer-core](https://github.com/puppeteer/puppeteer) e [chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda), elas serão usadas para gerar a imagem:

```bash
yarn add chrome-aws-lambda puppeteer-core@10.1.0
```

**Obs:** estou utilizando a `v10.1.0` do Puppeteer pois a versão mais recente estava causando problemas de limite de tamanho durante o deploy pela Vercel.

### Configurações do Puppeteer

Vou adicionar os arquivos de configuração em uma nova pasta (`/lib`) para manter a organização do código. Serão apenas dois arquivos:

**`options.tsx`**: adiciona o chrome-aws-lambda como parte da configuração do Puppeteer em produção;

```tsx
import chrome from 'chrome-aws-lambda';

const chromeExecPaths = {
	win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
	linux: '/usr/bin/google-chrome',
	darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
};

const exePath = chromeExecPaths[process.platform];

interface Options {
	args: string[];
	executablePath: string;
	headless: boolean;
}

export async function getOptions(isDev: boolean): Promise<Options> {
	let options: Options;

	if (isDev) {
		options = {
			args: [],
			executablePath: exePath,
			headless: true,
		};
	} else {
		options = {
			args: chrome.args,
			executablePath: await chrome.executablePath,
			headless: chrome.headless,
		};
	}

	return options;
}
```

**`chromium.tsx`**: funções úteis do Puppeteer para entrar em uma página, tirar o print nas dimensões do template e retornar o arquivo dessa imagem.

```tsx
import puppeteer, { Page } from 'puppeteer-core';

import { getOptions } from './options';

let _page: Page | null;

async function getPage(isDev: boolean) {
 if (_page) {
  return _page;
 }

 const options = await getOptions(isDev);
 const browser = await puppeteer.launch(options);
 _page = await browser.newPage();

 return _page;
}

export async function getScreenshot(url: string, isDev: boolean) {
 const page = await getPage(isDev);

 await page.setViewport({ width: 1200, height: 630 });
 await page.goto(url);
 await page.evaluateHandle('document.fonts.ready');

 const file = await page.screenshot({ type: 'png' });

 return file as Buffer;
}

```

### Criação do serviço

Dentro de `/pages/api` vamos criar nosso serviço, ele será responsável por gerar a imagem.

```bash
import { NextApiRequest, NextApiResponse } from 'next';

import { getScreenshot } from '../../lib/chromium';

const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const query = req.query;

		const title = String(query.title);

		if (!title) {
			throw new Error('Title is required');
		}

		const url = `${process.env.NEXT_PUBLIC_APP_URL}?title=${title}`;

		if (isHtmlDebug) {
			return res.redirect(url);
		}

		const file = await getScreenshot(url, isDev);

		res.statusCode = 200;

		res.setHeader('Content-Type', `image/png`);
		res.setHeader(
			'Cache-Control',
			'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
		);

		res.end(file);
	} catch (e) {
		res.statusCode = 500;
		res.setHeader('Content-Type', 'text/html');
		res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
		console.error(e);
	}
}
```

O `title` é o nosso dado dinâmico, pegamos ele por meio do query param dessa requisição GET criada. Repassamos ele para outro query param, o da URL da aplicação onde está o template. Essa URL completa é repassada para a função que faz o print screen do template e retorna como imagem.

Outro detalhe importante é adicionar o `Cache-control` no `Header` da requisição. Isso vai economizar processamento pois as imagens de mesmo título são geradas apenas uma vez.

### Rewrite na configuração do Next

Até esse ponto, temos concluído o template e o serviço (`/api/og-image`) que retorna o template no formato de imagem. Porém, a nossa imagem precisa estar em uma URL e com extensão de imagem (`.png` ou `.jpg` ).

Para resolver isso, podemos criar um `rewrite` no arquivo `next.config.js` que transforma a URL da requisição na API em uma URL de imagem:

```tsx
/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['github.com'],
	},
	async rewrites() {
		return [
			{
				source: '/image.png',
				destination: '/api/og-image',
				has: [{ type: 'query', key: 'title' }],
			},
		];
	},
};

module.exports = nextConfig;
```

## Deploy na Vercel

Na [Vercel](https://vercel.com/) basta fazer o deploy de um novo projeto normalmente. Será hospedado tanto o template quanto o serviço da API que vai gerar a imagem.

[Veja mais sobre deploy na Vercel](https://vercel.com/docs/concepts/deployments/overview)

![Painel da Vercel para configurar variáveis de ambientes](/static/images/blog/gerando-imagem-open-graph-dinamica-com-nextjs-c.png)

**Obs:** você deve adicionar a variável de ambiente `NEXT_PUBLIC_APP_URL` com a URL da sua aplicação.

## Conclusão

Essa foi uma boa solução que encontrei para geração de imagens dinâmicas para serem utilizadas como Open Graph. O [repositório com o código](https://github.com/mauriciomutte/og-generator) está disponível no meu Github.
