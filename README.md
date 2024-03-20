# Virtuoso AI
## A web application for generating imaginative images using the DALL-E AI model based on user prompts

### 📌 Table of Contents
 * [Features](#features)
 * [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Deployment](#deployment)
* [Snippets](#snippets)
* [Note on OpenAI Policy Changes](#note-on-openai-policy-changes)
* [Acknowledgments](#acknowledgments)

<a id="features"></a>
### ✨ Features
- Image Generation: Create custom images by providing prompts to the DALL-E model.
- Community Showcase: Browse through a collection of imaginative images shared by the Virtuoso AI community.
- Seamless Integration: Utilize the user-friendly interface to effortlessly interact with the image generation capabilities.

<a id="installation"></a>
### 🛠️ Installation
1. Clone the repository  `git clone https://github.com/yourusername/virtuoso-ai.git`
2. Navigate to the project directory `cd virtuoso-ai`
3. Installing Dependencies `npm install`
4. Set up environment variables:
   1. Create a `.env` file in the root directory.
   2. Add the following variables:
      ```bash
      PORT=8080
      MONGODB_URL=<your MongoDB connection URL>
      CLOUDINARY_CLOUD_NAME=<your Cloudinary cloud name>
      CLOUDINARY_API_KEY=<your Cloudinary API key>
      CLOUDINARY_API_SECRET=<your Cloudinary API secret>
      OPENAI_API_KEY=<your OpenAI API key>
      ```
5. Start the server (backend): `npm start`
6. Start the frontend:
   ``` bash
   cd client
   npm run dev
   ```
7. Navigate to http://localhost:8080 in your browser to access the application.

<a id="technologies-used"></a>
### 💻 Technologies Used
- Backend
  - **Node.js**
  - **Express.js**: A Node.js Framework, for handling HTTP requests and routes.
  - **MongoDB**: A NoSQL database used for storing post data.
  - **Mongoose**: used for data modeling and schema validation(for MongoDB).
  - **OpenAI**: An API used for generating images.
- Frontend
  - **React**: A JavaScript library for building user interfaces.
  - **React Router**: Used for managing navigation(React Library).
  - **Tailwind CSS**: A CSS framework.
- Other
  - **Cloudinary**: A cloud service, used for image uploading.
  - **FileSaver**: A library for saving files on the client side.

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>  
  <img src="https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg" alt="gridsome" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40"     height="40"/>  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" width="40" height="40"/> </p>

<a id="deployment"></a>
### 🚀 Deployment
##### To deploy Virtuoso AI to a production environment, follow these steps:
1. Set up a MongoDB database and configure the connection string.
2. Deploy the backend server to a hosting provider like Heroku or AWS.
3. Deploy the frontend React application to a static hosting service like Netlify or Vercel.
4. Configure environment variables for API keys and other sensitive information.
5. Access the deployed application at its URL.

<a id='snippets'></a>
### Snippets
- To view more snippets [Click Here]()

<a id="note-on-openai-policy-changes"></a>
### ℹ️ Note on OpenAI Policy Changes
Please note that OpenAI's policies and API structures may change over time. Some code lines may require updates to align with the latest changes from OpenAI. Be sure to keep your dependencies and codebase up to date to ensure compatibility with any updates.

<a id="acknowledgments"></a>
### 🙏 Acknowledgments
- Special thanks to OpenAI for providing access to their DALL-E model.
- Inspired by the creativity and imagination of the Open AI community.



  




