## **HTTP métodos**
- ``Get: Listar`` : usado para recuperar dados de um servidor
```
app.get('/usuario')
```
- ``Post: Criar`` : cria um novo recurso no servidor
```
app.post('/usuario')
```
- ``Put: Editar vários`` : atualiza recursos no servidor
```
app.put('/usuario')
```
- ``Patch: Editar um``

- ``Delete: Deletar`` : usado para deletar um recurso do servidor
```
app.delete('/usuario')
```
## **REQUEST**
**Query Params? (GET) / Consultas / Informações não sensíveis /Poucas informações**
```
servidor.com/usuarios?estado=piaui&cidade=teresina
servidor.com/series?tipo=comedia&streaming=netflix
```
**Route Params (GET / PUT / DELETE) / Buscar, editar ou deletar algo específico**

- ``get`` : servidor.com/usuarios/22
- ``put`` : servidor.com/usuarios/24
- ``delete`` : servidor.com/usuarios/23

**Body Params / Informações sensíveis / Muitas informações**
```
{
    "id":1,
    "nome":"lucas"
}
```













