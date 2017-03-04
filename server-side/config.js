export default {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: ''
};

/** GETTING STARTED WITH FIREBASE:
    1)  Create a new project:
        *   Sign into firebase with a Google account
            (https://firebase.google.com/).
        *   Click 'Go to console'.
        *   Click 'Create new project'.
        *   Name your project.
    2)  Add config details to this file:
        *   Click 'Add Firebase to your web app'.
        *   Populate the below fields with your project-specific information.
    3)  Enable basic authentication.
        *   In your project's console, click on 'Authentication' under
            'Develop', in the left-hand menu.
        *   Click on the edit pencil on the right side of the row,
            'Email/Password'.
        *   Toggle the 'Enable' slider.
        *   Click 'Save'.
    4)  Update database rules to only allow a user to access/edit their own
        information.
        *   In your project's console, click on 'Database' under
            'Develop', in the left-hand menu.
        *   Click on the 'Rules' tab under 'Realtime Database' at the top
            of the page.
        *   Update the existing rules to the following:
                {
                    "rules": {
                        "users": {
                            "$uid": {
                                ".read": "$uid === auth.uid",
                                ".write": "$uid === auth.uid"
                            }
                        }
                    }
                }
        *   Click 'Publish'.
 */
