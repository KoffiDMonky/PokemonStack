import {openDatabase} from 'react-native-sqlite-storage';

const tableName = 'users';
var db = openDatabase({ name: 'pokestackDataBase.db' });

export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS ${tableName}(
      id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), first_name VARCHAR(30), adress VARCHAR(120), phone_number INTEGER, mail VARCHAR(120), avatar VARCHAR(120)
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


export const getUsers = () => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT * FROM ${tableName}`,
      [],
      (sqlTxn, res) => {
        console.log('users retrived successfully');

        let len = res.rows.length;

        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let user = res.rows.item(i);
            results.push({
              id: user.id,
              name: user.name,
              firstName: user.first_name,
              adress: user.adress,
              phone: user.phone_number,
              email: user.mail,
              avatar: user.avatar,
            });
          }
          setUsers(results);
          console.log(results);
        }
      },
      error => {
        console.log('error on getting user' + error.message);
      },
    );
  });
};


export const addUser = () => {
  console.log('press add');

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

  db.transaction(txn => {
    txn.executeSql(
      `INSERT INTO ${tableName} (name, first_name, adress, phone_number, mail, avatar) VALUES (?,?,?,?,?,?)`,
      [nameUser, firstName, adress, phone, email, avatar],
      (sqlTxn, res) => {
        console.log('User added successfully');
        getUsers();
        setNameUser('');
        setFirstName('');
        setAdress('');
        setPhone('');
        setEmail('');
        setAvatar('');
      },
      error => {
        console.log('error on adding user' + error.message);
      },
    );
  });
};


export const deleteUser = e => {
  console.log(e);
  db.transaction(txn => {
    txn.executeSql(
      `DELETE FROM ${tableName} where id=?`[id],
      (sqlTxn, res) => {
        console.log('users delete successfully');
      },
      error => {
        console.log('error on deleting user' + error.message);
      },
    );
  });
};

