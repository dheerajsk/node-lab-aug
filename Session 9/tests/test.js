const expect = require('chai').expect;

const Calculator = require('../calculator');

describe("Calculator testcases", () => {

    it('should return add result as 20 for parameters 10, 10', ()=>{
        // Arrange
        let num1=10, num2 = 10;
        const expectedResult = 20;

        // Act
        const result = Calculator.add(num1, num2);

        // Assert
        expect(result).to.equal(expectedResult);
    });

    it('should return sub result as 10 for parameters 20, 10', ()=>{
        // Arrange
        let num1 = 20, num2 = 10;
        const expectedResult = 10;

        // Act
        const result = Calculator.sub(num1, num2);

        // Assert
        expect(result).to.equal(expectedResult);
    });

    it('should return mul result as 200 for parameters 20, 10', ()=>{
        // Arrange
        let num1 = 20, num2 = 10;
        const expectedResult = 200;

        // Act
        const result = Calculator.mul(num1, num2);

        // Assert
        expect(result).to.equal(expectedResult);
    });

    it('should return mul result as 2 for parameters 20, 10', ()=>{
        // Arrange
        let num1 = 20, num2 = 10;
        const expectedResult = 2;

        // Act
        const result = Calculator.div(num1, num2);

        // Assert
        expect(result).to.equal(expectedResult);
    });

});