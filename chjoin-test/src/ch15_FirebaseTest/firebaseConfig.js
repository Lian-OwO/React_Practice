// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//추가 설정 순서 1
//스토어 임포트
import { getFirestore } from "firebase/firestore";
//스토리지 임포트
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// env 작업은 조금 있다가
// 개인 키가 다 다름
const firebaseConfig = {
  apiKey: "AIzaSyAkKf3m3GXSuf1DAfervp0NKbM5MNH9mrc",
  authDomain: "react-serverlesstest.firebaseapp.com",
  projectId: "react-serverlesstest",
  storageBucket: "react-serverlesstest.appspot.com",
  messagingSenderId: "357082448066",
  appId: "1:357082448066:web:f638938cd9399d58753b5b",
  measurementId: "G-SX438481GG",
};

// Initialize Firebase
// 간단히, 파이어베이스 사용하기 위한 초기 세팅
const app = initializeApp(firebaseConfig);

//추가 설정 순서2
//store : 적용해서 내보내기. 다른 파일에서 임포트해서 사용 가능
export const db = getFirestore(app);
//storage : 적용해서, 내보내기. 다른 파일에서 임포트 해서 사용이 가능함
export const storage = getStorage(app);

// const analytics = getAnalytics(app);
