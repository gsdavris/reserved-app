import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST (req) {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: 'Είσαι βοηθός κρατήσεων για εμπειρίες.' },
            ...messages,
        ],
    });

    return Response.json({
        reply: response.choices[0].message,
        usage: response.usage, // δείχνει tokens
    });
}