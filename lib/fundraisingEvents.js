/* jshint esversion: 8 */

class FundraisingEvents {
  /**
   * A new fundraising events api object.
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
   * returns info about a fundraising event
   * @param {string} id fundraising event id to look up
   */
  async get (id) {
    const response = await this._sendRequest(`public/fundraising_events/${id}`);
    return response;
  }

  /**
   * returns campaigns for a fundraising event
   * @param {string} id fundraising event id to look up
   */
  async getCampaigns (id) {
    const response = await this._sendRequest(`public/fundraising_events/${id}/supporting_events?limit=100`);
    return response;
  }

  /**
   * returns donations for a fundraising event
   * @param {string} id fundraising event id to look up
   * @param {string} timeType Time range for leaderboard (daily, weekly, monthly, yearly, ytd, all)
   */
  async getTopDonors (id, timeType) {
    const response = await this._sendRequest(`public/fundraising_events/${id}/donor_leaderboard${timeType ? '?time_type' + timeType : ''}`);
    return response;
  }

  /**
   * returns leaderboards for a fundraising event
   * @param {string} id fundraising event id to look up
   * @param {string} timeType Time range for leaderboard (daily, weekly, monthly, yearly, ytd, all)
   */
  async getLeaderboards (id, timeType, callback) {
    const response = await this._sendRequest(`public/fundraising_events/${id}/user_leaderboard${timeType ? '?time_type' + timeType : ''}`);
    return response;
  }
}

module.exports = FundraisingEvents
