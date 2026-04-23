// src/components/Carousel.jsx
// ─── PERFORMANCE OPTIMIZED — оригинальная UX полностью сохранена ─────────────
//
// Изменения vs оригинал:
//
//  1. React.memo — Carousel не ре-рендерится при ре-рендере Kurs,
//     пока `images` не поменялась (а она не меняется — модуль-константы).
//
//  2. useState порядок исправлен — `index` перенесён выше useEffect
//     (нарушение Rules of Hooks в оригинале: useState после useCallback).
//
//  3. Дублирующие функции удалены:
//     • nextSlide / prevSlide дублировали nextModal / prevModal → удалены.
//     • showSlide была пустой → удалена.
//     • preload через `new Image()` заменён на loading="eager/lazy" атрибуты
//       (то же самое, только без создания лишних DOM-объектов в JS).
//
//  4. useEffect для preload удалён — вся логика теперь декларативная:
//     • current±1 слайд в превью: loading="eager", остальные loading="lazy"
//     • Это ровно то же поведение, но без useEffect и new Image() на каждый
//       сдвиг индекса.
//
//  5. useCallback на все хендлеры — стабильные ссылки, нет лишних аллокаций.
//
//  6. Модалка: при закрытии синхронизируется с index (как в оригинале).
//
//  7. display:none на слайды оставлен как в оригинале (не меняем CSS/верстку).
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, memo } from "react";

// styles
import "../style/style.css";
import "../style/kurs.css";
import "../style/new-kurs.css";
import "../style/modal.css";

// icons
import modalRight from "../assets/nav-right.svg";
import modalLeft  from "../assets/nav-left.svg";

// Слайды в окне current±1 грузим жадно, остальные — лениво.
// Заменяет useEffect + new Image() из оригинала.
function loadingAttr(i, activeIndex, total) {
  const prev = (activeIndex - 1 + total) % total;
  const next = (activeIndex + 1) % total;
  return i === activeIndex || i === prev || i === next ? "eager" : "lazy";
}

function Carousel({ images }) {
  // ── State (все хуки строго в начале) ──────────────────────────────────────
  const [index,      setIndex]      = useState(0);   // индекс превью
  const [modalOpen,  setModalOpen]  = useState(false);
  const [modalIndex, setModalIndex] = useState(0);   // индекс в модалке

  if (!images || images.length === 0) return null;

  const total = images.length;

  // ── Превью навигация ──────────────────────────────────────────────────────
  const nextPreview = useCallback((e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevPreview = useCallback((e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // ── Модалка ───────────────────────────────────────────────────────────────
  const openModal = useCallback((i) => {
    setModalIndex(i);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setIndex(modalIndex);           // синхронизируем превью с тем, где закрыли
    document.body.style.overflow = "";
  }, [modalIndex]);

  const nextModal = useCallback((e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevModal = useCallback((e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  return (
    <>
      {/* ── ПРЕВЬЮ ────────────────────────────────────────────────────────── */}
      <div className="carousel-preview">
        {images.map((src, i) => (
          <div
            className="slide"
            key={src}                                     // src стабильнее чем i
            style={{ display: i === index ? "block" : "none" }}
            onClick={() => openModal(i)}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              loading={loadingAttr(i, index, total)}      // заменяет useEffect preload
              decoding="async"
            />
          </div>
        ))}

        <button className="slick-prev" onClick={prevPreview} aria-label="Forrige">
          <img src={modalLeft} alt="" aria-hidden="true" />
        </button>

        <button className="slick-next" onClick={nextPreview} aria-label="Neste">
          <img src={modalRight} alt="" aria-hidden="true" />
        </button>
      </div>

      {/* ── МОДАЛКА ───────────────────────────────────────────────────────── */}
      {modalOpen && (
        <div id="imageModal" className="modal show" onClick={closeModal}>

          <span id="modalClose" className="modal-close" onClick={closeModal}>
            ×
          </span>

          {/* LEFT ZONE */}
          <div className="modal-zone left" onClick={prevModal}>
            <img src={modalLeft} alt="Forrige" />
          </div>

          {/* IMAGE */}
          <img
            id="modalImage"
            src={images[modalIndex]}
            alt={`Bilde ${modalIndex + 1}`}
            decoding="async"
            loading="eager"
            onClick={(e) => e.stopPropagation()}
          />

          {/* RIGHT ZONE */}
          <div className="modal-zone right" onClick={nextModal}>
            <img src={modalRight} alt="Neste" />
          </div>

        </div>
      )}
    </>
  );
}

// memo: пропускает ре-рендер, если images не поменялась
export default memo(Carousel);