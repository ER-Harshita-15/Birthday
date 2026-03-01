import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// ========================================
// COVER PAGE
// ========================================
export function CoverPage() {
  return (
    <div className="book-page cover-page">
      <div className="cover-content">
        <div className="ornamental-border">
          <div className="decorative-corner top-left"></div>
          <div className="decorative-corner top-right"></div>
          <div className="decorative-corner bottom-left"></div>
          <div className="decorative-corner bottom-right"></div>
        </div>
        <div className="cover-text">
          <h1 className="book-title">The Story of You</h1>
          <p className="book-subtitle">A Journey Through Moments</p>
          <span className="heart-divider">❤️</span>
          <p className="book-occasion">Happy Birthday My lovely SKY</p>
          <p className="book-author">From Your MOON</p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// OPENING PAGE
// ========================================
export function OpeningPage() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 0</h2>
        <h3 className="chapter-subtitle">The Day You Were Celebrated</h3>
        <div className="image-container featured-image">
          <div className="image-wrapper" style={{ width: '100%', height: '100%' }}>
            <ImageWithFallback
              src="images/cake-cutting.jpg"
              alt="Cake cutting celebration"
              className="page-image"
            />
          </div>
        </div>
        <p className="page-text" style={{ marginTop: '0.8rem' }}>
          The smile that lights every room. Your happiness is my favourite sight.
        </p>
        <blockquote className="page-quote">
          "Some people are born and the world becomes more beautiful."
        </blockquote>
      </div>
    </div>
  );
}

// ========================================
// PREFACE
// ========================================
export function PrefacePage() {
  return (
    <div className="book-page content-page">
      <div className="page-content centered-text">
        <h2 className="section-title">Preface</h2>
        <div className="decorative-line"></div>
        <p className="page-text-large">
          This is not just a book — it is a collection of memories and pieces of my heart.
        </p>
        <p className="page-text-large">
          Every page holds a version of you — the boy you were, the man you became,
          and the person who changed my life forever.
        </p>
        <p className="page-text-large">
          You are not just a chapter in my life, you are the story itself.
        </p>
        <p className="page-text-emphasis">
          Happy Birthday to the one who makes my world complete.
        </p>
      </div>
    </div>
  );
}

// ========================================
// ACKNOWLEDGEMENT
// ========================================
export function AcknowledgementPage() {
  return (
    <div className="book-page content-page">
      <div className="page-content centered-text">
        <h2 className="section-title">Acknowledgement</h2>
        <div className="decorative-line"></div>
        <p className="page-text-large">
          Thank you for being my safe place, my happiness, and my biggest blessing.
        </p>
        <p className="page-text-large">
          Thank you for your love, patience and strength.
        </p>
        <p className="page-text-large">
          This book exists because you exist in my life.
        </p>
        <div className="heart-symbol">♥</div>
      </div>
    </div>
  );
}

