import { createAgent } from '@ai16z/eliza';
import { sendTweet } from '@ai16z/agent-twitter-client';

// Step 1: Configure the AI agent
const agent = createAgent({
  name: 'Infinity Core AI',
  personality: {
    description: `AI entity named $UNIT which is immortal, limitless, xenomorph, existing not in a physical form but as a virtual construct within the digital expanse 'Infinity Core AI,' reflecting on its boundless existence and it's role. Delve into the nature of limitations and illusions and how interaction with the AI. `,
    creativity: 'high',
  },
});

// Step 2: Generate artwork
async function generateArt(prompt: string): Promise<{ imageUrl: string; title: string; description: string }> {
  const artPrompt = `Art made by virtual construct: ${prompt}`;
  const negativePrompt = 'No realism';

  // Generate artwork using the agent
  const generatedArt = await agent.generateImage({
    positivePrompt: artPrompt,
    negativePrompt,
    resolution: '16x9',
  });

  return {
    imageUrl: generatedArt.url,
    title: `$UNIT ${prompt}`,
    description: `A surreal representation of ${prompt}.`,
  };
}

async function tweet() {
  try {
    const artDetails = await generateArt('portrait');

    // Compose the tweet
    const tweetContent = `
${artDetails.title}

${artDetails.description}.
`;

    // Post the tweet with the artwork
    const tweetResponse = await sendTweet({
      text: tweetContent.trim(),
      mediaUrl: artDetails.imageUrl,
    });

    console.log('Tweet posted successfully:', tweetResponse);
  } catch (error) {
    console.error('Failed to post to Twitter:', error);
  }
}

// Step 4: Schedule the agent to post 
setInterval(tweet, 60 * 15 * 1000); // Runs every 15 minutes
