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

    $ FIXTURES=json-files datum --port 3030

## Ember.js support

Datum comes with support for Ember.js based applications. Support for the Ember `DS.RESTAdapter` is included and support for the Ember `DS.ActiveModelAdapter` is in the works to allow your development based application to run in an almost like for like scenario as your production environment with no need to switch between adapters based on the environment.

To use the Emer `DS.RESTAdapter` run the Datum binary with the `--ember rest` flag or `-e rest` for short.

    $ datum --ember rest

## Feature list

The following are features planned for development:

* Add feature to allow deletion of resources
* Add a serializer with support for Ember `DS.ActiveModelAdapter`
* Add support for specifying the resource `id` field, speficically to mimic MongoDB `_id` based formats
* Add support for a  `--json-root false` flag to remove the root resource JSON object for Ember.js based resources
* Add support for a .datumrc file to ease setting various options
* Fairly ambitious: Add ability to sort collection based resources with a user defined param
* Very ambitious: Nested resources support

## Contributing

1. Fork it ( http://github.com/davidrhyswhite/datum/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
