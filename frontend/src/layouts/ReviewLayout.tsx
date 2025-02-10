import React, { ReactNode } from 'react';
import Header from '../components/Header';
import '../styles/global.css';

interface ReviewLayoutProps {
  children: ReactNode;
}

const ReviewLayout: React.FC<ReviewLayoutProps> = ({ children }) => {
  return (
    <div className="review-layout">
      <Header />
      <main className="review-content">
        {children}
      </main>
    </div>
  );
};

export default ReviewLayout;
