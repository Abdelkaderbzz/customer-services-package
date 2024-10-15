# TakiPopups

**TakiPopups** is a versatile notification tool that allows businesses to send customized notifications to their customers, enhancing marketing efforts and improving user engagement. Easily integrate this service into any website by installing the npm package and passing user information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Example](#example)
  - [Props](#props)
- [Customization](#customization)
- [License](#license)
- [Support](#support)

## Installation

To install TakiPopups, use npm:

```bash
npm install TakiPopups

Usage
Once installed, you can integrate TakiPopups into your website by importing the component and passing the required user information as props.

Example
Here’s how to use the TakiPopups component in your project:

import { TakiPopups } from 'taki-popups-service';


const name = 'Adem';
const appId = '546363546';
const meta_data = {
  age: 18,
  state: 'Manouba',
  city: 'Manouba',
};

function App() {
  return (
    <div>
      <TakiPopups name={name} appId memberId={memberId} meta_data={meta_data} />
      {/* Other components */}
    </div>
  );
}

export default App;

Props
The TakiPopups component accepts the following props:

name: (string, required) - The name of the user.
memberId: (string, required) - A unique identifier for the user.
meta_data: (object, required) - An object containing additional user information.
age: (number) - The age of the user.
state: (string) - The state where the user resides.
city: (string) - The city where the user resides.
Customization
TakiPopups is designed to be flexible and customizable. You can extend the component with additional props to control the behavior and appearance of the notifications. For a complete list of customization options, refer to the documentation.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Support
For any questions, issues, or feature requests, please feel free to open an issue on our GitHub repository or contact our support team.