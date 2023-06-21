import User from '@/models/users';
import { connectToDB } from '@/utils/connectToDB';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      //! store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user?.email });
      session.user.id = sessionUser._id;
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        //! check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        //! if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(' ', '').toLowerCase(),
            image: profile?.image,
          });
        }

        return true;
      } catch (error) {
        console.log(
          'Error checking if user exists: ',
          (error as Error).message
        );
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
