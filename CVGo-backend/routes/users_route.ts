import express from 'express';
const router = express.Router();
import usersController from '../controllers/users_controller';

router.post('/create', usersController.createNewUser);

router.delete('/delete/:userId', usersController.deleteUser);

router.put('/update/:userId', usersController.updateUser);

router.get('/get/:userId', usersController.getUser);

router.get('/getAll', usersController.getAllUsers);

export default router;

