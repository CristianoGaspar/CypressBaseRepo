# CypressBaseRepo
Base de repositório de Cypress



Instalaçãoes de ambiente de CY

Possuir um repositorio para instanciar o Projeto
Criar a pasta local de onde ficará o  Projeto na maquina local

Abrir o git bash
Entrar com seguinte comando:
git clone Url_do_repositorio_do_projeto  ( teclar ENTER )
Pronto o projeto e "versionado" na maquina local criando uma instancia com o repositorio main

## instalar CY e suas dependências

Passo 01 - ( inicializa e cria o arquivo de dependencias instaladas para o uso no CY)
comando: npm init

Passo 02 - instala o CY local na maquina para rodar local
comando : npm install cypress --save-dev  ( teclar ENTER)

Passo 03 - Starta as pastas do cypress e sua estrutura para o projeto
comando : npx cypress open
**Pode ser que o windows peça permissões >> aceite-as

Passo 04 - Ira abrir um browser do "Welcome to Cypress" 
           Selecione a opções:  "E2E Testing" e "Componente testing"
           Selecione a opção   "E2E Testing" ( clique nesta caixa )
           Aparecerá 4 opções na Configuration files , e somente clique em "Continue"
           Apresentará 04 browsers: Chrome, Edge, Electron e Firefox, selecione "Chrome"
           E clique no botão abaixo: "Start E2E Testing in Chrome

           Vai exibir em telas mais dois cards na tela de "Create your first spec"
           Selecione a opção: Scaffold example specs
           Clique em "Okay, I got it!"


Passo 05 - No Vs Code acesse: 
           cypress  >>  e2e >>
           irá conter as pastas: 1-getting-started
                                 2-advanced-examples

            Deletar cada pasta acima mencionada, ficando somente a pasta "e2e"                     

