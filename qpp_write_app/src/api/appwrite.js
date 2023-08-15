
// import { Client } from "appwrite";

// const appwrite = new Client();
// appwrite
//   .setEndpoint("https://cloud.appwrite.io/v1") // Set your endpoint
//   .setProject("64ba72be556d9cf87939"); // Your Appwrite Project UID
// export const api = {
//   loginWithGoogle: async () => {
//     try {
//       await appwrite.account.createOAuth2Session(
//         "google",
//         "http://localhost:5173/dashboard/",
//         "http://localhost:5173/"
//       );
//     } catch (error) {
//       throw error;
//     }
//   },
// };

import { Client,Account,ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64ba72be556d9cf87939");


const account = new Account(client)

// Register User
account.create(
  ID.unique(),
  'charlestabot@gmail.com',
  'hello1234$',
  'Tabot Charles'
).then(response => {
  console.log(response)
},error => {
  console.log(error)
})

// subscribing to the account creation
client.subscribe('files',response => {
  if(response.events.includes('buckets.*.files.*.create')) {
    console.log(response.payload)
  }
})