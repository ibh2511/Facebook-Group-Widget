# Facebook Group Widget

- **Facebook Group Widget** is a React (vite) function component using axios to fetch the group fields: `member_count`, `cover photo`, `group title` from the [Facebook Graph API v.18.0](https://developers.facebook.com/docs/graph-api) based on a spesific public group id.
- This creates a stand alone widget for displaying Facebook group info with a "Join now" button on a React web page.
- Customize primary and secondary colors and font-type in the `tailwind.config.css`, as well as group title, member text, button text, group title and width (in pixels) as arguments to the `<FacebookGroup/>` component.

&emsp;&emsp;&emsp;&emsp;![Facebook Group Widget](/public/Facebook-Group-Widget.png)

# Clone & Install:

1. Clone the repository:

&emsp;&emsp;`git clone https://github.com/ibh2511/Facebook-Group-Widget.git`

2. Install and run repository locally:

&emsp;&emsp; `cd Facebook-Group-Widget`
<br>
&emsp;&emsp; `npm install`
<br>
&emsp;&emsp; `npm run dev`

3. Create an `.env` file in the project root directory and add an unique access token `VITE_FBOOK_ACCESS_TOKEN =` provided from facebook. As of October 2023, you need to create a [Facebook app](https://developers.facebook.com/apps/) to select the following permissions:

&emsp;&emsp; `groups_show_list`
&emsp;&emsp; `groups_access_member_info`
&emsp;&emsp; `public_profile`

&emsp;&emsp;(To retrieve user data fields like `member_count` for any public group, ==the access token needs to come from an admin user== of that particular group, not just a general user token.)

4. Check the [Facebook documentation](https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/) on how to get a **Get a Long-Lived User Access Token** that will extend the duration of an access token beyond the default 60-day expiration period.

# Example:

```javascript
import FacebookGroup from "./FacebookGroup"
import "./index.css"

function App() {
  return (
    <>
      <FacebookGroup
        groupID="236619620289936"
        groupTitle="Custom title"
        memberText="Supporters"
        btnText="Sign Up"
        width="400px"
      />
    </>
  )
}

export default App
```
