import { Web3InboxClient } from "@web3inbox/core";
import { signMessage } from "@wagmi/core";

const client = await Web3InboxClient.init({ projectId: process.env.projectId });

const account = "eip155:1:0x9AfEaC202C837df470b5A145e0EfD6a574B21029";

// Set the account to a CAIP-10 account ID
await client.setAccount(account);

const { message, registerParams } = await client.prepareRegistration({
  account,
});
const { signature } = await signMessage(message);
await client.register({ signature, registerParams });

// Get the current notification subscription or watch for updates
const subscription = client.getSubscription();
client.watchSubscription((subscription) => console.log({ subscription }));

// Subscribe to the app
await client.subscribeToDapp();

// Get notification history
const notificationsPerPage = 5;
const isInfiniteScroll = true;

client.pageNotifications(
  notificationsPerPage,
  isInfiniteScroll,
)((notifications) => {
  // add logic to display notifications here.
  //if isInfiniteScroll is true, notifications will contain all notifications fetched so far, else it will only fetch current page
});
