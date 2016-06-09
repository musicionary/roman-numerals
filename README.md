# Roman Numeral Converter

Uses simple calculation and recursion to convert regular numbers into Roman numerals. This is an exercise in HTML, CSS, and Javascript.

## Installation

Clone this repository from https://github.com/noahramey/roman-numerals

## Usage

Open index.html in Google Chrome or your default web browser.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Specs

The website takes any one digit number and converts it into it's corresponding roman numeral.
  -Input Example: 6
  -Output Example: VI

The website takes a two digit number and assigns the appropriate "X/L" based numeral and then subtracts until single digits remain.
  -Input Example: 19
  -Output Example: XIX

The website takes a three digit number and assigns the appropriate "C/D" based numeral, subtracts until two digits remain, then repeats above specs.
  -Input Example: 236
  -Output Example: CCXXXVI

The website takes a four digit number and assigns the "M" numeral, subtracts until three digits remain, then repeats above specs.
  -Input Example: 2000
  -Output Example: MM

The website takes any number above 3999 and returns a string telling you about the limits of historical Roman calculation.
  -Input Example: 4001
  -Output Example: "Dem Romans was lazy. You can't write more than 3999 for some reason."

## Credits

By Chip Carnes and Noah Ramey

## License

MIT License. Copyright &copy; 2016 "Noah Ramey, Chip Carnes"
