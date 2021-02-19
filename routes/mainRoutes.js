let express = require('express');
let router = express.Router();
let multer = require('multer');
let path = require('path');
const controller = require('../controllers/mainController');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        console.log('file | ', file);
        let folder = path.join(__dirname, '../public/profile-img');
        callback(null, folder);

    },
    filename: (req, file, callback) => {
        console.log('file | ', file);
        let imgName = Date.now() + path.extname(file.originalname);
        callback(null, imgName);
    }
});
const upload = multer({ storage });

router.get('/', controller.index);
router.get('/registro', controller.register);
router.post('/registro', upload.single('profile'), controller.create);
router.get('/listar', controller.read);
router.get('/actualizar/:id', controller.detalle);
router.put('/actualizar/:id', controller.update);
router.delete('/eliminar', controller.delete);

module.exports = router;