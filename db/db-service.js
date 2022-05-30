import {openDatabase} from 'react-native-sqlite-storage';


// source pour la mise en place de la BDD https://infinitbility.com/react-native-sqlite-storage-examples-of-query#select-query

const getDBConnection = () => {
  return openDatabase({name: 'pokestackDataBase.db', location: 'default'});
};

//Méthode d'éxécution d'une rêquete
const executeQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    const db = getDBConnection();
    db.transaction(trans => {
      trans.executeSql(
        sql,
        params,
        (trans, results) => {
          resolve(results);
        },
        error => {
          reject(error);
        },
      );
    });
  });

  //Instance de la base de donnée
var db = openDatabase({name: 'pokestackDataBase.db'});

export const createTable = () => {  //Création de la table Users, seulement si elle n'existe pas
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), first_name VARCHAR(30), adress VARCHAR(120), phone_number VARCHAR(10), mail VARCHAR(120), avatar VARCHAR(300), mainUser NUMERIC
      );`,
      [],
      (sqlTxn, res) => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error on creating table' + error.message);
      },
    );
  });
};

export const getUsers = async () => { //Récupération des contacts
  let selectQuery = await executeQuery(
    'SELECT * FROM users WHERE mainUser = 0 ORDER BY first_name',
    [],
  );
  var rows = selectQuery.rows;
  return rows.raw();
};

export const getMainUser = async () => { //Récupération de l'utilisateur principal
  let selectQuery = await executeQuery(
    'SELECT * FROM users WHERE mainUser = 1',
    [],
  );
  var rows = selectQuery.rows;
  return rows.raw();
};

export const getContactAddress = async () => { //Récupération du nom et l'adresse d'un contact
  let selectQuery = await executeQuery(
    'SELECT name, adress FROM users WHERE mainUser = 0 ',
    [],
  );
  var rows = selectQuery.rows;
  return rows.raw();
};

export const addContact = async ( //Ajout d'un contact
  nameUser,
  firstName,
  adress,
  phone,
  email,
  avatar,
  mainUser,
) => {
  if (!nameUser) {
    alert('Entrer un Nom !');
    return false;
  }
  if (!firstName) {
    alert('Entrer un Prenom !');
    return false;
  }
  if (!adress) {
    alert('Entrer une adresse !');
    return false;
  }
  if (!phone) {
    alert('Entrer un numéro de téléphone !');
    return false;
  }
  if (!email) {
    alert('Entrer une adresse mail !');
    return false;
  }

  let selectQuery = await executeQuery(
    `INSERT INTO users (name, first_name, adress, phone_number, mail, avatar, mainUser) VALUES (?,?,?,?,?,?,?)`,
    [nameUser, firstName, adress, phone, email, avatar, mainUser],
  );
  var rows = selectQuery.rows;
  return rows.raw();
};

export const updateContact = async ( //Mise à jour des données d'un contact
  id,
  nameUser,
  firstName,
  adress,
  phone,
  email,
  avatar,
) => {
  if (!nameUser) {
    alert('Entrer un Nom !');
    return false;
  }
  if (!firstName) {
    alert('Entrer un Prenom !');
    return false;
  }
  if (!adress) {
    alert('Entrer une adresse !');
    return false;
  }
  if (!phone) {
    alert('Entrer un numéro de téléphone !');
    return false;
  }
  if (!email) {
    alert('Entrer une adresse mail !');
    return false;
  }

  let selectQuery = await executeQuery(
    `UPDATE users set name=?, first_name=?, adress=?, phone_number=?, mail=?, avatar=? where id=?`,
    [nameUser, firstName, adress, phone, email, avatar, id],
  );
  var rows = selectQuery.rows;
  return rows.raw();
};

export const deleteContact = async id => { //suppression d'un contact
  let selectQuery = await executeQuery(`DELETE FROM users where id=?`, [id]);
  var rows = selectQuery.rows;
  return rows.raw();
};
