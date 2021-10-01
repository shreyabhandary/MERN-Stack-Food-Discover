let server=require("../index.js");
let chai=require("chai");
let chaiHttp=require("chai-http");

//Assertion
chai.should();
chai.use(chaiHttp);

describe('SERVER APIs',() => {
    describe('Test GET route /getListOfPlaces',() =>{
        it("It should return all restaurants",(done) => {
            chai.request(server)
            .get("/getListOfPlaces")
            .end((err,response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.not.be.eq(0);
            done();
            });
        });

    })


});