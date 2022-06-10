Para criar um volume
```
$ docker volume create meuvolume
```
Inspecionar informações do volume
```
$ docker volume inspect meuvolume
```
# Crio um container e passo o volume "meuvolume" para dentro da pasta app
```
$ docker run --name nginx -d --mount type=volume,source=meuvolume,target=/app nginx
ou
$ docker run --name nginx3 -d -v meuvolume:/app nginx 
```
Posso compartilhar o volume entre os containers indenpendente do container.

Limpa todos os volumes
```
$ docker volume prune
```

## Dockerfile

WORKDIR cria uma pasta dentro do container e me deixa lá dentro
COPY copia um arquivo/pasta do pc para o container
Sempre quando for usar uma imagem docker, vc usa o root como padrão

## ENTRYPOINT vs CMD
 
### CMD:
Pode ser substituido pelos comandos passados por parametros no terminal

### ENTRYPOINT:

O entrypoint é um comando fixo que sempre roda, diferente do CMD que funciona mais como um parametro para o entrypoint

### Networks

* bridge: Ponte é a network padrão. Conversa entre containers
* host: mescla a network do docker com a network do host do docker. Sem fazer exposição de porta para acessar o container, ele é acesso direto.
* overlay: onde containers se comunicam entre si.
* maclan: da um mac address pro container.
* none: container roda de forma isolada.

docker network

Toda vez que mudar o nome do arquivo do dockerfile para dockerfile.prod ou qualquer outro nome, deve passar a flag -f nomeDoArquivo quando for buildar a imagem.