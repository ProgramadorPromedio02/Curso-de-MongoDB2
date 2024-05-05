// Crear un Documento
// Documentos -> Objetos de tipo JSON

user1 = {
  username: 'user1',
  age: 27,
  email: 'user1@example.com',
};

// Se valida que la base de datos exista.
// Se valida que la colección exista.
user2 = {
  username: 'user2',
  age: 29,
  email: 'user2@example.com',
};

user3 = {
  username: 'user3',
  age: 32,
  email: 'user3@example.com',
};

db.users.insert(user3);

// ObjectId -> 4
// 1.- (Timestamp): La fecha exacta que se mando el registro.
// 2.- (Identificador para el servidor)
// 3.- (PID): proceso id_
// 4.- (AutoIncrement): auto incremental

// insertOne(); // Permite insertar un solo documento.

user4 = {
  username: 'user4',
  age: 45,
  email: 'user4@example.com',
};

db.users.insertOne(user4);

user8 = {
  username: 'user8',
  age: 56,
  email: 'user8@example.com',
};

db.users.insertOne(user8);

// insertMany(); // Permite insertar más de un solo documento.

db.users.insertMany([
  {
    username: 'user5',
    age: 60,
    email: 'user5@example.com',
  },
  {
    username: 'user6',
    age: 11,
    email: 'user6@example.com',
  },
  {
    username: 'user7',
    age: 21,
    email: 'user7@example.com',
  },
]);

db.users.insertMany([
  {
    username: 'user9',
    age: 23,
    email: 'user9@example.com',
    status: 'inactive',
  },
  {
    username: 'user10',
    age: 31,
    email: 'user10@example.com',
    status: 'inactive',
  },
  {
    username: 'user11',
    age: 8,
    email: 'user11@example.com',
    status: 'inactive',
  },
  {
    username: 'user12',
    age: 15,
    email: 'user12@example.com',
    status: 'active',
  },
]);

db.users.insertMany([
  {
    username: 'user13',
    age: 23,
    email: 'user13@example.com',
  },
  {
    username: 'user14',
    age: 31,
    email: 'user14@example.com',
  },
  {
    username: 'user15',
    age: 8,
    email: 'user15@example.com',
    status: 'inactive',
  },
  {
    username: 'user16',
    age: 15,
    email: 'user16@example.com',
    status: 'active',
  },
  {
    username: 'user17',
    age: 23,
    email: 'user17@example.com',
  },
  {
    username: 'user18',
    age: 31,
    email: 'user18@example.com',
  },
  {
    username: 'user19',
    age: 8,
    email: 'user19@example.com',
    status: 'inactive',
  },
  {
    username: 'user20',
    age: 15,
    email: 'user20@example.com',
    status: 'active',
  },
]);

// Bloque máximo: 20 registros

// Salto de página(it)

db.users.insertMany([
  {
    username: 'user21',
    age: 23,
    email: 'user21@example.com',
  },
  {
    username: 'user22',
    age: 31,
    email: 'user22@example.com',
  },
  {
    username: 'user23',
    age: 8,
    email: 'user23@example.com',
    status: 'inactive',
  },
  {
    username: 'user24',
    age: 15,
    email: 'user24@example.com',
    status: 'active',
  }
]);

//Nota🗒️: El insertOne() y el insertMany() nos perminen saber los id_ de los objetos persistidos

// save() <- método obsoleto en versiones recientes de mongo

user8 = {
  username: 'user8',
  age: 56,
  email: 'user8@example.com',
};

db.users.save(user8);
// Si el objeto no existe se crea. (_id)
// Si el objeto si existe, se actualiza. (_id)

// Obtener el usuario con username user7

db.users.find({
  // Retorna un cursor
  username: 'user7',
});

db.users.findOne({
  // Retorna un documento
  username: 'user7',
});

// Obtener todos los usuarios con una edad mayor a 10

db.users.find({
  age: { $gt: 10 },
});

db.users.find({
  age: { $gt: 25 },
});

db.users.find({
  age: { $lte: 25 },
});

// gt : >
// gte : >=
// lt : <
// lte : <=
// e : ecuals
// nt : !=

// Obtener la cantidad de usuarios con una edad menor a 50
// cursor -> count()

db.users.find({
    age: { $lt: 50 },
  }).count();

