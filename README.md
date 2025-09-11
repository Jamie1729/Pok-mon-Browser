# Pokémon Browser
## 1.) Project Setup & Running Instructions
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.<br/><br/>
I have been using the WebStorm IDE to develop and test this project, using the instructions above.

## 2.) Design and Component Decisions 

### Custom React Components
I created some custom client components which wrap various shandcn/ui components 
<ul>
    <li>Pet Card</li>
    <li>Browser</li>
    <li>StatBar</li> 
    <li>SearchBar</li> 
</ul>
The shadcn/ui components for the UI and where they were used:
<ul>
    <li>Card: <b>Main Page</b>  - PetCards | <b>Detail page</b> - Displaying the 5 boxes with details</li>
    <li>Badge: <b>Main Page</b> - PetCard | <b>Detail page</b> - type(s)/weaknesses Card</li>
    <li>Separator: <b>Layout</b> - Grey line between content and footer | <b>Main page</b> - Grey line between 
    header and content</li>
    <li>Button: <b>Main Page</b> - Navigation buttons (Back & Next), SearchBar submit </li>
    <li>Form: <b>Main Page</b> - SearchBar</li>
    <li>Input: <b>Main Page</b> - SearchBar</li>
    <li>Progress: <b>Detail Page</b> - StatBar </li>
</ul>
I used these components because they gave both the correct style as seen on the Figma, but also the functionality 
needed for the project

## 3.) State Management Approach

## 4.) API Interaction Strategy

## 5.) Challenges Encountered & Solutions
### Strings
<ul>
    <li>
        When displaying the ID of a pokémon, it is necessary to pad the number with leading 0's. I used a 
        <a href="https://stackoverflow.com/a/20460414">solution</a> I found online, but altered it so that it
        can be used to pad to an arbitrary length string. 
        See /src/lib/utils.js: padId(id, digits)
    </li>
    <br />
    <li>
        The flavour text for each Pokémon contained soft hyphens which were not being displayed correctly. Also
        the word Pokémon was always written POKéMON. I fixed these issues by creating a function to "clean" these
        strings by removing the soft hyphens ("/f") and replacing "POKéMON" with "Pokémon". 
        See /src/lib/utils.js: cleanText(text)
    </li>

</ul>

### Weaknesses
As far as I could see, the types a specific Pokémon is weak against is not stored in the PokeAPI and so would
have to be calculated manually.
<br /><br/>
I have not been able to get this feature to work accurately, even using src/lib/getMultipliers.js 
found from this <a href="https://github.com/Naramsim/Colosseum/">GitHub Repo</a>

## 6.) Bonus Feature Implementation
### Loading State Indicators
I have implemented a loading state indicator for the main page but not the detail page. 
Although I chose to render each PetCard in a loading state instead of keeping the browser in a loading state until
all the PetCards have rendered as depicted in the Figma.
<br/><br/>
Although it could be argued that this is a less visually clean choice, it does mean that the user can look at some 
of the data whilst the rest is loading. 

### Display Pokémon Images
The PokéAPI provides a link to the sprite for each Pokémon, which I successfully displayed 
(exactly as formatted in the Figma) on both the Main page and Detail page.
### Search Functionality
    Not Yet Implemented

## 7.) Self-Reflection & Potential Improvements




