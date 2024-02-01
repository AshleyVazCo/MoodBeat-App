# MoodBeat-App
This is the official repository for the MoodBeat App. 

## What is MoodBeat?
MoodBeat is a music moodboard app where you can create, share, or browse a music board based on your mood. Each board will have a playlist created by users themselves and users will have the opportunity to customize their created boards. That means that their able to choose, the colors, images, fonts, and music of their liking. 

### The Team

**Alan Giraldo**

**Ashley Vazquez**

**Azariea Cameron-Palma**

**Jolina Jassal**

**Wuilmar Matias-Morales**

## Executive Summary
For the front-end development of MoodBeat, we completed five sections: the creation section, the home section, the blank section, the blank section, and the blank section. We implemented the basic HTML and CSS components with React Native, along with some of our pre-made icons. Split among five members, we created a Github, adding design assets, creating the user interface, technical implementation, and more. We each created our branch and are using git gist to assist us with coding. We created a component folder for repeated code for quicker access and implementation. Alan Giraldo is responsible for the Figma redesign, Ashley Vazquez is the GitHub host, Jolina Jassal created the Readme.md file, and Wuilmar Matias-Morales is the asset manager. 

## User Interface Design

**Introduction**
MoodBeat consists of seven pages, each supporting a unique user flow and design. The main objective is to create a space for users to express and share their creativity, fostering a positive experience that distinguishes it from competitors. Let's explore the user flow of each page and its purpose.

**Opening Screen**
The Opening Screen, including both light and dark mode variations, consists of 2 pages and 12 modals. The design was created with minimalism in mind for easy usability and a friendly interface. We incorporated consistent colors and typography throughout, giving new users a preview of what's to come.
The first page users encounter when opening MoodBeat is the Opening Screen. Here, users are prompted to either log into an existing account or sign up for a new one. Users can also switch between light mode and dark mode using the buttons located on the top right of the screen.  When selecting the login button, users open a modal that proceeds to ask for an email or username and password. Alternatively, users may sign into the app through pre-existing accounts from Google, Facebook, or Apple by selecting the respective logos below.  Users also have the option to reset their password by selecting "forgot password." If chosen, another modal will open, replacing the current one. Here, users are asked to enter the email associated with the account. Once entered, they will receive an email with a code that they will enter on the following page after pressing the "send" button.  On this modal, users enter a 4-digit code that then proceeds to the final modal. The last modal simply requests the user to enter the new password based on the requirements and then confirm it below. Once confirmed, the user will navigate to the home page.
Selecting the sign-up button is a simple process. Once selected, a modal appears requesting the user to enter their full name, email, and password. Users are also given the option to create an account using pre-existing accounts through Google, Facebook, and Apple by selecting the respective logo below.  Pressing "next" after completing the forms, a modal appears with additional personal information. Here, users are prompted to enter their date of birth, gender, and username. The username has specific criteria to be met to create an appropriate one. After signing up, users will proceed to the home page.

**Home Screen**
The Home Screen, including both light and dark mode variations, consists of 2 pages. Users are greeted with a simple landing page and an opening phrase. The color palette is explicitly clear based on the designs, and as you scroll down, you notice how colorful the complementary elements are.
Upon entering the Home screen, you are introduced to the landing page. The logo is placed in the center of the page, followed by a greeting. At the top right of the landing page, you will find the settings icon, and down below, there is a navigation bar that is fixed in position. On this navigation bar, you will see 4 icons. The first is preselected, indicating that you are on the home page, followed by a collage of squares representing the creation page, a magnifying glass indicating the search page, and finally, a profile of a person indicating the profile page.  Making your way down the page, you encounter the second portion of the home page. Here, you are greeted with a selection of boards and profiles titled with the tag "Browse your mood." Each of these cards will navigate you to either a mood board or a profile.

