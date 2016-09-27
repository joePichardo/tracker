import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Parent route is a noun
  this.route('sightings', function() {
    // Child route is verb or adjective
    this.route('new');
  });
  this.route('sighting', function() {
    this.route('edit', {path: "sightings/:sighting_id/edit"});
  });
  this.route('cryptids');
  this.route('cryptid', {path: 'cryptids/:cryptid_id'});
  this.route('witnesses');
  this.route('witness');
});

export default Router;
