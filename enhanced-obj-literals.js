
function getElement(key, name, hub) {
	return {
		// with property value shorthand syntax, you can omit the property
		// value if key matches variable name
		key,  // same as key: key
		name, // same as name: name
		hub, // same as hub: hub

		// computed values work with object literals
		['element' + name]: true,

		// Method definition shorthand syntax omits `function` keyword & colon
		score() {
			return this.hub === 'crm' ? 100 : 20;
		}
	};
}

var element = getElement('sfdc', 'Salesforce', 'crm');
console.log(element);
console.log(element.score());