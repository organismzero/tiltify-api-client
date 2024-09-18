/* jshint esversion: 8 */

class TeamCampaign {
  /**
   * A new campaign api object.
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
   * returns information about a campaign.
   * The total raised is in this returned object.
   * @param {string} id The campaign ID that you're looking up
   */
  async get (id) {
    const response = await this._doRequest(`public/team_campaigns/${id}`);
    return response.data.data;
  }

  /**
   * returns the most recent page of donations.
   * Use this if polling for new donations.
   * @param {string} id The campaign ID that you're looking up
   */
  async getRecentDonations (id) {
    const response = await this._doRequest(`public/team_campaigns/${id}/donations`);
    return response.data.data;
  }

  /**
   * returns ALL donations from a campaign.
   * @param {string} id The campaign ID that you're looking up
   */
  async getDonations (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/donations?limit=100`);
    return response;
  }

  /**
   * returns all donation matching offers from a campaign
   * @param {string} id The campaign ID that you're looking up
   */
  async getDonationMatches (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/donation_matches?limit=100`);
    return response;
  }

  /**
   * returns all rewards for a campaign
   * @param {string} id The campaign ID that you're looking up
   */
  async getRewards (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/rewards?limit=100`);
    return response;
  }

  /**
   * returns all polls for a campaign
   * @param {string} id The campaign ID that you're looking up
   */
  async getPolls (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/polls?limit=100`);
    return response;
  }

  /**
   * returns all targets for a campaign
   * @deprecated replaced with getTargets to match tiltify naming scheme
   * @param {string} id The campaign ID that you're looking up
   */
  async getChallenges (id) {
    console.log('WARN: Using deprecated method getChallenges, please use getTarets')
    const response = await this._sendRequest(`public/team_campaigns/${id}/targets?limit=100`);
    return response;
  }

  /**
   * returns all targets for a campaign
   * @param {string} id The campaign ID that you're looking up
   */
  async getTargets (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/targets?limit=100`);
    return response;
  }

  /**
   * returns all polls for a campaign
   * @param {string} id The campaign ID that you're looking up
   */
  async getMilestones (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/milestones?limit=100`);
    return response;
  }

  /**
   * returns the schedule of a campaign
   * @param {string} id The campaign ID that you're looking up
   */
  async getSchedule (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/schedule?limit=100`);
    return response;
  }

  /**
   * returns leaderboards for a team campaign
   * @param {string} id team id to look up
   * @param {string} timeType Time range for leaderboard (daily, weekly, monthly, yearly, ytd, all)
   */
  async getLeaderboards (id, timeType) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/user_leaderboard${timeType ? '?time_type' + timeType : ''}`);
    return response;
  }

  /**
   * returns all supporting campaigns for a campaign
   * @param {string} id The campaign ID that you're looking up
   */
  async getSupportingCampaigns (id) {
    const response = await this._sendRequest(`public/team_campaigns/${id}/supporting_campaigns`);
    return response;
  }
}

module.exports = TeamCampaign
