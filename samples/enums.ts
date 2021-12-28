enum Favourite_Colors {
  RED,
  GREEN,
  YELLOW,
}

enum Roles {
  ADMIN = 1,
  KEY,
}

const person = {
  name: "solen",
  role: Roles.ADMIN,
};

if (person.role == Roles.ADMIN) {
  console.log("Yes its an admin role");
}
