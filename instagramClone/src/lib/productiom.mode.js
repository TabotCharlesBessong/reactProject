
// development mode
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read;
//       allow write: if request.auth.uid != null
//     }
//   }
// }