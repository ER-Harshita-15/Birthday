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
          <div className="heart-divider">❤️</div>
          <p className="book-occasion">Happy Birthday My lovely SKY</p>
          <p className="book-author">From Your MOON</p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// OPENING PAGE - Cake Cutting Photo
// Replace 'images/cake-cutting.jpg' with your actual image path
// ========================================
export function OpeningPage() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 0</h2>
        <h3 className="chapter-subtitle">The Day You Were Celebrated</h3>
        
        <div className="image-container featured-image">
          <ImageWithFallback 
            src="images/cake-cutting.jpg" 
            alt="Cake cutting celebration"
            className="page-image"
          />
        </div>
        
        <p className="page-text">
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
          This is not just a book but a collection of memories and pieces of my heart.
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
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="section-title">Table of Contents</h2>
        <div className="decorative-line"></div>
        
        <div className="toc-list">
          <div className="toc-item">
            <span className="toc-chapter">Chapter 1</span>
            <span className="toc-dots"></span>
            <span className="toc-title">The Beginning: His Childhood</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 2</span>
            <span className="toc-dots"></span>
            <span className="toc-title">The Home That Built Him</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 3</span>
            <span className="toc-dots"></span>
            <span className="toc-title">His Traditional Grace</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 4</span>
            <span className="toc-dots"></span>
            <span className="toc-title">Temple Memories</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 5</span>
            <span className="toc-dots"></span>
            <span className="toc-title">College Days</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 6</span>
            <span className="toc-dots"></span>
            <span className="toc-title">His Transformation</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 7</span>
            <span className="toc-dots"></span>
            <span className="toc-title">His Own World</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 8</span>
            <span className="toc-dots"></span>
            <span className="toc-title">His Power & Confidence</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 9</span>
            <span className="toc-dots"></span>
            <span className="toc-title">The Bold Look</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 10</span>
            <span className="toc-dots"></span>
            <span className="toc-title">The Rider</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 11</span>
            <span className="toc-dots"></span>
            <span className="toc-title">Our IIT Dream</span>
          </div>
          <div className="toc-item">
            <span className="toc-chapter">Chapter 12</span>
            <span className="toc-dots"></span>
            <span className="toc-title">Us — Our Story</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 1 - The Beginning: His Childhood (9 images)
// Replace image paths with your actual images
// ========================================
export function Chapter1Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 1</h2>
        <h3 className="chapter-subtitle">The Beginning: His Childhood</h3>
        
        <blockquote className="page-quote">
          "Great souls begin as innocent hearts."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/childhood-1.jpg" alt="Childhood memory 1" className="page-image" />
            <p className="image-caption">The purest version of you</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/childhood-2.jpg" alt="Childhood memory 2" className="page-image" />
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
            <ImageWithFallback src="images/childhood-3.jpg" alt="Childhood memory 3" className="page-image" />
            <p className="image-caption">Small boy, big destiny</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/childhood-4.jpg" alt="Childhood memory 4" className="page-image" />
            <p className="image-caption">Innocence</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/childhood-5.jpg" alt="Childhood memory 5" className="page-image" />
            <p className="image-caption">First chapter of your story</p>
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
            <ImageWithFallback src="images/childhood-6.jpg" alt="Childhood memory 6" className="page-image" />
            <p className="image-caption">Growing up with joy</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/childhood-7.jpg" alt="Childhood memory 7" className="page-image" />
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
            <ImageWithFallback src="images/childhood-8.jpg" alt="Childhood memory 8" className="page-image" />
            <p className="image-caption">The spark in your eyes</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/childhood-9.jpg" alt="Childhood memory 9" className="page-image" />
            <p className="image-caption">The beginning of greatness</p>
          </div>
        </div>
        
        <p className="page-text italic-text center-text">
          Every great person starts as a child with dreams...
        </p>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 2 - The Home That Built Him (11 images)
