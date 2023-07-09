Feature: Cadastro de usuário

Scenario: Validar cadastro de usuário
  Given que estou logado no sistema da Tinnova
  And clico no botão adicionar
  When preencho todos os dados corretamente
  Then o sistema retorna para a lista de cadastros exibindo o novo cadastro

Scenario: Validar consulta de usuario
Given que estou logado no sistema da Tinnova
When clico no botao "consultar" na coluna Ações
Then será exibido as informacoes do cadastro desejado


Scenario: Validar edição de usuario
Given que estou logado no sistema da Tinnova
When clico no botao "editar" na coluna Ações
And será exibido as informacoes do cadastro desejado com possibilidade de edicao
And edito algum campo
And clico em atualizar
Then será exibido a lista de cadastros com as informacoes atualizadas

Scenario: Validar exclusão de usuario
Given que estou logado no sistema da Tinnova
When clico no botao "excluir" na coluna Ações
And clico no botao "sim" da mensagem informativa de exclusao
And clico em entrar
Then será exibido a lista de cadastros sem o cadastro que exclui

#==== EXPLORATORIOS / NEGATIVOS ====


Scenario: Validar mensagem informativa no cadastro de usuario
Given que estou logado no sistema da Tinnova
When clico no botao "adicionar"
And clico no botao "guardar" 
Then será exibido uma mensagem informando que todos os campos devem ser preenchidos


#*[BUG: Sistema permite que o cadastro seja feito sem o preenchimento completo dos campos]*
Scenario: Validar cadastro de usuario com apenas um campo preenchido
Given que estou logado no sistema da Tinnova
When clico no botao "adicionar"
And preencho apenas o campo Nome
And clico no botao "guardar" 
Then será exibido uma mensagem informando que todos os campos devem ser preenchidos


# [BUG: Sistema permite que o cadastro mesmo existindo letras no campo TELEFONE - OBS: Na lista de cadastro, as letras nao sao exibidas, porém, é permitido inserir as mesmas na edição e/ou adição de cadastro]
Scenario: Validar regra do campo Telefone no cadastro de usuarios
Given que estou logado no sistema da Tinnova
When clico no botao "adicionar"
And preencho o campo Telefone com letras
And clico no botao "guardar" 
Then será exibido uma mensagem informativa referente ao campo TELEFONE


#[BUG: Sistema nao está validando a estrutura do input "email", desta forma, sendo aceito qualquer tipo de informação - A mesma deveria validar o formato "xx@xx.xx"]
Scenario: Validar regra do campo Email no cadastro de usuarios
Given que estou logado no sistema da Tinnova
When clico no botao "adicionar"
And preencho o email incorretamente
And clico no botao "guardar" 
Then o sistema ecibira uma mensagem de erro informativa referente ao campo Email

