// pages/api/generateImage.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    let generatedImageUrl;
    const { searchText } = req.body;
    let data = JSON.stringify({
      model: "dall-e-3",
      prompt: searchText,
      n: 1,
      size: "1024x1024",
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.openai.com/v1/images/generations",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      data: data,
    };
    await axios
      .request(config)
      .then((response) => {
        generatedImageUrl = response.data.data[0].url;
        console.log(generatedImageUrl);
        res.status(200).json({ imageUrl: generatedImageUrl });
      })
      .catch((error) => {
        console.log(error);
      });

    // Extract the image URL from the OpenAI API response

    // Return the generated image URL in the response
  } catch (error) {
    console.error("Error generating image:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
