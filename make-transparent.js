import { Jimp } from 'jimp';

async function main() {
  console.log("Loading image...");
  const image = await Jimp.read('public/astronaut.png');
  console.log("Image loaded.");
  
  const tolerance = 25; // Anything darker than this on all channels is considered background

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    
    // Check if pixel is close to black
    if (red < tolerance && green < tolerance && blue < tolerance) {
      this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
    }
  });

  await image.write('public/astronaut-transparent.png');
  console.log("Saved transparent image.");
}

main().catch(console.error);