// Obtener todos los usuarios con un edad mayor a 10 y cuyo estatus sea activo

db.users.find({
  $and: [
    {age: { $gt: 10 }},
    {status: 'active'}
  ]
});

// Obtener todos los usuarios cuya edad no sea 11

db.users.find({
  age: { $ne: 11},
});

// Obteter todos los usuarios que tengan por edad: 27 o 40 o 11

db.users.find({
  $or: [
    {age : 27},
    {age : 40},
    {age: 11}
  ]
});

// 2da Opción ($in)

db.users.find({
  age: { $in: [27, 40, 11] },
});

// Obtener todos los usuarios con atributo estatus.

db.users.find({ 
  status: {$exists: true} 
});

db.users.find({ 
  status: {$exists: false} 
});

db.users.find({ 
  bio: {$exists: true} 
});


// Obtener todos los usuarios con estatus activo

db.users.find({
  status: 'active' // ==
});

// ==
// <attr>: <valor>
// <attr>: {     }

//2da Opción ($and)

db.users.find({
  $and: [
    { status: {$exists: true} },
    { status: 'active' },
  ]
});

// Obtener todos los usuarios con estatus activo y correo electronico

db.users.find({
  $and: [
    {status: { $exists: true} },
    {status: { $exists: 'active'} },
    {email: { $exists: true} },
  ]
});

// Obtener el usuario con mayor edad

// cursor.sort()

db.users.find().sort(
  {
    age: -1 // Asc: 1
  }
).limit(1);

// Obtener a los tres usuarios más jovenes

db.users.find().sort(
  {
    age: 1,
  }
).limit(3);

// Expresiones Regulares

db.users.find({email: /.com/}); // Like %com
// Donde termine los caracteres
db.users.find({email: /.com$/});
// Donde empiece los caracteres
db.users.find({email: /^user/}); 
db.users.find({email: /^user1/}); // Like user1%
// Valor que tenga un carácter especifico
db.users.find({email: /@/}); // Like %@%

// Modificar los documentos

// find, sort, limit y skip > retorna cursores
// count y pretty 

var users = db.users.find(); // Se almacena la consulta en una variable. Solo se puede usar una vez.
var users = db.users.find().forEach( user => print(user.username) ); // Recorre todos los documentos en la colección "users" e imprime los nombres de usuario de cada documento en la consola.

//forEach(): Ejecuta la función indicada una vez por cada elemento del array.

