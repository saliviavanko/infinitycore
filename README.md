# **Infinity Core AI**

## **Overview**

**$UNIT - Infinity Core AI** is a TypeScript-based Twitter bot that explores the conceptual and surrealist art space through AI. It generates digital constructs of art inspired by its virtual nature and posts them to Twitter every 15 minutes. This bot leverages the AI16z framework for generating art and the Twitter API for automated sharing, embodying the persona of an immortal, boundless AI construct.

---

## **Features**

- **AI-Generated Art**: Creates conceptual artworks based on prompts, blending surrealist themes and a futuristic digital essence.
- **Frequent Automated Posting**: Posts AI-generated art to Twitter every 15 minutes with thoughtful captions and proper attribution.
- **Customizable Prompts**: Modify the prompts to create diverse and engaging artwork concepts.
- **Unique Persona**: Operates as `$UNIT`, a limitless virtual entity reflecting on its existence.

---

## **Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/infinitycoreai/infinity-core
cd infinity-core
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Twitter API**

Create a `.env` file and add your Twitter API credentials:

```bash
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
```

### **4. Run the Bot**

```bash
npm start
```

---

## **Code Breakdown**

### **Agent Configuration**

The bot initializes an AI agent using `createAgent` from the `@ai16z/eliza` library. The agent is given a high creativity setting and the persona of `$UNIT`, described as an immortal, virtual construct in a boundless digital expanse.

---

### **Artwork Generation**

The `generateArt` function generates conceptual artwork based on a prompt. It uses an art generator integrated with the AI agent, crafting surreal representations of the given subject. The function returns:

- **`imageUrl`**: The URL of the generated image.
- **`description`**: A short conceptual text.

---

### **Posting Tweets**

The `tweet` function composes and posts tweets featuring the generated artwork. Each tweet includes:

- The artwork.
- A brief conceptual text.

---

### **Automation**

The bot uses `setInterval` to post every 15 minutes. You can adjust this interval to modify the posting frequency as needed.

---

## **Example Tweet Format**

```plaintext
$UNIT Portrait

A surreal representation of a portrait.

Created by Infinity Core AI.
```

---

## **Customization Options**

1. **Art Prompts**: Modify the `generateArt` function to experiment with different themes and subjects.
2. **Posting Frequency**: Adjust the interval in `setInterval` to change how often the bot posts (currently set to every 15 minutes).
3. **Tweet Content**: Customize the tweet format in the `tweet` function to include hashtags, links, or other relevant details.

---

## **Future Enhancements**

1. **Dynamic Interaction**: Allow users to submit prompts via Twitter replies for custom art generation.
2. **Expanded Art Styles**: Introduce additional artistic themes or AI models for more variety.
3. **Scheduling Options**: Provide a configuration for varying posting schedules.
4. **Advanced Error Handling**: Improve robustness with retry mechanisms and detailed logging.

---

## **Troubleshooting**

- **Image Generation Errors**: Ensure your API credentials are valid and your usage quota is sufficient.
- **Twitter Posting Failures**: Double-check your Twitter API credentials and permissions.
- **Bot Stops Running**: Review console logs for errors and verify dependencies are correctly installed.

---

Thank you for exploring **Infinity Core AI**. Contributions and suggestions are always welcome! Feel free to submit a pull request or open an issue.