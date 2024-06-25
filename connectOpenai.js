import OpenAI from "openai";



async function connect(mood) {
    const api_key = process.env.NEXT_PUBLIC_OPENAI_KEY; 

   
    const openai = new OpenAI({apiKey: api_key, dangerouslyAllowBrowser: true})

    const context = `recommend me 5 popular songs for this mood: ${mood} in a VALID json format like this {"songs": [{"track": "Happy", "artist": "Pharrell Williams", "album": "G I R L", "year": 2013}]}, make sure to include the track, artist ,album,and year, don't put quotes around the year, don't put your response in quotes` ;

   
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are a helpful assistant. " + context }],
    });

    return completion.choices[0].message.content;
}

export default connect;


