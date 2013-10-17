var mocha = require('mocha');
var should = require('should');
var sinon = require('sinon');

var LocationController = require('../controllers/location_controller.js').LocationController;
var Location = require('../models/location.js').Location;

describe('Location Controller', function() {
  it('should add location when valid location is given', function() {
    // arrange
    var expected_location = new Location("SAMPLE_LAT", "SAMPLE_LNG");
    var mockRequest = {
      param: expected_location
    };
    var mockResponse = {
      status: sinon.spy()
    }

    // act
    var sut = new LocationController();
    sut.add(mockRequest, mockResponse);

    // assert
    mockResponse.status.calledWith(201).should.be.ok
  });
});
