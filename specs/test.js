describe('angularjs homepage', function() {
    it('should have a title', function() {

      browser.get('https://www.protractortest.org/');

      expect(browser.getTitle()).toContain('Protractor');
    });
  });