import Image from "next/image";
import styles from "./page.module.css";
import '@/css/general.css';
import '@/css/forms.css';
import Player from "../components/player";
import SearchBar from "../components/searchbar";


export default function Home() {
  return (
    <div>
      <div className="home">
        <Player />
        <SearchBar />
      </div>
    </div>
  );
}
