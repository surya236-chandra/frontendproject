import fs from 'fs';
import https from 'https';

const url = "https://www.pngall.com/wp-content/uploads/13/Astronaut-PNG-Pic.png";

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Referer': 'https://www.vecteezy.com/',
  }
};

https.get(url, options, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('public/astronaut-transparent.png');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download completed successfully.');
    });
  } else {
    console.error(`Failed to download: ${res.statusCode}`);
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
});
