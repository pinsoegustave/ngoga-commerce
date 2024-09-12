function convertToEmbedLink(youtubeUrl) {
  // Regular expression to match the video ID in the URL
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|youtu\.be\/([a-zA-Z0-9_-]+)/;

  // Match the URL and extract the video ID
  const match = youtubeUrl.match(regex);

  // Extract the video ID from either capture group 1 or 2
  const videoId = match ? (match[1] || match[2]) : null;

  if (videoId) {
    // Construct the embed URL
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return embedUrl;
  } else {
    return 'Invalid YouTube URL';
  }
}

// Example usage
const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const embedLink = convertToEmbedLink(youtubeUrl);
console.log(embedLink); // Outputs: https://www.youtube.com/embed/dQw4w9WgXcQ