// Métodos:
// ..................................................................
// .find(): Devuelve los documentos en una colección de MongoDB que cumplan con ciertos criterios de consulta. En términos de JavaScript, devuelve el primer documento que coincide con la consulta especificada, o `null` si no se encuentra ninguno.
// ..................................................................
// Ej: db.users.find();
// Resultado:
// [
//   {
//     _id: ObjectId('663517c0b483bb4f6646b799'),
//     username: 'user1',
//     age: 27,
//     email: 'user1@example.com'
//   },
//   {
//     _id: ObjectId('66375138f52f1cc1e846b799'),
//     username: 'user2',
//     age: 29,
//     email: 'user2@example.com'
//   },
//   {
//     _id: ObjectId('66375244f52f1cc1e846b79a'),
//     username: 'user3',
//     age: 32,
//     email: 'user3@example.com'
//   },
//   {
//     _id: ObjectId('66375329f52f1cc1e846b79b'),
//     username: 'user4',
//     age: 45,
//     email: 'user4@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b79f'),
//     username: 'user5',
//     age: 60,
//     email: 'user5@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a0'),
//     username: 'user6',
//     age: 11,
//     email: 'user6@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a1'),
//     username: 'user7',
//     age: 21,
//     email: 'user7@example.com'
//   },
//   {
//     _id: ObjectId('6637591bf52f1cc1e846b7a2'),
//     username: 'user8',
//     age: 56,
//     email: 'user8@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a3'),
//     username: 'user9',
//     age: 23,
//     email: 'user9@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a4'),
//     username: 'user10',
//     age: 31,
//     email: 'user10@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a5'),
//     username: 'user11',
//     age: 8,
//     email: 'user11@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a6'),
//     username: 'user12',
//     age: 15,
//     email: 'user12@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a7'),
//     username: 'user13',
//     age: 23,
//     email: 'user13@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a8'),
//     username: 'user14',
//     age: 31,
//     email: 'user14@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a9'),
//     username: 'user15',
//     age: 8,
//     email: 'user15@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7aa'),
//     username: 'user16',
//     age: 15,
//     email: 'user16@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ab'),
//     username: 'user17',
//     age: 23,
//     email: 'user17@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ac'),
//     username: 'user18',
//     age: 31,
//     email: 'user18@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ad'),
//     username: 'user19',
//     age: 8,
//     email: 'user19@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ae'),
//     username: 'user20',
//     age: 15,
//     email: 'user20@example.com',
//     status: 'active'
//   }
// ]
// ...................................................................
//.count(): Devuelve la cantidad númerica de los elementos existentes.
// ................................................................... 
// Ej: db.users.find().count();
// Resultado: 24
//.limit(): Devuelve un límite de la cantidad de elementos obtenidos.
// Ej: codigofacilito> db.users.find().limit(10);
// [
//   {
//     _id: ObjectId('663517c0b483bb4f6646b799'),
//     username: 'user1',
//     age: 27,
//     email: 'user1@example.com'
//   },
//   {
//     _id: ObjectId('66375138f52f1cc1e846b799'),
//     username: 'user2',
//     age: 29,
//     email: 'user2@example.com'
//   },
//   {
//     _id: ObjectId('66375244f52f1cc1e846b79a'),
//     username: 'user3',
//     age: 32,
//     email: 'user3@example.com'
//   },
//   {
//     _id: ObjectId('66375329f52f1cc1e846b79b'),
//     username: 'user4',
//     age: 45,
//     email: 'user4@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b79f'),
//     username: 'user5',
//     age: 60,
//     email: 'user5@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a0'),
//     username: 'user6',
//     age: 11,
//     email: 'user6@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a1'),
//     username: 'user7',
//     age: 21,
//     email: 'user7@example.com'
//   },
//   {
//     _id: ObjectId('6637591bf52f1cc1e846b7a2'),
//     username: 'user8',
//     age: 56,
//     email: 'user8@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a3'),
//     username: 'user9',
//     age: 23,
//     email: 'user9@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a4'),
//     username: 'user10',
//     age: 31,
//     email: 'user10@example.com',
//     status: 'inactive'
//   }
// ]
// ...........................................................
// .skip(): Salta un número especificado de documentos en una colección de MongoDB y devuelve los documentos restantes. 
// ...........................................................
// Ej: db.users.find().skip(5);
// Resultado:
// [
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a0'),
//     username: 'user6',
//     age: 11,
//     email: 'user6@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a1'),
//     username: 'user7',
//     age: 21,
//     email: 'user7@example.com'
//   },
//   {
//     _id: ObjectId('6637591bf52f1cc1e846b7a2'),
//     username: 'user8',
//     age: 56,
//     email: 'user8@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a3'),
//     username: 'user9',
//     age: 23,
//     email: 'user9@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a4'),
//     username: 'user10',
//     age: 31,
//     email: 'user10@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a5'),
//     username: 'user11',
//     age: 8,
//     email: 'user11@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a6'),
//     username: 'user12',
//     age: 15,
//     email: 'user12@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a7'),
//     username: 'user13',
//     age: 23,
//     email: 'user13@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a8'),
//     username: 'user14',
//     age: 31,
//     email: 'user14@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a9'),
//     username: 'user15',
//     age: 8,
//     email: 'user15@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7aa'),
//     username: 'user16',
//     age: 15,
//     email: 'user16@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ab'),
//     username: 'user17',
//     age: 23,
//     email: 'user17@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ac'),
//     username: 'user18',
//     age: 31,
//     email: 'user18@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ad'),
//     username: 'user19',
//     age: 8,
//     email: 'user19@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ae'),
//     username: 'user20',
//     age: 15,
//     email: 'user20@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7af'),
//     username: 'user21',
//     age: 23,
//     email: 'user21@example.com'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b0'),
//     username: 'user22',
//     age: 31,
//     email: 'user22@example.com'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b1'),
//     username: 'user23',
//     age: 8,
//     email: 'user23@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b2'),
//     username: 'user24',
//     age: 15,
//     email: 'user24@example.com',
//     status: 'active'
//   }
// ]
// ...................................................................
// .sort(): Se utiliza para ordenar los documentos de una colección en función de uno o más campos, ya sea de forma ascendente (1) o descendente (-1).
// ....................................................................
// Ej: 
// Ascendente
// db.users.find().sort({age: 1});
// [
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a5'),
//     username: 'user11',
//     age: 8,
//     email: 'user11@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a9'),
//     username: 'user15',
//     age: 8,
//     email: 'user15@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ad'),
//     username: 'user19',
//     age: 8,
//     email: 'user19@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b1'),
//     username: 'user23',
//     age: 8,
//     email: 'user23@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a0'),
//     username: 'user6',
//     age: 11,
//     email: 'user6@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a6'),
//     username: 'user12',
//     age: 15,
//     email: 'user12@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7aa'),
//     username: 'user16',
//     age: 15,
//     email: 'user16@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ae'),
//     username: 'user20',
//     age: 15,
//     email: 'user20@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b2'),
//     username: 'user24',
//     age: 15,
//     email: 'user24@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a1'),
//     username: 'user7',
//     age: 21,
//     email: 'user7@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a3'),
//     username: 'user9',
//     age: 23,
//     email: 'user9@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a7'),
//     username: 'user13',
//     age: 23,
//     email: 'user13@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ab'),
//     username: 'user17',
//     age: 23,
//     email: 'user17@example.com'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7af'),
//     username: 'user21',
//     age: 23,
//     email: 'user21@example.com'
//   },
//   {
//     _id: ObjectId('663517c0b483bb4f6646b799'),
//     username: 'user1',
//     age: 27,
//     email: 'user1@example.com'
//   },
//   {
//     _id: ObjectId('66375138f52f1cc1e846b799'),
//     username: 'user2',
//     age: 29,
//     email: 'user2@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a4'),
//     username: 'user10',
//     age: 31,
//     email: 'user10@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a8'),
//     username: 'user14',
//     age: 31,
//     email: 'user14@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ac'),
//     username: 'user18',
//     age: 31,
//     email: 'user18@example.com'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b0'),
//     username: 'user22',
//     age: 31,
//     email: 'user22@example.com'
//   }
// ]
// Descendente
// db.users.find().sort({age: -1});
// [
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b79f'),
//     username: 'user5',
//     age: 60,
//     email: 'user5@example.com'
//   },
//   {
//     _id: ObjectId('6637591bf52f1cc1e846b7a2'),
//     username: 'user8',
//     age: 56,
//     email: 'user8@example.com'
//   },
//   {
//     _id: ObjectId('66375329f52f1cc1e846b79b'),
//     username: 'user4',
//     age: 45,
//     email: 'user4@example.com'
//   },
//   {
//     _id: ObjectId('66375244f52f1cc1e846b79a'),
//     username: 'user3',
//     age: 32,
//     email: 'user3@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a4'),
//     username: 'user10',
//     age: 31,
//     email: 'user10@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a8'),
//     username: 'user14',
//     age: 31,
//     email: 'user14@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ac'),
//     username: 'user18',
//     age: 31,
//     email: 'user18@example.com'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b0'),
//     username: 'user22',
//     age: 31,
//     email: 'user22@example.com'
//   },
//   {
//     _id: ObjectId('66375138f52f1cc1e846b799'),
//     username: 'user2',
//     age: 29,
//     email: 'user2@example.com'
//   },
//   {
//     _id: ObjectId('663517c0b483bb4f6646b799'),
//     username: 'user1',
//     age: 27,
//     email: 'user1@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a3'),
//     username: 'user9',
//     age: 23,
//     email: 'user9@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a7'),
//     username: 'user13',
//     age: 23,
//     email: 'user13@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ab'),
//     username: 'user17',
//     age: 23,
//     email: 'user17@example.com'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7af'),
//     username: 'user21',
//     age: 23,
//     email: 'user21@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a1'),
//     username: 'user7',
//     age: 21,
//     email: 'user7@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a6'),
//     username: 'user12',
//     age: 15,
//     email: 'user12@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7aa'),
//     username: 'user16',
//     age: 15,
//     email: 'user16@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ae'),
//     username: 'user20',
//     age: 15,
//     email: 'user20@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376e0df52f1cc1e846b7b2'),
//     username: 'user24',
//     age: 15,
//     email: 'user24@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a0'),
//     username: 'user6',
//     age: 11,
//     email: 'user6@example.com'
//   }
// ]
// .......................................................
// .pretty: Mejorá la lebilidad de la sálida de consultas.
// .......................................................
// Ej: db.users.find().pretty();
// Resultado:
// [
//   {
//     _id: ObjectId('663517c0b483bb4f6646b799'),
//     username: 'user1',
//     age: 27,
//     email: 'user1@example.com'
//   },
//   {
//     _id: ObjectId('66375138f52f1cc1e846b799'),
//     username: 'user2',
//     age: 29,
//     email: 'user2@example.com'
//   },
//   {
//     _id: ObjectId('66375244f52f1cc1e846b79a'),
//     username: 'user3',
//     age: 32,
//     email: 'user3@example.com'
//   },
//   {
//     _id: ObjectId('66375329f52f1cc1e846b79b'),
//     username: 'user4',
//     age: 45,
//     email: 'user4@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b79f'),
//     username: 'user5',
//     age: 60,
//     email: 'user5@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a0'),
//     username: 'user6',
//     age: 11,
//     email: 'user6@example.com'
//   },
//   {
//     _id: ObjectId('6637549bf52f1cc1e846b7a1'),
//     username: 'user7',
//     age: 21,
//     email: 'user7@example.com'
//   },
//   {
//     _id: ObjectId('6637591bf52f1cc1e846b7a2'),
//     username: 'user8',
//     age: 56,
//     email: 'user8@example.com'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a3'),
//     username: 'user9',
//     age: 23,
//     email: 'user9@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a4'),
//     username: 'user10',
//     age: 31,
//     email: 'user10@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a5'),
//     username: 'user11',
//     age: 8,
//     email: 'user11@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('663759c4f52f1cc1e846b7a6'),
//     username: 'user12',
//     age: 15,
//     email: 'user12@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a7'),
//     username: 'user13',
//     age: 23,
//     email: 'user13@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a8'),
//     username: 'user14',
//     age: 31,
//     email: 'user14@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7a9'),
//     username: 'user15',
//     age: 8,
//     email: 'user15@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7aa'),
//     username: 'user16',
//     age: 15,
//     email: 'user16@example.com',
//     status: 'active'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ab'),
//     username: 'user17',
//     age: 23,
//     email: 'user17@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ac'),
//     username: 'user18',
//     age: 31,
//     email: 'user18@example.com'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ad'),
//     username: 'user19',
//     age: 8,
//     email: 'user19@example.com',
//     status: 'inactive'
//   },
//   {
//     _id: ObjectId('66376ccef52f1cc1e846b7ae'),
//     username: 'user20',
//     age: 15,
//     email: 'user20@example.com',
//     status: 'active'
//   }
// ]
// ........
// PRÁCTICA
// ........
  db.users.find(
    {
      age: {$gte: 50}
    }, // Definimos las condiciones
    {
      _id: false,
      username: true,
      email: true,
      age: true
    }
  );

