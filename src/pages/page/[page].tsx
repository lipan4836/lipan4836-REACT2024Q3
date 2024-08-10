/* eslint-disable react-refresh/only-export-components */

import React from 'react';
import Header from '../../components/Header/Header';
import { Character } from '../../types/characterResponse';
import { GetServerSideProps } from 'next';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Main/Pagination';
import { useRouter } from 'next/router';
import CardDetail from '../../components/CardDetail/CardDetail';
import NotFoundChar from '../../components/NotFoundChar/NotFoundChar';
import Flyout from '../../components/Flyout/Flyout';
import { useAppSelector } from '../../hooks/hooksRedux';

type PageProps = {
  characters: Character[];
  totalPages: number;
  currentPage: number;
  searchQuery: string;
  selectedCharacter?: Character;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const { page = 1, searchQuery = '', detail } = context.query;
  const limit = 6;

  const res = await fetch(
    `https://dattebayo-api.onrender.com/characters/?page=${page}&limit=${limit}&name=${searchQuery}`,
  );
  const data = await res.json();

  let selectedCharacter = null;
  if (detail) {
    console.log(detail);
    const detailRes = await fetch(`https://dattebayo-api.onrender.com/characters/${detail}`);
    selectedCharacter = await detailRes.json();
  }

  return {
    props: {
      characters: data.characters || [],
      totalPages: Math.ceil(data.total / limit),
      currentPage: parseInt(page as string, 10),
      searchQuery: searchQuery as string,
      selectedCharacter,
    },
  };
};

function Page({ characters, totalPages, currentPage, searchQuery, selectedCharacter }: PageProps) {
  const router = useRouter();

  const selectedItemsCount = useAppSelector((state) => state.selectedItems.selectedItems.length);
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  const handleCardClick = (characterId: number) => {
    console.log('click card');
    router.push({
      pathname: `/page/${currentPage}`,
      query: { searchQuery, detail: characterId },
    });
  };

  return (
    <>
      <Header />
      <main className={darkTheme ? 'main mainDark' : 'main'}>
        {characters.length === 0 ? (
          <NotFoundChar />
        ) : (
          <div className="cardList">
            <div className="mainWrap">
              {characters.map((character) => (
                <Card
                  key={character.id}
                  character={character}
                  onClick={() => handleCardClick(character.id)}
                />
              ))}
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              searchQuery={searchQuery}
            />
            {selectedItemsCount > 0 && <Flyout />}
          </div>
        )}
        {selectedCharacter && <CardDetail character={selectedCharacter} />}
      </main>
    </>
  );
}

export default Page;
