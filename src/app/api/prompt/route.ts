import Prompt from '@/models/prompts';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
