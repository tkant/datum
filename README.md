# Datum

A database-less Node / Express server for mocking out a RESTful API...

## Installation

If you want to use datum globally outside of Node / NPM based project install the Node module as a global:

    $ npm install --global datum-api

Or if using inside a JavaScript / Node / NPM based project:

    $ npm install --save-dev datum-api

## Usage

To get the datum server up and running use:

    $ datum

This will get the datum server started locally on port 3000. Datum is configured to look for `fixture` files inside a fixtures directory by detfault. If you wish to change either of these options you can optionally pass either to the datum binary.

    $ PORT=3030 FIXTURES=json-files datum
