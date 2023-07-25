//user <= {}
//friends => ['joão','bruna','felipe','Lira'];
//photos <= ['egito','bahamas','maldivas']

function getUser(callback) {
  console.log("Recuperando informações do usuario");
  setTimeout(() => {
    callback({ id: 0, name: "Gustavo", surname: "Gregory" });
  }, 2000);
}

function getFriendList(user, callback) {
  console.log(
    `recuperando lista de amigos  do usuário ${user.name} ${user.surname}`
  );
  setTimeout(() => {
    callback(["joão", "bruna", "felipe", "Lira"]);
  }, 2000);
}

function getPhotos(username, callback) {
  console.log(`recuperando lista de fotos  do usuário ${username}`);
  setTimeout(() => {
    callback(["egito", "bahamas", "maldivas"]);
  }, 2000);
}

//Callback Hell

getUser((user) =>
  getFriendList(user, (friends) => {
    getPhotos(friends[3], console.log);
  })
);
