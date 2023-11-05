import { expect } from "@jest/globals";
import { compute, computeStage2 } from "../fizzbuzz";

describe("fizzbuzz", () => {
  it("given 1 then return 1", () => {
    let actual = compute(1);
    expect(actual).toBe(1);
  });
  test("given 2 then return 2", () => {
    let actual = compute(2);
    expect(actual).toBe(2);
  });
  test("given 3 then return fizz", () => {
    let actual = compute(3);
    expect(actual).toBe("fizz");
  });
  test("given 4 then return 4", () => {
    let actual = compute(4);
    expect(actual).toBe(4);
  });
  test("given 5 then return buzz", () => {
    let actual = compute(5);
    expect(actual).toBe("buzz");
  });
  test("given 6 then return fizz", () => {
    let actual = compute(6);
    expect(actual).toBe("fizz");
  });
  test("given 9 then return fizz", () => {
    let actual = compute(9);
    expect(actual).toBe("fizz");
  });
  test("given 15 then return fizzbuzz", () => {
    let actual = compute(15);
    expect(actual).toBe("fizzbuzz");
  });
  test("given 45 then return fizzbuzz", () => {
    let actual = compute(45);
    expect(actual).toBe("fizzbuzz");
  });
  test("given 10 then return buzz", () => {
    let actual = compute(10);
    expect(actual).toBe("buzz");
  });
  test("given 20 then return buzz", () => {
    let actual = compute(20);
    expect(actual).toBe("buzz");
  });
  test("given 35 then retun fizzbuzzbuzz", () => {
    let actual = computeStage2(35);
    expect(actual).toBe("fizzbuzzbuzz");
  });
  test("given 53 then retun fizzbuzz", () => {
    let actual = computeStage2(53);
    expect(actual).toBe("fizzbuzz");
  });
  test("given 45 then retun fizzbuzzbuzz", () => {
    let actual = computeStage2(45);
    expect(actual).toBe("fizzbuzzbuzz");
  });
  test("given 55 then return buzzbuzz", () => {
    let actual = computeStage2(55);
    expect(actual).toBe("buzzbuzz");
  });
  test("given 75 then retun fizzbuzzbuzz", () => {
    let actual = computeStage2(75);
    expect(actual).toBe("fizzbuzzbuzz");
  });
  test("given 30 then retun fizzfizzbuzz", () => {
    let actual = computeStage2(30);
    expect(actual).toBe("fizzfizzbuzz");
  });
  test("given 85 then retun buzzbuzz", () => {
    let actual = computeStage2(85);
    expect(actual).toBe("buzzbuzz");
  });
  test("given 60 then return fizzbuzz", () => {
    let actual = compute(60);
    expect(actual).toBe("fizzbuzz");
  });
  test("given 52 then return buzz", () => {
    let actual = computeStage2(52);
    expect(actual).toBe("buzz");
  });
  test("given 13 then return fizz", () => {
    let actual = computeStage2(13);
    expect(actual).toBe("fizz");
  });
});
