/* jshint esversion: 8 */

class Team {
  /**
   * A new team api object.
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
   * returns info about a team
   * @param {string} id the team id to look up
   */
  async get (id) {
    const response = await this._doRequest(`public/teams/${id}`);
    return response.data.data;
  }

  /**
   * returns campaigns for a team
   * @param {string} id the team id to look up
   */
  async getCampaigns (id) {
    const response = await this._sendRequest(`public/teams/${id}/team_campaigns`);
    return response;
  }

  /**
   * returns a info about a campaign attached to a team
   * @param {string} id the team id to look up
   */
  async getMembers (id) {
    const response = await this._sendRequest(`public/teams/${id}/members`);
    return response;
  }
}

module.exports = Team