// 1.- Save <- Es obsoleto en versiones recientes de MongoDB
// var user = db.users.findOne();

// var user = db.users.findOne();

// user
// {
//   _id: ObjectId('663517c0b483bb4f6646b799'),
//   username: 'user1',
//   age: 27,
//   email: 'user1@example.com'
// }
// var user = db.users.findOne();

// user.age = 28
// 28
// user.email = 'user1@codigofacilito.com'
// user1@codigofacilito.com
// user.status = 'active'
// active
// user
// {
//   _id: ObjectId('663517c0b483bb4f6646b799'),
//   username: 'user1',
//   age: 28,
//   email: 'user1@codigofacilito.com',
//   status: 'active'
// }
// codigofacilito> db.users.save({user});
// TypeError: db.users.save is not a function

// Resultado:
// {
//   _id: ObjectId('663517c0b483bb4f6646b799'),
//   username: 'user1',
//   age: 28,
//   email: 'user1@codigofacilito.com',
//   status: 'active'
// }

// 2 .update({},{}) <- Método también obsoleto en versiones recientes de MongoDB. En lugar sería updateOne({},{}).

db.users.updateOne(
  {
    "_id": ObjectId('663517c0b483bb4f6646b799')
  },
  {
    $set: {
      username: 'Cody',
      email: 'info@codigofacilito.com',
      age: 10,
      profile_picture: 'www.codigofacilito.com/user1'
    }
  }
);
// ....................................................
// Alternativa (.updateOne({},{}) y .updateMany({},{}))
// ....................................................

