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
 * FacebookAds service.
 * @module api/FacebookAdsApi
 */

/**
 * Constructs a new FacebookAdsApi. 
 * @alias module:api/FacebookAdsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * List facebook ads
   * Get list of Facebook ads.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
   */
  this.listWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset'],
      'sort_field': opts['sortField'],
      'sort_dir': opts['sortDir']
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
      '/facebook-ads', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List facebook ads
   * Get list of Facebook ads.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @param {module:model/String} opts.sortField Returns files sorted by the specified field.
   * @param {module:model/String} opts.sortDir Determines the order direction for sorted results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
   */
  this.list = function(opts) {
    return this.listWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get facebook ad info
   * Get details of a Facebook ad.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
   */
  this.getAdWithHttpInfo = function(outreachId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'outreachId' is set
    if (outreachId === undefined || outreachId === null) {
      throw new Error("Missing the required parameter 'outreachId' when calling ");
    }

    var pathParams = {
      'outreach_id': outreachId
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
      '/facebook-ads/{outreach_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get facebook ad info
   * Get details of a Facebook ad.
   * @param {String} outreachId The outreach id.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
   */
  this.getAd = function(outreachId, opts) {
    return this.getAdWithHttpInfo(outreachId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
