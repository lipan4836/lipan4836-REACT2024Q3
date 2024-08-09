/* eslint-disable react-refresh/only-export-components */

import Header from '../../components/Header/Header';
import { Character } from '../../types/characterResponse';
import { GetServerSideProps } from 'next';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Main/Pagination';

type PageProps = {
  characters: Character[];
  totalPages: number;
  currentPage: number;
  searchQuery: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const { page = 1, searchQuery = '' } = context.query;
  const limit = 6;

  const res = await fetch(
    `https://dattebayo-api.onrender.com/characters/?page=${page}&limit=${limit}&name=${searchQuery}`,
  );
  const data = await res.json();

  return {
    props: {
      characters: data.characters || [],
      totalPages: Math.ceil(data.total / limit),
      currentPage: parseInt(page as string, 10),
      searchQuery: searchQuery as string,
    },
  };
};

function Page({ characters, totalPages, currentPage, searchQuery }: PageProps) {
  return (
    <>
      <Header />
      <main className={'main'}>
        <div className="cardList">
          <div className="mainWrap">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
          <Pagination totalPages={totalPages} currentPage={currentPage} searchQuery={searchQuery} />
        </div>
        
      </main>
    </>
  );
}

export default Page;
