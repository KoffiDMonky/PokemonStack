import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
// import {
//   getDBConnection,
//   createTable,
//   getUsers,
//   addUser,
//   deleteUsers,
// } from './db/db-service';

import {openDatabase} from 'react-native-sqlite-storage';

export default function App() {
  const [nameUser, setNameUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const [users, setUsers] = useState([]);

  const tableName = 'users';
  var db = openDatabase({name: 'pokestackDataBase.db'});

  const createTable = () => {
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

  const addUser = () => {
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
          setNameUser("");
          setFirstName("")
          setAdress("");
          setPhone("");
          setEmail("");
          setAvatar("");
        },
        error => {
          console.log('error on adding user' + error.message);
        },
      );
    });
  };
  
  const getUsers = () => {
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
          }
        },
        error => {
          console.log('error on getting user' + error.message);
        },
      );
    });
  };


  const updateUser = () => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE ${tableName} set name =?, first_name=?, adress=?, phone_number=?, mail=?, avatar=? where id=?`
        [nameUser, firstName, adress, phone, email, avatar, id],
        (sqlTxn, res) => {
          console.log('users update successfully');
        },
        error => {
          console.log('error on updating user' + error.message);
        },
      );
    });
  };

  const deleteUser = (e) => {
    console.log(e);
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM ${tableName} where id=?`
        [id],
        (sqlTxn, res) => {
          console.log('users delete successfully');
        },
        error => {
          console.log('error on deleting user' + error.message);
        },
      );
    });
  };

  const renderUser = ({item}) => {
    return (
      <View style={styles.view}>
        <Button title="delete" onPress={deleteUser} />
        <Text style={{marginRight: 9}}>{item.name}</Text>
        <Text style={{marginRight: 9}}>{item.firstName}</Text>
        <Text style={{marginRight: 9}}>{item.adress}</Text>
        <Text style={{marginRight: 9}}>{item.phone}</Text>
        <Text style={{marginRight: 9}}>{item.email}</Text>
      </View>
    );
  };

  console.log(users);

  useEffect(() => {
    createTable();
    getUsers();
    updateUser();
    deleteUser();
  }, []);

  return (
    // <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
        <StatusBar backgroundColor="red" />
        <Text>POKESTACK PERSISTANCE</Text>
      <FlatList data={users} renderItem={renderUser}></FlatList>
        {/* <Text>{nameUser}</Text>
        <Text>{firstName}</Text>
        <Text>{adress}</Text>
        <Text>{phone}</Text>
        <Text>{email}</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={nameUser}
          onChangeText={setNameUser}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Prenom"
          value={firstName}
          onChangeText={setFirstName}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Adresse"
          value={adress}
          onChangeText={setAdress}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Avatar"
          keyboardType="default"
        />
        <Button title="submit" onPress={addUser} />

        {/* </ScrollView> */}
      </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 280,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
