import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  describe('testCreditCard method', () => {

    it('should be invalid card type', () => {
      const actualResult = service.testCreditCard(null, '-1');
      const expectedResult = {
        isValid: false,
        message: 'Unknown card type'
      };

      expect(actualResult).toEqual(expectedResult);
    });

    it('Should be invalid when card number has letters', () => {
      const actualResult = service.testCreditCard('a3b78901c3456', 'Visa');
      const expectedResult = {
        isValid: false,
        message: 'Credit card number is in invalid format'
      };

      expect(actualResult).toEqual(expectedResult);
    });

    it('Should be invalid card when prefixes not match', () => {
      const actualResult = service.testCreditCard('234567890123456', 'Visa');
      const expectedResult = {
        isValid: false,
        message: 'Credit card number is invalid'
      };

      expect(actualResult).toEqual(expectedResult);
    });

    it('Should be invalid when card is scam', () => {
      const actualResult = service.testCreditCard('5490997771092064', 'MasterCard');
      const expectedResult = {
        isValid: false,
        message: 'Warning! This credit card number is associated with a scam attempt'
      };

      expect(actualResult).toEqual(expectedResult);
    });

    it('Should be invalid when card number has an inappropriate number of digits', () => {
      const actualResult = service.testCreditCard("54909977710927", 'MasterCard');
      const expectedResult = {
        isValid: false,
        message: 'Credit card number has an inappropriate number of digits'
      };

      expect(actualResult).toEqual(expectedResult);
    });

    it('Should be valid card', () => {
      const actualResult = service.testCreditCard('4111111111111111', 'Visa');
      const expectedResult = {
        isValid: true,
        message: 'Credit card has a valid format'
      };

      expect(actualResult).toEqual(expectedResult);
    });

  });
});