// ========================================
export function Chapter2Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 2</h2>
        <h3 className="chapter-subtitle">The Home That Built Him</h3>
        
        <blockquote className="page-quote">
          "A man is shaped by the love of his home."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/home-1.jpg" alt="Home memory 1" className="page-image" />
            <p className="image-caption">Roots that shaped you</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/home-2.jpg" alt="Home memory 2" className="page-image" />
            <p className="image-caption">Foundation of your strength</p>
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
            <ImageWithFallback src="images/home-3.jpg" alt="Home memory 3" className="page-image" />
            <p className="image-caption">Warmth and belonging</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/home-4.jpg" alt="Home memory 4" className="page-image" />
            <p className="image-caption">Family love</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/home-5.jpg" alt="Home memory 5" className="page-image" />
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
            <ImageWithFallback src="images/home-6.jpg" alt="Home memory 6" className="page-image" />
            <p className="image-caption">Home sweet home</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/home-7.jpg" alt="Home memory 7" className="page-image" />
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
            <ImageWithFallback src="images/home-8.jpg" alt="Home memory 8" className="page-image" />
            <p className="image-caption">Love all around</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/home-9.jpg" alt="Home memory 9" className="page-image" />
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
            <ImageWithFallback src="images/home-10.jpg" alt="Home memory 10" className="page-image" />
            <p className="image-caption">Building memories</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/home-11.jpg" alt="Home memory 11" className="page-image" />
            <p className="image-caption">Your foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 3 - His Traditional Grace (8 images)
// ========================================
export function Chapter3Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 3</h2>
        <h3 className="chapter-subtitle">His Traditional Grace</h3>
        
        <blockquote className="page-quote">
          "Elegance is when simplicity meets tradition."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/traditional-1.jpg" alt="Traditional look 1" className="page-image" />
            <p className="image-caption">Timeless charm</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/traditional-2.jpg" alt="Traditional look 2" className="page-image" />
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
            <ImageWithFallback src="images/traditional-3.jpg" alt="Traditional look 3" className="page-image" />
            <p className="image-caption">Classic presence</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/traditional-4.jpg" alt="Traditional look 4" className="page-image" />
            <p className="image-caption">Elegant grace</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/traditional-5.jpg" alt="Traditional look 5" className="page-image" />
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
            <ImageWithFallback src="images/traditional-6.jpg" alt="Traditional look 6" className="page-image" />
            <p className="image-caption">Cultural pride</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/traditional-7.jpg" alt="Traditional look 7" className="page-image" />
            <p className="image-caption">Heritage and style</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/traditional-8.jpg" alt="Traditional look 8" className="page-image" />
            <p className="image-caption">Graceful elegance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 4 - Temple Memories (6 images)
// ========================================
export function Chapter4Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 4</h2>
        <h3 className="chapter-subtitle">Temple Memories</h3>
        
        <blockquote className="page-quote">
          "Faith makes a person glow differently."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/temple-1.jpg" alt="Temple memory 1" className="page-image" />
            <p className="image-caption">Peace within</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/temple-2.jpg" alt="Temple memory 2" className="page-image" />
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
            <ImageWithFallback src="images/temple-3.jpg" alt="Temple memory 3" className="page-image" />
            <p className="image-caption">Spiritual strength</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/temple-4.jpg" alt="Temple memory 4" className="page-image" />
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
            <ImageWithFallback src="images/temple-5.jpg" alt="Temple memory 5" className="page-image" />
            <p className="image-caption">Connected to divinity</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/temple-6.jpg" alt="Temple memory 6" className="page-image" />
            <p className="image-caption">Blessed moments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 5 - College Days (5 images)
// ========================================
export function Chapter5Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 5</h2>
        <h3 className="chapter-subtitle">College Days</h3>
        
        <blockquote className="page-quote">
          "Dreams grow where effort lives."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/college-1.jpg" alt="College memory 1" className="page-image" />
            <p className="image-caption">Building the future</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/college-2.jpg" alt="College memory 2" className="page-image" />
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
            <ImageWithFallback src="images/college-3.jpg" alt="College memory 3" className="page-image" />
            <p className="image-caption">Ambition</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/college-4.jpg" alt="College memory 4" className="page-image" />
            <p className="image-caption">Learning and growing</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/college-5.jpg" alt="College memory 5" className="page-image" />
            <p className="image-caption">Chasing dreams</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 6 - His Transformation (17 images - split into multiple pages)
