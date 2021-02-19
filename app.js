let express = require('express');
// const bodyParser = require('body-parser');
let app = express();
const methodOverride = require('method-override');
/**importar rutas*/
const routes = require('./routes/mainRoutes');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '100mb' }));

app.use(express.static('./public'));

app.use(methodOverride("_method"));
app.set('view engine', 'ejs');

app.use('/', routes);
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})