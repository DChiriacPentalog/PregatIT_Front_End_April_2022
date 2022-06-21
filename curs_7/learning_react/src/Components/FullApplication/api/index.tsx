import { initializeApp } from "firebase/app";
import withAuthentication from "./authentication";
import withStorage from "./storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzLtHb1CQLcYyy-GSJgd-MMU-2LQkWz2o",
  authDomain: "fullapplication-65891.firebaseapp.com",
  projectId: "fullapplication-65891",
  storageBucket: "fullapplication-65891.appspot.com",
  messagingSenderId: "1000318969548",
  appId: "1:1000318969548:web:e40a12e1a480e27a7e8469",
};

export const app = initializeApp(firebaseConfig);

export default function withApi(Component: React.FC): React.FC {
  return withAuthentication(withStorage(Component));
}
