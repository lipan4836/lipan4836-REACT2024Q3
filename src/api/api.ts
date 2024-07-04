const apiUrl = 'https://dattebayo-api.onrender.com/characters';

async function fetchData(page: number, limit: number, name?: string) {
  const url = new URL(apiUrl);

  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  if (name) {
    url.searchParams.append('name', name);
  }

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Something gone wrong!!\nStatus: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Bad fetching data:', error);
    throw error;
  }
}

export default fetchData;
