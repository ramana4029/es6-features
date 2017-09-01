/*
 Classes are in fact "special functions", and just as you can define function expressions 
 and function declarations, the class syntax has two components: 
 class expressions and class declarations.

 
*/

/**
// unnamed
var Element = class {
  constructor(elementKey, hub) {
    this.elementKey = elementKey;
    this.hub = hub;
  }
};

// named ... The name given to a named class expression is local to the class's body.
var Element = class Element {
  constructor(elementKey, hub) {
    this.elementKey = elementKey;
    this.hub = hub;
  }
};

**/


class Element {
  constructor(elementKey, hub) {
    this.elementKey = elementKey;
    this.hub = hub;
  }
  
  get key() {
    return this.elementKey;
  }

  details() {
    return {
    	"key": this.elementKey,
    	"hub" : hub
    };
  }

  static hydrate(a, name) {
    return {
    	"key": a.elementKey,
    	"hub" : a.hub,
    	"name" : name
    };
  }  
}

const ele = new Element('sfdc', 'crm');

console.log(ele.key);
console.log(ele);
console.log(Element.hydrate(ele, 'Salesforce'));



/*
 //Sub classing with extends

class Hub {
	
}

class Element extends Hub {

}

*/


/*
//Mix-ins
//Abstract subclasses or mix-ins are templates for classes
class can only have a single superclass, so multiple inheritance from tooling classes is not possible.
*/

var calculatorMixin = Base => class extends Base {
  calc() { }
};

var randomizerMixin = Base => class extends Base {
  randomize() { }
};

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }








