Caffiend - Coffee Tracking for Coffee Fiends

Caffiend is an app designed for coffee enthusiasts to track their caffeine intake and measure their blood caffeine levels. Whether you're an occasional coffee drinker or a true coffee fiend, Caffiend helps you keep track of your consumption and quantify your addiction.
Features

    ✅ Track every coffee consumed.
    ✅ Measure your blood caffeine levels based on time since consumption.
    ✅ Cost and quantify your caffeine addiction, so you can see exactly how much you're spending and consuming.

Did you know that caffeine's half-life is about 5 hours? After 5 hours, half of the caffeine you consumed is still in your system, helping keep you alert longer. For example, if you drink a cup of coffee with 200mg of caffeine, 5 hours later, you'll still have about 100mg of caffeine in your system!

Start tracking your coffee consumption today with Caffiend!
Table of Contents

    Installation
    Firebase Setup
    App Configuration
    Running the App
    API Endpoints
    Contributing
    License

Installation

To get started with Caffiend, follow these steps:
1. Clone the Repository

        git clone https://github.com/your-username/caffiend.git
        cd caffiend

2. Install Dependencies

For the frontend, use npm or yarn to install dependencies:

        npm install

        or
        
        yarn install

For the backend, ensure you have Firebase SDK set up and configured as explained in the Firebase Setup section below.
Firebase Setup
1. Create a Firebase Project

If you haven't already, create a Firebase project:

    Go to Firebase Console.
    Click on "Add Project" and follow the instructions.

2. Configure Firebase Authentication and Database

    Enable Firebase Authentication with the necessary sign-in methods (e.g., Email/Password, Google, etc.).
    Set up Firestore as the database for storing user data, coffee logs, and caffeine levels.
    Install Firebase in the backend:

    npm install firebase

3. Firebase Configuration

In your project, create a .env file to store your Firebase credentials. Here's an example configuration for the .env file:

        VITE_FIREBASE_API_KEY=your-firebase-api-key
        VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
        VITE_FIREBASE_PROJECT_ID=your-project-id
        VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
        VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
        VITE_FIREBASE_APP_ID=your-app-id

Ensure that the Firebase config in your frontend matches your Firebase credentials.
App Configuration
1. Frontend Configuration

In the frontend code, update the Firebase config to match the credentials in your .env file. Here's an example of how to set up Firebase:

import { initializeApp } from 'firebase/app';

        const firebaseConfig = {
          apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
          authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
          projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
          storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
          appId: import.meta.env.VITE_FIREBASE_APP_ID,
        };

const app = initializeApp(firebaseConfig);


Running the App

To run the application locally, follow these steps:

    npm run dev

    Navigate to http://localhost:5173 in your browser to view the app.


Contributing

We welcome contributions! Here's how you can contribute to Caffiend:

    Fork the repository.
    Create a new branch (git checkout -b feature-name).
    Make your changes.
    Commit your changes (git commit -m 'Add feature').
    Push to your fork (git push origin feature-name).
    Open a pull request.

License

Caffiend is open-source and released under the MIT License.