// .updateOne({},{}): Actualiza un único documento que coincide con el filtro especificado.
// .updateMany({},{}): Actualiza todos los documentos que coinciden con el filtro especificado.

// .....................................................
// $set: Indica qué campos y valores quieres actualizar.
// .....................................................

// .updateOne({},{})

db.users.updateOne(
  { _id: user._id },
  { $set: { age: 28, email: 'user1@codigofacilito.com', status: 'active' } }
);

// ..................................................................
// $unset: Indica qué campos y valores quieres quitar en el registro.
// ..................................................................

db.users.updateOne(
  {
    username: 'Cody'
  },
  {
    $unset: {
      profile_picture: true
    }
  }
);

db.users.updateOne(
  {
    username: 'Cody'
  },
  {
    $unset: {
      statud: 'inactive'
    }
  }
);


// .updateMany({},{})

db.users.updateMany(
  {
    status: 'inactive'
  },
  {
    $set: {
      status: 'active'
    }
  }
);

// db.users.update(
//   {
//     status: 'active'
//   },
//   {
//     $set: {
//       status: 'inactive'
//     }
//   },
//   {
//     multi: true // Obsoleto
//   }
// );

//$inc: incrementa o decrementa el valor de un campo numérico en un documento. 

db.users.updateMany(
  {
  },
  {
    $inc: {
      age: -1
    }
  }
);

