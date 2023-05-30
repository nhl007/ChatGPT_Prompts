import Prompt from '@/models/prompts';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async (request: Request, { id }: params) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: id }).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompts created by user', {
      status: 500,
    });
  }
};
