---
date: '2022-08-22'
title: 'Mais produtividade com GitHub CLI'
description: 'Utilize o GitHub dentro do seu terminal para automatizar tarefas'
tags: ['dicas', 'produtividade']
---

# Introdução

O GitHub CLI é uma ferramenta que traz o GitHub para dentro do seu terminal. Com ele é possível utilizar recursos e executar ações no GitHub diretamente do terminal, de forma rápida e fácil. Você consegue pular de repositório em repositório sem sofrer com trocas de contextos.

Além das ações básicas (issues, pull requests, repos, etc) ainda é possível criar alias e utilizar a API do GitHub direto pela CLI. Utilizando estes dois recursos você consegue criar automações específicas para a forma como você utiliza o GitHub.

# Instalação

Na documentação oficial da CLI estão listadas as opções de instalação por ambiente. Tem suporte para Mac, Linux e Windows.

Se você utiliza o Homebrew como gerenciador de pacote, é possível instalar a CLI do Github rodando o comando:

```bash
brew install gh
```

## Configuração

Para autenticar a CLI do Github, rode o comando:

```bash
gh auth login
```

Após, siga os passos para fazer o login e autorizar. O processo é simples e você será redirecionado para a web para finalizar o login.

# Minha utilização

## Criar pull request

```bash
gh pr create --web
```

Sem dúvidas é a funcionalidade que mais utilizo. Permite abrir uma pull request direto sem a necessidade de abrir o navegador, entrar no Github, procurar o repositório…

Eu gosto de utilizar a flag `--web` para escrever a descrição da PR e marcar reviewers direto do navegador.

## Pesquisar issues e PRs

```bash
gh browse [PR | Issue | File]
```

Encontre qualquer coisa dentro do seu repositório. Se você passar o ID ele vai identificar se é uma PR ou Issue e abrir no navegador. Se você escrever o path de um arquivo ele abre direto no navegador.

Dica: com a ferramenta de autocomplete [Fig.io ⚡️](http://Fig.io) a utilização desse comando fica ainda melhor.

## Acompanhamento

```bash
gh status
```

Estou testando esse comando há pouco tempo. Ele mostra um resumo das atividades (menções, review request, etc) que sua conta está envolvida.

## Criar gist a partir de um arquivo

```bash
gh gist create file.js --web
```

Outro comando que estou testando há pouco tempo. Ele não é utilizado tanto quanto os outros, mas facilita a criação do gist de um arquivo para compartilhar ou apenas salvar separadamente.

## Criar e visualizar issues

Essa é uma funcionalidade que mesmo sendo muito útil acabo não utilizando muito pelo motivo de não trabalhar tanto com issues. Se você costuma navegar por issues nos repositórios, vai ser de grande ajuda.

# Criando alias

Como comentei, a CLI permite a criação de alias que serve de atalho para a execução de um ou mais comandos. Exemplo:

```bash
gh alias set web 'repo view --web'

gh web
```

Veja mais na documentação sobre alias

## Alguns alias que eu utilizo

### Abrir repositório no navegador

```bash
gh web
```

Esse é um alias simples que criei para abrir o repositório que estou trabalhando rapidamente no navegador.

### Atualizar ambientes

Esse é um alias um pouco mais complexo mas que me ajuda muito. O objetivo dele é atualizar as branches dos ambientes de teste e desenvolvimento com a branch atual que estou trabalhando.

**Comando 1:** Utiliza a API do GitHub para retornar, no padrão esperado do próximo comando, o número e o título da PR.

```bash
gh prinfo
```

**Comando 2:** cria PRs para as branches de teste e desenvolvimento

```bash
gh prdevqa "#xxx" "feat: pull request title"
```

# Referências

- [https://cli.github.com/manual/](https://cli.github.com/manual/)
- [https://github.com/cli/cli#readme](https://github.com/cli/cli#readme)
