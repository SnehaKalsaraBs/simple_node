const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Books api', () => {

  describe('GET /', function() {

    it('It should get all the books', (done) => {
      chai.request(server)
          .get('/')
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            done();
          })
    });

  });

  describe('GET /show/:id', function() {

    it('It should get books by id', (done) => {
      let bookId = '61dbd00391ce0f7704d32ece'
      chai.request(server)
          .get('/show/'+ bookId)
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('_id');
            response.body.should.have.property('title');
            response.body.should.have.property('author');
            response.body.should.have.property('__v');
            done();
          })
    });

  });

  describe('POST /show/:id', function() {

    it('It should add new book', (done) => {
      const book = {
        title: "abc",
        author: "pqr"
      }
      chai.request(server)
          .post('/add')
          .send(book)
          .end((err, response) => {
            response.should.have.status(200);
            response.text.should.be.eq('Data added successfully');
            done();
          })
    });
  });


  describe('PUT /update/:id', function() {

    it('It should update existing book', (done) => {

      const bookId = '61d2d28331410a231151af38'
      const book = {
        title: "abc",
        author: "pqr"
      }
      chai.request(server)
          .put('/update/'+ bookId)
          .send(book)
          .end((err, response) => {
            response.should.have.status(200);
            response.text.should.be.eq('Data updated successfully');
            done();
          })
    });
  });


  describe('DELETE /delete/:id', function() {

    it('It should delete existing book', (done) => {

      const bookId = '61d2d28331410a231151af38';
      chai.request(server)
          .delete('/delete/'+ bookId)
          .end((err, response) => {
            response.should.have.status(200);
            response.text.should.be.eq('Data deleted successfully');
            done();
          })
    });
  });

});
