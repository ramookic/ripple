# Ripple - Link in Bio Tool (Linktree Clone)

Ripple is Linktree clone built as side project for learning purposes. The app is responsive focused to take most of the functionalities from Linkree.

## Technologies

- **Vite**
- **React.js**
- **Styled Components**
- **Supabase**
- **Recharts**

## Features

Here's what you can do with Ripple:

- **Login/Signup:** Create your account or log in to existing one.

  - Signup Process:
    On register user will be asked for username, email and password.
    While submitting new record in table profile will be created containing username, profileTitle and user_id,
    also will create a new record will be created in appearance table containing user_id and default values for styling.

- **Links:** Create, Read, Update and Delete.

  - Create Process:
    On link creation user will be asked for title and url, by default toggle view will be set to true.
  - Toggle View:
    User can decide to show/hide created link.
  - Update Process:
    Inline realtime link editing for title and url.

- **Appearance:** Update appearance of your links page.

  - Themes:
    Switch between 16 premade themes.
  - Backgrounds:
    Change between flat color and gradient color background where direction of gradient can be selected or upload background image or video.
  - Buttons:
    Switch between 4 different button types fill, outline, soft shadow and hard shadow. Each button has 3 variations of roundnes. Change
    button color, font color and for soft shadow, hard shadow buttons change chadow color.
  - Fonts:
    Change font style and font color.

- **Analytics:** Track Links, Views, Locations, Devices and Social Icons

  - Lifetime Analytics:
    Will display number of views and clicks from date of account creation.
  - Range Switcher:
    Switch between today, last 7 days, last month, last 3 months, last 6 months and last year. All data will be updated accordingly.
  - Top Performing Links:
    Sorted list of top performing links by clicks.
  - Top Locations:
    Displays top locations by views and clicks.
  - Top Devices:
    Pie chart that can be switched between views and clicks. Chart includes mobile, desktop, tablet and other.
  - Social Icons Chart:
    Displays clicks on social icons.

- **Settings:** Manage Social Icons and Account
  - Social Icons:
    Create, edit, delete and toggle view for each icon, while creating new icon it will display which icon is already added.
  - My Information:
    View email address and change password.

## How can it be improved?

- Add link drag and drop sorting
- Add more background variations
- Add more charts for analytics
