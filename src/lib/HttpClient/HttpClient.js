import axios from 'axios'

const getClient = (baseUrl = null) => {

    const options = {
      baseURL: baseUrl
    }

    // TODO: Fatch from store and set authorization header automatically
    // TODO: Add interceptors
  
    const client = axios.create(options)
    return client
}
  
export class ApiClient {
    constructor(baseUrl = null, confTransforms = []) {
      this.client = getClient(baseUrl)
      this.confTransforms = confTransforms
    }

    applyConfigurationTransforms(conf) {
      return this.confTransforms.reduce(function applyConfTransform(prevConf, confTransform) {
          return confTransform(prevConf)
      }, conf)
    }
  
    get(url, conf = {}) {
      conf = this.applyConfigurationTransforms(conf)
      return this.client.get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
    }
  
    delete(url, conf = {}) {
      conf = this.applyConfigurationTransforms(conf)
      return this.client.delete(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }
  
    head(url, data, conf = {}) {
      conf = this.applyConfigurationTransforms(conf)
      return this.client.head(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }
  
    options(url, data, conf = {}) {
      conf = this.applyConfigurationTransforms(conf)
      if (data) conf.params = data
      return this.client.options(url, data, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }
  
    post(url, data = {}, conf = {}) {
      conf = this.applyConfigurationTransforms(conf)
      return this.client.post(url, data, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }
  
    put(url, data = {}, conf = {}) {
      conf = this.applyConfigurationTransforms(conf)
      return this.client.put(url, data, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }
  
    patch(url, data = {}, conf = {}) {
      conf = this.applyConfigurationTransforms(conf)
      return this.client.patch(url, data, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    }
}
  
/**
 * Base HTTP Client
 */
export const HTTPClient = {
    // Provide request methods with the default base_url
    get(url, conf = {}) {
      return getClient().get(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    },
  
    delete(url, conf = {}) {
      return getClient().delete(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    },
  
    head(url, conf = {}) {
      return getClient().head(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    },
  
    options(url, conf = {}) {
      return getClient().options(url, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    },
  
    post(url, data = {}, conf = {}) {
      return getClient().post(url, data, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    },
  
    put(url, data = {}, conf = {}) {
      return getClient().put(url, data, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    },
  
    patch(url, data = {}, conf = {}) {
      return getClient().patch(url, data, conf)
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error))
    },
}