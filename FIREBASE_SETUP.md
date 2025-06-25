# Firebase Setup Instructions for SAAN App

## 🔥 Firebase Project Setup

1. **Go to Firebase Console**

   - Visit: https://console.firebase.google.com/
   - Click "Create a project" or "Add project"

2. **Create New Project**

   - Project name: `saan-app` (or your preferred name)
   - Enable Google Analytics (optional)
   - Choose your location/region

3. **Enable Authentication**

   - Go to Authentication > Sign-in method
   - Enable **Email/Password** provider
   - Optionally enable Google, Facebook, etc.

4. **Create Firestore Database**

   - Go to Firestore Database
   - Click "Create database"
   - Choose "Start in test mode" for now
   - Select your region (closest to your users)

5. **Enable Storage**

   - Go to Storage
   - Click "Get started"
   - Accept default security rules for now

6. **Get Firebase Config**
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click "Web" icon (`</>`)
   - Register app with nickname: "SAAN Web App"
   - Copy the firebaseConfig object

## 🔧 Update Your App Configuration

Replace the config in `src/lib/firebase.ts`:

\`\`\`typescript
const firebaseConfig = {
apiKey: "your-actual-api-key",
authDomain: "your-project-id.firebaseapp.com",
projectId: "your-project-id",
storageBucket: "your-project-id.appspot.com",
messagingSenderId: "your-sender-id",
appId: "your-app-id"
};
\`\`\`

## 🚀 Quick Start with Demo Data

Once configured, you can seed demo data by calling:

\`\`\`typescript
import { seedDemoData } from './src/lib/seedData';
// Call this once to populate your database
seedDemoData();
\`\`\`

## 📱 App Features Now Available

With Firebase connected:

✅ **Real User Registration & Login**
✅ **User Profile Management**
✅ **Real-time Chat** (ready to implement)
✅ **Job Opportunities Board** (with real data)
✅ **E-learning Progress Tracking**
✅ **User Statistics & Analytics**

## 🔒 Security Rules (For Production)

Update Firestore security rules:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
// Users can read/write their own profile
match /users/{userId} {
allow read, write: if request.auth != null && request.auth.uid == userId;
}

    // Opportunities are readable by all authenticated users
    match /opportunities/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null; // Add more specific rules
    }

    // Courses are readable by all authenticated users
    match /courses/{document} {
      allow read: if request.auth != null;
    }

    // User progress is private to each user
    match /userProgress/{document} {
      allow read, write: if request.auth != null &&
        resource.data.userId == request.auth.uid;
    }

}
}
\`\`\`

## 💡 Next Steps

1. **Configure Firebase** with your project credentials
2. **Test Authentication** - Create an account and login
3. **Seed Demo Data** - Run the seeder to populate opportunities and courses
4. **Customize** - Modify the app to match your exact requirements

Need help? The Firebase console provides excellent documentation and the app is ready to use once configured!
