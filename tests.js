NODE_ENV = 'test';

chai = require('chai');
chaiHttp = require('chai-http');
chai.use(chaiHttp);
app = require('./app');
should = chai.should();
expect = chai.expect;
assert = chai.assert;

tokenManager = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAiLCJuYW1lIjoiQWRtaW4iLCJhY2Nlc3MiOjF9.vitR-OKKIzOYsBJ5XfgqqwrBDUkaLaVPb7pGYr8yrfI';
tokenCoach = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyMjIzMjQyNCIsIm5hbWUiOiLXnNeg15QiLCJhY2Nlc3MiOjJ9.RMsswo-fFBqISU7A-4NV0tvklvU9R0r9P8Lw-nuu8o8';
