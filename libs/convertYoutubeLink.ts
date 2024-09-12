


function convertToEmbedLink(youtubeUrl: string) {
    // Regular expression to match the video ID in the URL
    const regex: RegExp = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|youtu\.be\/([a-zA-Z0-9_-]+)/;
  
    // Match the URL and extract the video ID
    const match: RegExpMatchArray | null = youtubeUrl.match(regex);
  
    // Extract the video ID from either capture group 1 or 2
    const videoId: string | null = match ? (match[1] || match[2]) : null;
  
    if (videoId) {
      // Construct the embed URL
      const embedUrl: string = `https://www.youtube.com/embed/${videoId}`;
      return embedUrl;
    } else {
      return 'Invalid YouTube URL';
    }
  };
  
  // Example usage
//   const youtubeLink: string = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
//   const embedUrl: string = convertToEmbedLink(youtubeUrl);
//   console.log(embedUrl); 
  // Outputs: https://www.youtube.com/embed/dQw4w9WgXcQ
  
export default convertToEmbedLink;