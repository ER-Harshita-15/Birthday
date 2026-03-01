import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlipBookProps {
  pages: React.ReactNode[];
}

export function FlipBook({ pages }: FlipBookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);

  const totalPages = pages.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  };

  return (
    <div className="flipbook-container">
      <div className="book-wrapper">
        {/* Book shadow */}
        <div className="book-shadow"></div>

        {/* The book */}
        <div className="book">
          {/* Current page */}
          <div className={`page page-current ${isFlipping && flipDirection === 'next' ? 'flipping-next' : ''} ${isFlipping && flipDirection === 'prev' ? 'hidden' : ''}`}>
            {pages[currentPage]}
          </div>

          {/* Next page */}
          {currentPage < totalPages - 1 && (
            <div className={`page page-next ${isFlipping && flipDirection === 'next' ? 'visible' : ''}`}>
              {pages[currentPage + 1]}
            </div>
          )}

          {/* Previous page */}
          {currentPage > 0 && (
            <div className={`page page-prev ${isFlipping && flipDirection === 'prev' ? 'flipping-prev' : ''}`}>
              {pages[currentPage - 1]}
            </div>
          )}

          {/* Animated flipping page - forward */}
          {isFlipping && flipDirection === 'next' && (
            <div className="page page-flip page-flip-next">
              <div className="page-flip-front">{pages[currentPage]}</div>
              <div className="page-flip-back">{pages[currentPage + 1]}</div>
            </div>
          )}

          {/* Animated flipping page - backward */}
          {isFlipping && flipDirection === 'prev' && (
            <div className="page page-flip page-flip-prev">
              <div className="page-flip-front">{pages[currentPage]}</div>
              <div className="page-flip-back">{pages[currentPage - 1]}</div>
            </div>
          )}
        </div>

        {/* Book spine decoration */}
        <div className="book-spine"></div>
      </div>

      {/* Navigation controls */}
      <div className="navigation-controls">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0 || isFlipping}
          className="nav-button nav-prev"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="page-indicator">
          <span className="page-number">{currentPage + 1}</span>
          <span className="page-divider">/</span>
          <span className="total-pages">{totalPages}</span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
          className="nav-button nav-next"
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
