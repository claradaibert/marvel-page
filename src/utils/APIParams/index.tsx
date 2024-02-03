const APIParams = (location: string) => {
  let apiBaseRoute: string = "";
  let findByName: string = "";
  switch (location) {
    case "/characters":
      apiBaseRoute = "characters";
      findByName = "nameStartsWith";
      break;
    case "/comics":
      apiBaseRoute = "comics";
      findByName = "titleStartsWith";
      break;
    case "/creators":
      apiBaseRoute = "creators";
      findByName = "nameStartsWith";
      break;
  }

  return { apiBaseRoute, findByName };
};

export { APIParams };
