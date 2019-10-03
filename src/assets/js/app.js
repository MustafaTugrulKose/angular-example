var dummyJson = 
{
    "offerList": [
        {
            "ProductDesc": "Süper Kasko",
            "FirmName": "Groupama Sigorta",
            "Cash": 5695.66,
            "QuotaInfo": {
                "HasDiscount": true,
                "PremiumWithDiscount": 5416.66
            },
            "SaleClosed": false,
            "ImagePath": "/Groupama.png",
            "popoverContent": [
                {
                    "Title": "Servis Seçimi : Serbest",
                    "Description": "Onarım sigortacının anlaşmalı olduğu serviste veya sigortalının tercih edeceği serviste yapılabilir. Anlaşmasız servislerde Sigortacıdan izin alınmaksızın yapılan onarımlar ödenmez."
                }
            ]
        },
        {
            "ProductDesc": "Ak Kasko",
            "FirmName": "Ak Sigorta",
            "Cash": 1432.67,
            "QuotaInfo": {
                "HasDiscount": false,
                "PremiumWithDiscount": 0
            },
            "SaleClosed": true,
            "ImagePath": "/AkSigorta.png",
        }
    ]
}

angular.module('myApp', [])
.controller('myCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    //Data
    $scope.offerList = dummyJson.offerList;

    //Popover 
   this.IsVisible = false;
   $scope.ShowHide = function(){
        this.IsVisible == true ?  this.IsVisible = false : this.IsVisible = true;
    }

    //  angular.forEach($scope.offerList, function(value, key) {
    //      $scope.ProductDesc = value.ProductDesc;
    //   });
}]);
