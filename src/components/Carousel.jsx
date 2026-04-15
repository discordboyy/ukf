// src/components/Carousel.jsx
import { useEffect, useRef, useState } from "react";
import "../style/kurs.css";

export default function Carousel({ images }) {
  const previewRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Показываем конкретный слайд
  const showSlide = (index) => {
    const slides = previewRef.current.querySelectorAll(".slide");
    slides.forEach((s, i) => {
      s.style.display = i === index ? "block" : "none";
    });
  };

  useEffect(() => {
    showSlide(0);
  }, [images]);

  const nextSlide = () => {
    const slides = previewRef.current.querySelectorAll(".slide");
    const newIndex = (modalIndex + 1) % slides.length;
    setModalIndex(newIndex);
    showSlide(newIndex);
  };

  const prevSlide = () => {
    const slides = previewRef.current.querySelectorAll(".slide");
    const newIndex = (modalIndex - 1 + slides.length) % slides.length;
    setModalIndex(newIndex);
    showSlide(newIndex);
  };

  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="carousel-preview" ref={previewRef}>
        {images.map((src, index) => (
          <div className="slide" key={index} onClick={() => openModal(index)}>
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
        <button className="slick-prev" onClick={prevSlide}>‹</button>
        <button className="slick-next" onClick={nextSlide}>›</button>
      </div>

      {modalOpen && (
        <div id="imageModal" className="modal show" onClick={closeModal}>
          <span id="modalClose" className="modal-close" onClick={closeModal}>×</span>
          <img
            id="modalImage"
            src={images[modalIndex]}
            alt={`Modal ${modalIndex}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button id="modalPrev" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>‹</button>
          <button id="modalNext" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>›</button>
        </div>
      )}
    </>
  );
}