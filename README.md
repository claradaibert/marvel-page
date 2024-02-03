# Marvel Page Project

Nesse projeto, usamos a API pública da marvel para poder listar e ver detalhes sobre personagens, quadrinhos e criadores vinculados à empresa.

## Componentes

Essa pasta contém os componentes genéricos, feitos para serem aplicados em mais de um lugar no código
Os componentes são:

### Button
props recebidas: 

- handleClick (function): função para definir a ação do nosso onClick
- text(string): texto que estará renderizado dentro do botão
- loading(boolean): define se a página está carregando alguma informação, renderizando o ícone `CircularProgress`

### Header

Contém a nossa barra de navegação, controlando o menu e o tema da página

### Input

Props recebidas:
- name (string): atributo `name` do input
- value(string): o texto inserido no input, no caso do código, são as variáveis que representam o texto dentro do input
- label(string): atributo `label` do input
- type(string): atributo `type`
- handleChange(function): função para manipular o valor recebido no input
- inputStyle(string): define a estilização do input, visto que ele tem cores diferentes em páginas diferentes

### ListItem

Componente dos itens das listas das páginas

### ListPageContainer

Visto que todas as páginas de listagem de informação tem a mesma estilização e estrutura básica, fez sentido criar um componente genérico que pudesse ser utilizado por todas

- pageType(string): o título da página
-  pageList(array): lista da página (personagens, quadrinhos, criadores)
-  handleSeeMoreClick(function): como utilizamos paginação para renderizar a listagem da página, essa função manipula o botão de paginação, adicionando mais itens na lista
-  totalItems(number): número total de itens que estão disponíveis para resposta. Como utilizamos paginação, esse número vai informar se ainda devemos mostrar o botão de `ver mais`
-  searchLoading(boolean): as páginas de listagem têm dois modos de carregar: para carregar a lista inicial, e para carregar as adições à lista. Essa variável é responsável pelo primeiro modo
-  loading(boolean): essa variável é responsável pelo carregamento das adições à lista
-  searchValue(string): valor do input de busca por nome

  ### Sidebar

  Componente da barra de navegação

## API

Para comunicar com a api, esse sistema usa a biblioteca `axios`. A baseUrl está localizada dentro da pasta `services`

## Armazenamento de dados

Utilizamos o pacote `react-cookies` para poder armazenar a informação das chaves do usuário nos cookies. Dessa forma, mesmo se o usuário sair da página ou recarregar ela, as informações dele irão persistir. O usuário pode escolher deletar suas informações do sistema fazendo o logout, que deleta todos os cookies.

## Gerenciamento de states

Esse sistema utiliza o `redux` para gerenciar as seguintes informações:

- Chaves de acesso do usuário
- Preferências de tema (modo claro ou modo escuro, assim como o estado da barra de navegação)

## Como criar sua própria chave de acesso

Acessando o [site de desenvolvedor da Marvel](https://developer.marvel.com/) e fazendo login ou cadastro.
