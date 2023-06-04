import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactListScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const sampleContacts = [
        { id: 1, name: 'Rahul sharma', number: '9157895420' },
        { id: 2, name: 'Rahul Roy', number: '8426759214' },
        { id: 3, name: 'Rahul parth', number: '9876543210' },
        { id: 4, name: 'Ajay kumar', number: '7458234589' },
        { id: 5, name: 'Ajay shetty', number: '8884578456' },
        { id: 6, name: 'preeti', number: '8901234567' },
        { id: 7, name: 'Manish', number: '9678901234' },
        { id: 8, name: 'S.MD Rafi', number: '9012365678' },
        { id: 9, name: 'SM Asif', number: '7456789012' },
        { id: 10, name: 'Jyoti verma', number: '6789012345' },
        { id: 11, name: 'Jyoti devakar', number: '9123456889' },
        { id: 12, name: 'Suresh', number: '7654321098' },
        { id: 13, name: 'Abhinav', number: '8421098765' },
        { id: 14, name: 'Abhishek', number: '6109876543' },
        { id: 15, name: 'Salman', number: '9876543210' },
        { id: 16, name: 'Manish yadav', number: '9678947634' },
        { id: 17, name: 'S.MD Irshad', number: '9032365678' },
        { id: 18, name: 'Shraddha', number: '7456780584' },
        { id: 19, name: 'Shraddha kapoor', number: '6678112345' },
        { id: 20, name: 'Karthik', number: '9471656889' },
        { id: 21, name: 'Aryan shaik', number: '7654374925' },
        { id: 23, name: 'Shaik Sania', number: '8473024765' },
        { id: 24, name: 'Afzal khan', number: '8529876543' },
        { id: 25, name: 'Deepti Suman', number: '9702684510' },
      ];

      setContacts(sampleContacts);
    };

    fetchContacts();
  }, []);

  const filterContacts = (searchText) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => handleContactPress(item)}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactNumber}>{item.number}</Text>
    </TouchableOpacity>
  );

  const handleContactPress = (contact) => {
    // Display a dismissable popup with contact details
    alert(`Name: ${contact.name}\nNumber: ${contact.number}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts..."
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filterContacts(searchText)}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  searchInput: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  contactItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactNumber: {
    fontSize: 16,
    color: '#666',
  },
});

export default ContactListScreen;
