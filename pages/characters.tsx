"use client";
import s from '../styles/character.module.css'

import { useCharacter } from '@/assets/hooks/useCharacter';
import {CharacterCard}  from '@/components/characterCard/characterCard';
import  {HeadMeta}  from '@/components/headMeta/headMeta';
import { getLayout } from '@/components/layouts/Layouts';
const Characters = () => {
  const characters = useCharacter();
  return (
    <>
      <div className={s.container}>
        <div className={s.subContainer}>
          {characters.map((e) => {
            return <CharacterCard key={e.id} character={e} />;
          })}
        </div>
      </div>
    </>
  );
};
Characters.getLayout=getLayout
export default Characters;
