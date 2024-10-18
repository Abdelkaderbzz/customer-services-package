
# TakiPopups

**TakiPopups** is a powerful, customizable notification tool designed to enhance your website's user engagement and marketing capabilities. With TakiPopups, businesses can deliver tailored notifications to users, driving higher engagement and improving conversion rates. Seamlessly integrate the service into your website by using our npm package and passing user-specific information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Props](#props)
- [Customization](#customization)
- [License](#license)
- [Support](#support)

---

## Installation

To get started with **TakiPopups**, install the package via npm:


npm install taki-popups-service
## Usage

Once the package is installed, you can integrate **TakiPopups** into your website by importing the module and passing in the required user details as props.

## Basic Example

Here’s a simple example of how to implement **TakiPopups** in your React project:

### For Logged-In Users

```jsx

import { TakiPopups } from 'taki-popups-service';

TakiPopups({
  name: 'Adem',
  memberId: '73924',
  appId: '546363546',
  meta_data: {
    age: 18,
    state: 'Manouba',
    phoneNumber: '5289452343',
    // ... additional meta-data
  }
});
function App() {
  return (
    <div>
      {/* Other components */}
    </div>
  );
}

export default App;
```
### For Guest Users

```jsx
import { TakiPopups } from 'taki-popups-service';

TakiPopups({
  appId: '546363546',
});

function App() {
  return (
    <div>
      {/* Other components */}
    </div>
  );
}

export default App;
```
### Props

The **TakiPopups** function accepts the following properties:

| **Prop**    | **Type** | **Required** | **Description**                                          |
| ----------- | -------- | ------------ | -------------------------------------------------------- |
| `name`      | `string` | No           | The name of the user.                                    |
| `memberId`  | `string` | No           | A unique identifier for the logged-in user.              |
| `appId`     | `string` | Yes          | The application ID used to identify your business or app. |
| `meta_data` | `object` | No           | Additional user information such as demographics.         |

#### Meta Data Object Structure

The `meta_data` object can contain various user attributes to personalize the notification experience:

- `age` (`number`): User's age.
- `state` (`string`): The state or region where the user is located.
- `phoneNumber` (`string`): User's phone number.


Feel free to extend `meta_data` with other fields to enhance the notifications sent to your users.

## Customization

**TakiPopups** is designed to be flexible and highly customizable. You can extend the component with additional properties to control the behavior, appearance, and delivery of notifications. Explore the full list of customization options and advanced configuration in the official documentation.

### Example Customizations:

- **Notification styles:** Customize colors, fonts, and positions.
- **Trigger conditions:** Specify when and how notifications should appear based on user activity.
- **Content personalization:** Dynamically tailor notification content based on user attributes passed via `meta_data`.

## License

This project is open-source and licensed under the MIT License. Feel free to use, modify, and distribute it according to the terms of the license.

## Support

For questions, issues, or feature requests, please visit our GitHub repository and open an issue. You can also reach out to our support team at [support@takipopups.com](mailto:support@takipopups.com).
