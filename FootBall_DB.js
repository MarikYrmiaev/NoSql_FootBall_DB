use FootBall_DB

db.Goalkeeper.drop()
db.createCollection("Goalkeeper")

db.Defender.drop()
db.createCollection("Defender")

db.Midfielder.drop()
db.createCollection("Midfielder")

db.Forward.drop()
db.createCollection("Forward")

db.createCollection("managementBoard")
db.managementBoard.drop()

show collection

db.managementBoard.insertOne( { name: 'Florentino Pérez', Date(1947,3,8), gender: 'M', age: 74, Position: 'president' } );

db.managementBoard.insertMany(
   [{ name: 'Florentino Pérez', Date(1947,3,8), gender: 'M', age: 74, Position: 'Chairman'},
    {name: 'Jose Angel Sanchez', Date(1950,8,10), gender: 'M', age: 71, Position: 'CEO'},
    {name: 'Carlo Ancelotti', Date(1959,6,10), gender: 'M', age: 62, Position: 'coach'},]
	);

//real madrid team	
db.player.insertOne({name: 'Andrei Lunin', birthday: Date(1999,2,11), Foot: 'R', weight: 74, age: 22 , Type: 'Goalkeeper'}
db.player.insertOne({name: 'Thibaut Courtois', birthday: Date(1992,5,11), Foot: 'R', weight: 80, age: 29, , Type: 'Goalkeeper'}

db.players.insertMany([
  {name: 'David Alaba', birthday: Date(1992,6,24), Foot: 'L', weight: 75,  age: 29, position:'Center Back ', Type: 'Defender'},
{name: 'Ferland Mendy', birthday: Date(1995,6,8), Foot: 'L', weight: 70,  age: 26, position:'Left Back', Type: 'Defender'},
{name: 'Dani Carvajal', birthday: Date(1992,1,11), Foot: 'R', weight: 71,  age: 29, position:'Right Back', Type: 'Defender'},
{name: 'Marcelo', birthday: Date(1988,5,12), Foot: 'L', weight: 73,  age: 33, position:'Left Back', Type: 'Defender'},
{name: 'Nacho Fernandez', birthday: Date(1990,1,18), Foot: 'R', weight: 71,  age: 31, position:'Center Back', Type: 'Defender'},
{name: 'Éder Militão', birthday: Date(1998,1,18), Foot: 'R', weight: 70,  age: 23, position:'Center Back', Type: 'Defender'},
{name: 'Álvaro Odriozola', birthday: Date(1995,12,14), Foot: 'R', weight: 70,  age: 25, position:'Right Back', Type: 'Defender'},
{name: 'Jesús Vallejo', birthday: Date(1997,1,5), Foot: 'L', weight: 70,  age: 24, position:'Center Back', Type: 'Defender'},
{name: 'Takafosa Kubo', birthday: Date(2001,6,4), Foot: 'L', weight: 65,  age: 20, position:'Attacking Midfielder', Type: 'Midfielder'},
{name: 'Toni Kroos', birthday: Date(1990,1,4), Foot: 'R', weight: 78,  age: 31, position:'Central midfielder', Type: 'Midfielder'},
{name: 'Isco', birthday: Date(1992,4,21), Foot: 'R', weight: 72,  age: 29, position:'Central midfielder', Type: 'Midfielder'},
{name: 'Luka Modrić', birthday: Date(1985,9,9), Foot: 'R', weight: 65,  age: 35, position:'Playmaker', Type: 'Midfielder'},
{name: 'Martin Ødegaard', birthday: Date(1998,12,17), Foot: 'R', weight: 66,  age: 22, position:'Playmaker', Type: 'Midfielder'},
{name: 'Casemiro', birthday: Date(1992,2,23), Foot: 'R', weight: 68,  age: 29, position:'Defensive contact', Type: 'Midfielder'},
{name: 'Lucas Vázquez', birthday: Date(1991,7,1), Foot: 'R', weight: 69,  age: 30, position:'Wing Back', Type: 'Midfielder'},
{name: 'Federico Valverde', birthday: Date(1998,7,22), Foot: 'R', weight: 69,  age: 23, position:'Central midfielder', Type: 'Midfielder'},
{name: 'Dani Ceballos', birthday: Date(1996,8,7), Foot: 'L', weight: 70,  age: 25, position:'Central midfielder', Type: 'Midfielder'},
{name: 'Gareth Bale', birthday: Date(1989,7,16), Foot: 'L', weight: 77,  age: 32, position:'Winger', Type: 'Forward'},
{name: 'Eden Hazard', birthday: Date(1991,1,7), Foot: 'R', weight: 69,  age: 30, position:'Winger', Type: 'Forward'},
{name: 'Karim Benzema', birthday: Date(1987,12,19), Foot: 'R', weight: 70,  age: 33, position:'Center forward', Type: 'Forward'},
{name: 'Marco Asensio', birthday: Date(1996,1,21), Foot: 'L', weight: 73,  age: 25, position:'Winger', Type: 'Forward'},
{name: 'Vinícius Júnior', birthday: Date(2000,7,12), Foot: 'R', weight: 62,  age: 21, position:'Winger', Type: 'Forward'},
{name: 'Rodrygo Goes', birthday: Date(2001,1,9), Foot: 'R', weight: 61,  age: 20, position:'Winger', Type: 'Forward'},
{name: 'Luka Jović', birthday: Date(1997,12,23), Foot: 'L', weight: 73,  age: 23, position:'Center forward', Type: 'Forward'},
{name: 'Mariano Díaz', birthday: Date(1993,8,1), Foot: 'L', weight: 73,  age: 28, position:'Center forward', Type: 'Forward'}
  ])

// Generating team with players ids
db.teams.insertOne({
  name: 'Real Madrid',
  coach: {name: 'Carlo Ancelotti',birthday: Date(1959,6,10), age: 62},
  players:  db.players.find({},{_id:1}).toArray()
})


//chelsea team
db.players.insertOne({name: 'Édouard Mendy', birthday: Date(1999,3,1), Foot: 'L', weight: 79, age: 29 , Type: 'Goalkeeper'});
db.players.insertOne({name: 'Kepa Arrizabalaga', birthday: Date(1994,10,3), Foot: 'R', weight: 72, age: 26 , Type: 'Goalkeeper'});

db.players.insertMany([
  {name: 'Thiago Silva', birthday: Date(1984,9,22), Foot: 'L', weight: 70,  age: 36, position:'Center Back ', Type: 'Defender'},
{name: 'Antonio Rüdiger', birthday: Date(1993,5,3), Foot: 'L', weight: 70,  age: 28, position:'Center Back', Type: 'Defender'},
{name: 'César Azpilicueta', birthday: Date(1989,8,28), Foot: 'R', weight: 71,  age: 31, position:'Right Back', Type: 'Defender'},
{name: 'Ben Chilwell', birthday: Date(1996,12,21), Foot: 'L', weight: 73,  age: 24, position:'Left Back', Type: 'Defender'},
{name: 'Marcos Alonso', birthday: Date(1990,12,28), Foot: 'R', weight: 71,  age: 30, position:'Left Back', Type: 'Defender'},
{name: 'Andreas Christensen', birthday: Date(1996,4,10), Foot: 'L', weight: 70,  age: 25, position:'Center Back', Type: 'Defender'},
{name: 'Kurt Zouma', birthday: Date(1994,10,27), Foot: 'R', weight: 70,  age: 26, position:'Center Back', Type: 'Defender'},
{name: 'Emerson Palmieri dos Santos', birthday: Date(19947,8,3), Foot: 'L', weight: 70,  age: 27, position:'Left Back', Type: 'Defender'},
{name: 'N\'Golo Kanté', birthday: Date(1991,3,29), Foot: 'R', weight: 65,  age: 30, position:'Defensive contact', Type: 'Midfielder'},
{name: 'Kai Havertz', birthday: Date(1999,6,11), Foot: 'R', weight: 70,  age: 22, position:'Playmaker', Type: 'Midfielder'},
{name: 'Christian Pulisic', birthday: Date(1998,9,18), Foot: 'L', weight: 72,  age: 22, position:'Wing Back', Type: 'Midfielder'},
{name: 'Mason Mount', birthday: Date(1999,1,10), Foot: 'R', weight: 65,  age: 22, position:'Central midfielder', Type: 'Midfielder'},
{name: 'Hakim Ziash', birthday: Date(1993,3,19), Foot: 'L', weight: 66,  age: 28, position:'Wing Back', Type: 'Midfielder'},
{name: 'Jorginho', birthday: Date(1991,12,20), Foot: 'R', weight: 68,  age: 29, position:'Defensive contact', Type: 'Midfielder'},
{name: 'Mateo Kovačić', birthday: Date(1994,5,6), Foot: 'R', weight: 69,  age: 27, position:'Central midfielder', Type: 'Midfielder'},
{name: 'Romelu Lukaku', birthday: Date(1993,5,13), Foot: 'L', weight: 99,  age: 28, position:'Center forward', Type: 'Forward'},
{name: 'Timo Werner', birthday: Date(1996,3,6), Foot: 'R', weight: 69,  age: 25, position:'Winger', Type: 'Forward'},
{name: 'Callum Hudson-Odoi', birthday: Date(2000,11,7), Foot: 'R', weight: 70,  age: 20, position:'Center forward', Type: 'Forward'},
{name: 'Armando Broja', birthday: Date(2001,9,10), Foot: 'L', weight: 65,  age: 19, position:'Winger', Type: 'Forward'}
  ]);

db.teams.insertOne({
  name: 'Chelsea',
  coach: {name: 'Thomas Tuchel',birthday: Date(1973,8,29), age: 47},
  players:  db.players.find({},{_id:1}).skip(27).toArray()
})


//juventus team
db.player.insert({name: 'Wojciech Szczęsny', birthday: Date(1990,4,18), Foot: 'L', weight: 79, age: 31 , Type: 'Goalkeeper'});
db.player.insert({name: 'Carlo Pinsoglio', birthday: Date(1990,5,31), Foot: 'R', weight: 72, age: 31, , Type: 'Goalkeeper'});

db.players.insertMany([
{name: 'Matthijs de Ligt', birthday: Date(1999,8,12), Foot: 'R', weight: 70,  age: 22, position:'Center Back ', Type: 'Defender'}),
{name: 'Leonardo Bonucci', birthday: Date(1987,5,1), Foot: 'L', weight: 80,  age: 34, position:'Center Back', Type: 'Defender'}),
{name: 'Radu Drăgușin', birthday: Date(2002,2,3), Foot: 'R', weight: 71,  age: 19, position:'Center Back', Type: 'Defender'}),
{name: 'Danilo', birthday: Date(1991,7,15), Foot: 'L', weight: 73,  age: 30, position:'Right Back', Type: 'Defender'}),
{name: 'Alex Sandro', birthday: Date(1991,1,26), Foot: 'L', weight: 71,  age: 30, position:'Left Back', Type: 'Defender'}),
{name: 'Mattia De Sciglio', birthday: Date(1992,10,20), Foot: 'R', weight: 70,  age: 28, position:'Right Back', Type: 'Defender'}),
{name: 'Daniele Rugani', birthday: Date(1994,7,29), Foot: 'R', weight: 70,  age: 27, position:'Center Back', Type: 'Defender'}),
{name: 'Manuel Locatelli', birthday: Date(1998,1,8), Foot: 'R', weight: 65,  age: 23, position:'Central midfielder', Type: 'Midfielder'}),
{name: 'Jean Kolosevsky', birthday: Date(2000,4,25), Foot: 'L', weight: 70,  age: 21, position:'Playmaker', Type: 'Midfielder'}),
{name: 'Aaron Ramsey', birthday: Date(1990,12,26), Foot: 'L', weight: 72,  age: 30, position:'Central midfielder', Type: 'Midfielder'}),
{name: 'Juan Cuadrado', birthday: Date(1988,5,26), Foot: 'R', weight: 65,  age: 33, position:'Wing Back', Type: 'Midfielder'}),
{name: 'Weston McKennie', birthday: Date(1998,8,28), Foot: 'L', weight: 66,  age: 22, position:'Central midfielder', Type: 'Midfielder'}),
{name: 'Arthur', birthday: Date(1996,8,12), Foot: 'R', weight: 68,  age: 25, position:'Defensive contact', Type: 'Midfielder'}),
{name: 'Adrien Rabiot', birthday: Date(1995,4,3), Foot: 'R', weight: 69,  age: 26, position:'Central midfielder', Type: 'Midfielder'}),
{name: 'Rodrigo Bentancur Colmán', birthday: Date(1997,6,25), Foot: 'R', weight: 69,  age: 24, position:'Central midfielder', Type: 'Midfielder'}),
{name: 'Cristiano Ronaldo', birthday: Date(1985,2,5), Foot: 'R', weight: 75,  age: 36, position:'Winger', Type: 'Forward'}),
{name: 'Paulo Dybala', birthday: Date(1993,11,15), Foot: 'L', weight: 69,  age: 27, position:'Winger', Type: 'Forward'}),
{name: 'Federico Chiesa', birthday: Date(1997,10,25), Foot: 'R', weight: 70,  age: 23, position:'Winger', Type: 'Forward'}),
{name: 'Álvaro Morata', birthday: Date(1992,10,23), Foot: 'R', weight: 76,  age: 28, position:'Center forward', Type: 'Forward'}),
{name: 'Federico Bernardeschi', birthday: Date(1994,2,16), Foot: 'L', weight: 76,  age: 27, position:'Winger', Type: 'Forward'}
]);

db.teams.insertOne({
  name: 'Juventus',
  coach: {name: 'Massimiliano Allegro',birthday: Date(1967,8,11), age: 57},
  players:  db.players.find({},{_id:1}).skip(49).toArray()
})


// Fining all players aged between 25-28
db.player.find({age: {$lt:28, $gt:25}})

// Finding all players that name starts with F
db.player.find({name: /^F/})

// Finding all players name ends with E
db.player.find({name: /e$/})

// Finding all player are Foot R weight ander 75 and Type Defender
db.player.find( { Foot: 'R', weight: {$lt: 75}, Type: 'Defender'  } )


// Creating a function that returns random player id for a given team name
function getRandomPlayerId(teamName){
  var randomNumber = Math.floor(Math.random() * db.teams.findOne({name: teamName}).players.length);
  var randomPlayer = db.teams.findOne({name: teamName}).players[randomNumber];
  return randomPlayer._id;
}

//finding name of players
for (var i =0; i < db.players.count(); i++){
  print('Name: ' + db.players.find().skip(i).limit(1).toArray()[0].name)
}