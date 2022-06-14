describe("search bar", () => {
  beforeEach(() => {
    // Testing desktop
    cy.viewport(1920, 1080);

    // Network request stubs
    const THMDBbaseURL = "https://api.themoviedb.org/3";
    cy.intercept(THMDBbaseURL + "/genre/movie/list**", {
      fixture: "getGenres.json",
    }).as("genres");
    cy.intercept(THMDBbaseURL + "/search/movie**", {
      fixture: "getMoviesByQuery_movie.json",
    }).as("movieSearch");
    cy.intercept(THMDBbaseURL + "/movie/popular**", {
      fixture: "getPopularMovies.json",
    }).as("popularMovies");

    // Visits discover page
    cy.visit("http://localhost:3000/discover");
    cy.wait("@popularMovies");
    cy.wait("@genres");
  });

  it("calls movieSearch endpoint with query parameter ON query type", () => {
    const query = "movie";

    // Types query
    cy.get("input[placeholder='Search for movies']").type(query);

    const regex = new RegExp(`&query=${query}(&.+)?`);

    // Url has correct query
    cy.wait("@movieSearch").its("request.url").should("match", regex);
  });

  it("calls movieSearch endpoint with year paramter ON type", () => {
    const query = "movie";
    const year = "2022";

    // Types query
    cy.get("input[placeholder='Search for movies']").type(query);
    // Types year
    cy.get("input[placeholder='Year of release']").type(year);

    const regex = new RegExp(`&year=${year}(&.+)?`);

    // url matches correct year
    cy.wait("@movieSearch").its("request.url").should("match", regex);
  });

  it("calls popularMovies endpoint WHEN query cleared", () => {
    const query = "movie";

    // Types query
    cy.get("input[placeholder='Search for movies']").type(query);

    // Waits for debounce to timeout
    cy.wait(300);

    // Clears query
    cy.get("input[placeholder='Search for movies']").clear();

    const regex = new RegExp(`&query=${query}(&.+)?`);

    // Calls popular movies endpoint
    cy.wait("@movieSearch").its("request.url").should("match", regex);
  });

  it.only("updates the results ON query type", () => {
    const query = "movie";

    // To avoid a false positive, checks the first movie
    cy.get("#discover_movie_list > article")
      .first()
      .should("contain", "Fantastic Beasts");

    // Types query
    cy.get("input[placeholder='Search for movies']").type(query);

    // Checks if the first movie updated to fixture
    cy.wait("@movieSearch").then(() => {
      cy.get("#discover_movie_list > article")
        .first()
        .should("contain", "Boruto: Naruto the Movie");
    });
  });
});
