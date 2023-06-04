# ContactsApp

Contact List App
This is a simple React Native app that displays a list of contacts and allows you to search for specific contacts by name. When you click on a contact, it displays a popup with the contact's details.

https://github.com/shaikirshad77/ContactsApp/assets/122390244/24293c1c-6c5a-46d2-bbec-3352fd497a05

           Installation :

1. Make sure you have Node.js and npm installed on your machine.
    
       => npm install -g expo-cli

2. Clone this repository or download the source code.

3. Open a terminal and navigate to the project directory.
 
       => expo init ContactsApp
       => cd ContactsApp
       => expo install react-navigation react-navigation-stack react-native-reanimated react-native-gesture-handler

4. Run the following command to install the dependencies:
  
           => npm install 
          
 Next Step :

          Usage :

1. Connect your Android or iOS device to your development machine or start an emulator.

2. Run the following command to start the app:

           => npm start

A QR code will be displayed in the terminal. Scan the QR code with the Expo app on your device or follow the instructions in the Expo Dev Tools to launch the app on the emulator.

      Features
• Displays a list of contacts (name and number).

• Allows searching for contacts by name and get listed with same names ( for example : search Rahul, All rahul named contacts will get listed ).

• Displays contact details in a popup when a contact is clicked (name and number)


     Dependencies
     
This app uses the following dependencies:

     • React
 React is a JavaScript library for building user interfaces. It provides a declarative and component-based approach to building UIs, making it easier to develop complex and interactive web applications.
 
        • React Native
React Native is an open-source framework developed by Facebook for building cross-platform mobile applications. It allows developers to use JavaScript and React to create native mobile apps for iOS and Android platforms, sharing a single codebase.

    • react-native-elements
react-native-elements is a popular UI component library for React Native applications. It provides a set of pre-designed and customizable components that can be used to build the user interface of a mobile app.


    Components
    
The code consists of the following components:

    ContactListScreen:
ContactListScreen is a functional component in the provided code snippet. It serves as the main screen for displaying a list of contacts and implementing search functionality. Here's an overview of what ContactListScreen does:

    1. State Management:

• It utilizes the useState hook to manage two state variables:
• contacts: An array that holds the contact data fetched from the server.
• searchText: A string that stores the current search input value entered by the user.

    2. Data Fetching:

• The useEffect hook is used to fetch contact data when the component mounts. It calls the fetchContacts function asynchronously, which sets the sample contact data to the contacts state variable.

    3. Filtering Contacts:

• The filterContacts function takes the searchText input and filters the contacts array based on the contact names that include the search text. It returns a new array of filtered contacts.

    4. Search Functionality:

• The handleSearch function is invoked whenever the user enters text in the search input field. It updates the searchText state variable with the new input value.

    5. Rendering Contact Items:

• The renderContactItem function is responsible for rendering each contact item in the list. It takes an item from the filtered contacts array and displays the contact's name and number in a TouchableOpacity component.

    6. Handling Contact Press:

• The handleContactPress function is called when a contact item is pressed. It displays a dismissable popup with the contact's name and number using the alert function. 

    7. Component Rendering:

• The ContactListScreen component returns a View component as the root element.

• It renders a TextInput component for the search input field, which triggers the handleSearch function on text change. 

• The filtered contacts array is rendered using a FlatList component, which calls the renderContactItem function for each contact item. 

• The keyExtractor prop is used to assign a unique key to each contact item in the list. 

    8. Styling:

• The component utilizes the StyleSheet module from React Native to define the styling rules for different elements and components. The defined styles are applied to the respective components in the renderContactItem function and the root View component.


Overall, ContactListScreen combines various React and React Native features to create a contact list screen with search functionality. It uses state management, data fetching, filtering, and rendering techniques to provide a user-friendly interface for browsing and searching contacts.






• These dependencies are automatically installed when you run npm install.


    Code Overview
    
   The code is structured as follows:

     • useState and useEffect hooks: 
The useState and useEffect hooks in the code serve the following purposes:

useState
The useState hook is used to manage state in functional components. It allows you to declare variables that will hold state values and provides a way to update those values. In the code, two state variables are declared:

contacts: This state variable holds the array of contacts retrieved from the server. It is initially set to an empty array []. The setContacts function is used to update the value of the contacts state variable.

searchText: This state variable holds the current search text entered by the user. It is initially set to an empty string ''. The setSearchText function is used to update the value of the searchText state variable.

useEffect
The useEffect hook is used to perform side effects in functional components. It allows you to run code in response to component lifecycle events, such as mounting, updating, or unmounting. In the code, useEffect is used to fetch the initial list of contacts from the server.

The useEffect hook is called with two arguments:

A callback function that contains the code to be executed as the side effect. In this case, the callback function defines an async function fetchContacts that retrieves the contacts from the server and updates the contacts state variable using the setContacts function.