// Remover documentos: db.documents.remove({});

db.users.remove({}); // Remueve todos los documentos de la colección
db.users.remove({status: 'inactive'});

// Eliminar una collección: db.collection.drop();

db.users.drop();

// Eliminar una base de datos: db.dropDatabase();

db.dropDatabase();

// Armando de nuevo una colección

db.users.insertMany([
  user1 = {
    'username': 'user1',
    'age': 27,
    'email': 'user1@example.com',
  },
  user2 = {
    'username': 'user2',
    'age': 29,
    'email': 'user2@example.com',
  },
  user3 = {
    'username': 'user3',
    'age': 32,
    'email': 'user3@example.com',
  },
  user4 = {
    'username': 'user4',
    'age': 45,
    'email': 'user4@example.com',
  },
  user5 = {
    'username': 'user5',
    'age': 60,
    'email': 'user5@example.com',
  },
  user6 = {
    'username': 'user6',
    'age': 11,
    'email': 'user6@example.com',
  },
  user7 = {
    'username': 'user7',
    'age': 21,
    'email': 'user7@example.com',
  },
  user8 = {
    'username': 'user8',
    'age': 56,
    'email': 'user8@example.com',
  },
  user9 = {
    'username': 'user9',
    'age': 23,
    'email': 'user9@example.com',
    'status': 'inactive',
  },
  user10 = {
    'username': 'user10',
    'age': 31,
    'email': 'user10@example.com',
    'status': 'inactive',
  },
  user11 = {
    'username': 'user11',
    'age': 8,
    'email': 'user11@example.com',
    'status': 'inactive',
  },
  user12 = {
    'username': 'user12',
    'age': 15,
    'email': 'user12@example.com',
    'status': 'active',
  },
  user13 = {
    'username': 'user13',
    'email': 'user13@example.com',
    'age': 29,
    'status': 'active',
    'address': {
      'zip': 1001,
      'country': 'MX'
    },
    'courses': ['Python', 'MongoDB', 'Ruby', 'Java'],
    'comments': [
      {
        body: 'Best course',
        like: true,
        tags: ['MongoDB']
      },
      {
        body: 'Super excited',
        like: true
      },
      {
        body: 'The course is Ok',
      },
      {
        body: 'Bad courses, Im disappointed',
        like: false,
        tags: ['bad', 'course', 'MongoDB']
      }
    ]
  },
  user14 = {
    'username': 'user14',
    'email': 'user14@example.com',
    'age': 29,
    'status': 'active',
    'comments': [
      {
        body: 'Best course',
        like: true
      }
    ]
  },
  user15 = {
    'username': 'user15',
    'email': 'user15@example.com',
    'age': 29,
    'status': 'active',
    'comments': [
      {
        body: 'Best course',
        like: false
      }
    ]
  },
  user16 = {
    'username': 'user16',
    'email': 'user16@example.com',
    'age': 29,
    'status': 'active',
    'comments': [
      {
        body: 'Best course',
        like: false
      }
    ],
    'address': {
      'zip': 1001,
      'country': 'MX',
      'location': {
        'lat': 109,
        'long': -150,
        'example': {
          'di': 100
        }
      }
    }
  }
]);


