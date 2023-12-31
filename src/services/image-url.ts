import noImage from "@/assets/no-image-placeholder.webp";

const transformToCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const insertionPoint = url.indexOf(target) + target.length;

  return (
    url.slice(0, insertionPoint) + "crop/600/400/" + url.slice(insertionPoint)
  );
};

export default transformToCroppedImageUrl;
