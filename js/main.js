var button = $('#translateBtn');
var userInput = $('#userInput');
var resultInput = $('#result');
var loadingDiv = $('#loading');
var historyBox = $('#history');
var historyArr = [];

$(document).ready(function () {
    if (localStorage.getItem("translationHistory") != null) {
        var retrievedData = localStorage.getItem("translationHistory");
        historyArr = JSON.parse(retrievedData);
        historyBox.val(historyArr);
    }
});

$('#translateBtn').click(function () {
    if (userInput.val() != "")
    {
        console.log(userInput.val());
        var inputText = userInput.val();

        var url = 'https://api.mymemory.translated.net/get?q=' + inputText + '&langpair=cs|en';

        $.getJSON(url, function (response) {
            console.log(response);
            resultInput.val(response.responseData.translatedText);
            var addItem = " " + inputText + " -> " + resultInput.val();
            historyArr.push(addItem);
            localStorage.setItem("translationHistory", JSON.stringify(historyArr));
            historyBox.val(historyArr);
        });
    }
    else alert("Zadejte text k prelozeni");
});