An optional dependency array that specifies when the effect should be re-run. If the dependency array is empty ([]), the effect will run only once after the initial render. In this case, the effect is intended to run only once, so an empty dependency array is provided.

By using useEffect with an empty dependency array, the contacts are fetched from the server and set as the initial state when the component is first mounted.






     • fetchContacts function: 
    
    
   The fetchContacts function is defined as an asynchronous function within the useEffect hook. Here is the implementation of the fetchContacts
Explanation:

1. The fetchContacts function is defined as an async function, allowing the use of the await keyword inside it.

2. Inside the function, a constant variable sampleContacts is defined, which is an array of contact objects. These objects represent sample contacts and can be replaced with actual data fetched from a server.

3. The setContacts function is called with sampleContacts as the argument to update the state variable contacts with the fetched contacts.

This function is called when the component is mounted, thanks to the useEffect hook. The effect runs only once, ensuring that the contacts are fetched and set as the initial state when the component is first rendered.

     • filterContacts function:
   
  The filterContacts function is defined in the code to filter the contacts based on the search text entered by the user. Here is the implementation of the filterContacts
Explanation:

1. The filterContacts function takes searchText as a parameter, which represents the text entered by the user for searching contacts.

2. The function uses the filter method on the contacts array to create a new array that contains only the contacts matching the search text.

3. The filter method is called on the contacts array, and for each contact object, the contact.name is converted to lowercase using toLowerCase() method, and then includes() method is used to check if the searchText is present in the lowercase contact.name. This comparison is case-insensitive.

4. The filtered contacts are returned as the result of the filterContacts function.

The filterContacts function is called in the FlatList component's data prop to provide the filtered contacts as the data source for rendering the contact items. It ensures that only the contacts matching the search text are displayed in the contact list.

     • handleSearch function:
   The handleSearch function is responsible for updating the searchText state variable based on the user's input. Here is the implementation of the handleSearch

The handleSearch function is responsible for updating the searchText state variable based on the user's input. Here is the implementation of the handleSearch function:

Explanation:

1. The handleSearch function takes text as a parameter, which represents the text entered by the user in the search input.

2. The function calls the setSearchText function, which is provided by the useState hook, to update the searchText state variable with the new value entered by the user.

3. When the searchText state variable is updated, React will automatically re-render the component and apply any necessary updates based on the new value.

The handleSearch function is used as the onChangeText event handler for the TextInput component. Whenever the user types or changes the text in the search input, the handleSearch function is called, updating the searchText state variable with the new value. This triggers the re-rendering of the component, and the contact list is filtered based on the updated search text.


     • renderContactItem function:
  The renderContactItem function is responsible for rendering an individual contact item in the contact list. Here is the implementation of the renderContactItem

Explanation:

1. The renderContactItem function takes an object as a parameter, which contains the item property. The item represents an individual contact object from the data array.

2. Inside the function, a TouchableOpacity component is used to wrap the contact item, providing an interactive touchable area.

3. The TouchableOpacity component has a style prop that is set to styles.contactItem, which specifies the styling for the contact item container.

When the FlatList component renders each contact item, it uses the renderContactItem function as the renderItem prop. This function is called for each item in the data array, and it returns the JSX representing the contact item to be rendered on the screen.

     • handleContactPress function:
  The handleContactPress function is responsible for handling the press event on a contact item and displaying a dismissable popup with the contact details. Here is the implementation of the handleContactPress

Explanation:

1. The handleContactPress function takes a contact object as a parameter, which represents the selected contact item.

2. Inside the function, an alert function is called to display a dismissable popup with the contact details.

3. The alert function displays a simple dialog box on the screen with the contact's name and number using template literals.

When a contact item is pressed by the user, the onPress event handler in the TouchableOpacity component calls the handleContactPress function, passing the corresponding contact item as an argument. The handleContactPress function then displays a popup with the contact's details, allowing the user to view the information.


     • styles object: 
  The styles object defines the CSS styles for the components in the ContactListScreen component. Here is the implementation of the styles
 Explanation : 

1. The StyleSheet.create function is used to create a stylesheet object with named styles. It ensures efficient style handling and optimization.

2. The container style is applied to the main container View component of the ContactListScreen. It sets the flex behavior, background color, padding, and paddingTop.

3. The searchInput style is applied to the TextInput component used for searching contacts. It defines the height, border radius, background color, padding, margin, and font size.

4. The contactItem style is applied to the TouchableOpacity component representing an individual contact item in the list. It specifies the background color, border radius, padding (vertical and horizontal), margin bottom, and box shadow properties.

5. The contactName style is applied to the Text component displaying the contact's name. It sets the font size, font weight, and margin bottom.

6. The contactNumber style is applied to the Text component displaying the contact's number. It sets the font size and color.

These styles define the visual appearance and layout of the different elements in the ContactListScreen component, providing a consistent and appealing user interface.