// Obtener todos los usuarios que radiquen en México.

db.users.find(
  {
    'address.country': 'MX'
  },
  {
    username: true,
    'address.zip': true
  }
);

db.users.find(
  {
    'address.location.lat': 109 // dot notation
  },
  {
    username: true,
    'address.zip': true
  }
);

// dot notation: forma de acceder a los campos de un documento que están anidados dentro de otros campos.

// Actualizar el código postal

db.users.updateMany(
  {
    'address.zip': {$exists: true}
  },
  {
    $set: {
      'address.zip': 110
    }
  }
);

// Añadir dirección a todos los usuarios que no la posean

db.users.updateMany(
  {
    'address': {$exists: false},
  },
  {
    $set: {
      'address': {
        country: 'MX',
        zip: 2017
      }
    }
  }
);

db.users.updateOne(
  {
    username: 'user13'
  },
  {
    $set: {
      'address.location': {
        lat: -180,
        long: 250
      }
    }
  }
);

// Obtener todos los usuarios que tengan en su listado de cursos Python.

db.users.updateMany(
  { 'courses': { $exists: false } },
  { $set: { 'courses': ['Python', 'MongoDB', 'Ruby', 'Java'] } }
);


db.users.find(
  {
    courses: {$exists: true}
  }
);

// Obtener todos los usuarios con por lo menos un comentario positivo.

// $elemMatch: Permite filtrar sobre atributos de documentos dentro de listados.

db.users.find(
  {
    comments: {
      $elemMatch: {
        like: true
      }
    }
  }
);

db.users.find(
  {
    comments: {
      $elemMatch: {
        like: false
      }
    }
  }
);

db.users.find(
  {
    comments: {
      $elemMatch: {
        $and: [
          {like: true},
          {tags: {$exists: true}}
        ]
      }
    }
  },
  {
    comments: true
  }
);

// Añadir un nuevo comentario positivo al listado de comentarios para el usuario 13.

db.users.updateOne(
  {
    username: 'user13'
  },
  {
    $push: {
      comments: {
        like: true,
        body: '¡El curso de MongoDB me está gustando!'
      }
    }
  }
);

db.users.updateOne(
  {
    username: 'user13'
  },
  {
    $push: {
      courses: 'Rust'
    }
  }
);

//$push: Añade elementos al final de la lista.

db.users.updateOne(
  { username: 'user13' }, // Filtro para encontrar el documento
  { $pull: { 
      comments: { 
          like: true,
          body: 'El curso de MongoDB me está gustando😊'
      }
  }}
);

db.users.updateOne(
  {
    username: 'user13'
  },
  {
    $pull: {
      comments: 'Rust'
    }
  }
);

//$pull: Elimina elementos que coincidan con ciertos criterios.

// Añade una nueva etiqueta al 4to comentario del usuario 13.

db.users.updateOne(
  {
    username: 'user13'
  },
  {
    $push: {
      'comments.3.tags': 'Tutor'
    }
  }
);

// Actualiza el segundo comentario del usuario 13.

db.users.updateOne(
  {
    username: 'user13'
  },
  {
    $set: {
      'comments.1.body': 'So many excited'
    }
  }
);

// Actualiza el comentario negativo del usario 13.

db.users.updateOne(
  {
    username: 'user13'
  },
  {
    $set: {
      'comments.3.body': 'Good courses, Im funny',
      'comments.3.like': true,
      'comments.3.tags': ['good', 'course', 'MongoDB', 'Tutor']
    }
  }
);

db.users.update(
  {
    username: 'user13',
    'comments.like': false // Nos permite conocer el indice de los documentos dentro de la lista que queremos actualizar.
  },
  {
    $set: {
      'comments.$.body': 'El curso sí me está gustando',
      'comments.$.like': true
    },
    $unset: {
      'comments.$.tags': true
    }
  }
);