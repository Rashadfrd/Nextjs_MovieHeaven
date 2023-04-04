import NextAuth from "next-auth"
import { connectMongo } from "@/database/conn";
import Users from "@/schemas/model";
import { compare } from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [  
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name:'Credentials',
      async authorize(credentials, req){
        connectMongo().catch(error => { error: "Connection Failed...!"})

        // check user existance
        const result = await Users.findOne( { userName : credentials.userName})
        if(!result){
            throw new Error("No user Found with Email Please Sign Up...!")
        }

        // compare()
        const checkPassword = await compare(credentials.password, result.password);
        
        // incorrect password
        if(!checkPassword || result.userName !== credentials.userName){
            throw new Error("Username or Password doesn't match");
        }

        return result;

      }
    })
],
  secret:'Kt8oDfrGdPyCz9X9jLpC8bZt3lZm50O/wj0CwELFy0s=',
  pages: {
    signIn: '/login',
  }
}

export default NextAuth(authOptions)