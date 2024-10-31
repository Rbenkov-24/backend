# SkillStream Backend

This is the backend server for the SkillStream project, a platform for online learning and skill development.

## Features

- RESTful API built with Node.js and Express
- MongoDB database integration using Mongoose
- YouTube API integration for fetching educational content
- User authentication system with session management
- CRUD operations for students
- Contributor management

## API Endpoints

- GET `/api/contributors`: Fetch all active contributors
- GET `/api/youtube/videos`: Fetch YouTube videos (with optional keyword search)
- POST `/api/login`: User login
- GET `/api/students`: Fetch all students
- POST `/api/students`: Add a new student
- PUT `/api/students/:id`: Update a student
- DELETE `/api/students/:id`: Delete a student
- POST `/api/logout`: User logout

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- YouTube Data API v3
- express-session for session management
- dotenv for environment variable management
- cors for Cross-Origin Resource Sharing

## Future Improvements

- Enhance security features (e.g., password hashing)
- Implement user roles and permissions
- Add more CRUD operations for courses
- Implement email verification for user registration

## Resources

- [MERN Stack Tutorial with Deployment – Beginner's Course](https://www.youtube.com/watch?v=O3BUHwfHf84)
- [Fetching All Videos of a channel | Youtube Data API V3](https://www.youtube.com/watch?v=DuudSp4sHmg)
- [How to Get YouTube API Key 2024](https://www.youtube.com/watch?v=LLAZUTbc97I)
- [Add YouTube functionality to your app](https://developers.google.com/youtube/v3)
- [YouTube Data API Tutorial - Search for Videos](https://www.youtube.com/watch?app=desktop&v=QY8dhl1EQfI)
- [Register and Login Tutorial | ReactJS, NodeJS, MySQL - Cookies, Sessions, Hashing](https://www.youtube.com/watch?v=sTHWNPVNvm8&t=381s)
- [Cookie and Session (II): How session works in express-session](https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8)
- [Session Secret Value Error](https://forum.freecodecamp.org/t/session-secret-value-error/457249)
- [Learn w/ Leon & Friends] (Discord Channel)

## Thanks

I would like to express my deepest gratitude to:

Per Scholas for providing me with this incredible opportunity to learn and grow as a developer. This transformative experience has opened new doors and possibilities in my tech career.

Kevin Dang, my classmate and friend, for his constant support and assistance throughout this project and many other projects. Your willingness to help whenever needed made a huge difference.

My instructors Colton and Abraham, whose expertise, patience, and dedication to teaching have been instrumental in my growth as a developer. Thank you for sharing your knowledge and guiding me through this journey.

All my classmates who have been an incredible source of support, inspiration, and collaboration throughout this program. Your camaraderie and willingness to help one another has created a truly enriching learning environment.

And special thanks to my dear friend of 28 years overseas, whose encouragement and help throughout my learning journey and especially with this project has been invaluable.

Your support made this possible. Thank you!