// pages/api/generateImage.js
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: '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',
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  let text = req.body.text;
  try {
    const image = await openai.images.generate({ model: "dall-e-3", prompt: text });
    const url = image.data[0].url;
    console.log(url)
    res.status(200).json({imageUrl:url}).send("success");
  } catch (err) {
    res.status(500).send(err.message);
  }

}
