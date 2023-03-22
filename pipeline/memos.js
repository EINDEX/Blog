import axios from "axios";
import process from "process";
import fs from "fs";

const memosFilePath = "data/memos/memos.json";

const getMemos = async () => {
  try {
    const resp = await axios.get(process.env.MEMOS_URL, {
      params: {
        visiable: "PUBLIC",
        rowStatus: "NORMAL",
        creatorId: 1,
        limit: 100,
      },
      headers: {
        "Accept-Content": "application/json",
        "Accept-Encoding": "UTF-8",
      },
    });
    return resp.data.data;
  } catch (e) {
    console.error("connection error");
    return [];
  }
};

const dateFormat = (timestamp) => {
  return new Date(timestamp * 1000).toISOString();
};

const contentFormat = (content) => {
  return content
    .replace(/#(\w+) /g, "[#$1](/tags/$1) ")
    .replace(/]\(\/tags\/.*\)/g, function (match) {
      return match.toLowerCase();
    });
};

const fetchTags = (content) => {
  const pattern = /#(\w+) /g;
  return (content.match(pattern) || []).map((i) => i.trim().replace(/^#/, ""));
};

const makeThoughts = async (memo) => {
  const chineseRegex = /[\u4e00-\u9fa5]/;
  const findChinese = chineseRegex.exec(memo.content);
  const filename = `src/content/thoughts/${findChinese ? "zh" : "en"}/${
    memo.id
  }.mdx`;
  const template = `---
date: "${dateFormat(memo.createdTs)}"
updated: "${dateFormat(memo.updatedTs)}"
tags: ${JSON.stringify(fetchTags(memo.content))}
draft: false
---

${contentFormat(memo.content)}
`;
  await fs.writeFileSync(filename, template);
  console.log("add/update", filename);
  return;
};

const main = async () => {
  const memos = await getMemos();
  const data = JSON.parse(await fs.readFileSync(memosFilePath));
  for (const memo of memos) {
    if (
      data.hasOwnProperty(memo.id) &&
      data[memo.id].updatedTs >= memo.updatedTs
    ) {
      continue;
    }
    data[memo.id] = {
      id: memo.id,
      updatedTs: memo.updatedTs,
      createdTs: memo.createdTs,
      content: memo.content,
    };
    await makeThoughts(memo);
  }
  await fs.writeFileSync(memosFilePath, JSON.stringify(data, null, 2));
};

main();
