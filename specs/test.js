require("../matchers");

describe('Test examples', function() {
    it('should open Eleks main page', async () => {
      browser.waitForAngularEnabled(false);
      
      await browser.get('https://eleks.com/');

      const languageSwitch = element(by.css('.head__lang'));
      console.log(languageSwitch);
      languageSwitch.click();

      expect(languageSwitch).toHaveClass('active');
    });
});