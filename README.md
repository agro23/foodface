# Food Face

#### By Andy Grossberg, Logan Tanous, and Nicko Dela Cruz

## Description
An application to enable users to choose some food based on their mood.

## Use Cases
The user should be shown gifs representing five moods and pick one that matches their current mood. They will then be given a list of nearby restaurants with food choices matching their mood.

Happy: Breakfast/Coffee
Sad: Spicy/Exotic
Mad: Comfort foods / Lunch / American
Stoned: Dessert/Bakery/Fast Food
Neutral: Random

Results will be stacked by Rating first and then by Category.

## Specifications

* A mood should be chosen (Happy, Sad, Mad, Stoned, Neutral)
* A call should be made to the Giphy API
* Display the gif that matches the mood
* A restaurant should be offered to the user
* A call should be made to the Zomato API
* Find restaurants from the returned list that match the mood
*
* Build out the UI
* A call should be made to Giphy to get a gif from a category matching the moods
* Refactor code as needed.

## Methodology


## Technologies Used

* HTML
* CSS
* Javascript
* Node

## Dependencies and plugins

**Dependencies**
* Webpack 4.0.1 (as my module bundler)
* Jasmine (for tests)
* Karma (for test running)
* ESLint (for linting my code, looking for dropped semi-colons and whatnot)
* Babel (to transpile my code)

**Dev Dependencies**
* Webpack 4.0.1
* Webpack-cli 2.0.9
* Bootstrap 4.0.0
* jQuery 3.3.1
* Popper.js 1.14.0

**Plugins**
* UglifyJsPlugin
* CleanWebpackPlugin
* HtmlWebpackPlugin

## Setup/Installation Requirements
* Download the project from the repository https://github.com/agro23/SuperGalacticAgeCalculator
* Install and initialize (init -y) Node (if it isn't already)
* Navigate to your root project directory
* Type "npm init" and run through the package.json file filling in details as needed
* Type "npm install"
* Navigate to node_modules/.bin/ and type "jasmine init"
* Navigate back to the project's root directory
* To run the tests type "npm test"
* To run the test server type "npm run start"
* To build the project type "npm run build" and point your browser at the index.html file in the dist folder

## Known Bugs and Issues

There are no known bugs.

## Support and contact details

**Contact the authors at andy.grossberg@gmail.com**

### License

Copyright (c) 2018 Andy Grossberg, Logan Tanous, Nicko Dela Cruz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
