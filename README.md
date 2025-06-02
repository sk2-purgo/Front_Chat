![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=192&section=header&text=CHAT%20FRONTEND&fontSize=65&animation=fadeIn&fontColor=FFF)


<div align="center">
  <img src="https://img.shields.io/badge/Made%20with-React-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Styled%20with-TailwindCSS-38bdf8?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/WebSocket-Live%20Chat-10b981?style=for-the-badge&logo=websocket" />
</div>

<br />

<h1 align="center" style="font-size: 3rem; color:#007acc;">💬 Purgo Chat - Frontend</h1>

<p align="center" style="font-size: 1.1rem;">
  <strong>Purgo Chat</strong>은 <code>React</code>와 <code>Tailwind CSS</code> 기반의 실시간 채팅 웹 애플리케이션입니다.<br />
  사용자는 닉네임을 입력하고 채팅방에 입장해 <strong>WebSocket</strong>을 통해 메시지를 주고받을 수 있습니다.
</p>

<hr />

<h2>📁 프로젝트 구조 및 설명</h2>

<pre style="background:#f9f9f9; padding: 1.2em; border-radius: 8px; font-size: 15px; font-family: Consolas, monospace; line-height: 1.6;">

PurgoChat/
├── public/
│   ├── index.html              <span style="color:#22863a;"># HTML 템플릿</span>
│   ├── favicon.ico
│   └── ...
│
├── src/
│   ├── App.js                  <span style="color:#22863a;"># 라우팅 포함된 루트 컴포넌트</span>
│   ├── index.js                <span style="color:#22863a;"># ReactDOM 렌더링 진입점</span>
│   ├── context/
│   │   └── NicknameContext.js  <span style="color:#22863a;"># 닉네임 전역 상태 관리</span>
│   ├── components/
│   │   └── NicknameForm.js     <span style="color:#22863a;"># 닉네임 입력 폼 UI</span>
│   ├── pages/
│   │   ├── ChatRoomPage.js     <span style="color:#22863a;"># WebSocket 기반 채팅방</span>
│   │   └── NicknamePage.js     <span style="color:#22863a;"># 입장 전 닉네임 입력 화면</span>
│   ├── Mockup/
│   │   ├── IPhoneMockup.js     <span style="color:#22863a;"># SVG 프레임 내 렌더링 컴포넌트</span>
│   │   └── iPhone.svg          <span style="color:#22863a;"># 아이폰 프레임 SVG</span>
│
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md

</pre>

---

<h2>🧩 주요 기능</h2>

<ul style="font-size: 15px; line-height: 1.8;">
  <li>💡 <strong>닉네임 입력</strong> 후 채팅방 입장</li>
  <li>⚡ <strong>WebSocket</strong>을 통한 실시간 채팅</li>
  <li>👥 참여자 목록 <strong>실시간 갱신</strong></li>
  <li>🚫 <strong>욕설 횟수</strong> 카운팅 UI</li>
  <li>📱 <strong>iPhone 프레임</strong> 내 웹페이지 시연</li>
</ul>

---

<h2>🌐 라우팅 구조</h2>

```jsx
<Route path="/" element={<NicknamePage />} />
<Route path="/chat" element={<ChatRoomPage />} />
```

```text
1. "/" → 닉네임 입력 화면
2. "/chat" → 채팅방 진입 + WebSocket 연결
```

---

<h2>🎨 UI 구성 특징</h2>

<div align="center">
  <img src="https://img.shields.io/badge/UI-Tailwind-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Responsive-Mobile--First-green?style=for-the-badge" />
</div>

<br />

<table>
  <tr>
    <td style="padding: 8px;">🎨</td>
    <td>Tailwind CSS 기반 유틸리티 스타일</td>
  </tr>
  <tr>
    <td style="padding: 8px;">📱</td>
    <td>모바일 우선 반응형 설계</td>
  </tr>
</table>

---

<h2>🖼️ 아이폰 목업 시연</h2>

<p>
  아이폰 기기처럼 보이는 SVG 프레임 안에 웹 페이지를 삽입하여 시각적 시연이 가능합니다.
</p>

<ul>
  <li>사용 파일:</li>
  <ul>
    <li><code>src/Mockup/iPhone.svg</code> (SVG 프레임)</li>
    <li><code>src/Mockup/IPhoneMockup.js</code> (React 삽입 컴포넌트)</li>
  </ul>
  <li>사용 예시:</li>
</ul>

```jsx
<IPhoneMockup>
  <ChatRoomPage />
</IPhoneMockup>
```

👉 관련 설명:  
<a href="https://velog.io/@seojin_lim/svg%ED%8C%8C%EC%9D%BC-%EB%82%B4-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9E%91%EB%8F%99-%EC%84%A4%EB%AA%85%EC%84%9C" target="_blank">
velog 글 보기
</a>

---

<h2>🚀 실행 방법</h2>

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

---

<h2>🛠️ 기술 스택</h2>

<ul>
  <li>⚛️ React (CRA)</li>
  <li>🎨 Tailwind CSS</li>
  <li>🧭 React Router v6</li>
  <li>📡 WebSocket API</li>
</ul>
