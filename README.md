# Teste técnico Cuidas

O objetivo do teste foi criar um sistema de agendamento de consultas. O link para 
o resultado final está no link abaixo:

- [Demo](https://cuidas-frontend.herokuapp.com/)

O sistema consiste em uma página inicial com dois links abertos, **agendamentos** e 
**administração**. 

Na página de [agendamentos](https://cuidas-frontend.herokuapp.com/agendamentos) o 
usuário inicia informando seu email. Caso seja a primeira consulta, o sistema pedirá 
o nome e telefone para completar seu cadastro. Após confirmar essas informações, 
ele visualiza um campo de data e uma lista de horários disponíveis para a data selecionada. 
Ao confirmar uma data e hora, a lista de suas consultas agendadas aparece na listagem abaixo.

Na página de [administração](https://cuidas-frontend.herokuapp.com/administracao) o 
usuário visualiza a lista das próximas consultas. Ele tem a opção para remover
as consultas agendadas. 



## Para rodar local

Certifique que possui o node e yarn instalados, clone o repositório e na raiz do projeto rode:

### `yarn`

Para instalar as dependências


### `yarn start`

Roda o app em modo de desenvolvimento<br>
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.


### `npm run build`

Compila a aplicação para o ambiente de produção, gerando uma pasta chamada `build`.


## Testes

Implementei testes unitários utilizando [jest](https://jestjs.io/) nos diretórios *components* e *store*. 
Testei os componentes apenas com [snapshot](https://jestjs.io/docs/en/snapshot-testing), e
as stores testei redux e sagas. Do que foi implementado, consegui chegar a quase **90%** de cobertura.


### `yarn test`

Par rodar todos os testes e e visualizar a cobertura de testes. Esse comando criará
uma pasta no projeto chamado **coverage**. Nele exste um arquivo html que você pode visualizar 
o que está todos os arquivos que estão testados e o que ainda falta implementar. 


### `yarn test:watch`

Par rodar os testes em modo de desenvolvimento com watch ativado.


### `yarn test:update`

Atualiza os snapshots criados para os componentes testados. Esse comando deve ser executado
quando um stateless componente, que possui testes, tem seu estilo alterado. 
