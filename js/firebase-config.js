/* LaundryKu Finance — Firebase init
 * Uses the "compat" SDK so it works as plain <script> tags, no build step needed.
 */

const firebaseConfig = {
  apiKey: "AIzaSyCnHcz9rTfqu6LIRwIkjmPoy5uNelVkFww",
  authDomain: "laundryku-finance.firebaseapp.com",
  projectId: "laundryku-finance",
  storageBucket: "laundryku-finance.firebasestorage.app",
  messagingSenderId: "713055914165",
  appId: "1:713055914165:web:60c55290861b3a5a9d96fc",
  measurementId: "G-RKN78CC0DD"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();

// Offline-first: cache data locally so the app still works without internet,
// and syncs automatically once the connection comes back.
fs.enablePersistence({ synchronizeTabs: true }).catch((err) => {
  console.warn("Firestore offline persistence not available:", err.code);
});

// --- Cloudinary (photo storage for laundry item photos) ---
// TODO: replace with your own Cloud name + unsigned upload preset
// from cloudinary.com → Settings → Upload → Upload presets.
const CLOUDINARY_CLOUD_NAME = "jvcpln9q";
const CLOUDINARY_UPLOAD_PRESET = "laundryku_photos";
