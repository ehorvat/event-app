var api = {
  async fetchData() {
    var url = 'http://dev-conferences.oreilly.com/velocity/devops-web-performance-ca/public/content/report/schedule_feed';
    let response = await fetch(url)
    let body = await response.json()
    return body
  }
}

module.exports = api;
