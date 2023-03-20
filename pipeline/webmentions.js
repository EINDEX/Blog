import axios from "axios";
import process from "process";
import path from "path";
import fs from "fs-extra";

const prePage = 20;
const domain = 'eindex.me';
const token = process.env.WEBMENTION_TOKEN
const webmentionsPath = "data/webmentions/"
const webMentionsFolder = webmentionsPath + "data/" 
const sinceIDPath = webmentionsPath + "since_id"

const fetchWebMentions = async (domain, token, sinceID, page, retry=3) => {
    if (retry < 0) {
        throw "Connection error"
    }
    try {
        const resp = await axios.get("https://webmention.io/api/mentions.jf2", {
            params: {
                "domain": domain,
                "pre-page": prePage,
                "page": page,
                "since_id": sinceID,
                "token": token,
            },
            headers: {
                "Accept-Content": "application/json",
                "Accept-Encoding": "UTF-8"
            }
        })
        return resp.data.children
    } catch (error) {
        console.error(error)
        return await fetchWebMentions(domain, token, sinceID, retry-1)
    }
   
}

const readSinceID = async() => {
    try {
        return parseInt(await fs.readFileSync(sinceIDPath, "utf-8"))
    } catch (error) {
        return 0
    }
}

const saveSinceID = async(sinceID) => {
    await fs.ensureDir(webMentionsFolder)
    console.log('saving sinceID to ', sinceID)
    await fs.writeFileSync(sinceIDPath, String(sinceID))
}

const updateSinceID = (mentions, sinceID) => {
    let newSinceID = sinceID;
    mentions.forEach((mention)=>{newSinceID=Math.max(newSinceID, mention['wm-id'])})
    return newSinceID
}

const minSinceID = (mentions, sinceID) => {
    let newSinceID = sinceID;
    mentions.forEach((mention)=>{newSinceID=Math.min(newSinceID, mention['wm-id'])})
    return newSinceID
}

const fetchAllMentions = async(domain, token) => {
    const sinceID = await readSinceID()
    let newMenionts = []
    let page = 0
    while(true){
        const mentions = await fetchWebMentions(domain, token, sinceID, page)
        newMenionts = newMenionts.concat(mentions)
        if (mentions.length < 20){
            break
        }
        page ++
    }
    await saveSinceID(updateSinceID(newMenionts, sinceID))
    return newMenionts
}

const mentionProcess = async (mention) => {
    const id = mention['wm-id']
    const target = new URL(mention['wm-target'])
    const pathname = target.pathname.replace(/^\/(zh\/)?/,"").replace(/\/$/,"")
    const filepath = `${webMentionsFolder}${pathname}.json`
    
    console.log(`process ${id} to ${filepath}`)
    let webMentionsDict = {};
    try {
        webMentionsDict = await fs.readJSONSync(filepath)
    } catch (error) {

    }

    webMentionsDict[id] = mention
    await fs.ensureDir(path.dirname(filepath))
    await fs.writeJSONSync(filepath, webMentionsDict, {spaces: 2})
}

const main = async ()=>{
    const newMentions = await fetchAllMentions(domain, token)
    for (const newMention of newMentions){
        await mentionProcess(newMention)
    }
}

main()
