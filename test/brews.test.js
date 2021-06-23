'use strict'
const fs = require('fs');
const expect = require('chai').expect;
const queries = require('../queries');
const app = require('../app');
const request = require('supertest');
const fixtures = require('./fixtures');

describe('Project', () => {
  it('should have a migrations directory', () => {
     const hasMigrations = fs.existsSync('migrations');
     expect(hasMigrations).to.equal(true);
  });

  it('should have a seeds directory', () => {
     const hasMigrations = fs.existsSync('seeds');
     expect(hasMigrations).to.equal(true);
  });
});

describe('Breweries', () => {
  it('getBreweries returns a promise', () => {
    const promise = queries.getBreweries();
    expect(promise).to.not.equal(undefined);
    expect(promise.then).to.not.equal(undefined);
  })

  it('can get all breweries', (done) => {
    request(app)
      .get('/breweries')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.breweries);
        done();
      })
  })

  it('getBrewery returns a promise', () => {
    const promise = queries.getBrewery();
    expect(promise).to.not.equal(undefined);
    expect(promise.then).to.not.equal(undefined);
  })

  it('can get a brewery by id', (done) => {
    request(app)
      .get('/breweries/1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.breweries[0]);
        done();
      })
  })

  it('can get a brewery by id', (done) => {
    request(app)
      .get('/breweries/2')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.breweries[1]);
        done();
      })
  })

  it('getBeersByBrewery returns a promise', () => {
    const promise = queries.getBeersByBrewery();
    expect(promise).to.not.equal(undefined);
    expect(promise.then).to.not.equal(undefined);
  })

  it('can get beers for a brewery by id', (done) => {
    request(app)
      .get('/breweries/1/beers')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.beersByBrewery[1]);
        done();
      })
  })

  it('can get beers for a brewery by id', (done) => {
    request(app)
      .get('/breweries/2/beers')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.beersByBrewery[2]);
        done();
      })
  })
});


describe('Beers', () => {
  it('getBeers returns a promise', () => {
    const promise = queries.getBeers();
    expect(promise).to.not.equal(undefined);
    expect(promise.then).to.not.equal(undefined);
  })

  it('can get all beers', (done) => {
    request(app)
      .get('/beers')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(fixtures.beers);
        done();
      })
  })
})
