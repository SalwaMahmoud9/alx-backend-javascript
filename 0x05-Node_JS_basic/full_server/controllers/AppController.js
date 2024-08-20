/**
 * AppController.
 * @author Salwa Mahmoud <https://github.com/SalwaMahmoud9>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
