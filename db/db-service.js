import {openDatabase} from 'react-native-sqlite-storage';

// const tableName = 'users';
const getDBConnection = () => {
  return openDatabase({name: 'pokestackDataBase.db', location: 'default'});
};

//https://infinitbility.com/react-native-sqlite-storage-examples-of-query#select-query
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

export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), first_name VARCHAR(30), adress VARCHAR(120), phone_number VARCHAR(10), mail VARCHAR(120), avatar BLOB
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

export const getUsers = async () => {
  let selectQuery = await executeQuery('SELECT * FROM users', []);
  var rows = selectQuery.rows;
  return rows.raw();
};

export const addUser = async (
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

  console.log('press add');
  let selectQuery = await executeQuery(
    `INSERT INTO users (name, first_name, adress, phone_number, mail, avatar) VALUES (?,?,?,?,?,?)`,
    [nameUser, firstName, adress, phone, email, avatar],
  );
  var rows = selectQuery.rows;
  return rows.raw();
};

export const deleteUser = async () => {

  let selectQuery = await executeQuery(
    `DELETE FROM users where id=?`[id],
  );
  var rows = selectQuery.rows;
  return rows.raw();

};
