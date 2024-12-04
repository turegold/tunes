<h1>🍜음식과 어울리는 음악을 추천해주는 서비스</h1>

## 🎄기술 스택:

- **Frontend**: React, TailwindCSS, React Router (페이지 전환), Axios (API 호출)
- **Backend**: Express, Node.js
- **Database**: MongoDB (NoSQL)
- **External APIs**: Spotify API, YouTube API, 또는 자체 음악 데이터베이스 구축

## 📃아키텍처:

### 1)전체 구조

<aside>
[Frontend] React<br>
↕ (API 요청)<br>
[Backend] Express<br>
↕ (데이터 요청/저장)<br>
[Database] MongoDB
</aside>

## 😐음식과 음악 연관성 분석 방법
: 아직 안정함~
### 1) 키워드 매핑 기반 추천 (Easy)

: 음식 데이터를 기반으로 미리 정의된 규칙으로 음악 추천.

### 2) 사용자 리뷰와 텍스트 분석 (Middle Level)

: 음식 리뷰나 설명에서 감정(긍정, 부정), 분위기, 또는 키워드를 추출

- 자연어 처리(NLP) 라이브러리 사용 (예: Python의 NLTK, spaCy 또는 JavaScript의 Compromise.js).

### 3) 머신러닝 기반 추천 (Hard)

: 머신러닝을 사용해 음식과 음악 간의 연광성을 학습하는 추천 시스템 구축
