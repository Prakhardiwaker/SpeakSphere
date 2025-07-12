import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_URI;
const apiSecret = process.env.STREAM_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or SECRET key is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting stream user", error);
  }
};

// to do it later
export const generateStreamToken = (userId) => {
  try {
    //ensure userId is in String format
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream Token", error);
  }
};
