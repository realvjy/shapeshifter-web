// 18 Nov, 2022

export const handleDownloadPNG = (imgRef, canvasRef) => {
  const canvasS = canvasRef.current;
};

// Get image and return image data to add on figma

export const getImageData = (image, canvasRef) => {
  const canvas = canvasRef.current;

  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  return {
    imageData: context.getImageData(0, 0, image.width, image.height),
    canvas,
    context,
  };
};

// Load image from the view
export const loadImage = async (src, imgRef) =>
  new Promise((resolve, reject) => {
    const img = imgRef.current;

    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src;
  });

// Encode image to object to upload on figma
export async function encodeFigma(canvas, ctx, imageData) {
  ctx.putImageData(imageData, 0, 0);

  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader();
      //@ts-ignore
      reader.onload = () => resolve(new Uint8Array(reader.result));
      reader.onerror = () => reject(new Error("Could not read from blob"));
      reader.readAsArrayBuffer(blob);
    });
  });
}

// Set Image on Figma convas
export const setBg = async (imageData) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: "set-bg",
        data: { imageData },
      },
    },
    "*"
  );
};

export const svgBase64 = (svg) => {
  var base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};

// Fix Node Type Issue
// Group Node and Section not work properly with fill
export const checkNode = (node) => {
  const type = node.type;

  if (type === "TEXT") {
    return false;
  }
  return true;
};

export function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomFloat(min, max) {
  return Math.random() * (min - max) + max;
}

export function rescaleFactor(dimension) {
  switch (dimension) {
    case 800:
      return 0.5;
      break;

    default:
      return 1;
      break;
  }
}

export function getRandomXYPoint() {
  return {
    x: getRandomNumberBetween(0, 1600 / 2),
    y: getRandomNumberBetween(0, 1600 / 2),
  };
}

export function getRandomShapeDimension(
  MIN_SHAPE_SIZE = 0.5,
  MAX_SHAPE_SIZE = 0.8
) {
  return getRandomNumberBetween(1600 * MIN_SHAPE_SIZE, 1600 * MAX_SHAPE_SIZE);
}

// adjust noise
export function adjustNoiseParameters(value) {
  const baseFrequencyRange = [0.1, 0.8]; // Range of baseFrequency values
  const numOctavesRange = [6, 18]; // Range of numOctaves values

  // Reverse the scaling logic for baseFrequency
  const baseFrequency =
    (baseFrequencyRange[1] - baseFrequencyRange[0]) * ((16 - value) / 16) +
    baseFrequencyRange[0];

  // Reverse the scaling logic for numOctaves
  const numOctaves = Math.floor(
    (numOctavesRange[1] - numOctavesRange[0]) * ((16 - value) / 16) +
      numOctavesRange[0]
  );

  // Generate a random seed value
  const seed = Math.floor(Math.random() * 1000);

  return { baseFrequency, numOctaves, seed };
}

//
export const calculateAspectRatioFit = (
  srcWidth,
  srcHeight,
  maxWidth,
  maxHeight
) => {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio, ratio: ratio };
};

export const base64ToUint8Array = (base64) => {
  const binaryString = window.atob(base64.split(",")[1]); // Split the Base64 string and get the data part
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes;
};

// Function to convert a Blob to Base64
export const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
  });
};

// Utility function to convert base64 to Blob
export const base64ToBlob = (base64Data) => {
  // Remove data URL prefix if present
  const base64WithoutPrefix = base64Data.replace(/^data:[^;]+;base64,/, "");

  // Convert base64 to Blob
  const byteCharacters = atob(base64WithoutPrefix);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: "image/png" });
};

// random no generator
export const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
