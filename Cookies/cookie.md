### Sessões e Cookies

Os Cookie são um pequeno arquivo de texto, eles ficam armazenados no navegador do usuário.

Grava informações básica como:

- Endereço IP, preferência sobre idiomas, cores, entre outros...
- Portais como Gmail e o Hotmail, nomes de usuários e senhas de email também faz parte dos Cookies.

Exemplo de Cookie:

Entra no e-commerce, gosta de um produto e adiciona o produto no carrinho de compras.

Você saí do computador e fecha o navegador passa alguns dias quando entra acessa novamente o mesmo produto adicionou no carrinho de compras está lá dentro ainda.

### Sistema de e-commerce

Armazena um arquivo dentro do navegador que é o `Cookie` dizendo que você adicionou um produto x dentro do carrinho de compra.

### Cookie

É basicamente um arquivo que você consegue salvar informações diretamente dentro do navegador do usuário.

- Cookie funcionam como referências a sessão

### Sessões

Ela tem a mesma ultilidade dos cookies, a diferença entre sessões e os cookies é que elas ficam salvas no servidor. 

Usuário loga no sistema e armazena:
- id e o e-mail do usuário em uma sessão
- quando o usuário fecha o navegador a sessão é encerrada
- Cada sessão tem um id único
- Em toda requisição, o browser envia de volta o cookie com o ID da sessão, que permite ao servidor dar acesso aos dados associados àquele ID.

* elas dependem de um cookie pra dizer o seguinte que esse usuário tem uma sessão guardada dentro.

Obs: Usar sessões é um pouco mais seguro do que guardar dados nos cookies porquê os dados salvo na sessão ficam salvos no servidor o usuário entre aspas não consegue acessar esses dados
