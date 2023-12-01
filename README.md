
# Audio Flow 

Link to the site [Audio Flow](https://audioflow.netlify.app/) 

1)First, you'll land on the Login page.

2)If you don't have an account yet, you'll need to click on a link that takes you to the Sign Up page.

3)On the Sign Up page, you'll be asked to provide your email address and choose a password.

4)After filling out the required information, you'll need to submit the form.

5)Once the form is submitted, you will receive a confirmation email to the provided email address.

6)Check your email inbox for the confirmation message and follow the instructions to confirm your account.

7)Once your account is confirmed, you'll be able to log in using the registered email and password.

# Podcast App Readme

### Data

The project revolves around three semantic units: EPISODE, SEASON, and SHOW. Additionally, there's a PREVIEW unit offering a summarized version of a SHOW. Data is accessible through fetch requests to two endpoints: 
1. [Shows Endpoint](https://podcast-api.netlify.app/shows) - Returns an array of PREVIEW objects.
2. [Individual Show Endpoint](https://podcast-api.netlify.app/id/<ID>) - Returns a single SHOW object with embedded SEASON and EPISODE objects.

### Relationships

The data has interdependencies, such as EPISODEs making up a SEASON, SEASONs forming a SHOW, and associations between SHOW and PREVIEW. Genre information is conveyed through GENRE IDs, with the mapping detailed in the "Genre Titles" section.

### Genre Titles

| ID  | Title                               |
|----|-------------------------------------|
| 1  | Personal Growth                     |
| 2  | True Crime and Investigative Journalism |
| 3  | History                             |
| 4  | Comedy                              |
| 5  | Entertainment                       |
| 6  | Business                            |
| 7  | Fiction                             |
| 8  | News                                |
| 9  | Kids and Family                     |

## User Stories

### Project Setup and Deployment
- ✅ Project is deployed to a custom Netlify URL.

### Responsive Design
- ✅ All views display correctly on the smallest mobile device available, "iPhone SE," emulatable in Chrome Dev tools.

### Favicon and Metatag
- ✅ Favicon information added correctly via [realfavicongenerator.net](https://realfavicongenerator.net/).
- ✅ Metatag information created and added via [metatags.io](https://metatags.io/), with manual URL replacements for absolute Netlify values.

### Data Fetching
- ✅ All show data loaded via a fetch call from [Shows Endpoint](https://podcast-api.netlify.app/shows).
- ✅ When viewing a specific show, data is loaded via fetch from the [Individual Show Endpoint](https://podcast-api.netlify.app/id/<ID>).

### Loading States
- ✅ Loading states implemented while initial data is being loaded.
- ✅ Loading states implemented while new data is being loaded.

### Show Details
- ✅ User can view the details of a show broken down into seasons, sorted by number.

### Episode Interaction
- ✅ User can listen to any episode in a season of a show.
- ✅ User can see a view where only episodes for a specifically selected season are shown.
- ✅ User can toggle between different seasons for the same show.

### Browsing Features
- ✅ User can see the name of all available shows on the platform.
- ✅ User sees a preview image of shows when browsing.
- ✅ User sees the number of seasons per show when browsing.
- ✅ User sees a human-readable date for when a show was last updated.
- ✅ User sees associated genres (as genre titles) when browsing.

### Season Details
- ✅ User sees a preview image of seasons for a specific show.
- ✅ User sees the number of episodes in a season.
- ✅ User can go back to a show view from a season-specific view.

### Favorites
- ✅ User can mark specific episodes as favorites to find them again.
- ✅ User can visit a view where they see all their favorites.
- ✅ User can see the show and season of any episode in their favorites list.
- ✅ Episodes related by season/show are grouped in favorites.
- ✅ User is able to remove episodes from their favorites.

### Sorting and Filtering
- ✅ User can arrange the list of shows by title from A-Z.
- ✅ User can arrange the list of shows by title from Z-A.
- ✅ User can arrange the list of shows by date updated in ascending order.
- ✅ User can arrange the list of shows by date updated in descending order.
- ✅ User can filter shows by title through a text input.
- ✅ User can find shows based on fuzzy matching of strings.

### Genre Interaction
- ✅ Automatically filter shows by genre if the genre label is clicked on.

### Timestamps and Progress
- ✅ User sees the date and time that an episode was added to their favorites list.
- ✅ User can arrange favorites by show titles from A-Z.
- ✅ User can arrange favorites by show titles from Z-A.
- ✅ User can arrange favorites by date updated in ascending order.
- ✅ User can arrange favorites by date updated in descending order.
- ✅ Audio player shows current progress and episode length as timestamps.
- ✅ Audio player is always visible, allowing users to listen while browsing.
- ✅ User is prompted to confirm closing the page when audio is playing.
- ✅ App remembers the last show and episode the user listened to.
- ✅ App remembers shows and episodes listened to all the way through.
- ✅ App remembers the timestamp where the user stopped listening within a 10-second accuracy period of closing.
- ✅ App remembers and shows the timestamp progress of any episode the user started listening to.
- ✅ User can "reset" all their progress, effectively removing their listening history.

### Additional Features
- ✅ User is presented with a sliding carousel of possible shows on the landing page.
- ✅ User can log in via [Supabase authentication](https://app.supabase.com).
- ✅ User favorites are stored in the [Supabase database](https://app.supabase.com).
- ✅ User favorites are automatically synced when logged in, ensuring they share favorites between devices.
- ✅ Users can share their favorites as a publicly accessible URL.

### PS
- Not all user stories have been added yet and are still being worked on.








