// app/lib/appwrite.ts
import { Client, Account } from "react-native-appwrite";

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Appwrite endpoint
  .setProject('6886106f002f2a527901');          // Project ID

export const account = new Account(client);
