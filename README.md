
# MK Sistemas

<div align="justify">

MK Sistemas é uma [loja de produtos eletrônicos fictícia](https://mks-sistemas-one.vercel.app/). Nesta aplicação, o cliente pode visualizar a lista de produtos disponíveis, adicionar ao carrinho, aumentar ou diminuir a quantidade de produtos a serem comprados, removê-los e vizualizar o valor total de sua compra.


</div>
<br>

## Funcionalidades
<br>

<details open>
<summary>Adicionar ao carrinho</summary>
<br>

Ao clicar no botão **comprar**, o item é adicionado ao carrinho, sendo possível ver a quantidade de items ser alterada no botão do carrinho. 

<br>
</details>

<details open>
<summary>Visualização do carrinho</summary>
<br>

Ao clicar no **botão do carrinho**, um *drawer* é aberto, mostrando cards com o produto adicionado.

<br>
</details>

<details open>
<summary>Aumentar ou diminuir quantidade de items na compra</summary>
<br>

Em cada card, é possível aumentar ou diminuir a quantidade de produtos, clicando nos botões de **mais** e **menos**. Ao chegar na quantidade zero, o item é automaticamente removido. 

<br>
</details>

<details open>
<summary>Excluir o produto adicionado</summary>
<br>

Além disso, o cliente pode remover o produto clicando no botão **X**, no topo do card. 

<br>
</details>

<details open>
<summary>Visualizar valor total</summary>
<br>

Os valores de cada produto são exibidos em cada card. No final do *drawer*, é possível verificar o valor total da compra, sendo a cada produto multiplicado pela sua quantidade e então, somando todos.

<br>
</details>

## Tecnologias

Esta aplicação foi construída em Typescript, tendo como base principal React e Next.js. Além disso, outras tecnologias possibilitaram seu desenvolvimento:

- [Chakra UI](https://chakra-ui.com/) - uma biblioteca de componentes modular;

- [Redux Toolkit](https://redux-toolkit.js.org/) - um kit de ferramentas integrado, para o desenvolvimento Redux;

- [Axios](https://www.npmjs.com/package/axios) - uma biblioteca que permite uma integração com APIs;

- [React Query](https://www.npmjs.com/package/@tanstack/react-query) - uma biblioteca que facilita o gerenciamento de dados assíncronos;

- [Dotenv](https://www.npmjs.com/package/dotenv) - um pacote que carrega automaticamente as variáveis de ambiente de um arquivo; 
 
- [Styled Components](https://www.npmjs.com/package/styled-components) - uma biblioteca que permite criar componentes de estilo;

- [Testing Library](https://www.npmjs.com/package/testing-library) - um conjunto de utilitários que permitem testar componentes React;

- [Jest](https://www.npmjs.com/package/jest) - um framework de teste unitário de código aberto;

- [ESLint](https://www.npmjs.com/package/eslint) - uma ferramenta de análise de código.

<br>

## Instalação

Para testar esse projeto, clone-o em sua máquina e siga os seguintes passos:

```bash
  git clone https://github.com/LuisMassuchini/MKS-Sistemas.git

  npm run dev 

```

## Deploy

Para ir o projeto já em deploy, acesse: [MKS-SISTEMAS](https://mks-sistemas-one.vercel.app/).