// ========================================
export function Chapter6Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 6</h2>
        <h3 className="chapter-subtitle">His Transformation</h3>
        
        <blockquote className="page-quote">
          "Growth is the most beautiful transformation."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/transformation-1.jpg" alt="Transformation 1" className="page-image" />
            <p className="image-caption">From boy to man</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-2.jpg" alt="Transformation 2" className="page-image" />
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
            <ImageWithFallback src="images/transformation-3.jpg" alt="Transformation 3" className="page-image" />
            <p className="image-caption">Confidence</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-4.jpg" alt="Transformation 4" className="page-image" />
            <p className="image-caption">Evolution</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-5.jpg" alt="Transformation 5" className="page-image" />
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
            <ImageWithFallback src="images/transformation-6.jpg" alt="Transformation 6" className="page-image" />
            <p className="image-caption">Growth journey</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-7.jpg" alt="Transformation 7" className="page-image" />
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
            <ImageWithFallback src="images/transformation-8.jpg" alt="Transformation 8" className="page-image" />
            <p className="image-caption">Refined style</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-9.jpg" alt="Transformation 9" className="page-image" />
            <p className="image-caption">Maturity</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-10.jpg" alt="Transformation 10" className="page-image" />
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
            <ImageWithFallback src="images/transformation-11.jpg" alt="Transformation 11" className="page-image" />
            <p className="image-caption">Elevated presence</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-12.jpg" alt="Transformation 12" className="page-image" />
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
            <ImageWithFallback src="images/transformation-13.jpg" alt="Transformation 13" className="page-image" />
            <p className="image-caption">Commanding presence</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-14.jpg" alt="Transformation 14" className="page-image" />
            <p className="image-caption">Refined elegance</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-15.jpg" alt="Transformation 15" className="page-image" />
            <p className="image-caption">Complete transformation</p>
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
            <ImageWithFallback src="images/transformation-16.jpg" alt="Transformation 16" className="page-image" />
            <p className="image-caption">The man today</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/transformation-17.jpg" alt="Transformation 17" className="page-image" />
            <p className="image-caption">Always evolving</p>
          </div>
        </div>
        
        <p className="page-text italic-text center-text">
          Every version of you is a masterpiece...
        </p>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 7 - His Own World (9 images)
// ========================================
export function Chapter7Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 7</h2>
        <h3 className="chapter-subtitle">His Own World</h3>
        
        <blockquote className="page-quote">
          "The strongest people shine alone too."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/own-world-1.jpg" alt="His world 1" className="page-image" />
            <p className="image-caption">Individuality</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/own-world-2.jpg" alt="His world 2" className="page-image" />
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
            <ImageWithFallback src="images/own-world-3.jpg" alt="His world 3" className="page-image" />
            <p className="image-caption">Independent aura</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/own-world-4.jpg" alt="His world 4" className="page-image" />
            <p className="image-caption">Self-made</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/own-world-5.jpg" alt="His world 5" className="page-image" />
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
            <ImageWithFallback src="images/own-world-6.jpg" alt="His world 6" className="page-image" />
            <p className="image-caption">Standing strong</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/own-world-7.jpg" alt="His world 7" className="page-image" />
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
            <ImageWithFallback src="images/own-world-8.jpg" alt="His world 8" className="page-image" />
            <p className="image-caption">Own identity</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/own-world-9.jpg" alt="His world 9" className="page-image" />
            <p className="image-caption">Unapologetically him</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 8 - His Power & Confidence / Sexy Body (7 images)
// ========================================
export function Chapter8Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 8</h2>
        <h3 className="chapter-subtitle">His Power & Confidence</h3>
        
        <blockquote className="page-quote">
          "Strength is not just seen, it is felt."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/power-1.jpg" alt="Power and confidence 1" className="page-image" />
            <p className="image-caption">Discipline</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/power-2.jpg" alt="Power and confidence 2" className="page-image" />
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
            <ImageWithFallback src="images/power-3.jpg" alt="Power and confidence 3" className="page-image" />
            <p className="image-caption">Hard work</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/power-4.jpg" alt="Power and confidence 4" className="page-image" />
            <p className="image-caption">Confidence</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/power-5.jpg" alt="Power and confidence 5" className="page-image" />
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
            <ImageWithFallback src="images/power-6.jpg" alt="Power and confidence 6" className="page-image" />
            <p className="image-caption">Mental toughness</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/power-7.jpg" alt="Power and confidence 7" className="page-image" />
            <p className="image-caption">Unstoppable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 9 - The Bold Look — Bald Him (6 images)
// ========================================
export function Chapter9Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 9</h2>
        <h3 className="chapter-subtitle">The Bold Look</h3>
        
        <blockquote className="page-quote">
          "Confidence is the real style."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/bald-1.jpg" alt="Bold look 1" className="page-image" />
            <p className="image-caption">Bold</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/bald-2.jpg" alt="Bold look 2" className="page-image" />
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
            <ImageWithFallback src="images/bald-3.jpg" alt="Bold look 3" className="page-image" />
            <p className="image-caption">Powerful look</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/bald-4.jpg" alt="Bold look 4" className="page-image" />
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
            <ImageWithFallback src="images/bald-5.jpg" alt="Bold look 5" className="page-image" />
            <p className="image-caption">Signature style</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/bald-6.jpg" alt="Bold look 6" className="page-image" />
            <p className="image-caption">Owning it</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 10 - The Rider — Him With Bike (4 images)
