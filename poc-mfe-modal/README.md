# Como rodar essa poc

Trate cada um como um projeto distinto, onde host será o importador e o core será o exportador de MFEs

no core temos Material UI e i18n como exportação implícita na module-federation

## instalando as dependencias (fazer por projeto)

> yarn

## rodando host

> yarn dev

PS: iniciando pelo host, você verá o fallback de erro ao importar o MFE

## rodando core (em um segundo terminal)

> yarn dev

Agora você deverá ver o projeto com as suas funcionalidades do MFE funcionando de forma atomica
