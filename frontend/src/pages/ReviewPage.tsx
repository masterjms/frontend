import React, { useState } from 'react';
import '../styles/review.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import CustomSidebar from '../components/CustomSidebar'; // 사이드바 추가

const ReviewPage: React.FC = () => {
  const [code, setCode] = useState<string>(''); // 코드 입력 상태
  const [reviewResult, setReviewResult] = useState<string | null>(null); // 코드 리뷰 결과

  // 코드 리뷰 실행
  const handleReview = () => {
    console.log('Code submitted for review:', code);
    setReviewResult('✔ Code is clean and optimized! ✅'); // TODO: 백엔드 API 연동 예정
  };

  return (
    <div className="review-page">
      <h1 className="review-title">Code Review</h1>

      {/* ✅ CustomSidebar 적용 */}
      <CustomSidebar />

      {/* ✅ 코드 입력과 결과를 가로로 배치 */}
      <div className="code-container">
        {/* 코드 입력 (왼쪽) */}
        <Card className="code-input">
          <h3>Enter Your Code</h3>
          <Editor 
            value={code} 
            onTextChange={(e) => setCode(e.htmlValue || '')} 
            style={{ height: '200px' }} 
          />
        </Card>

        {/* 코드 출력 (오른쪽) */}
        <Card className="code-output">
          <h3>Review Result</h3>
          <p>{reviewResult ? reviewResult : "Run code review to see results."}</p>
        </Card>
      </div>

      {/* 코드 검사 버튼 (아래) */}
      <Button label="Run Review" icon="pi pi-search" className="p-button-lg p-button-primary review-button" onClick={handleReview} />
    </div>
  );
};

export default ReviewPage;