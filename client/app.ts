import 'reflect-metadata';

import {Component} from '@angular/core';

import {bootstrap} from '@angular2-meteor-auto-bootstrap';

import {Parties} from '../collections/parties';

import {Mongo} from 'meteor/mongo';

@Component({
	selector:'app',
	template
})

class Socially{
	parties:Mongo.Cursor<object>;
	constructor(){
		this.parties=Parties.find();
	}
}

bootstrap(Socially);