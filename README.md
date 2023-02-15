# Morse-to-Letter Translator

![badmath](https://img.shields.io/github/issues/barrylui88/Morse-Code-Translator) ![batmath](https://img.shields.io/github/issues-pr-closed/barrylui88/Morse-Code-Translator) ![badmath](https://img.shields.io/github/license/barrylui88/Morse-Code-Translator)

</br>

## Table of Contents
* [Description](#description)
* [Features](#features)
* [Installation & Deployment](#installation-and-deployment)
* [How to Use](#how-to-use)
* [License](#license)

</br>

</br>

## Description

This project presents a real-world situation in which the newfound JavaScript skills will come in handy. The code has been built to help users to communicate secretly using Morse code that has been widely used in aerospace, amateur radio operators, military, and army forces for communication. Users can encode and decode text messages from and to Morse code by selecting the type of translation that users need.

</br>

<!-- Add screenshot -->
![Application Demo](./assets/img/readme-01-application-demo.gif)

</br>

## Features

This application works in two different modes: Morse-to-Letter and Letter-to-Morse. Two different logics have been built to encode and decode the messages. This application also has been supported with two APIs to show users the current time and weather and a localstorage to save the translated data.

<!-- Add screenshot -->

</br>

### Morse-to-Letter Translator

<!-- Add screenshot -->

In morse-to-letter mode, the application can be used by clicking buttons to generate Morse code and translated message will be shown instantly in letters. Any translation that has been saved will be shown in the translate history.


</br>


### Letter-to-Morse Translator

<!-- Add screenshot -->
In letter-to-morse mode, users can type directly in the text box area and the Morse code will be shown once the translate button is clicked. Similar to the previous mode, any translation that has been saved will be shown in the translate history and can also be cleared by clicking the `clear` button.


</br>

### Moment.js API
<!-- Add screenshot -->
![Current Time](./assets/img/readme-01-application-demo.gif) 

`Moment.js` API has been used in this application to show users the current time and date. These features can be seen in the homepage right below the buttons.

</br>

### Current Weather API

<!-- Add screenshot -->

Another API has been used in this application, `openweather`. By using this API, a local weather of London can be seen in the homepage after the aforementioned current time feature.

</br>

### LocalStorage History

<!-- Add screenshot -->
<!-- Add description -->

</br>

</br>

## Installation and Deployment

Installation not required, since this is a "plug and play" type of application. The user can simply run it locally by clicking on the `index.html` file and opening in either their default or preferred browser.

Application can also be accessed at following links:
* [GitHub repository](https://github.com/barrylui88/Morse-Code-Translator).
* [Deployed application](https://barrylui88.github.io/Morse-Code-Translator/).

</br>

</br>

## How to Use 

* Click `Morse > Letter` button to translate Morse code to letters.
    * Use the buttons under the text area to input the morse code.
    * A cheatsheet of Morse code has been provided on the top side of webpage.
    * Click `save` button to save the translation.
    * Click `clear` button to clear both input and saved translation / history.
    * Use `back` button if you wish to go back to homepage.
</br>
* Click `Letter > Morse` button to translate letters to Morse code.
    * Type your alphabet message in text box and click `translate` to translate.
    * Click `save` button to save the translation.
    * Click `clear` button to clear both input and saved translation / history.
    * Use `back` button if you wish to go back to homepage.

</br>
</br>

## License

Licensed under the [MIT license](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt). See LICENSE for the full details.
