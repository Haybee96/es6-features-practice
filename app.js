class Element {
    constructor (name, buildYear) {
      this.name = name;
      this.buildYear = buildYear;
    }
  }
  
  class Park extends Element {
    constructor (name, buildYear, area, numOfTrees) {
      super (name, buildYear);
      this.area = area; // km2
      this.numOfTrees = numOfTrees;
    }
  
    treeDensity () {
      const density = (this.numOfTrees / this.area).toFixed(2);
      console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
  }
  
  class Street extends Element {
    constructor (name, buildYear, length, size = 3) {
      super (name, buildYear);
      this.length = length;
      this.size = size;
    }
  
    classifyStreet () {
      // Using hashMap data structure
      const classification = new Map();
      classification.set(1, 'tiny');
      classification.set(2, 'small');
      classification.set(3, 'normal');
      classification.set(4, 'big');
      classification.set(5, 'huge');
      
      console.log(`${this.name}, built in ${this.buildYear} is a ${classification.get(this.size)} street.`)
    }
  }
  
  const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
  ];
  
  const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen street', 2008, 2.7, 2),
    new Street('Turnabout street', 2015, 0.8),
    new Street('Barbish street', 1982, 2.5, 5)
  ];
  
  function calc (arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    return [sum, (sum / arr.length).toFixed(2)];
  }
  
  function parksReport(p) {
    console.log('\n');
    console.log('********** PARKS REPORT **********');
  
    // Tree density
    p.forEach(el => el.treeDensity());
  
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
  
    // Park with more than 1000 trees
    const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`)
  }
  
  function streetsReport(s) {
    console.log('\n');
    console.log('********** STREETS REPORT **********');
  
    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength.toFixed(2)} km, and an average of ${avgLength} km.`);
  
    // Classify size
    s.forEach(el => el.classifyStreet());
  }
  
  parksReport(allParks);
  streetsReport(allStreets);
  