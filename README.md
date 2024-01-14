
---

# ChatGPT React Native App

## Introduction

Welcome to the ChatGPT React Native App! This mobile application allows users to interact with OpenAI's GPT-3.5 Turbo model through a chat interface. Before you get started, make sure you have your OpenAI API key handy.

## Prerequisites

- Node.js and npm installed
- React Native CLI installed
- OpenAI API Key (Sign up at https://platform.openai.com/api-keys)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/SarangaChamod/ChatGPT--Original_Copy.git
   cd ChatGPT--Original_Copy
   ```

2. Create a `.env` file in the root directory:

   ```env
   OPEN_AI_KEY=your_openai_api_key_here
   ```

   Replace `your_openai_api_key_here` with your actual OpenAI API key.

3. Install dependencies:

   ```
   npm install
   ```

4. Start the React Native development server:

   ```
   npm start
   ```

5. Open the app on your emulator or physical device.

## Configuration

In the `MainScreen.js` file, ensure that the `localhost`  matches the local IP address or hostname where your React Native development server is running. This information can be found in the output when you start the server with `npm start`.

## Usage

Once the app is running, you can start chatting with the ChatGPT model. Input your text in the chat interface, and the model will generate responses based on the conversation history.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

