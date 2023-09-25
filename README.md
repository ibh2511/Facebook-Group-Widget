# Facebook Group Widget

Facebook Group Widget is a React (vite) function component using axios to fetch the fields group `member_count`, `cover photo`, `group title` from the Facebook API based on the group id. This creates a stand alone widget for displaying Facebook group info with a "Join now" button on a web page. Customize primary and secondary colors and font-type in the `tailwind.config.css`, as well as member text and button text as arguments to the component.

# Clone & Install:

Create an `.env` file in the project root directory and add an unique `VITE_FBOOK_ACCESS_TOKEN =` provided from facebook. As of October 2023, you need to create a [Facebook app](https://developers.facebook.com/apps/) with Business verification to get the following permissions: `groups_show_list`, `groups_access_member_info`, `public_profile`. Check the [Facebook documentation](https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/) on how to get a Get a Long-Lived User Access Token that will extend the duration of an access token beyond the default 60-day expiration period.

Use the component like this:

`       <FacebookGroup
        groupID="123456789123456"
        memberText="Supporters"
        btnText="Sign Up"
      />`
