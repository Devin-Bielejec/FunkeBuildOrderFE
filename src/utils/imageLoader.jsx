// src/utils/imageLoader.js

const images = import.meta.glob("../images/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const loadImage = (imageName) => {
  return images[`../images/${imageName}`]?.default;
};

export default loadImage;
