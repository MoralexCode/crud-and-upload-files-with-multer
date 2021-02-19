let personas = [{ id: 1, name: 'Oscar', surname: 'Morales', email: 'oscar@digitalhouse.com', password: '(O_/O·)(T_T)', img: 'unknow' }];
// let multer = require('multer');
// let path = require('path');
const controller = {
    index: (req, res) => {
        res.render('index');
    },
    register: (req, res) => {
        res.render('registro');
    },
    create: (req, res) => {
        console.log(' body  |', req.body);
        let { name, surname, email, password } = req.body;
        let persona = { id: personas.length + 1, name, surname, email, password } // (req.body && req.body != null) ? req.body : { id: personas.length + 1, name: 'No name', enterprise: 'No enterprise' }
        personas.push(persona);
        // let multerDiskStorage = multer.diskStorage({
        //     destination: (req, file, callback) => {
        //         let folder = path.join(__dirname, '../public/profile-img');
        //         callback(null, folder);

        //     },
        //     filename: (req, file, callback) => {
        //         let imgName = Date.now() + path.extname(file.originalname);
        //         callback(null, imgName);
        //     }
        // });
        // const upload = multer({ multerDiskStorage });
        res.render('listar', { personas: personas });
    },
    read: (req, res) => {
        console.log('personas  |', personas);
        res.render('listar', { personas: personas });
    },
    update: (req, res) => {
        console.log('id  | ', red.params.id);
        res.render('login');
    },
    delete: (req, res) => {
        res.render('login');
    },
    detalle: (req, res) => {
        let id = req.params.id;
        console.log('id  | ', id);
        let persona = personas.find(({ id }) => id === id);
        console.log(persona);
        res.render('detalle', { persona: persona });
    },
}

module.exports = controller;