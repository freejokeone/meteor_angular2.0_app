import {loadParties} from './load_parties.ts';

import {Meteor} from 'meteor/meteor';

Meteor.startup(loadParties);