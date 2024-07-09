const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, userController.addUser);
router.put('/update/:id', authMiddleware, userController.updateUser);
router.delete('/delete/:id', authMiddleware, userController.deleteUser);
router.get('/:id', authMiddleware, userController.getUser);
router.get('/', authMiddleware, userController.getListUser);

module.exports = router;
