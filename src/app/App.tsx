import React from 'react';
import { FlipBook } from './components/FlipBook';
import {
  CoverPage,
  OpeningPage,
  PrefacePage,
  AcknowledgementPage,
  TableOfContentsPage,
  Chapter1Page1,
  Chapter1Page2,
  Chapter1Page3,
  Chapter1Page4,
  Chapter2Page1,
  Chapter2Page2,
  Chapter2Page3,
  Chapter2Page4,
  Chapter2Page5,
  Chapter3Page1,
  Chapter3Page2,
  Chapter3Page3,
  Chapter4Page1,
  Chapter4Page2,
  Chapter4Page3,
  Chapter5Page1,
  Chapter5Page2,
  Chapter6Page1,
  Chapter6Page2,
  Chapter6Page3,
  Chapter6Page4,
  Chapter6Page5,
  Chapter6Page6,
  Chapter6Page7,
  Chapter7Page1,
  Chapter7Page2,
  Chapter7Page3,
  Chapter7Page4,
  Chapter8Page1,
  Chapter8Page2,
  Chapter8Page3,
  Chapter9Page1,
  Chapter9Page2,
  Chapter9Page3,
  Chapter10Page1,
  Chapter10Page2,
  Chapter11Page1,
  Chapter11Page2,
  Chapter12Page1,
  Chapter12Page2,
  Chapter12Page3,
  FinalPage,
  QuotePage1,
  QuotePage2,
  QuotePage3,
  QuotePage4,
  QuotePage5,
} from './components/BookPages';
import './styles/flipbook.css';

function App() {
  // Assemble all pages in order
  // You can insert quote pages between chapters for variety
  const pages = [
    <CoverPage key="cover" />,
    <OpeningPage key="opening" />,
    <PrefacePage key="preface" />,
    <AcknowledgementPage key="acknowledgement" />,
    <TableOfContentsPage key="toc" />,
    
    // Chapter 1
    <Chapter1Page1 key="ch1-1" />,
    <Chapter1Page2 key="ch1-2" />,
    <Chapter1Page3 key="ch1-3" />,
    <Chapter1Page4 key="ch1-4" />,
    <QuotePage1 key="quote1" />,
    
    // Chapter 2
    <Chapter2Page1 key="ch2-1" />,
    <Chapter2Page2 key="ch2-2" />,
    <Chapter2Page3 key="ch2-3" />,
    <Chapter2Page4 key="ch2-4" />,
    <Chapter2Page5 key="ch2-5" />,
    <QuotePage2 key="quote2" />,
    
    // Chapter 3
    <Chapter3Page1 key="ch3-1" />,
    <Chapter3Page2 key="ch3-2" />,
    <Chapter3Page3 key="ch3-3" />,
    <QuotePage3 key="quote3" />,
    
    // Chapter 4
    <Chapter4Page1 key="ch4-1" />,
    <Chapter4Page2 key="ch4-2" />,
    <Chapter4Page3 key="ch4-3" />,
    
    // Chapter 5
    <Chapter5Page1 key="ch5-1" />,
    <Chapter5Page2 key="ch5-2" />,
    <QuotePage4 key="quote4" />,
    
    // Chapter 6
    <Chapter6Page1 key="ch6-1" />,
    <Chapter6Page2 key="ch6-2" />,
    <Chapter6Page3 key="ch6-3" />,
    <Chapter6Page4 key="ch6-4" />,
    <Chapter6Page5 key="ch6-5" />,
    <Chapter6Page6 key="ch6-6" />,
    <Chapter6Page7 key="ch6-7" />,
    <QuotePage5 key="quote5" />,
    
    // Chapter 7
    <Chapter7Page1 key="ch7-1" />,
    <Chapter7Page2 key="ch7-2" />,
    <Chapter7Page3 key="ch7-3" />,
    <Chapter7Page4 key="ch7-4" />,
    
    // Chapter 8
    <Chapter8Page1 key="ch8-1" />,
    <Chapter8Page2 key="ch8-2" />,
    <Chapter8Page3 key="ch8-3" />,
    
    // Chapter 9
    <Chapter9Page1 key="ch9-1" />,
    <Chapter9Page2 key="ch9-2" />,
    <Chapter9Page3 key="ch9-3" />,
    
    // Chapter 10
    <Chapter10Page1 key="ch10-1" />,
    <Chapter10Page2 key="ch10-2" />,
    
    // Chapter 11
    <Chapter11Page1 key="ch11-1" />,
    <Chapter11Page2 key="ch11-2" />,
    
    // Chapter 12
    <Chapter12Page1 key="ch12-1" />,
    <Chapter12Page2 key="ch12-2" />,
    <Chapter12Page3 key="ch12-3" />,
    
    // Final Page
    <FinalPage key="final" />,
  ];

  return (
    <div className="app">
      <FlipBook pages={pages} />
    </div>
  );
}

export default App;
