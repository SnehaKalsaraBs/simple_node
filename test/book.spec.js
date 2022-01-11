const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Books api', () => {

  describe('GET /', function() {

    it('First Page', (done) => {
      chai.request(server)
          .get('/')
          .end((err, response) => {
            response.should.have.status(200);
            response.text.should.be.eq('book management github..');
            done();
          })
    });

  });
});
