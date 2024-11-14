export interface Movie {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genres: string[];
  rating: number;
  actors: { name: string; role: string }[];
}

function getMoviesByDirector(movies: Movie[], director: string): Movie[] {
  // Реализовать поиск фильмов по режиссеру
}

function getMoviesByGenres(movies: Movie[], genres: string[]): Movie[] {
  // Реализовать поиск фильмов по нескольким жанрам
}

function getActorsByMovieTitle(movies: Movie[], title: string): string[] {
  // Реализовать получение списка актеров по названию фильма
}

function getAllUniqueActors(movies: Movie[]): string[] {
  // Реализовать получение списка уникальных актеров
}

function getMoviesByYearRange(movies: Movie[], startYear: number, endYear: number): Movie[] {
  // Реализовать фильтрацию фильмов по диапазону лет
}

function getMoviesByRating(movies: Movie[], minRating: number): Movie[] {
  // Реализовать фильтрацию фильмов по рейтингу
}

function countMoviesByGenre(movies: Movie[]): Record<string, number> {
  // Реализовать подсчет количества фильмов для каждого жанра
}

function getMoviesByActorAndRole(movies: Movie[], actor: string, role: string): Movie[] {
  // Реализовать поиск фильмов с актером в указанной роли
}

function sortMoviesByYearAndRating(movies: Movie[]): Movie[] {
  // Реализовать сортировку фильмов по году и рейтингу
}

function getOldestAndNewestMovies(movies: Movie[]): { oldest: Movie; newest: Movie } {
  // Реализовать получение самого старого и самого нового фильма
}
