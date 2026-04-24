// src/components/Image.jsx

export default function Image({ src, alt = "", ...props }) {
  const avif = src
    .replace("/kurs-bilder/", "/avif/")
    .replace(/\.(jpg|jpeg|png)$/i, ".avif");

  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </picture>
  );
}