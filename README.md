# Teste técnico Cuidas

O objetivo do teste foi criar um sistema de agendamento de consultas. O link para 
o resultado final está no link abaixo:

- [Demo](https://cuidas-frontend.herokuapp.com/)
- [Repositório do backend](https://github.com/raphaellopes/cuidas-backend)

O sistema consiste em uma página inicial com dois links abertos, **agendamentos** e 
**administração**. 

Na página de [agendamentos](https://cuidas-frontend.herokuapp.com/agendamentos) o 
usuário inicia informando seu email. Caso seja a primeira consulta, o sistema pedirá 
o nome e telefone para completar seu cadastro. Após confirmar essas informações, 
ele visualiza um campo de data e uma lista de horários disponíveis para a data selecionada. 
Ao confirmar uma data e hora, a lista de suas consultas agendadas aparecem abaixo dos horários
disponíveis.

Na página de [administração](https://cuidas-frontend.herokuapp.com/administracao) o 
usuário visualiza a lista das próximas consultas. Ele tem a opção para remover
as consultas agendadas. 



## Para rodar local

Certifique que possui o [node](https://nodejs.org/en/) e [yarn](https://yarnpkg.com/lang/en/) 
instalados, clone o repositório e na raiz do projeto rode:

### `yarn`

Para instalar as dependências


### `yarn start`

Roda o app em modo de desenvolvimento<br>
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.


### `npm run build`

Compila a aplicação para o ambiente de produção, gerando uma pasta chamada `build`.


## Testes

Implementei testes unitários utilizando [jest](https://jestjs.io/) nos diretórios *components* e *store*. 
Testei os componentes com [snapshot](https://jestjs.io/docs/en/snapshot-testing), e
as stores testei redux e sagas. Do que foi implementado, consegui chegar a quase **90%** de cobertura.


### `yarn test`

Para rodar todos os testes e visualizar a cobertura total. Esse comando criará
uma pasta no projeto chamado **coverage**. Nele exste um arquivo html que você pode abrir 
no navegador e visualizar todos os arquivos que estão com testes implementados e o que 
ainda falta implementar. 


### `yarn test:watch`

Para rodar os testes em modo de desenvolvimento com watch ativado.


### `yarn test:update`

Atualiza os snapshots criados para os componentes testados dessa maneira. Esse comando 
deve ser executado quando um componente tem seu estilo alterado. 


## Observações

- Não criei uma tela de erro 404 para rotas inválidas
- Não apliquei uma máscara no campo telefone
- Não configurei manifest, service-worker e favicon
