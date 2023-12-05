
import Image from "next/image";
import {characterType} from '../../assets/hooks/useCharacter'
import s from './style.module.css'
import Navbar from "../navbar/Navbar";
type PropsType={
    character:characterType
}
export const CharacterCard = (props:PropsType) => {
    const {character}=props
  return (
    <div className={s.container}>
      <Navbar/>
      <div className={s.name}>{character.name}</div>
      <Image src={character.image} alt="rickAndMorty" width={200} height={200} />
    </div>
  );
};
