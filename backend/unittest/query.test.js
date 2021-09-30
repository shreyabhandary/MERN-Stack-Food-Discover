const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');

//Assertion
chai.should();
chai.use(chaiHttp);

describe('Unit testing the /submitQuery route', () => {
    it(' say OK status', (done) => {
        let question = {
            name: 'shreya',
            mobileNo: 565620,
            query: 'fgfg'
        }
        chai.request(app)
            .post('/submitQuery')

            .end((_err, response) => {
                response.should.have.status(200);
            done();
            })
    });
});