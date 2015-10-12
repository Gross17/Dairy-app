describe("mainCTRL Simple Test", function () {

    // Arrange
    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module("dairyApp"));
    
    
    beforeEach(angular.mock.inject(function ($controller, $rootScope) {    
       
        mockScope = $rootScope.$new();

        controller = $controller("mainCTRL", {
            $scope: mockScope
        });
    }));

    // Act and Assess
    it("Проверка массива с часами", function () {
        expect(mockScope.hours[5]).toEqual("05:00");
    })

    it("Всплывающее окно не должно быть видно", function () {
        expect(mockScope.showPopup).toBeFalsy();
    });

    it("Проверка Local Storage", function () {
        mockScope.clearLS();
        expect(localStorage.length).toEqual(0);
    });

});