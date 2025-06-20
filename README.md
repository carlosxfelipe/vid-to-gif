# Conversor de Vídeo para GIF

Este projeto converte um trecho de um vídeo em um arquivo GIF utilizando o FFmpeg.

## Requisitos

- [Bun](https://bun.sh/)
- [FFmpeg](https://ffmpeg.org/) instalado (o caminho padrão usado é `/opt/homebrew/bin/ffmpeg`)

## Como usar

1. Clone o repositório e instale as dependências (se houver).
2. Execute o script principal:

   ```bash
   bun run index.ts
   ```

3. Insira os dados solicitados no terminal:
   - Nome do arquivo de vídeo
   - Nome do GIF de saída
   - Tempo inicial (em segundos)
   - Duração (em segundos)
   - Largura do GIF (a altura será ajustada automaticamente)

## Exemplo de uso

```text
Nome do arquivo de vídeo: video.mp4
Nome do GIF de saída: saida.gif
Segundos iniciais (ex: 2): 5
Duração em segundos (ex: 6): 3
Largura (ex: 480): 320
```

## Licença

MIT
