export default class SolarAge {
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    this.age = this.age * .24;
    return this.age;
  }

  venusAge() {
    this.age = this.age * .62;
    return this.age;
  }

  marsAge() {
    this.age = this.age * 1.88;
    return this.age;
  }

  jupiterAge() {
    
  }

  // pastBirthday() {

  // }

  // futureBirthday() {

  // }   
}