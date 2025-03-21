## Códigos de status HTTP

### ``1. Informativo (1xx)``
Esses códigos indicam que a requisição foi recebida e está sendo processada, sem ação necessária do cliente ou servidor.  
``100: Continue``: O cliente pode continuar a enviar o corpo da requisição.  
``101: Switching Protocols (Protocolos de comutacao)``: O servidor aceita mudar o protocolo (ex.: para WebSockets).  

---

### ``2. Lado do Cliente (4xx)``
Erros causados por requisições inválidas, malformadas ou não autorizadas pelo cliente.  

``400: Bad Request (Requisicao ruim)``: O cliente enviou uma requisição inválida (ex.: JSON mal estruturado).  
``401: Unauthorized (Nao autorizado)``: O cliente precisa autenticar para acessar o recurso.  
``403: Forbidden (Restrito)``: O cliente não tem permissão para acessar o recurso, mesmo autenticado.  
``404: Not Found (Nao encontrado)``: O recurso solicitado não existe no servidor.  
``405: Method Not Allowed (Metodo nao permitido)``: O método HTTP (ex.: POST) não é suportado pelo recurso.  
``422: Unprocessable Entity (Entidade nao processavel)``: O servidor entende seu pedido, mas não pode atendê-lo devido a um problema no seu lado.  
``429: Too Many Requests (Muitas requisicoes)``: O cliente fez muitas requisições em pouco tempo (rate limit).

---

### ``3. Lado do Servidor (5xx)``  
Erros causados por falhas no processamento ou indisponibilidade do servidor.  

``500: Internal Server Error (Erro do servidor interno)``: Erro genérico do servidor.  
``501: Not Implemented (Nao implementado)``: O servidor não suporta a funcionalidade requisitada.  
``502: Bad Gateway (Caminho ruim)``: O servidor agiu como gateway e recebeu uma resposta inválida.  
``503: Service Unavailable (Servico nao disponivel)``: O servidor está temporariamente indisponível.  
``504: Gateway Timeout (Tempo excedido)``: O servidor agiu como gateway e não recebeu uma resposta a tempo.

---

### ``Extras: Sucesso e Redirecionamento``

#### ``2xx (Sucesso)``:  
Esses códigos indicam sucesso na requisição, geralmente tratados no cliente.  
``200: OK``: Requisição concluída com sucesso.  
``201: Created (Criado)``: Recurso foi criado com sucesso (ex.: POST).  
``204: No Content (Sem conteudo)``: Requisição bem-sucedida, mas sem conteúdo no corpo da resposta.  

#### ``3xx (Redirecionamento)``:  
Esses códigos instruem o cliente a realizar outra ação.  
``301: Moved Permanently (Movido permanentemente)``: O recurso foi movido permanentemente.  
``302: Found (Encontrado)``: O recurso foi movido temporariamente.  
``304: Not Modified (Nao modificado)``: O recurso não foi modificado, útil para caching.

---

### ``Resumo das Categorias``  
| Categoria         | Códigos         | Exemplos                    |
|-------------------|-----------------|-----------------------------|
| Informativo       | ``1xx``         | 100, 101                    |
| Sucesso           | ``2xx``         | 200, 201, 204               |
| Redirecionamento  | ``3xx``         | 301, 302, 304               |
| Lado do Cliente   | ``4xx``         | 400, 401, 403, 404, 422, 429|
| Lado do Servidor  | ``5xx``         | 500, 501, 502, 503, 504     |

### ``Pra gravar``
``2xx`` : Sucesso [ Você pediu para o backend fazer algo e ele respondeu que deu certo ] 

``4xx`` : ERRO CLIENTE (Frontend) [ O cliente tenta acessar uma rota que não existe ou não permitida ]

``5xx`` : ERRO SERVIDOR (Backend)