**Settings Screen**
The settings screen, including both light and dark mode variations, consists of 2 pages. The design layout is minimalistic, user-friendly, and presented as an accordion.
The Settings screen is organized with 5 clickable options, each presenting further details related to the given title. The first option is the personal information section, where users can edit their full name, email, username, password, phone number, gender, and date of birth.  Following the personal information section is the About section, providing additional information about the brands associated with us and including further details about our platform. Below the about section is the contact section, offering contact information for those interested in reaching out. Methods of contact include email, Instagram, and TikTok.  After the contact section is the team section, divided by project members. Each sub-section provides an image of the team member and, through flip animation, offers details about their contact information on the backside.  Finally, at the bottom is the Your Account section, providing two simple options. Users can either permanently delete their account, navigate them to the opening screen, or they can switch between light mode and dark mode.  The Settings screen also contains two buttons. One button allows users to save the changes made throughout the sections, and the other button prompts the user to log out from their account, navigating them to the opening screen.

**Search Screen**
The Search screen, including both light and dark mode variations, consists of 4 pages. The design implementation is simple but vibrant in design. We inserted an image as the background to give the user the impression that this is where discoveries are made, funneling their creative minds.
The Search screen provides users with the ability to search through pre-set categories. At the top of the screen is the search bar, and to the bottom right of it is the filter icon. Selecting the icon reveals a mega menu with five categories: "Motivation," "Concentration," "Energetic," "Relaxation," and "Expression." Each category is based on common moods associated with the corresponding mood boards.  When a category is selected, a new page opens with a similar layout. The portion below the search bar now features cards arranged in a two-row vertical scroll. On the Search screen, the navigation bar shifts from highlighting the home icon to the search icon. Navigating to one of the four pages highlights the icon representing that page.  Users can always return to the filter icon to remove the category and select a new one. Alternatively, they can use the search bar to find specific songs based on keywords.

**Creation Screen**
The Creation screen, including both light and dark mode variations, consists of 2 pages, 8 modals, and 6 tabs. The initial pages expose the user to information regarding the page they are in.  the design is minimalist with a simple layout.   Navigating further the modals maintain a minimalist design as well.  The reason behind the concept is that when dealing with content that's informative and customizable by nature, you want to simplify the layout and design not to overwhelm the user.  
Upon analyzing the first page, the center provides a description of its purpose. Right below it, you have two options to choose from: create a section or create a board. Starting with the "Create section," users will open the "Search Music" modal. Here, you can search for a song by pasting the URL into the form field. Below that, you will have the option to choose from three companies that match the link reference. This will be displayed as a button labeled with the name of the host company on the song screen. After selecting the "Import Song" button at the bottom, you will navigate to the "Create Section" modal. Here, you can customize the details of the song, including uploading a cover image, song title, artist name, and hashtags. The importance of hashtags is to add a reference to the song when navigating the search screen. By including as many hashtags as possible, you make searching for your song much easier. At the bottom of the modal, you may add the song to either an existing mood board or create a new one, which will navigate you to the "Create Board" steps. When selecting "Create Board" back in the creation screen, users will navigate to the "Board Info" modal. Here, you will find a three-option tab menu. The first tab requests an upload for the mood board cover, a board title, a category for the board, and a privacy option. The categories will be used for filtering on the search screen, and the privacy option allows users to hide their boards from others. Tab 2 prompts users to customize the color of their board. Here, you may either enter the HEX code, or RGB code or drag the circle to the color you want. You can also adjust the opacity, and based on the color you select, it will determine if it meets WCAG guidelines depending on your font color. Tab 3 has all the same options as Tab 2, with the inclusion of typography. Here, you may select various font styles imported from Google Fonts. After playing with the options, you will be able to save the changes, and your board will appear on your profile.

**Profile Screen**
The Profile screen, including both light and dark mode variations, consists of 4 pages, 4 modals, and 6 tabs.  Inspiration for its design mostly comes from Instagram and Pinterest.  The design was meant to be slightly larger than your typical social media site to promote accessibility and usability for our app.
At the top of the page, you will find the share icon and settings icon. Below that are the user’s profile image, an edit button, and the custom background color. The edit button allows you to change details about your profile page. Below the profile, there is a three-tab menu. The titles of the tabs are "created," "saved," and an edit icon. The "created" tab opens mood boards below it, positioned in a horizontal scroll, which was created by you. The "saved" tab generates mood boards you saved from other profiles, and the edit icon allows you to delete some of those options. When selecting the profile screen, the navigation bar highlights that icon at the bottom of the page. When selecting any of the mood boards from the "created" tab, you will open a new page called the "profile selection screen." Here, the layout is mostly the same as the profile screen, with the exception of a smaller profile background. Instead of a three-tab menu, you have only a delete icon with a column of songs that scroll vertically. When selecting any of these songs, you will open up a modal that shows the song cover, title, artist name, and a share button. At the bottom of that modal, there is a button with the name of the company it is hosted in, as mentioned previously. Back to the profile screen, when selecting the edit profile icon, you will open up a modal. This modal will be very similar to the create board modals. There is a three-menu tab as well with the same options but different content. The "description" tab allows the user to upload a profile picture, edit their username, and enable or disable their privacy. The "Background" tab will change the background color, and the "Text" tab will change the font style and color. Once complete, you may select "save changes" to finalize everything.

