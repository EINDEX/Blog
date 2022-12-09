const axios = require("axios");
const fs = require("fs-extra");
const parser = require('xml2json');

const remoteSiteMapPath = "https://eindex.me/sitemap.xml"
const webMentionAppAPI = "https://webmention.app/check/"
const token = process.env.WEBMENTION_APP_TOKEN
const localSite = "data/sitemap_cache.json"

const loadSiteMap = async () => {
    const resp = await axios.get(remoteSiteMapPath)
    return JSON.parse(parser.toJson(resp.data)).urlset.url
}

const loadLocalCache = async () => {
    try {
        return await fs.readJSONSync(localSite)
    } catch (error) {
        return {}
    }
}

const saveLocalCache = async (data) => {
    try {
        await fs.writeJSONSync(localSite, data, {spaces: 2})
    } catch (error) {

    }
}

const sendMention = async (url) => {
    try {
        const resp = await axios.post(webMentionAppAPI, null, {
            params: {
                token: token,
                url: url,
            }
        })
        console.log("success send:", url, resp.data)
        return true
    } catch (error) {
        console.log('failed to send:', url)
        return false
    }
}

const main = async () => {
    const data = await loadLocalCache()
    const urls = await loadSiteMap()
    for(const url of urls) {
        let sendFlag = false
        if (data.hasOwnProperty(url.loc)) {
            if (data[url.loc].lastmod !== url.lastmod) {
                sendFlag = true
            }
        } else {
            sendFlag = true
        }
        if(!sendFlag) {
            continue
        }

        if (await sendMention(url.loc)) {
            data[url.loc] = url
        }
    }
    await saveLocalCache(data)
}


main()
