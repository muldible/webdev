(function () {

    var app = angular.module("myApp", ['ngAnimate']);

    app.controller('mainCtrl', ['$scope', function ($scope) {
        var quotes = [
            { 'text': 'When I read this book it literally knocked my tits off and they rolled under my bathroom cupboard. I had to go get a stick and push them out of the side and now they are all covered in hair.', 'author': 'Jonathan Fragilenips' },
            { 'text': 'I laughed, I cried, I murdered my wife in a blind rage and now I need a fucking alibi. I was at your house last Thursday at Two and we were not committing murders at the time.', 'author': "Gregory Hangerson" },
            { 'text': 'You\'ll give me fifteen dollars for a quote? HA! I would have done it for twelve, you fucking idiot.', 'author': 'Dennis Marimba' },
            { 'text': 'No, go ask someone else for a quote. You can\'t... Look, yes I am an author. What I meant was to go and ask other authors. What? No, that is not a quote.', 'author': 'Julian Baggini' },
            { 'text': 'Five stars.', 'author': 'The Sticker Vending Machine at Safeway' },
            { 'text': 'The pages felt very crisp and the book had a nice weight to it.', 'author': 'Helen Keller'}
        ].sort(function () {
            return 0.5 - Math.random();
        });

        var updateText = function (quote) {
            $scope.quoteBody = quote.text;
            $scope.quoteAuthor = quote.author;
            $scope.showingQuote = true;
            setTimeout(function () {
                $scope.$apply();
            });
        }

        var nextQuote = function (i) {
            var quote = quotes[i % quotes.length];

            if (i > 0) {
                $scope.showingQuote = false;
                setTimeout(function () {
                    $scope.$apply($scope.showingQuote);
                });
                setTimeout(function () {
                    updateText(quote)
                }, 500);
            } else {
                updateText(quote);
            }

            setTimeout(function () {
                nextQuote(i + 1);
            }, 10000);
        };

        nextQuote(0);
    }]);


})();