// ========================================
export function Chapter10Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 10</h2>
        <h3 className="chapter-subtitle">The Rider</h3>
        
        <blockquote className="page-quote">
          "Freedom rides with you."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/rider-1.jpg" alt="Rider 1" className="page-image" />
            <p className="image-caption">Adventure</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/rider-2.jpg" alt="Rider 2" className="page-image" />
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
            <ImageWithFallback src="images/rider-3.jpg" alt="Rider 3" className="page-image" />
            <p className="image-caption">Passion</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/rider-4.jpg" alt="Rider 4" className="page-image" />
            <p className="image-caption">The open road</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 11 - Our IIT Dream (4 images)
// ========================================
export function Chapter11Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 11</h2>
        <h3 className="chapter-subtitle">Our IIT Dream</h3>
        
        <blockquote className="page-quote">
          "Dreams feel lighter when shared."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/iit-1.jpg" alt="IIT dream 1" className="page-image" />
            <p className="image-caption">Shared future</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/iit-2.jpg" alt="IIT dream 2" className="page-image" />
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
            <ImageWithFallback src="images/iit-3.jpg" alt="IIT dream 3" className="page-image" />
            <p className="image-caption">Building dreams together</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/iit-4.jpg" alt="IIT dream 4" className="page-image" />
            <p className="image-caption">Our journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CHAPTER 12 - Us — Our Story (8 images)
// ========================================
export function Chapter12Page1() {
  return (
    <div className="book-page content-page">
      <div className="page-content">
        <h2 className="chapter-title">Chapter 12</h2>
        <h3 className="chapter-subtitle">Us — Our Story</h3>
        
        <blockquote className="page-quote">
          "You and me, always."
        </blockquote>
        
        <div className="image-grid-2">
          <div className="image-item">
            <ImageWithFallback src="images/us-1.jpg" alt="Our story 1" className="page-image" />
            <p className="image-caption">Love</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/us-2.jpg" alt="Our story 2" className="page-image" />
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
            <ImageWithFallback src="images/us-3.jpg" alt="Our story 3" className="page-image" />
            <p className="image-caption">Together forever</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/us-4.jpg" alt="Our story 4" className="page-image" />
            <p className="image-caption">Our happiness</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/us-5.jpg" alt="Our story 5" className="page-image" />
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
            <ImageWithFallback src="images/us-6.jpg" alt="Our story 6" className="page-image" />
            <p className="image-caption">Beautiful journey</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/us-7.jpg" alt="Our story 7" className="page-image" />
            <p className="image-caption">Forever us</p>
          </div>
          <div className="image-item">
            <ImageWithFallback src="images/us-8.jpg" alt="Our story 8" className="page-image" />
            <p className="image-caption">My favorite story</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// FINAL PAGE - Heartfelt Message
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
        
        <h2 className="section-title">To My Love</h2>
        <div className="decorative-line"></div>
        
        <p className="page-text-large">
          You came into my world and changed everything.
        </p>
        
        <p className="page-text-large">
          I am proud of you, grateful for you, and lucky to walk beside you.
        </p>
        
        <p className="page-text-large">
          No matter where life takes us, my love for you will always remain constant.
        </p>
        
        <div className="heart-symbol large">♥</div>
        
        <p className="page-text-emphasis final-message">
          Happy Birthday to the one who holds my heart.
        </p>
        
        <p className="page-text-signature">
          Forever Yours
        </p>
      </div>
    </div>
  );
}

// ========================================
// INTERSTITIAL QUOTE PAGES
// These can be randomly inserted between chapters
// ========================================
export function QuotePage1() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">
          "You are my today and all my tomorrows."
        </blockquote>
      </div>
    </div>
  );
}

export function QuotePage2() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">
          "Love looks like you."
        </blockquote>
      </div>
    </div>
  );
}

export function QuotePage3() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">
          "Your smile is my home."
        </blockquote>
      </div>
    </div>
  );
}

export function QuotePage4() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">
          "Every version of you is beautiful."
        </blockquote>
      </div>
    </div>
  );
}

export function QuotePage5() {
  return (
    <div className="book-page quote-page">
      <div className="page-content centered-text">
        <blockquote className="large-quote">
          "You make ordinary moments magical."
        </blockquote>
      </div>
    </div>
  );
}
