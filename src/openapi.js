require("dotenv").config();
const axios = require("axios");

const openaiAPI = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
});

const translatePokemonName = async (name) => {
  try {
    const response = await openaiAPI.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Translate the Pokémon name "${name}" to French.`,
        },
      ],
    });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error(
      "Erreur lors de l'appel à l'API OpenAI:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

module.exports = { translatePokemonName };
