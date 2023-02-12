import App from './app'
import UserController from './controllers/authController'


const app= new App([new UserController],8080)

app.listen()