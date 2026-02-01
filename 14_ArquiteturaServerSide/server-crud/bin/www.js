var app = require('../app');
var debug = require('debug')('api-rest-express:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '4000'); // PORT correto
app.set('port', port);

var server = http.createServer(app);

server.listen(port);                                  // começa a escutar a porta
server.on('error', onError);                           // trata erro de porta/permissão
server.on('listening', onListening);                   // log quando estiver no ar

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') throw error;

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Servidor rodando em http://localhost:' + port);
}