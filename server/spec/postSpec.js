const request = require('request');

const endpoint = `http://local.blog.com:8080/api/v1/posts`;
console.log(endpoint);


describe('GET POSTS', () => {
  it('should return 200 response code', done => {
    request.get(endpoint, (err, res, body) => {
      expect(JSON.parse(body)).toBeArrayOfObjects()      
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});

describe('GET Single post', () => {
  it('should return 200 response code', done => {
    request.get(`${endpoint}/5a4405e0b6d87b6b7725f50c`, (err, res, body) => {
      // console.log(typeof(body));

      expect(JSON.parse(body)).toBeObject()      
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});
