var request = require('sync-request')


class ApiCall {

    /**
     * Get API call
     * @param {String} url - http url
     * @param {String} headers - headers
     * @param {String} queryString - query string
     */
    getAPI(url, headers, queryString) {
        var res = request('GET', url,
            {
                headers: headers,
                qs: queryString
            });
        chaiExpect(res.statusCode).to.equal(200)
        var result = res.getBody().toString()
        return JSON.parse(result)
    }
}
export default new ApiCall()