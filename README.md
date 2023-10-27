## Instalando as dependencias (fazer por projeto)

Em cada projeto tem um README.md explicando como iniciar cada um deles.

## Dicionário das aplicações explicadas nos Resultados

- container: Template da POC
- CONTAINER-PAGES: Template POC com Pages Router
- mef-setter-pages: Next13 Pages Router com MUI
- poc-mfe-modal: /core - React 18 MFE e /host - React18 Host

### Resultado dos Estudos - Desafio Microfrontend:

Premissa adotadas durante os testes:
Sempre manter as tecnologias usadas tanto em MFE quanto no HOST atualizadas para última versão.
Priorizar fazer funcionar com a principal abordagem usada no mercado: Module Federation
Trabalhar com a biblioteca de estilo usada por Design e no Template do Projeto Ultra: MUI.

Possibilidades avaliadas:

NÃO PASSOU NO TESTE & NÃO É VIÁVEL - MFE(Template Frontend() com Next13 do Projeto Ultra) + Host(Template Frontend com Next13 do Projeto Ultra) + uso do Module Federation: Hoje o Module Federation não tem suporte para App Router. Ao implementar o ModuleFederationPlugin no Webpack, a renderização das páginas não funcionavam. Foi entendido que de fato pelos relatos na comunidade o Module Federation ainda não fornece suporte para App Router, link da conversa no github: https://github.com/module-federation/universe/issues/1183.

NÃO PASSOU NO TESTE & NÃO É VIAVÉL - MFE(Next13 com Pages Router + MUI) + HOST(template Frontend com Next13 do Projeto Ultra) + uso do Module Federation: Como mencionado o Module Federation deve ser usado do dois lados para implementar o microfrontend, pois sem ele corre o risco de gerar problemas em tentar resolver isso na mão através de scripts e tem uma falta de garantia em evitar o carregamento de múltiplas instâncias de uma mesmo biblioteca, usando o React principalmente deve-se tomar cuidado com isso. Tendo isso em vista, não tem como implementar o Module Federation no HOST em questão, pois não temos ainda suporte para App Router.

PASSOU NO TESTE & NÃO É VIÁVEL - MFE(Next13 com Pages Router + MUI) + HOST(Template POC com Pages Router) + uso do Module Federation. Funcionou porém ambos não estariam implementando o App Router, o novo recurso do Next13 que vem trazendo vantagens de SEO, renderização estática e criação de páginas, leia mais sobre outras vantagens aqui: https://www.freecodecamp.org/news/routing-in-nextjs/. Fora que ainda falta algumas correções no Module Federation para o Next 13. Não gostaria de apostar nessa possibilidade.

NÃO PASSOU NO TESTE & NÃO É VIÁVEL - MFE(React18 + MUI) + HOST(Template Frontend com Next13 do Projeto Ultra)) + uso do Module Federation. Mesmo tentando fazer com script a parte sem usar o Module Federation do lado do Host, ainda não foi possível integrar essa forma, pois criando a lógica manual de diferente formas não conseguimos evitar a criação de múltiplas instâncias. Houve uma alternativa viável que foi carregar via script globalmente o MUI para garantir que apenas a instância carregada seria usado após rodar o script da CDN. Mas a utilização de bibliotecas via CDN não é uma boa prática. Infelizmente a utilização de bibliotecas iguais em ambos os frontends com o Module Federation é importante que ele seja implementado dos dois lados.

PASSOU NO TESTE & NÃO É VIÁVEL - MFE(React18 + MUI) + HOST(React18 + MUI)) + uso do Module Federation. Vamos trabalhar com o framework Next na sua versão mais atual no Portal. Não é viável o uso dessa opção.

NÃO FOI TESTADO & NÃO É VIÁVEL - Integração via iFrame, Bibliotecas(perde o carregamento dinâmico), Scripts indicadas. Existem outras abordagens além do Module Federation. iFrame, Bibliotecas(perde o carregamento dinâmico), Scripts... O iFrame para mim não acredito que seja uma opção pela sua falta de segurança. As Bibliotecas geradas como módulos para serem importadas na aplicação perde um pouco do que o microfrontend gera de vantagens hoje no mercado, que é o carregamento dinâmico e fica um peso a mais para o carregamento. Scripts tbm devem ser lidados de forma cuidadosa em termos de segurança e ele funciona sendo executando na aplicação e a manipulação para comunicação Host e Microfrontend não será das melhores e pode levar a delays de interação do usuário. Essas abordagens não são tão eficientes quanto o Module Federation e podem gerar conflitos de versões tbm quando implementado.

OBSERVAÇÃO: Ainda resta a questão que o Host do antigo portal se tiver React ou se tiver alguma biblioteca implementada tbm no MFE, deve estar atualizado na mesma versão das bibliotecas utilizadas no MFE. A abordagem do Module Federation e outras mais eficiente com carregamento dinâmico que trazem a real vantagem de se implementar microfrontends para empresas, possuem como requisitos a compatibilidade de versões. Poderia ter que haver uma possível refatoração no Portal para fazer funcionar o microfrontend na aplicação.
