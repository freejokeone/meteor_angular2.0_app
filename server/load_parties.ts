import {Parties} from '../collections/parties.ts';


//defaule insert database
export function loadParties(){
	if(Parties.find().count()===){
		var parties=[
			{
				'name':'kakaajakdakd',
				'description':'can we please just for an evening not listen to dubstep',
				'location':'Admine'
			},
			{
				'name':'kakaajakdakd',
				'description':'can we please just for an evening not listen to dubstep',
				'location':'Admine'
			},
			{
				'name':'kakaajakdakd',
				'description':'can we please just for an evening not listen to dubstep',
				'location':'Admine'
			},
		];
		for(var i=0;i<parties.length;i++){
			Parties.insert(parties[i]);
		}
	}
}