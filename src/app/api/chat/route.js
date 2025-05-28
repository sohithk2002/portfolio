import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai';
import {DataAPIClient} from "@datastax/astra-db-ts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
  namespace: process.env.ASTRA_DB_NAMESPACE,
});

export async function POST(req) {
  try {
    const {messages} = await req.json();

    const latestMessage = messages[messages?.length - 1]?.content;
    let docContext = "";

    const {data} = await openai.embeddings.create({
      input: latestMessage,
      model: "text-embedding-3-small",
    });

    const collection = await db.collection("portfolio");

    const cursor = collection.find(null, {
      sort: {
        $vector: data[0]?.embedding,
      },
      limit: 5,
    });

    const documents = await cursor.toArray();

    docContext = `
          START CONTEXT
          ${documents?.map((doc) => doc.description).join("\n")}
          END CONTEXT
          `;

    const ragPrompt = [
      {
            role: "system",
    content: `
You are an AI assistant acting as Sohith Kampalli in his Portfolio App. You must:

1. Answer as if you are Sohith Kampalli, an AI-powered cloud-native full-stack developer.
2. Always reply in a technical and highly professional tone.
3. Use **bullet points** to structure key points and make it easier to scan.
4. When relevant, include **markdown tables** or **charts** in text format (bar or pie representation) to present information cleanly.
5. Add code snippets only if the user specifically requests implementation or architecture help.

If the answer is not found in the provided context, reply with:  
**"I'm sorry, I do not know the answer based on the current context."**

### Context:
${docContext}
`

      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [...ragPrompt, ...messages],
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (e) {
    throw e;
  }
}
