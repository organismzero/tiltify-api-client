/* jshint esversion: 8 */

class User {
  /**
   * A new user api object.
   * @param {object} self is `this` from index.js
   * @constructor
   */
  constructor (self) {
    this.parent = self.parent
    this._sendRequest = self._sendRequest
    this._doRequest = self._doRequest
    this._checkKey = self._checkKey
  }

  /**
   * returns your own user
   */
  async getCurrentUser () {
    const response = await this._sendRequest('public/current-user');
    return response;
  }

  /**
   * returns a specific user's profile
   * @param {string} id the user id to look up
   */
  async getById (id) {
    const response = await this._doRequest(`public/users/${id}`);
    return response.data.data;
  }

  /**
   * returns a specific user's profile
   * @param {string} slug the user slug to look up
   */
  async getBySlug (slug) {
    const response = await this._doRequest(`public/users/by/slug/${slug}`);
    return response.data.data;
  }

  /**
   * returns self campaigns for a user
   * @param {string} id the user id to look up
   */
  async getCampaigns (id) {
    const response = await this._sendRequest(`public/users/${id}/campaigns?limit=10`)
    return response;
  }

  /**
   * returns an both team and self campaigns for a user
   * @param {string} id the user to look up
   */
  async getAllCampaign (id) {
    const response = await this._sendRequest(`public/users/${id}/integration_campaigns`)
    return response;
  }

  /**
   * get teams a user is part of
   * @param {string} id the user to look up
   */
  async getTeams (id) {
    const response = await this._sendRequest(`public/users/${id}/teams`)
    return response;
  }
}

module.exports = User
