# Email Spammer 

This Node.js application serves as a pentesting tool designed to help test and evaluate the effectiveness of email spam filters. It uses the Floodmail API to send controlled email floods, allowing users to assess how well their email systems detect and manage unsolicited emails.

## Prerequisites

Ensure you have the following installed:
- Node.js
- npm

Node.js and npm can be downloaded from [nodejs.org](https://nodejs.org/).

## Installation

Clone this repository and install its dependencies:

```bash
git clone https://github.com/yourusername/email-spammer.git
cd email-spammer
npm install
```

## Configuration

Before running the application, you must obtain an API key from [Floodmail.net](https://floodmail.net). This key will allow you to interact with the Floodmail API responsibly.

### Set API Key and Username

Open the application code and set your Floodmail username and API key:

```javascript
let floodMailKey = "YOUR_API_KEY_HERE"; // Replace with your Floodmail API key
let floodMailUser = "YOUR_USERNAME_HERE"; // Replace with your Floodmail username
```

## Usage

To use the tool to test an email's spam filter, simply run the script with Node.js:

```bash
node app.js
```

This will execute a predefined email flood test against the email address specified in the script.

### Modify Test Parameters

You can modify the target email and other parameters directly in the script:

```javascript
let email = "testEmail@gmail.com"; // Target email address
sendFlood(email);
```
![Email Flood Testing GIF](https://cdn.discordapp.com/attachments/838974791716962304/1236784985357422652/uRM7rHe-1-ezgif.com-video-to-gif-converter.gif?ex=66394546&is=6637f3c6&hm=bf604298fa3d0bdcce8652ec39ae81dd5dbf2a0e6bd60808c95386e22961ce77)

## Responsible Use

**This tool is intended for security testing and educational purposes only.** Use this tool only on systems you have permission to test. Unauthorized use of this tool against third-party email addresses without consent is illegal and unethical.

## Support

For support, please open an issue on the GitHub repository.
