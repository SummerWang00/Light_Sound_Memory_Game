# Light_Sound_Memory_Game
# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Xuecen (Summer) Wang**

Time spent: **7** hours spent in total

Link to project: https://glitch.com/edit/#!/smart-impossible-pentagon)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] I made the 4 additional buttons' sound one octave higher than the existing ones

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
[button visuals working](https://i.imgur.com/SqriAOG.gifv)
[lost](https://drive.google.com/file/d/1bj7tNJuUOfe5Y1oekM188QRiMJXhW_VN/view?usp=sharing)
[win](https://drive.google.com/file/d/1L2XsJ4Qz1caVuy9ynfypXayi_XWXHWcM/view?usp=sharing)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/css/css3_buttons.asp
https://support.microsoft.com/en-us/office/record-the-screen-d70508e8-25a3-4b97-b78a-a467b5372e21
https://stackoverflow.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?
<br/>At the middle of the project, I was very confused about the variable "progress" and "guessCounter" as well as the keeping track with many variablese. 
I used pen and paper to lay out the JavaScript file structure, and searched on stackoverflow and coding learning websites for explanations. Having a visual reference helped. I also asked one of my friend that has experience with JavaScript to confirm my logic was correct.
Being able to understand the game's logic and what variable keeps track of what is so important, which leads to proper naming of variables, especially when I was following the instructions for frame design instead of writing code from ideation to implementation.


3. What questions about web development do you have after completing your submission?
<br/>How do developer keep track of what each variable means, especially when several developers are collaborating on the same project?
What is the workflow of web development like exactly and what is the proven most efficient way to design a working website? How do web developers choose aesthetically pleasing assets, graphics, and art designs? Are there some design principles that goes into web deveplopment to make a great and user friendly website?
How much foundational work needs to be done before a website can be hosted, built, and keep running? What are the essential infrastructures that are constantly supporting websites? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.f
<br/> I would add some addition visual effects, such as beautifying the game buttons, start buttons, redesign the background, and add some addition features.
I would like to make the time interval between the more stable as well through experimenting with interval variables in the JavaScipt file. 
I would also make 3 difficulties for players to choose from, from easy, to medium and hard. Once the users choose a difficulty, the number of buttons and length of the random sequences are going to different depending on the extent of difficulty. The easy difficulty is going to have 4 buttons, longest sequence is 6, medium difficulty has 6 buttons with longest sequence 8, and hard difficulty with 8 buttons of the same color with longest sequence 10.
I would add some messages that pop up through observing mouse behaviors of the player, such as displaying "Are you still there? " when a user's cursor stops at the same place for more than 5 seconds.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/18iRrsRzhvFq5forW9pwhS95XqQZo-fGM/view?usp=sharing)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
