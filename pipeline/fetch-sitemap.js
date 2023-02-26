const axios = require("axios");
const fs = require("fs-extra");
const parser = require('xml2json');

const remoteSiteMapPath = "https://eindex.me/sitemap.xml"
const localSite = "webmentions/sitemap_cache.json"

const loadSiteMap = async () => {
    const resp = await axios.get(remoteSiteMapPath, {
        headers: {
            "Accept-Content": "application/xml",
            "Accept-Encoding": "UTF-8",
            "Cache-Control": "no-cache"
        }
    })
    
    return JSON.parse(parser.toJson(resp.data)).urlset.url
}

const saveLocalCache = async (data) => {
    try {
        await fs.writeJSONSync(localSite, data, {spaces: 2})
    } catch (error) {

    }
}


const main = async () => {
    const urls = await loadSiteMap()
    await saveLocalCache(urls)
}


main()
