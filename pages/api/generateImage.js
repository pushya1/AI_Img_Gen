// pages/api/generateImage.js
import OpenAI from 'openai';
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: apiKey,
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
