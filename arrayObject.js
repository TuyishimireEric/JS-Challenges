const arrayConverter = (arr) => {
  const converted = {
    females: [],
    males: []
  }

  arr.forEach(person => {
    const personData = person.split(",");
    const name = personData[0].split(" ");
    const personObject = {
        'second-name': name[1],
        age: personData[1]
    }

    if(personData[2] == 'male'){
        converted.males.push({[name[0]]: JSON.stringify(personObject)})
    }else if(personData[2] == 'female'){
        converted.females.push({[name[0]]: JSON.stringify(personObject)})
    }

  });

  return converted;
};

const arr = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21,male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10,trans",
  "Patrick wyne, 40,male",
];

console.log(arrayConverter(arr));