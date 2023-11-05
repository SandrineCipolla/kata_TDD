const fizz = "fizz";
const buzz = "buzz";
const fizzbuzz = fizz + buzz;
const fizzfizz = fizz + fizz;
const buzzbuzz = buzz + buzz;
const fizzbuzzbuzz = fizz + buzz + buzz;
const fizzfizzbuzz = fizz + fizzbuzz;

function isDivisibleByThree(input) {
  return input % 3 == 0;
}
function isDivisibleByThreeAndFive(input) {
  return isDivisibleByThree(input) && isDivisibleByFive(input);
}
function isDivisibleByFive(input) {
  return input % 5 == 0;
}

function compute(input) {
  if (isDivisibleByThreeAndFive(input)) return fizzbuzz;

  if (isDivisibleByThree(input)) return fizz;

  if (isDivisibleByFive(input)) return buzz;

  return input;
}

function computeStage2(entier) {
  const contains3 = entier.toString().includes("3");
  const contains5 = entier.toString().includes("5");

  if (contains3 && isDivisibleByThreeAndFive(entier)) return fizzfizzbuzz;

  if (contains5 && isDivisibleByThreeAndFive(entier)) return fizzbuzzbuzz;

  if (contains3 && contains5 && isDivisibleByFive(entier)) return fizzbuzzbuzz;
  if (contains3 && isDivisibleByThree(entier)) return fizzfizz;

  if (contains5 && isDivisibleByFive(entier)) return buzzbuzz;

  if (contains3 && contains5) return fizzbuzz;
  if (contains5) return buzz;
  if (contains3) return fizz;

  return entier.toString();
}

export { compute, computeStage2 };
