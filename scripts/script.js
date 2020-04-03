$(document).ready(function(){                    //Get ready DOM
    
    $(document).scroll(function(){              //On scroll action button beheaviour
        if($('html').scrollTop() > 1000 ){      //Check if we 1000 px from the top
            $('p:last-child').css({             //On last child of paragraph action opacity and scale
                'transform': 'scale(1)',        //Prevent clicking on invisible element, make element very small
                'opacity':1
            });
        }else{                                  //If scrolling on top, hide button
            $('p:last-child').css({
                'opacity':0,
                'transform': 'scale(0)'
            });
        };
    });
    
    $('p:last-child').click(function(){         //On click of button scroll to the top
        $('html').animate({scrollTop:0},1000);  //Create smooth scroling to the top
    });
})