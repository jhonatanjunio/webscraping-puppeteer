# Webscraping Headless

Ferramenta desenvolvida para propósito de estudo. Utilizada para extrair dados de qualquer site através do método `webscraping`, que consiste em simular
o acesso a um site via código por um humano. Neste código, que vai um pouco além, a ideia é não permitir que o próprio site saiba que não é um humano
realizando o acesso/extraindo os dados.

## Configurando o projeto

```sh
npm install
```

## Demonstração

Como demonstração da funcionalidade deste projeto, foi desenvolvido um código que acessa uma página de testes, pesquisa por um tablet (Galaxy Note), escolhe a cor branca e muda a capacidade de armazenamento para 512MB. Com isto, é possível imaginar as inúmeras possibilidades e serventias para este projeto.  

## Como testar este projeto

Exemplo de teste citado na seção "Demonstração"

```sh
# para rodar em headless (sem ver o browser abrindo e navegando entre as páginas), basta executar o seguinte comando
npm run webscraper 
# para rodar sem o headless (vendo o browser abrindo e navegando entre as páginas), basta executar o seguinte comando
npm run webscraper noheadless
```

Exemplo de teste para determinar se o acesso é feito por um humano ou por um robô/webcrawler (usando o site [StatCounter](https://gs.statcounter.com/detect))

```sh
# para rodar em headless (sem ver o browser abrindo e navegando entre as páginas), basta executar o seguinte comando
npm run webcrawler-check
# para rodar sem o headless (vendo o browser abrindo e navegando entre as páginas), basta executar o seguinte comando
npm run webcrawler-check noheadless
```
  
### Made with 💙 by [Jhonatan Junio](https://github.com/jhonatanjunio)
