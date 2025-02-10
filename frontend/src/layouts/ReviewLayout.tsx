import React, { ReactNode } from 'react';
import Header from '../components/Header';
import '../styles/global.css';
import CustomSidebar from '../components/CustomSidebar';

interface ReviewLayoutProps {
  children: ReactNode;
}

const ReviewLayout: React.FC<ReviewLayoutProps> = ({ children }) => {
  return (
    <div className="review-layout">
      <Header>
        <CustomSidebar />
      </Header>
      <main className="review-content">
        {children}
      </main>
    </div>
  );
};

export default ReviewLayout;
