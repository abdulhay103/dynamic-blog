const NextAuth = "next-auth";
const { authOptions } = "@/utils/authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