// ========================================
// TABLE OF CONTENTS
// ========================================
export function TableOfContentsPage() {
  const chapters = [
    ['Chapter 1', 'The Beginning: His Childhood'],
    ['Chapter 2', 'The Home That Built Him'],
    ['Chapter 3', 'His Traditional Grace'],
    ['Chapter 4', 'Temple Memories'],
    ['Chapter 5', 'College Days'],
    ['Chapter 6', 'His Transformation'],
    ['Chapter 7', 'His Own World'],
    ['Chapter 8', 'His Power & Confidence'],
    ['Chapter 9', 'The Bold Look'],
    ['Chapter 10', 'The Rider'],
    ['Chapter 11', 'Our IIT Dream'],
    ['Chapter 12', 'Us — Our Story'],
  ];
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="section-title">Contents</h2>
        <div className="decorative-line" style={{ margin: '0.5rem 0 0.8rem' }}></div>
        <div className="toc-list">
          {chapters.map(([ch, title]) => (
            <div className="toc-item" key={ch}>
              <span className="toc-chapter">{ch}</span>
              <span className="toc-dots"></span>
              <span className="toc-title">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 1 — Childhood (9 images)
// ========================================
export function Chapter1Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 1</h2>
        <h3 className="chapter-subtitle">The Beginning: His Childhood</h3>
        <blockquote className="page-quote">"Great souls begin as innocent hearts."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-1.jpg" alt="Childhood 1" className="page-image" /></div>
            <p className="image-caption">The purest version of you</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-2.jpg" alt="Childhood 2" className="page-image" /></div>
            <p className="image-caption">Where everything began</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter1Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-3.jpg" alt="Childhood 3" className="page-image" /></div>
            <p className="image-caption">Small boy, big destiny</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-4.jpg" alt="Childhood 4" className="page-image" /></div>
            <p className="image-caption">Innocence</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-5.jpg" alt="Childhood 5" className="page-image" /></div>
            <p className="image-caption">First chapter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter1Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-6.jpg" alt="Childhood 6" className="page-image" /></div>
            <p className="image-caption">Growing up with joy</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-7.jpg" alt="Childhood 7" className="page-image" /></div>
            <p className="image-caption">Memories forever</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter1Page4() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-8.jpg" alt="Childhood 8" className="page-image" /></div>
            <p className="image-caption">The spark in your eyes</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/childhood-9.jpg" alt="Childhood 9" className="page-image" /></div>
            <p className="image-caption">The beginning of greatness</p>
          </div>
        </div>
        <p className="page-text italic-text center-text" style={{ marginTop: '1rem' }}>
          Every great person starts as a child with dreams...
        </p>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 2 — Home (11 images)
// ========================================
export function Chapter2Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 2</h2>
        <h3 className="chapter-subtitle">The Home That Built Him</h3>
        <blockquote className="page-quote">"A man is shaped by the love of his home."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-1.jpg" alt="Home 1" className="page-image" /></div>
            <p className="image-caption">Roots that shaped you</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-2.jpg" alt="Home 2" className="page-image" /></div>
            <p className="image-caption">Foundation of strength</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter2Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-3.jpg" alt="Home 3" className="page-image" /></div>
            <p className="image-caption">Warmth and belonging</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-4.jpg" alt="Home 4" className="page-image" /></div>
            <p className="image-caption">Family love</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-5.jpg" alt="Home 5" className="page-image" /></div>
            <p className="image-caption">Where you belong</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter2Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-6.jpg" alt="Home 6" className="page-image" /></div>
            <p className="image-caption">Home sweet home</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-7.jpg" alt="Home 7" className="page-image" /></div>
            <p className="image-caption">Cherished moments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter2Page4() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-8.jpg" alt="Home 8" className="page-image" /></div>
            <p className="image-caption">Love all around</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-9.jpg" alt="Home 9" className="page-image" /></div>
            <p className="image-caption">Together forever</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter2Page5() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-10.jpg" alt="Home 10" className="page-image" /></div>
            <p className="image-caption">Building memories</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/home-11.jpg" alt="Home 11" className="page-image" /></div>
            <p className="image-caption">Your foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 3 — Traditional (8 images)
// ========================================
export function Chapter3Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 3</h2>
        <h3 className="chapter-subtitle">His Traditional Grace</h3>
        <blockquote className="page-quote">"Elegance is when simplicity meets tradition."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-1.jpg" alt="Traditional 1" className="page-image" /></div>
            <p className="image-caption">Timeless charm</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-2.jpg" alt="Traditional 2" className="page-image" /></div>
            <p className="image-caption">Culture suits you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter3Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-3.jpg" alt="Traditional 3" className="page-image" /></div>
            <p className="image-caption">Classic presence</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-4.jpg" alt="Traditional 4" className="page-image" /></div>
            <p className="image-caption">Elegant grace</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-5.jpg" alt="Traditional 5" className="page-image" /></div>
            <p className="image-caption">Traditional beauty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter3Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-6.jpg" alt="Traditional 6" className="page-image" /></div>
            <p className="image-caption">Cultural pride</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-7.jpg" alt="Traditional 7" className="page-image" /></div>
            <p className="image-caption">Heritage and style</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/traditional-8.jpg" alt="Traditional 8" className="page-image" /></div>
            <p className="image-caption">Graceful elegance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 4 — Temple (6 images)
// ========================================
export function Chapter4Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 4</h2>
        <h3 className="chapter-subtitle">Temple Memories</h3>
        <blockquote className="page-quote">"Faith makes a person glow differently."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/temple-1.jpg" alt="Temple 1" className="page-image" /></div>
            <p className="image-caption">Peace within</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/temple-2.jpg" alt="Temple 2" className="page-image" /></div>
            <p className="image-caption">Devotion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter4Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/temple-3.jpg" alt="Temple 3" className="page-image" /></div>
            <p className="image-caption">Spiritual strength</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/temple-4.jpg" alt="Temple 4" className="page-image" /></div>
            <p className="image-caption">Inner peace</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter4Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/temple-5.jpg" alt="Temple 5" className="page-image" /></div>
            <p className="image-caption">Connected to divinity</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/temple-6.jpg" alt="Temple 6" className="page-image" /></div>
            <p className="image-caption">Blessed moments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 5 — College (5 images)
// ========================================
export function Chapter5Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 5</h2>
        <h3 className="chapter-subtitle">College Days</h3>
        <blockquote className="page-quote">"Dreams grow where effort lives."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/college-1.jpg" alt="College 1" className="page-image" /></div>
            <p className="image-caption">Building the future</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/college-2.jpg" alt="College 2" className="page-image" /></div>
            <p className="image-caption">Determination</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter5Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/college-3.jpg" alt="College 3" className="page-image" /></div>
            <p className="image-caption">Ambition</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/college-4.jpg" alt="College 4" className="page-image" /></div>
            <p className="image-caption">Learning and growing</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/college-5.jpg" alt="College 5" className="page-image" /></div>
            <p className="image-caption">Chasing dreams</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 6 — Transformation (17 images)
// ========================================
export function Chapter6Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 6</h2>
        <h3 className="chapter-subtitle">His Transformation</h3>
        <blockquote className="page-quote">"Growth is the most beautiful transformation."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-1.jpg" alt="Transformation 1" className="page-image" /></div>
            <p className="image-caption">From boy to man</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-2.jpg" alt="Transformation 2" className="page-image" /></div>
            <p className="image-caption">Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter6Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-3.jpg" alt="Transformation 3" className="page-image" /></div>
            <p className="image-caption">Confidence</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-4.jpg" alt="Transformation 4" className="page-image" /></div>
            <p className="image-caption">Evolution</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-5.jpg" alt="Transformation 5" className="page-image" /></div>
            <p className="image-caption">Becoming stronger</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter6Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-6.jpg" alt="Transformation 6" className="page-image" /></div>
            <p className="image-caption">Growth journey</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-7.jpg" alt="Transformation 7" className="page-image" /></div>
            <p className="image-caption">New heights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter6Page4() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-8.jpg" alt="Transformation 8" className="page-image" /></div>
            <p className="image-caption">Refined style</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-9.jpg" alt="Transformation 9" className="page-image" /></div>
            <p className="image-caption">Maturity</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-10.jpg" alt="Transformation 10" className="page-image" /></div>
            <p className="image-caption">Self-assured</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter6Page5() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-11.jpg" alt="Transformation 11" className="page-image" /></div>
            <p className="image-caption">Elevated presence</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-12.jpg" alt="Transformation 12" className="page-image" /></div>
            <p className="image-caption">Powerful aura</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter6Page6() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-13.jpg" alt="Transformation 13" className="page-image" /></div>
            <p className="image-caption">Commanding</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-14.jpg" alt="Transformation 14" className="page-image" /></div>
            <p className="image-caption">Refined elegance</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-15.jpg" alt="Transformation 15" className="page-image" /></div>
            <p className="image-caption">Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter6Page7() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-16.jpg" alt="Transformation 16" className="page-image" /></div>
            <p className="image-caption">The man today</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/transformation-17.jpg" alt="Transformation 17" className="page-image" /></div>
            <p className="image-caption">Always evolving</p>
          </div>
        </div>
        <p className="page-text italic-text center-text" style={{ marginTop: '1rem' }}>
          Every version of you is a masterpiece...
        </p>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 7 — Own World (9 images)
// ========================================
export function Chapter7Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 7</h2>
        <h3 className="chapter-subtitle">His Own World</h3>
        <blockquote className="page-quote">"The strongest people shine alone too."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-1.jpg" alt="Own World 1" className="page-image" /></div>
            <p className="image-caption">Individuality</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-2.jpg" alt="Own World 2" className="page-image" /></div>
            <p className="image-caption">Confidence</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter7Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-3.jpg" alt="Own World 3" className="page-image" /></div>
            <p className="image-caption">Independent aura</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-4.jpg" alt="Own World 4" className="page-image" /></div>
            <p className="image-caption">Self-made</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-5.jpg" alt="Own World 5" className="page-image" /></div>
            <p className="image-caption">His own path</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter7Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-6.jpg" alt="Own World 6" className="page-image" /></div>
            <p className="image-caption">Standing strong</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-7.jpg" alt="Own World 7" className="page-image" /></div>
            <p className="image-caption">Unique presence</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter7Page4() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-8.jpg" alt="Own World 8" className="page-image" /></div>
            <p className="image-caption">Own identity</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/own-world-9.jpg" alt="Own World 9" className="page-image" /></div>
            <p className="image-caption">Unapologetically him</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 8 — Power (7 images)
// ========================================
export function Chapter8Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 8</h2>
        <h3 className="chapter-subtitle">His Power & Confidence</h3>
        <blockquote className="page-quote">"Strength is not just seen, it is felt."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/power-1.jpg" alt="Power 1" className="page-image" /></div>
            <p className="image-caption">Discipline</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/power-2.jpg" alt="Power 2" className="page-image" /></div>
            <p className="image-caption">Dedication</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter8Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/power-3.jpg" alt="Power 3" className="page-image" /></div>
            <p className="image-caption">Hard work</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/power-4.jpg" alt="Power 4" className="page-image" /></div>
            <p className="image-caption">Confidence</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/power-5.jpg" alt="Power 5" className="page-image" /></div>
            <p className="image-caption">Physical strength</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter8Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/power-6.jpg" alt="Power 6" className="page-image" /></div>
            <p className="image-caption">Mental toughness</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/power-7.jpg" alt="Power 7" className="page-image" /></div>
            <p className="image-caption">Unstoppable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 9 — Bold Look (6 images)
// ========================================
export function Chapter9Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 9</h2>
        <h3 className="chapter-subtitle">The Bold Look</h3>
        <blockquote className="page-quote">"Confidence is the real style."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/bald-1.jpg" alt="Bold 1" className="page-image" /></div>
            <p className="image-caption">Bold</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/bald-2.jpg" alt="Bold 2" className="page-image" /></div>
            <p className="image-caption">Fearless</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter9Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2-large">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/bald-3.jpg" alt="Bold 3" className="page-image" /></div>
            <p className="image-caption">Powerful look</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/bald-4.jpg" alt="Bold 4" className="page-image" /></div>
            <p className="image-caption">Raw confidence</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter9Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/bald-5.jpg" alt="Bold 5" className="page-image" /></div>
            <p className="image-caption">Signature style</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/bald-6.jpg" alt="Bold 6" className="page-image" /></div>
            <p className="image-caption">Owning it</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 10 — Rider (4 images)
// ========================================
export function Chapter10Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 10</h2>
        <h3 className="chapter-subtitle">The Rider</h3>
        <blockquote className="page-quote">"Freedom rides with you."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/rider-1.jpg" alt="Rider 1" className="page-image" /></div>
            <p className="image-caption">Adventure</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/rider-2.jpg" alt="Rider 2" className="page-image" /></div>
            <p className="image-caption">Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter10Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/rider-3.jpg" alt="Rider 3" className="page-image" /></div>
            <p className="image-caption">Passion</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/rider-4.jpg" alt="Rider 4" className="page-image" /></div>
            <p className="image-caption">The open road</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 11 — IIT Dream (4 images)
// ========================================
export function Chapter11Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 11</h2>
        <h3 className="chapter-subtitle">Our IIT Dream</h3>
        <blockquote className="page-quote">"Dreams feel lighter when shared."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/iit-1.jpg" alt="IIT 1" className="page-image" /></div>
            <p className="image-caption">Shared future</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/iit-2.jpg" alt="IIT 2" className="page-image" /></div>
            <p className="image-caption">Growing together</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter11Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/iit-3.jpg" alt="IIT 3" className="page-image" /></div>
            <p className="image-caption">Building dreams together</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/iit-4.jpg" alt="IIT 4" className="page-image" /></div>
            <p className="image-caption">Our journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 12 — Us (8 images)
// ========================================
export function Chapter12Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 12</h2>
        <h3 className="chapter-subtitle">Us — Our Story</h3>
        <blockquote className="page-quote">"You and me, always."</blockquote>
        <div className="image-grid-2">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-1.jpg" alt="Us 1" className="page-image" /></div>
            <p className="image-caption">Love</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-2.jpg" alt="Us 2" className="page-image" /></div>
            <p className="image-caption">Memories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter12Page2() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-3.jpg" alt="Us 3" className="page-image" /></div>
            <p className="image-caption">Together forever</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-4.jpg" alt="Us 4" className="page-image" /></div>
            <p className="image-caption">Our happiness</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-5.jpg" alt="Us 5" className="page-image" /></div>
            <p className="image-caption">Perfect moments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter12Page3() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <div className="image-grid-3">
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-6.jpg" alt="Us 6" className="page-image" /></div>
            <p className="image-caption">Beautiful journey</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-7.jpg" alt="Us 7" className="page-image" /></div>
            <p className="image-caption">Forever us</p>
          </div>
          <div className="image-item">
            <div className="image-wrapper"><ImageWithFallback src="images/us-8.jpg" alt="Us 8" className="page-image" /></div>
            <p className="image-caption">My favorite story</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// FINAL PAGE
// ========================================
export function FinalPage() {
  return (
    <div className="book-page content-page final-page">
      <div className="page-content centered-text">
        <div className="ornamental-border-small">
          <div className="decorative-corner top-left"></div>
          <div className="decorative-corner top-right"></div>
          <div className="decorative-corner bottom-left"></div>
          <div className="decorative-corner bottom-right"></div>
        </div>
        <h2 className="section-title" style={{ position: 'relative', zIndex: 1 }}>To My Love</h2>
        <div className="decorative-line"></div>
        <p className="page-text-large" style={{ position: 'relative', zIndex: 1 }}>
          You came into my world and changed everything.
        </p>
        <p className="page-text-large" style={{ position: 'relative', zIndex: 1 }}>
          I am proud of you, grateful for you, and lucky to walk beside you.
        </p>
        <p className="page-text-large" style={{ position: 'relative', zIndex: 1 }}>
          No matter where life takes us, my love for you will always remain constant.
        </p>
        <div className="heart-symbol large" style={{ position: 'relative', zIndex: 1 }}>♥</div>
        <p className="page-text-emphasis final-message" style={{ position: 'relative', zIndex: 1 }}>
          Happy Birthday to the one who holds my heart.
        </p>
        <p className="page-text-signature" style={{ position: 'relative', zIndex: 1 }}>
          Forever Yours
        </p>
      </div>
    </div>
  );
}

// ========================================
// QUOTE PAGES
// ========================================
export function QuotePage1() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">"You are my today and all my tomorrows."</blockquote>
      </div>
    </div>
  );
}

export function QuotePage2() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">"Love looks like you."</blockquote>
      </div>
    </div>
  );
}

export function QuotePage3() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">"Your smile is my home."</blockquote>
      </div>
    </div>
  );
}

export function QuotePage4() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">"Every version of you is beautiful."</blockquote>
      </div>
    </div>
  );
}

export function QuotePage5() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">"You make ordinary moments magical."</blockquote>
      </div>
    </div>
  );
}