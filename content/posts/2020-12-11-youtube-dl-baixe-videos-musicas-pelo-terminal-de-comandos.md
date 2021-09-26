---
layout: post
date: 2020-12-10 10:47:39
image: /assets/img/youtube-dl-baixe-videos-do-youtube.jpg
title: 'Youtube-DL: baixe vídeos/músicas pelo terminal de comandos'
description: Uma ferramenta open-source para baixar vídeos/músicas
category: Dicas
---

# Introdução

O youtube-dl é um programa de linha de comando capaz de realizar download de qualquer vídeo no Youtube. Seu código está hospedado no [Github](https://github.com/ytdl-org/youtube-dl) e com domínio público, isso significa que você pode modifica-lo e usa-lo livremente.

# Youtube-DL removido do Github?

Em outubro de 2020, o projeto foi desativado no Github após receber uma notificação da Recording Industry Association of America, Inc. (RIAA) alegando que o mesmo infringia a lei [DMCA](https://pt.wikipedia.org/wiki/Digital_Millennium_Copyright_Act). Esta ação deixou a comunidade agitada e o caso ganhou visibilidade.

Quase um mês depois, no dia 16 de novembro, o GitHub anunciou que apurou as alegações da RIAA e foi concluído que o software não viola a lei de Direitos Autorais do Milênio Digital (DMCA) e que os repositórios do Youtube-DL voltariam ao ar.

# Instalação

Ter o Python instalado na sua máquina é requisito para o programa funcionar.

Para instalar em sistemas UNIX (Linux e macOS), rode:

```bash
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
```

Se você usa outro sistema ou não funcionou a instalação, você pode ter mais detalhes na [documentação oficial](https://github.com/ytdl-org/youtube-dl#installation).

# Fazendo download de vídeos

Para realizar o download, basta rodar o comando em conjunto ao link do vídeo:

```bash
youtube-dl https://www.youtube.com/watch\?v\=XqZsoesa55w
```

Para mudar o formato do vídeo, use a opção `-f FORMAT`:

```bash
youtube-dl -f mp4 https://www.youtube.com/watch\?v\=XqZsoesa55w
```

# Fazendo download em formato de música

Para realizar o download do arquivo em mp3, vamos precisar de duas opções:

- `-x`: Converte o vídeo em áudio.
- `--audio-format`: Seleciona o formato do arquivo: Os formatos suportados são: “best”, “aac”, “vorbis”, “mp3”, “m4a”, “opus”, ou “wav”; O formato “best” é o padrão.

Então, podemos fazer o download com o seguinte comando:

```bash
youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=XqZsoesa55w
```

Se você quiser incluir uma imagem de capa, adicione a opção `--embed-thumbnail`:

```bash
youtube-dl -x --embed-thumbnail --audio-format mp3 https://www.youtube.com/watch?v=XqZsoesa55w
```

**Obs:** você também pode baixar uma playlist inteira com o youtube-dl, não apenas um vídeo.

# Conclusão

O youtube-dl é uma ferramenta bem simples, mas ainda assim tem um poder absurdo. Facilita muito quando surge a necessidade de baixar algum vídeo ou música.
