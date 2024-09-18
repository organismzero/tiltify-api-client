/* jshint esversion: 8 */

class Webhook {
  /**
   * A new webhook api object.
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
   * activates a webhook endpoint
   * @param {string} id the webhook id to look up
   */
  async activate (id) {
    const response = await this._doRequest(`private/webhook_endpoints/${id}/activate`, 'POST');
    return response.data.data;
  }

  /**
   * creates or updates a webhook subscription
   * @param {string} webhookID id of the webhook
   * @param {string} eventID id of the event (campaign, team campaign, fundraising event) to track
   * @param {Object} payload JSON array {event_types: [<TYPES>]} of events to subscribe to (see Tiltify API ref)
   */
  async subscribe (webhookID, eventID, payload) {
    const response = await this._doRequest(`private/webhook_endpoints/${webhookID}/webhook_subscriptions/${eventID}`, 'PUT', payload);
    return response.data.data;
  }

  /**
   * list relay keys by webhook id
   * @param {string} id the webhook id to look up
   */
  async listRelays (id) {
    const response = await this._sendRequest(`private/webhook_relays/${id}/webhook_relay_keys`);
    return response;
  }

  /**
   * create a new webhook relay key
   * @param {string} id webhook relay id
   * @param {Object} payload optional payload to send, json with id and metadata
   */
  async createRelay (id, payload) {
    const response = await this._doRequest(`private/webhook_relays/${id}/webhook_relay_keys`, 'POST', payload)
    return response.data.data;
  }

  /**
   * return webhook relay key by id
   * @param {string} webhookRelayID webhook relay id
   * @param {string} webhookRelayKeyID webhook relay key id
   */
  async getRelayKey (webhookRelayID, webhookRelayKeyID) {
    const response = await this._doRequest(`private/webhook_relays/${webhookRelayID}/webhook_relay_keys/${webhookRelayKeyID}`);
    return response.data.data;
  }
}

module.exports = Webhook
