var app = angular.module("dairyApp", [])

app.controller("mainCTRL", function ($scope) {
     
    $scope.hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'];
    $scope.showPopup = false;
    $scope.showPopupEdit = false;
    $scope.deleteEvent = "";
    $scope.counter = 0;

    //Popup messages
    $(".dairy").click(function (e) {
            $scope.clicked = e;
            if ($scope.clicked.target.className == "free") {
                $scope.showPopup = true;
            };

            if ($scope.clicked.target.className == "buzy") {
                $scope.parent = $scope.clicked.target.parentNode;

                //Monday
                if ($scope.clicked.target.id == "mon") {
                    if ($scope.parent.firstElementChild.innerHTML == "00:00") {
                        var get = JSON.parse(localStorage.getItem('mon00'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon00';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "01:00") {
                        var get = JSON.parse(localStorage.getItem('mon01'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon01';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "02:00") {
                        var get = JSON.parse(localStorage.getItem('mon02'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon02';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "03:00") {
                        var get = JSON.parse(localStorage.getItem('mon03'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon03';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "04:00") {
                        var get = JSON.parse(localStorage.getItem('mon04'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon04';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "05:00") {
                        var get = JSON.parse(localStorage.getItem('mon05'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon05';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "06:00") {
                        var get = JSON.parse(localStorage.getItem('mon06'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon06';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "07:00") {
                        var get = JSON.parse(localStorage.getItem('mon07'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon07';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "08:00") {
                        var get = JSON.parse(localStorage.getItem('mon08'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon08';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "09:00") {
                        var get = JSON.parse(localStorage.getItem('mon09'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon09';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "10:00") {
                        var get = JSON.parse(localStorage.getItem('mon10'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon10';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "11:00") {
                        var get = JSON.parse(localStorage.getItem('mon11'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon11';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "12:00") {
                        var get = JSON.parse(localStorage.getItem('mon12'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'mon12';
                    }
                }

                //Tuesday
                if ($scope.clicked.target.id == "tue") {
                    if ($scope.parent.firstElementChild.innerHTML == "00:00") {
                        var get = JSON.parse(localStorage.getItem('tue00'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue00';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "01:00") {
                        var get = JSON.parse(localStorage.getItem('tue01'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue01';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "02:00") {
                        var get = JSON.parse(localStorage.getItem('tue02'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue02';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "03:00") {
                        var get = JSON.parse(localStorage.getItem('tue03'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue03';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "04:00") {
                        var get = JSON.parse(localStorage.getItem('tue04'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue04';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "05:00") {
                        var get = JSON.parse(localStorage.getItem('tue05'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue05';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "06:00") {
                        var get = JSON.parse(localStorage.getItem('tue06'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue06';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "07:00") {
                        var get = JSON.parse(localStorage.getItem('tue07'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue07';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "08:00") {
                        var get = JSON.parse(localStorage.getItem('tue08'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue08';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "09:00") {
                        var get = JSON.parse(localStorage.getItem('tue09'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue09';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "10:00") {
                        var get = JSON.parse(localStorage.getItem('tue10'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue10';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "11:00") {
                        var get = JSON.parse(localStorage.getItem('tue11'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue11';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "12:00") {
                        var get = JSON.parse(localStorage.getItem('tue12'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'tue12';
                    }
                }

                //Wednesday
                if ($scope.clicked.target.id == "wed") {
                    if ($scope.parent.firstElementChild.innerHTML == "00:00") {
                        var get = JSON.parse(localStorage.getItem('wed00'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed00';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "01:00") {
                        var get = JSON.parse(localStorage.getItem('wed01'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed01';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "02:00") {
                        var get = JSON.parse(localStorage.getItem('wed02'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed02';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "03:00") {
                        var get = JSON.parse(localStorage.getItem('wed03'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed03';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "04:00") {
                        var get = JSON.parse(localStorage.getItem('wed04'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed04';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "05:00") {
                        var get = JSON.parse(localStorage.getItem('wed05'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed05';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "06:00") {
                        var get = JSON.parse(localStorage.getItem('wed06'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed06';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "07:00") {
                        var get = JSON.parse(localStorage.getItem('wed07'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed07';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "08:00") {
                        var get = JSON.parse(localStorage.getItem('wed08'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed08';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "09:00") {
                        var get = JSON.parse(localStorage.getItem('wed09'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed09';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "10:00") {
                        var get = JSON.parse(localStorage.getItem('wed10'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed10';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "11:00") {
                        var get = JSON.parse(localStorage.getItem('wed11'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed11';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "12:00") {
                        var get = JSON.parse(localStorage.getItem('wed12'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'wed12';
                    }
                }

                //Thursday
                if ($scope.clicked.target.id == "thu") {
                    if ($scope.parent.firstElementChild.innerHTML == "00:00") {
                        var get = JSON.parse(localStorage.getItem('thu00'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu00';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "01:00") {
                        var get = JSON.parse(localStorage.getItem('thu01'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu01';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "02:00") {
                        var get = JSON.parse(localStorage.getItem('thu02'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu02';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "03:00") {
                        var get = JSON.parse(localStorage.getItem('thu03'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu03';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "04:00") {
                        var get = JSON.parse(localStorage.getItem('thu04'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu04';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "05:00") {
                        var get = JSON.parse(localStorage.getItem('thu05'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu05';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "06:00") {
                        var get = JSON.parse(localStorage.getItem('thu06'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu06';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "07:00") {
                        var get = JSON.parse(localStorage.getItem('thu07'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu07';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "08:00") {
                        var get = JSON.parse(localStorage.getItem('thu08'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu08';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "09:00") {
                        var get = JSON.parse(localStorage.getItem('thu09'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu09';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "10:00") {
                        var get = JSON.parse(localStorage.getItem('thu10'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu10';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "11:00") {
                        var get = JSON.parse(localStorage.getItem('thu11'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu11';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "12:00") {
                        var get = JSON.parse(localStorage.getItem('thu12'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'thu12';
                    }
                }

                //Friday
                if ($scope.clicked.target.id == "fri") {
                    if ($scope.parent.firstElementChild.innerHTML == "00:00") {
                        var get = JSON.parse(localStorage.getItem('fri00'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri00';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "01:00") {
                        var get = JSON.parse(localStorage.getItem('fri01'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri01';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "02:00") {
                        var get = JSON.parse(localStorage.getItem('fri02'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri02';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "03:00") {
                        var get = JSON.parse(localStorage.getItem('fri03'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri03';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "04:00") {
                        var get = JSON.parse(localStorage.getItem('fri04'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri04';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "05:00") {
                        var get = JSON.parse(localStorage.getItem('fri05'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri05';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "06:00") {
                        var get = JSON.parse(localStorage.getItem('fri06'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri06';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "07:00") {
                        var get = JSON.parse(localStorage.getItem('fri07'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri07';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "08:00") {
                        var get = JSON.parse(localStorage.getItem('fri08'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri08';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "09:00") {
                        var get = JSON.parse(localStorage.getItem('fri09'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri09';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "10:00") {
                        var get = JSON.parse(localStorage.getItem('fri10'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri10';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "11:00") {
                        var get = JSON.parse(localStorage.getItem('fri11'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri11';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "12:00") {
                        var get = JSON.parse(localStorage.getItem('fri12'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'fri12';
                    }
                }

                //Saturday
                if ($scope.clicked.target.id == "sat") {
                    if ($scope.parent.firstElementChild.innerHTML == "00:00") {
                        var get = JSON.parse(localStorage.getItem('sat00'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat00';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "01:00") {
                        var get = JSON.parse(localStorage.getItem('sat01'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat01';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "02:00") {
                        var get = JSON.parse(localStorage.getItem('sat02'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat02';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "03:00") {
                        var get = JSON.parse(localStorage.getItem('sat03'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat03';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "04:00") {
                        var get = JSON.parse(localStorage.getItem('sat04'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat04';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "05:00") {
                        var get = JSON.parse(localStorage.getItem('sat05'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat05';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "06:00") {
                        var get = JSON.parse(localStorage.getItem('sat06'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat06';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "07:00") {
                        var get = JSON.parse(localStorage.getItem('sat07'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat07';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "08:00") {
                        var get = JSON.parse(localStorage.getItem('sat08'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat08';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "09:00") {
                        var get = JSON.parse(localStorage.getItem('sat09'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat09';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "10:00") {
                        var get = JSON.parse(localStorage.getItem('sat10'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat10';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "11:00") {
                        var get = JSON.parse(localStorage.getItem('sat11'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat11';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "12:00") {
                        var get = JSON.parse(localStorage.getItem('sat12'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sat12';
                    }
                }

                //Sunday
                if ($scope.clicked.target.id == "sun") {
                    if ($scope.parent.firstElementChild.innerHTML == "00:00") {
                        var get = JSON.parse(localStorage.getItem('sun00'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun00';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "01:00") {
                        var get = JSON.parse(localStorage.getItem('sun01'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun01';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "02:00") {
                        var get = JSON.parse(localStorage.getItem('sun02'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun02';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "03:00") {
                        var get = JSON.parse(localStorage.getItem('sun03'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun03';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "04:00") {
                        var get = JSON.parse(localStorage.getItem('sun04'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun04';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "05:00") {
                        var get = JSON.parse(localStorage.getItem('sun05'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun05';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "06:00") {
                        var get = JSON.parse(localStorage.getItem('sun06'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun06';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "07:00") {
                        var get = JSON.parse(localStorage.getItem('sun07'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun07';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "08:00") {
                        var get = JSON.parse(localStorage.getItem('sun08'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun08';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "09:00") {
                        var get = JSON.parse(localStorage.getItem('sun09'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun09';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "10:00") {
                        var get = JSON.parse(localStorage.getItem('sun10'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun10';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "11:00") {
                        var get = JSON.parse(localStorage.getItem('sun11'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun11';
                    }
                    if ($scope.parent.firstElementChild.innerHTML == "12:00") {
                        var get = JSON.parse(localStorage.getItem('sun12'));
                        $scope.name = get.name;
                        $scope.comment = get.comment;
                        $scope.fromTime = get.from;
                        $scope.deleteEvent = 'sun12';
                    }
                }



                $scope.showPopupEdit = true;
            }

        })

   
    $scope.showLS = function () {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var post = JSON.parse(localStorage[key]);
                console.log(post);
                var eventID = post.id;
                var eventEQ = post.eq;
                var eventNAME = post.name;
                $(eventID).eq(eventEQ).removeClass("free").addClass("buzy").text(eventNAME);
                //var key = localStorage.key(i);
                //console.log(key + ' = ' + localStorage[key]);
            }
        }
        else { alert ("No data in Local Storage!")}
        }

        $scope.clearLS = function () {
            localStorage.clear();
            alert("Local Storaged cleared. Refresh page pls");
        }


        $scope.closePopup = function () {
            $scope.showPopup = false;
            $scope.name = "";
            $scope.comment = "";
            $scope.fromTime = "";
        }

        $scope.closePopupEdit = function () {
            $scope.showPopupEdit = false;
            $scope.name = "";
            $scope.comment = "";
            $scope.fromTime = "";
        }

    //Delete function
        $scope.delete = function () {
            if (confirm("Вы действительно хотите удалить это событие?")) {
                switch ($scope.deleteEvent) {
                    //Monday
                    case 'mon00':
                        localStorage.removeItem('mon00');
                        $("td#mon").eq(0).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon01':
                        localStorage.removeItem('mon01');
                        $("td#mon").eq(1).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon02':
                        localStorage.removeItem('mon02');
                        $("td#mon").eq(2).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon03':
                        localStorage.removeItem('mon03');
                        $("td#mon").eq(3).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon04':
                        localStorage.removeItem('mon04');
                        $("td#mon").eq(4).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon05':
                        localStorage.removeItem('mon05');
                        $("td#mon").eq(5).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon06':
                        localStorage.removeItem('mon06');
                        $("td#mon").eq(6).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon07':
                        localStorage.removeItem('mon07');
                        $("td#mon").eq(7).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon08':
                        localStorage.removeItem('mon08');
                        $("td#mon").eq(8).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon09':
                        localStorage.removeItem('mon09');
                        $("td#mon").eq(9).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon10':
                        localStorage.removeItem('mon10');
                        $("td#mon").eq(10).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon11':
                        localStorage.removeItem('mon11');
                        $("td#mon").eq(11).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'mon12':
                        localStorage.removeItem('mon12');
                        $("td#mon").eq(12).removeClass("buzy").addClass("free").text('');
                        break

                        //Tuesday
                    case 'tue00':
                        localStorage.removeItem('tue00');
                        $("td#tue").eq(0).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue01':
                        localStorage.removeItem('tue01');
                        $("td#tue").eq(1).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue02':
                        localStorage.removeItem('tue02');
                        $("td#tue").eq(2).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue03':
                        localStorage.removeItem('tue03');
                        $("td#tue").eq(3).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue04':
                        localStorage.removeItem('tue04');
                        $("td#tue").eq(4).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue05':
                        localStorage.removeItem('tue05');
                        $("td#tue").eq(5).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue06':
                        localStorage.removeItem('tue06');
                        $("td#tue").eq(6).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue07':
                        localStorage.removeItem('tue07');
                        $("td#tue").eq(7).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue08':
                        localStorage.removeItem('tue08');
                        $("td#tue").eq(8).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue09':
                        localStorage.removeItem('tue09');
                        $("td#tue").eq(9).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue10':
                        localStorage.removeItem('tue10');
                        $("td#tue").eq(10).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue11':
                        localStorage.removeItem('tue11');
                        $("td#tue").eq(11).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'tue12':
                        localStorage.removeItem('tue12');
                        $("td#tue").eq(12).removeClass("buzy").addClass("free").text('');
                        break;

                        //Wednesday
                    case 'wed00':
                        localStorage.removeItem('wed00');
                        $("td#wed").eq(0).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed01':
                        localStorage.removeItem('wed01');
                        $("td#wed").eq(1).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed02':
                        localStorage.removeItem('wed02');
                        $("td#wed").eq(2).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed03':
                        localStorage.removeItem('wed03');
                        $("td#wed").eq(3).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed04':
                        localStorage.removeItem('wed04');
                        $("td#wed").eq(4).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed05':
                        localStorage.removeItem('wed05');
                        $("td#wed").eq(5).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed06':
                        localStorage.removeItem('wed06');
                        $("td#wed").eq(6).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed07':
                        localStorage.removeItem('wed07');
                        $("td#wed").eq(7).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed08':
                        localStorage.removeItem('wed08');
                        $("td#wed").eq(8).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed09':
                        localStorage.removeItem('wed09');
                        $("td#wed").eq(9).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed10':
                        localStorage.removeItem('wed10');
                        $("td#wed").eq(10).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed11':
                        localStorage.removeItem('wed11');
                        $("td#wed").eq(11).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'wed12':
                        localStorage.removeItem('wed12');
                        $("td#wed").eq(12).removeClass("buzy").addClass("free").text('');
                        break;

                        //Thursday
                    case 'thu00':
                        localStorage.removeItem('thu00');
                        $("td#thu").eq(0).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu01':
                        localStorage.removeItem('thu01');
                        $("td#thu").eq(1).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu02':
                        localStorage.removeItem('thu02');
                        $("td#thu").eq(2).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu03':
                        localStorage.removeItem('thu03');
                        $("td#thu").eq(3).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu04':
                        localStorage.removeItem('thu04');
                        $("td#thu").eq(4).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu05':
                        localStorage.removeItem('thu05');
                        $("td#thu").eq(5).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu06':
                        localStorage.removeItem('thu06');
                        $("td#thu").eq(6).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu07':
                        localStorage.removeItem('thu07');
                        $("td#thu").eq(7).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu08':
                        localStorage.removeItem('thu08');
                        $("td#thu").eq(8).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu09':
                        localStorage.removeItem('thu09');
                        $("td#thu").eq(9).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu10':
                        localStorage.removeItem('thu10');
                        $("td#thu").eq(10).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu11':
                        localStorage.removeItem('thu11');
                        $("td#thu").eq(11).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'thu12':
                        localStorage.removeItem('thu12');
                        $("td#thu").eq(12).removeClass("buzy").addClass("free").text('');
                        break;

                        //Friday
                    case 'fri00':
                        localStorage.removeItem('fri00');
                        $("td#fri").eq(0).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri01':
                        localStorage.removeItem('fri01');
                        $("td#fri").eq(1).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri02':
                        localStorage.removeItem('fri02');
                        $("td#fri").eq(2).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri03':
                        localStorage.removeItem('fri03');
                        $("td#fri").eq(3).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri04':
                        localStorage.removeItem('fri04');
                        $("td#fri").eq(4).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri05':
                        localStorage.removeItem('fri05');
                        $("td#fri").eq(5).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri06':
                        localStorage.removeItem('fri06');
                        $("td#fri").eq(6).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri07':
                        localStorage.removeItem('fri07');
                        $("td#fri").eq(7).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri08':
                        localStorage.removeItem('fri08');
                        $("td#fri").eq(8).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri09':
                        localStorage.removeItem('fri09');
                        $("td#fri").eq(9).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri10':
                        localStorage.removeItem('fri10');
                        $("td#fri").eq(10).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri11':
                        localStorage.removeItem('fri11');
                        $("td#fri").eq(11).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'fri12':
                        localStorage.removeItem('fri12');
                        $("td#fri").eq(12).removeClass("buzy").addClass("free").text('');
                        break;

                        //Saturday
                    case 'sat00':
                        localStorage.removeItem('sat00');
                        $("td#sat").eq(0).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat01':
                        localStorage.removeItem('sat01');
                        $("td#sat").eq(1).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat02':
                        localStorage.removeItem('sat02');
                        $("td#sat").eq(2).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat03':
                        localStorage.removeItem('sat03');
                        $("td#sat").eq(3).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat04':
                        localStorage.removeItem('sat04');
                        $("td#sat").eq(4).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat05':
                        localStorage.removeItem('sat05');
                        $("td#sat").eq(5).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat06':
                        localStorage.removeItem('sat06');
                        $("td#sat").eq(6).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat07':
                        localStorage.removeItem('sat07');
                        $("td#sat").eq(7).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat08':
                        localStorage.removeItem('sat08');
                        $("td#sat").eq(8).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat09':
                        localStorage.removeItem('sat09');
                        $("td#sat").eq(9).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat10':
                        localStorage.removeItem('sat10');
                        $("td#sat").eq(10).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat11':
                        localStorage.removeItem('sat11');
                        $("td#sat").eq(11).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sat12':
                        localStorage.removeItem('sat12');
                        $("td#sat").eq(12).removeClass("buzy").addClass("free").text('');
                        break;

                        //Sunday
                    case 'sun00':
                        localStorage.removeItem('sun00');
                        $("td#sun").eq(0).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun01':
                        localStorage.removeItem('sun01');
                        $("td#sun").eq(1).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun02':
                        localStorage.removeItem('sun02');
                        $("td#sun").eq(2).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun03':
                        localStorage.removeItem('sun03');
                        $("td#sun").eq(3).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun04':
                        localStorage.removeItem('sun04');
                        $("td#sun").eq(4).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun05':
                        localStorage.removeItem('sun05');
                        $("td#sun").eq(5).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun06':
                        localStorage.removeItem('sun06');
                        $("td#sun").eq(6).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun07':
                        localStorage.removeItem('sun07');
                        $("td#sun").eq(7).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun08':
                        localStorage.removeItem('sun08');
                        $("td#sun").eq(8).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun09':
                        localStorage.removeItem('sun09');
                        $("td#sun").eq(9).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun10':
                        localStorage.removeItem('sun10');
                        $("td#sun").eq(10).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun11':
                        localStorage.removeItem('sun11');
                        $("td#sun").eq(11).removeClass("buzy").addClass("free").text('');
                        break;
                    case 'sun12':
                        localStorage.removeItem('sun12');
                        $("td#sun").eq(12).removeClass("buzy").addClass("free").text('');
                        break;
                }

          $scope.name = "";
          $scope.comment = "";
          $scope.fromTime = "";
          $scope.showPopupEdit = false;
      }

        } //End of Delete function

        $scope.addEditFunc = function () {
            //Monday
            if ($scope.clicked.target.id == "mon") {
                if ($scope.fromTime == "00:00") {
                    $("td#mon").eq(0).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon00', JSON.stringify({
                        id: "td#mon",
                        eq: 0,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

                if ($scope.fromTime == "01:00") {
                    $("td#mon").eq(1).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon01', JSON.stringify({
                        id: "td#mon",
                        eq: 1,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "02:00") {
                    $("td#mon").eq(2).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon02', JSON.stringify({
                        id: "td#mon",
                        eq: 2,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "03:00") {
                    $("td#mon").eq(3).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon03', JSON.stringify({
                        id: "td#mon",
                        eq: 3,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "04:00") {
                    $("td#mon").eq(4).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon04', JSON.stringify({
                        id: "td#mon",
                        eq: 4,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "05:00") {
                    $("td#mon").eq(5).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon05', JSON.stringify({
                        id: "td#mon",
                        eq: 5,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "06:00") {
                    $("td#mon").eq(6).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon06', JSON.stringify({
                        id: "td#mon",
                        eq: 6,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "07:00") {
                    $("td#mon").eq(7).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon07', JSON.stringify({
                        id: "td#mon",
                        eq: 7,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "08:00") {
                    $("td#mon").eq(8).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon08', JSON.stringify({
                        id: "td#mon",
                        eq: 8,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "09:00") {
                    $("td#mon").eq(9).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon09', JSON.stringify({
                        id: "td#mon",
                        eq: 9,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "10:00") {
                    $("td#mon").eq(10).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon10', JSON.stringify({
                        id: "td#mon",
                        eq: 10,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "11:00") {
                    $("td#mon").eq(11).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon11', JSON.stringify({
                        id: "td#mon",
                        eq: 11,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "12:00") {
                    $("td#mon").eq(12).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('mon12', JSON.stringify({
                        id: "td#mon",
                        eq: 12,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

            }
            //Tuesday
            if ($scope.clicked.target.id == "tue") {
                if ($scope.fromTime == "00:00") {
                    $("td#tue").eq(0).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue00', JSON.stringify({
                        id: "td#tue",
                        eq: 0,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

                if ($scope.fromTime == "01:00") {
                    $("td#tue").eq(1).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue01', JSON.stringify({
                        id: "td#tue",
                        eq: 1,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "02:00") {
                    $("td#tue").eq(2).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue02', JSON.stringify({
                        id: "td#tue",
                        eq: 2,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "03:00") {
                    $("td#tue").eq(3).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue03', JSON.stringify({
                        id: "td#tue",
                        eq: 3,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "04:00") {
                    $("td#tue").eq(4).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue04', JSON.stringify({
                        id: "td#tue",
                        eq: 4,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "05:00") {
                    $("td#tue").eq(5).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue05', JSON.stringify({
                        id: "td#tue",
                        eq: 5,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "06:00") {
                    $("td#tue").eq(6).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue06', JSON.stringify({
                        id: "td#tue",
                        eq: 6,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "07:00") {
                    $("td#tue").eq(7).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue07', JSON.stringify({
                        id: "td#tue",
                        eq: 7,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "08:00") {
                    $("td#tue").eq(8).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue08', JSON.stringify({
                        id: "td#tue",
                        eq: 8,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "09:00") {
                    $("td#tue").eq(9).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue09', JSON.stringify({
                        id: "td#tue",
                        eq: 9,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "10:00") {
                    $("td#tue").eq(10).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue10', JSON.stringify({
                        id: "td#tue",
                        eq: 10,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "11:00") {
                    $("td#tue").eq(11).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue11', JSON.stringify({
                        id: "td#tue",
                        eq: 11,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "12:00") {
                    $("td#tue").eq(12).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('tue12', JSON.stringify({
                        id: "td#tue",
                        eq: 12,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

            }
            //Wednesday
            if ($scope.clicked.target.id == "wed") {
                if ($scope.fromTime == "00:00") {
                    $("td#wed").eq(0).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed00', JSON.stringify({
                        id: "td#wed",
                        eq: 0,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

                if ($scope.fromTime == "01:00") {
                    $("td#wed").eq(1).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed01', JSON.stringify({
                        id: "td#wed",
                        eq: 1,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "02:00") {
                    $("td#wed").eq(2).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed02', JSON.stringify({
                        id: "td#wed",
                        eq: 2,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "03:00") {
                    $("td#wed").eq(3).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed03', JSON.stringify({
                        id: "td#wed",
                        eq: 3,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "04:00") {
                    $("td#wed").eq(4).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed04', JSON.stringify({
                        id: "td#wed",
                        eq: 4,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "05:00") {
                    $("td#wed").eq(5).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed05', JSON.stringify({
                        id: "td#wed",
                        eq: 5,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "06:00") {
                    $("td#wed").eq(6).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed06', JSON.stringify({
                        id: "td#wed",
                        eq: 6,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "07:00") {
                    $("td#wed").eq(7).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed07', JSON.stringify({
                        id: "td#wed",
                        eq: 7,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "08:00") {
                    $("td#wed").eq(8).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed08', JSON.stringify({
                        id: "td#wed",
                        eq: 8,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "09:00") {
                    $("td#wed").eq(9).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed09', JSON.stringify({
                        id: "td#wed",
                        eq: 9,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "10:00") {
                    $("td#wed").eq(10).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed10', JSON.stringify({
                        id: "td#wed",
                        eq: 10,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "11:00") {
                    $("td#wed").eq(11).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed11', JSON.stringify({
                        id: "td#wed",
                        eq: 11,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "12:00") {
                    $("td#wed").eq(12).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('wed12', JSON.stringify({
                        id: "td#wed",
                        eq: 12,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

            }
            //Thursday
            if ($scope.clicked.target.id == "thu") {
                if ($scope.fromTime == "00:00") {
                    $("td#thu").eq(0).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu00', JSON.stringify({
                        id: "td#thu",
                        eq: 0,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

                if ($scope.fromTime == "01:00") {
                    $("td#thu").eq(1).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu01', JSON.stringify({
                        id: "td#thu",
                        eq: 1,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "02:00") {
                    $("td#thu").eq(2).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu02', JSON.stringify({
                        id: "td#thu",
                        eq: 2,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "03:00") {
                    $("td#thu").eq(3).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu03', JSON.stringify({
                        id: "td#thu",
                        eq: 3,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "04:00") {
                    $("td#thu").eq(4).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu04', JSON.stringify({
                        id: "td#thu",
                        eq: 4,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "05:00") {
                    $("td#thu").eq(5).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu05', JSON.stringify({
                        id: "td#thu",
                        eq: 5,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "06:00") {
                    $("td#thu").eq(6).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu06', JSON.stringify({
                        id: "td#thu",
                        eq: 6,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "07:00") {
                    $("td#thu").eq(7).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu07', JSON.stringify({
                        id: "td#thu",
                        eq: 7,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "08:00") {
                    $("td#thu").eq(8).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu08', JSON.stringify({
                        id: "td#thu",
                        eq: 8,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "09:00") {
                    $("td#thu").eq(9).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu09', JSON.stringify({
                        id: "td#thu",
                        eq: 9,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "10:00") {
                    $("td#thu").eq(10).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu10', JSON.stringify({
                        id: "td#thu",
                        eq: 10,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "11:00") {
                    $("td#thu").eq(11).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu11', JSON.stringify({
                        id: "td#thu",
                        eq: 11,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "12:00") {
                    $("td#thu").eq(12).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('thu12', JSON.stringify({
                        id: "td#thu",
                        eq: 12,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

            }
            //Friday
            if ($scope.clicked.target.id == "fri") {
                if ($scope.fromTime == "00:00") {
                    $("td#fri").eq(0).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri00', JSON.stringify({
                        id: "td#fri",
                        eq: 0,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

                if ($scope.fromTime == "01:00") {
                    $("td#fri").eq(1).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri01', JSON.stringify({
                        id: "td#fri",
                        eq: 1,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "02:00") {
                    $("td#fri").eq(2).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri02', JSON.stringify({
                        id: "td#fri",
                        eq: 2,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "03:00") {
                    $("td#fri").eq(3).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri03', JSON.stringify({
                        id: "td#fri",
                        eq: 3,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "04:00") {
                    $("td#fri").eq(4).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri04', JSON.stringify({
                        id: "td#fri",
                        eq: 4,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "05:00") {
                    $("td#fri").eq(5).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri05', JSON.stringify({
                        id: "td#fri",
                        eq: 5,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "06:00") {
                    $("td#fri").eq(6).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri06', JSON.stringify({
                        id: "td#fri",
                        eq: 6,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "07:00") {
                    $("td#fri").eq(7).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri07', JSON.stringify({
                        id: "td#fri",
                        eq: 7,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "08:00") {
                    $("td#fri").eq(8).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri08', JSON.stringify({
                        id: "td#fri",
                        eq: 8,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "09:00") {
                    $("td#fri").eq(9).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri09', JSON.stringify({
                        id: "td#fri",
                        eq: 9,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "10:00") {
                    $("td#fri").eq(10).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri10', JSON.stringify({
                        id: "td#fri",
                        eq: 10,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "11:00") {
                    $("td#fri").eq(11).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri11', JSON.stringify({
                        id: "td#fri",
                        eq: 11,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "12:00") {
                    $("td#fri").eq(12).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('fri12', JSON.stringify({
                        id: "td#fri",
                        eq: 12,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

            }
            //Saturday
            if ($scope.clicked.target.id == "sat") {
                if ($scope.fromTime == "00:00") {
                    $("td#sat").eq(0).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat00', JSON.stringify({
                        id: "td#sat",
                        eq: 0,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

                if ($scope.fromTime == "01:00") {
                    $("td#sat").eq(1).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat01', JSON.stringify({
                        id: "td#sat",
                        eq: 1,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "02:00") {
                    $("td#sat").eq(2).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat02', JSON.stringify({
                        id: "td#sat",
                        eq: 2,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "03:00") {
                    $("td#sat").eq(3).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat03', JSON.stringify({
                        id: "td#sat",
                        eq: 3,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "04:00") {
                    $("td#sat").eq(4).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat04', JSON.stringify({
                        id: "td#sat",
                        eq: 4,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "05:00") {
                    $("td#sat").eq(5).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat05', JSON.stringify({
                        id: "td#sat",
                        eq: 5,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "06:00") {
                    $("td#sat").eq(6).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat06', JSON.stringify({
                        id: "td#sat",
                        eq: 6,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "07:00") {
                    $("td#sat").eq(7).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat07', JSON.stringify({
                        id: "td#sat",
                        eq: 7,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "08:00") {
                    $("td#sat").eq(8).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat08', JSON.stringify({
                        id: "td#sat",
                        eq: 8,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "09:00") {
                    $("td#sat").eq(9).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat09', JSON.stringify({
                        id: "td#sat",
                        eq: 9,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "10:00") {
                    $("td#sat").eq(10).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat10', JSON.stringify({
                        id: "td#sat",
                        eq: 10,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "11:00") {
                    $("td#sat").eq(11).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat11', JSON.stringify({
                        id: "td#sat",
                        eq: 11,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "12:00") {
                    $("td#sat").eq(12).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sat12', JSON.stringify({
                        id: "td#sat",
                        eq: 12,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

            }
            //Sunday
            if ($scope.clicked.target.id == "sun") {
                if ($scope.fromTime == "00:00") {
                    $("td#sun").eq(0).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun00', JSON.stringify({
                        id: "td#sun",
                        eq: 0,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

                if ($scope.fromTime == "01:00") {
                    $("td#sun").eq(1).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun01', JSON.stringify({
                        id: "td#sun",
                        eq: 1,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "02:00") {
                    $("td#sun").eq(2).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun02', JSON.stringify({
                        id: "td#sun",
                        eq: 2,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "03:00") {
                    $("td#sun").eq(3).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun03', JSON.stringify({
                        id: "td#sun",
                        eq: 3,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "04:00") {
                    $("td#sun").eq(4).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun04', JSON.stringify({
                        id: "td#sun",
                        eq: 4,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "05:00") {
                    $("td#sun").eq(5).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun05', JSON.stringify({
                        id: "td#sun",
                        eq: 5,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "06:00") {
                    $("td#sun").eq(6).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun06', JSON.stringify({
                        id: "td#sun",
                        eq: 6,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "07:00") {
                    $("td#sun").eq(7).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun07', JSON.stringify({
                        id: "td#sun",
                        eq: 7,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "08:00") {
                    $("td#sun").eq(8).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun08', JSON.stringify({
                        id: "td#sun",
                        eq: 8,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "09:00") {
                    $("td#sun").eq(9).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun09', JSON.stringify({
                        id: "td#sun",
                        eq: 9,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "10:00") {
                    $("td#sun").eq(10).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun10', JSON.stringify({
                        id: "td#sun",
                        eq: 10,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "11:00") {
                    $("td#sun").eq(11).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun11', JSON.stringify({
                        id: "td#sun",
                        eq: 11,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }
                if ($scope.fromTime == "12:00") {
                    $("td#sun").eq(12).removeClass("free").addClass("buzy").text($scope.name);
                    localStorage.setItem('sun12', JSON.stringify({
                        id: "td#sun",
                        eq: 12,
                        from: $scope.fromTime,
                        name: $scope.name,
                        comment: $scope.comment,
                    }));
                }

            }


        } //End of addEditFunc
    

    //Add Event
        $("#addEvent").submit(function (e) {
            $scope.addEditFunc();
            e.preventDefault();
        });

    //Edit Event
        $("#editEvent").submit(function (e) {
            $scope.addEditFunc();
            e.preventDefault();
        });

})