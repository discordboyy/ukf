// src/components/Carousel.jsx
import { useEffect, useRef, useState } from "react";

// styles
import "../style/style.css";
import "../style/kurs.css";
import "../style/new-kurs.css";
import "../style/modal.css";
import "../style/slick.css";

// imports 
import modalRight from "../assets/nav-right.svg";
import modalLeft from "../assets/nav-left.svg";

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
        <button className="slick-prev" onClick={prevSlide}>
          <img src={modalLeft} alt="Prev" />
        </button>

        <button className="slick-next" onClick={nextSlide}>
          <img src={modalRight} alt="Next" />
        </button>
      </div>

      {modalOpen && (
        <div id="imageModal" className="modal show" onClick={closeModal}>

          <span
            id="modalClose"
            className="modal-close"
            onClick={closeModal}
          >
            ×
          </span>

          {/* LEFT ZONE */}
          <div className="modal-zone left" onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}>
            <img src={modalLeft} alt="Prev" />
          </div>

          {/* IMAGE */}
          <img
            id="modalImage"
            src={images[modalIndex]}
            alt={`Modal ${modalIndex}`}
            onClick={(e) => e.stopPropagation()}
          />

          {/* RIGHT ZONE */}
          <div className="modal-zone right" onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}>
            <img src={modalRight} alt="Next" />
          </div>

        </div>
      )}
    </>
  );
}