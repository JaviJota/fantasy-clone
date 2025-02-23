export async function getLatestGames() {
  const LATEST_GAMES = "https://www.freetogame.com/api/games";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  return json.map((item) => {
    const { id, short_description, release_date, title, thumbnail, platform } =
      item;

    return {
      id,
      short_description,
      release_date,
      title,
      thumbnail,
      platform,
    };
  });
}

export async function getGameDetails(id) {
  const GAME_DETAILS = `https://www.freetogame.com/api/game?id=${id}`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { title, description, platform, thumbnail, publisher, release_date } =
    json;

  return {
    thumbnail,
    title,
    description,
    platform,
    publisher,
    release_date,
  };
}
