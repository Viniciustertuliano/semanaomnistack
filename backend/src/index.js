const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */


/**
 * Métodos HTTP
 * 
 * GET: Buscar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informaçãono back-end
 * DELETE: Apagar informação do banc-end
 */

 /**
  * Tipos de parametros 
  * 
  * Query Params: Parâmetros nomeados enviado na rota após "?" (Filtros, Paginação)
  * Route Params: Parâmetos usados para identificar recursos 
  * Request Budy: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

  /**
   * SQL: MYSQL, SQLite, PostgreSQL, oracle, Microsoft SQL server.
   * NoSQL: mongoDB, etc. 
   */

   /**
    * Drive SELECT * FROM users
    * Query Builder: table('users').select('*').whare()
    */
