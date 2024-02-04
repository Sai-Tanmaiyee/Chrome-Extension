# Chrome extension 
## Technologies Used
HTML: For the structure of the web page and user interface elements.
CSS: For styling and formatting the appearance of the extension.
JavaScript: For handling user interactions, managing data (leads), and interacting with Chrome's extension APIs.
Chrome Extension Manifest (manifest.json): Specifies metadata and properties of the Chrome extension, including permissions and default popup behavior.
## Key Features
User Interface: A simple and user-friendly interface is provided with input fields, buttons, and a list to interact with the leads.

Styling: The CSS styles define the appearance of the UI elements, making it visually appealing and easy to use.

Local Storage: Leads are saved in the browser's local storage, allowing them to persist even after the browser is closed.

Event Handling: JavaScript handles user interactions such as saving leads, rendering the leads list, deleting all leads, and adding the current URL to the leads.

Chrome Extension Interaction: The extension utilizes Chrome's extension APIs, particularly the chrome.tabs.query API, to get the current active tab's URL.

Dynamic Rendering: The leads are dynamically rendered in the list, and changes in the leads are reflected in real-time.

Manifest Configuration: The manifest.json file provides information about the extension, such as its name, version, default popup, icons, and required permissions.
