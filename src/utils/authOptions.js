import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import dbConnect from "./dbConnect";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  provider: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await dbConnect();
        const { email, password } = credentials;
        const user = await UserActivation.findOne({ email });
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!user) {
          throw new Error("Invalid email or password");
        }
        if (!user.password) {
          throw new Error("Please login via the method you used to signup");
        }
        if (!isPasswordMatch) {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
};
