/* jshint esversion: 8 */

class Cause {
  /**
   * A new cause api object.
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
   * returns info about a cause
   * @param {string} id cause id to look up
   */
  async get (id) {
    const response = await this._doRequest(`public/causes/${id}`);
    return response.data.data;
  }

  /**
   * returns top donors for a cause
   * @param {string} id cause id to look up
   * @param {string} timeType Time range for leaderboard (daily, weekly, monthly, yearly, ytd, all)
   */
  async getTopDonors (id, timeType) {
    const response = await this._sendRequest(`public/causes/${id}/donor_leaderboard${timeType ? '?time_type' + timeType : ''}`);
    return response;
  }

  /**
   * returns top donors for a cause
   * @param {string} id cause id to look up
   * @param {string} timeType Time range for leaderboard (daily, weekly, monthly, yearly, ytd, all)
   * @param {requestCallback} callback a function to call when we're done getting data
   */
  async getTopTeams (id, timeType) {
    const response = await this._sendRequest(`public/causes/${id}/team_leaderboard${timeType ? '?time_type' + timeType : ''}`);
    return response;
  }

  /**
   * returns fundraising events for a cause
   * @param {string} id cause id to look up
   */
  async getFundraisingEvents (id) {
    const response = await this._sendRequest(`public/causes/${id}/fundraising_events`);
    return response;
  }

  /**
   * returns leaderboards for a cause
   * @param {string} id cause id to look up
   * @param {string} timeType Time range for leaderboard (daily, weekly, monthly, yearly, ytd, all)
   */
  async getLeaderboards (id, timeType) {
    const response = await this._sendRequest(`public/causes/${id}/user_leaderboard${timeType ? '?time_type' + timeType : ''}`);
    return response;
  }
}

module.exports = Cause
