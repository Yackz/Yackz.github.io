$(document).ready(function() 
{
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        var x = "";
        response.forEach(element => {
            x+="<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.lastname+"</td>"+
            "<td>"+element.gender+"</td>"+
            "<td>"+element.position+"</td>"+
            "<td>"+element.number+"</td>"+
            "<td>"+element.country+"</td>";
            $('#table-item').html(x);
        });
    });

    $('#submit-btn').click(function() {
        $.ajax({
            url: "data.json",
            dataType: "json"
        }).done(function(response) {
            var t= "";
            response.forEach(element => {
                if(element.name.toLowerCase().includes($('#input-text').val().toLowerCase()) ||
                element.lastname.toLowerCase().includes($('#input-text').val().toLowerCase()) 
                ){
                    t += "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.lastname+"</td>"+
                    "<td>"+element.gender+"</td>"+
                    "<td>"+element.position+"</td>"+
                    "<td>"+element.number+"</td>"+
                    "<td>"+element.country+"</td>";
                    $('#table-item').html(t);
                }
            });
        });
    });

    $('#advanced-btn').click(function() {
        $('#checkboxes').show();
    });
    // $('#advance-btn').hide();
    $('#reset-btn').click(function() {
        location.reload();
    });

    $('#gender-btn').click(function() {
        $.ajax({
            url: "data.json",
            dataType: "json"
        }).done(function(response) {
            var t= "";
            response.forEach(element => {
                if(element.gender.toLowerCase().includes($('#input-text').val().toLowerCase())){
                    t += "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.lastname+"</td>"+
                    "<td>"+element.gender+"</td>"+
                    "<td>"+element.position+"</td>"+
                    "<td>"+element.number+"</td>"+
                    "<td>"+element.country+"</td>";
                    $('#table-item').html(t);
                }
            });
        });
    });
    $('#position-btn').click(function() {
        $.ajax({
            url: "data.json",
            dataType: "json"
        }).done(function(response) {
            var t= "";
            response.forEach(element => {
                if(element.position.toLowerCase().includes($('#input-text').val().toLowerCase())){
                    t += "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.lastname+"</td>"+
                    "<td>"+element.gender+"</td>"+
                    "<td>"+element.position+"</td>"+
                    "<td>"+element.number+"</td>"+
                    "<td>"+element.country+"</td>";
                    $('#table-item').html(t);
                }
            });
        });
    });
    $('#number-btn').click(function() {
        $.ajax({
            url: "data.json",
            dataType: "json"
        }).done(function(response) {
            var t= "";
            response.forEach(element => {
                if(element.number.toLowerCase().includes($('#input-text').val().toLowerCase())){
                    t += "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.lastname+"</td>"+
                    "<td>"+element.gender+"</td>"+
                    "<td>"+element.position+"</td>"+
                    "<td>"+element.number+"</td>"+
                    "<td>"+element.country+"</td>";
                    $('#table-item').html(t);
                }
            });
        });
    });
    $('#country-btn').click(function() {
        $.ajax({
            url: "data.json",
            dataType: "json"
        }).done(function(response) {
            var t= "";
            response.forEach(element => {
                if(element.country.toLowerCase().includes($('#input-text').val().toLowerCase())){
                    t += "<tr>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.lastname+"</td>"+
                    "<td>"+element.gender+"</td>"+
                    "<td>"+element.position+"</td>"+
                    "<td>"+element.number+"</td>"+
                    "<td>"+element.country+"</td>";
                    $('#table-item').html(t);
                }
            });
        });
    });
});