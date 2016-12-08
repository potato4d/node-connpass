const Connpass = function(){
  this.config = {
    version: require("./package.json").version,
    api_version: "v1",
    api_root: "https://connpass.com/api",
  }

  this.api = () => {
    return `${this.config.api_root}/${this.config.api_version}`
  }

  this.version = () => {
    return this.config.version;
  }

  this.get = (options) => {
    return new Promise((resolve, reject) => {
      const axios = require("axios");
      const querystring = require("querystring");

      axios.get(
        `${this.api()}/event/`,
        {
          params: options
        }
      ).then((res)=>{
        resolve(res.data);
      }).catch((err)=>{
        reject({
          status: err.response.status,
          statusText: err.response.statusText
        });
      })
    });
  }
}

module.exports = new Connpass
