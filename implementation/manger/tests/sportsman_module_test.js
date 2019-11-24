require('../../../tests');

describe("get sportsman", function () {
    it("when no filters gets all", function (done) {
        chai.request(app)
            .post("/private/getSportsmen")
            .set('x-auth-token', tokenManager)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.sportsmen.should.be.an('array');
                res.body.sportsmen.length.should.be.eql(0);
                done();
            });
    });
    it("with sport style filter", function (done) {
        chai.request(app)
            .post("/private/getSportsmen")
            .set('x-auth-token', tokenManager)
            .query({sportStyle: 'סנדא'})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.sportsmen.should.be.an('array');
                res.body.sportsmen.length.should.be.eql(1);
                done();
            });
    })
});
