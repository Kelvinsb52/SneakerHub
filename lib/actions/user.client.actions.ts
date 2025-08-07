'use client';
import { Client, Account } from 'appwrite';
import { signInProps } from "@/types";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log("Session created from client:", session);
    return session;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
};


export const getLoggedInUser = async () => {
  try {
    console.log("getLoggedInUser function firing...")
    return await account.get();
  } catch (error) {
    console.error("Get user error:", error);
    return null;
  }
};

export const logoutAccount = async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.error("Logout error:", error);
  }
};