**Curator Screen**
The Curator screen, including both light and dark mode variations, consists of 4 pages, and 4 tabs.  The design is exactly the same as the profile screen with a few less elements.
You can navigate to these screens within the home screen or search screen. When clicking on a profile, you will navigate to the curator screen. Here, the design is the same as the profile screen, with the only change being that the tab menu now has two options, removing the edit icon and you may not edit the profile. When selecting a song from "created," you will be presented with all the songs this user has made. The curator selection screen is designed the same way as the profile selection screen. When selecting a song, you will open a modal of the song with the same design as the profile song modal, with the only change being that you may now save the song. The icon is placed next to the share icon.

## Design Assets Documentation

**Fonts**

MoodBeat uses the Barlow Condensed font. This font can be found for free through Google Fonts and it is licensed under the Open Font License. There are 3 font weights that are used and they are regular, medium and semibold. For the body, the regular weight is used. For the headlines and titles either medium or semibold are used. More details about the use of this font can be found in our visual design guide and our style guide.

**Icons**

The icons used in our app are available in both light and dark mode. The standard size of the icons are 24px unless otherwise stated. On special circumstances, the icons can be sized up to 30px, 35px or 107px. The following icons are used:

Settings Page Icons


Action Icons


Social Icons


Music App Icons


The music app icons can be used in both light and dark mode without modifying the colors.

**Colors**

MoodBeat colors are separated by either dark or light mode. Each color used for either mode was chosen to be in compliance with the WCAG guidelines. A list of the accepted color combinations are listed in the visual design guide. The following color schemes are used:

*Light Mode*

Primary: #FFFFFC
Secondary: #43357A
Accent 1: #7700E6
Accent 2: #CA9CE1

*Dark Mode*

Primary: #26282C
Secondary: #CA9CE1
Accent 1: #87B4FF
Accent 2: #FDA1FF

*Neutral Color Palette:*

#FFFFFC
#000000
#161717
#4F4F4F
#636363
#909090
#969696
#AEAEAE
#EDEDED
#F2F4F5

**Logo**

It is the primary graphic representative of the MoodBeat App and brand. The symbol in our logo represents different mood boards as well as the sound level meter. The logo was created so it can be something that is representative of both. The symbol in our logo can be used together or independently from the wordmark. The logo can’t be modified or altered in any way unless otherwise specified in the guidelines on our visual design guide.

**Components**

There are different components that are used throughout the MoodBeat app. Each component has different requirements.

**Buttons**

Standard buttons and music platform buttons are 240px by 44px. Small buttons are 110px by 44px. 

Dark and light mode have different variations in regards to the colors. Here are the following options:

*Light Mode*

*Option 1:*

Stroke: #4F4F4F
Fill: #26282C
Text Color: #FFFFFC
Text Style: SemiBold 

*Option 2:*

Stroke: None
Fill: #7700E6
Text Color: #FFFFFC
Text Style: SemiBold

*Option 3 (small buttons):*

Stroke: #4F4F4F
Fill: #43357A
Text Color: #FFFFFC
Text Style: SemiBold

*Dark Mode*

*Option 1:*

Stroke: None
Fill: #FFFFFC
Text Color: #7700E6
Text Style: SemiBold

*Option 2:*

Stroke: None
Fill: #CA9CE1
Text Color: #26282C
Text Style: SemiBold

*Option 3 (small buttons):*

