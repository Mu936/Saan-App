# 🔥 Firestore Security Rules Setup

## Problem: "Failed to create chat" Error

The chat functionality is failing because your Firestore database has restrictive security rules that don't allow authenticated users to create chat documents.

## ✅ Quick Fix

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: saan-b14ad
3. **Go to Firestore Database**
4. **Click on "Rules" tab**
5. **Replace the existing rules** with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own profile and read other users' public info
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Chat documents - participants can read/write
    match /chats/{chatId} {
      allow read, write: if request.auth != null &&
        request.auth.uid in resource.data.participants;
      allow create: if request.auth != null &&
        request.auth.uid in request.resource.data.participants;
    }

    // Messages - anyone authenticated can read/write (simplified for now)
    match /messages/{messageId} {
      allow read, write: if request.auth != null;
    }

    // Opportunities are readable by all authenticated users
    match /opportunities/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }

    // Courses are readable by all authenticated users
    match /courses/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }

    // User progress is private to each user
    match /userProgress/{document} {
      allow read, write: if request.auth != null &&
        (resource.data.userId == request.auth.uid ||
         request.resource.data.userId == request.auth.uid);
    }

    // Emergency broadcasts
    match /emergencies/{document} {
      allow read, create: if request.auth != null;
    }
  }
}
```

6. **Click "Publish"**

## 🧪 Alternative: Test Mode (Temporary)

If you want to test quickly, you can temporarily use these **INSECURE** rules (don't use in production):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    allow read, write: if request.auth != null;
  }
}
```

## ✅ After Updating Rules

1. Go back to your SAAN app
2. Try creating a chat again
3. The error should be resolved!

## 🔄 Switch Back to Production Mode

Once the rules are updated, you can switch back to production mode in `src/lib/firebase.ts`:

```typescript
const isDevelopmentMode = false; // Change back to false
```

This will enable real Firebase chat with your updated security rules.
