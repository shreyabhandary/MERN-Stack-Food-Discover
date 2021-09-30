const chai = require('chai');
const chaiHttp = require('chai-http');
const router = require('../routes/users');
const app =require('../index.js')
//Assertion
chai.should();
chai.use(chaiHttp);

describe('Unit testing the /login route', () => {
    it(' OK status', (done) => {
        let cred = {
            email: 'shreya@gmail.com',
            password: 'abcd'
        }
        chai.request(router)
            .post('/login')
            .send(cred)
            .end((_err, response) => {
                response.should.have.status(200);
            done();
            })
    });
});