Stroke: None
Fill: #4F4F4F
Text Color: #CA9CE1
Text Style: SemiBold

**Forms**

Forms are used on certain parts of the app such as the sign up pages and the sign in page. The main input text boxes are 327px by 44px. The bigger text box is 327px by 88px. 

The input fields have a different outline color when they are either in their default or focused states. The color will be different depending on the mode. 

*Colors used for Light Mode:*

Stroke: #26282C
Fill: #FFFFFC
Text Color: #636363
Text Style: Regular or Medium

Light mode focused state uses Accent Color 1 found in the light mode color palette. 

*Colors used for Dark Mode:*

Stroke: #909090
Fill: #26282C
Text Color: #909090
Text Style: Regular or Medium

Dark mode focused states uses the secondary color found in the dark mode color palette. 

**Navigation**

The navigation of the app will look different whether you’re viewing it in either dark or light mode. 

The navigation looks the following way:

*Light Mode Nav Bar*

Top Stroke: #AEAEAE
Fill: #FFFFFC
Icon Color: #26282C
Focused Icon Color: #FFFFFC
Focused Color: #7700E6

*Dark Mode Nav Bar*

Top Stroke: #4F4F4F
Fill: #26282C
Icon Color: #969696
Focused Icon Color: #CA9CE1
Focused Color: #4F4F4F

**Cards**

The flip card component can be used in our app to insert an image and when clicked extra information will appear. This feature is found in the settings page on the Our Team tab. 

**Carousel**

The carousels are used to showcase the different moodboards. The colors, fonts and images are based on the user’s preference at the time of creation. This component can be found in different screens of the application but are mainly used in the profile pages.

**Accordions**

These expandable sections provide extra information to the user. This component is found specifically in the settings page. 

**Segmented Buttons**

These buttons or tabs are used throughout the app specifically in the profiles screens, edit profile description, background and text screens. Also, this is used in the create a section, create a board screen and the curator screen.

*Light Mode:*

Fill: #EDEDED
Text Color: #26282C
Focused Shape Color: #43357A
Focused Text Color: #FFFFFC
Text Style: Regular
Dark Mode:

Fill: #161717
Text Color: #909090
Focused Shape Color: #4F4F4F
Focused Text Color: #CA9CE1
Text Style: Regular
Switches

This component is only used on certain screens and it’s one of the less used components. It can be found specifically in the Board info screen and its purpose is to give the user the option of whether to private the board or not. 

*Light Mode - off*

Fill: #FFFFFC
Outline: #26282C
Circle: #26282C

*Light Mode - on*

Fill: #26282C
Outline: None
Circle: #FFFFFC

*Dark Mode - off*

Fill: #FFFFFC
Outline: #4F4F4F
Circle: #4F4F4F

*Dark Mode - on*

Fill: #4F4F4F
Outline: None
Circle: #FFFFFC

*Link to images: https://docs.google.com/document/d/1irOLMz-X1BLF2Q-el6EnWlcYBqXhYprFh8t8r8UZvLE/edit?usp=sharing*

## Technical Implementation

We decided to use React Native, a javascript library for building user interfaces. The main reason we decided to go with React Native is because it allows for cross-platform mobile development. Also, our code is written in JSX, which is a syntax that lets us write elements inside of Javascript. 

We used React Native’s stack navigator to manage the navigation of our screens as well as allow us to manage the presentation of these screens through our various user flows. 

We used components to reuse elements that are often used in various screens. We used many of React's core components to make our screens but we also made a few of our own, which is something React Native allows us to do. An example of a component that we made is NavBarLM. This component can be used on multiple screens and it allows all the screens to have a consistent nav bar. 

Our assets such as our images and icons were placed in a folder named assets where we can access them whenever we need them. We also made multiple Modals, which is a component that allows us to present content above the screen where it is invoked. An example of a Modal component is the Song Modal which presents song information to the user on top of the Curator Selection screen.

Styling was done using CSS and by placing all the CSS for the screen onto a Stylesheet using StyleSheet.create() and placing all the CSS for the screen within. One of the benefits for doing this is that you are making the code easier to understand as the CSS is not inline and is outside the render function. 

State management was done using the “useState”. This will become important once we have more data that is changing within the app itself. 
