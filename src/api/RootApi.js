/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.50
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * Root service.
 * @module api/RootApi
 */

/**
 * Constructs a new RootApi. 
 * @alias module:api/RootApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * List api root resources
   * Get links to all other resources available in the API.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/APIRoot} and HTTP response
   */
  this.getRootWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List api root resources
   * Get links to all other resources available in the API.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIRoot}
   */
  this.getRoot = function(opts) {
    return this.getRootWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
