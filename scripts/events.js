$(function() {
    $("button")
        .click(function() {
            alert("The button has been clicked!");
        });
    
    $("button")
        .bind("click", function() {
            alert("The button has been clicked!");
        });
                    
    $("body")
        .on("click", function() {
            alert("The button has been clicked!");
        });
    
    $("body")
        .on("click", "button", function() {
            alert("The button has been clicked!");
        });
    
    $("div")
        .css("width", "400px")
        .css("height", "400px")
        .css("background", "silver");
    
    $("body")
        .on("click mouseenter mouseleave", "div", function() {
        alert("The div was either clicked, entered, or left!");
    });
    
    $("span")
        .css("display", "block")
        .css("width", "200px")
        .css("height", "200px")
        .css("background", "silver");
    
    $("body").on({
        click: function() {
            alert("The span was clicked!");
        },
        mouseenter: function() {
            alert("The span was moused into!");
        },
        mouseleave: function() {
            alert("You left the span tag!");
        }
    }, "span");
    
    
    
    $("body")
        .on("click", "a", function(event) {
        event.preventDefault();
    
        $("a")
        .css("color", "red");
        alert(event.target.nodeName);
    });
    
    
    $(window)
        .resize(function() {
        $("div")
            .text($(window).width());
    });

    
    $("input")
        .on({
            focus: function() {
                $(this).css("background", "#EDEDED");
            },
            blur: function() {
                $(this).css("background", "#FFFFFF");
            }
    });
    
    
    
    $("body").on({
        submit: function(event) {
            event.preventDefault();
            if ($("#name").val().length > 0) {
                $("#name").css("border", "1px solid green");
            } else {
                $("#name").css("border", "1px solid red");
            }
            if ($("#email").val().length > 0) {
                $("#email").css("border", "1px solid green");
            } else {
                $("#email").css("border", "1px solid red");
            }
        }
    }, "form");
    
});