$(document).ready(function () {
    $(".search-icon").click(function () {
        $(".minisearch").addClass('active-two');
        $(".search-icon").hide()
        $(".times-icon").show()
    });

    $(".times-icon").click(function () {
        $(".search-icon").show()
        $(".times-icon").hide()
        $(".minisearch").removeClass('active-two');
    });



    $(".bars-icon").click(function () {
        $(".menu-open").addClass("menu-active")
        $(".times-menu-icon").show()
        $(".bars-icon").hide()
    })

    $(".times-menu-icon").click(function () {
        $(".menu-open").removeClass("menu-active")
        $(".times-menu-icon").hide()
        $(".bars-icon").show()
    })


    $(".menu-item-parent").click(function(){
        $(this).siblings().find(".sub-menu").slideUp();
        $(this).find(".sub-menu").slideToggle();
      })


      $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("header").addClass("header-active")
            $(".desk-menu .m-item").css({color:"black"})
            $(".special-item").css({color:"#e7272d", borderColor:"transparent"})
            $(".fixed-logo").css({display:"block",  width:"132px"})
            $(".logo").css({display:"none"})
            $(".minisearch").css({top:"43px"})
            $(".menu-item-child").css({top:"43px"})
            $(".bars-icon, .times-menu-icon").css({color:"black"})
            // $(".mobile-menu .menu-item-parent a").css({color:"black"})   
                $(".menu-open").css({top:"82px"})

        } else {
            $("header").removeClass("header-active")
            $(".desk-menu .m-item").css({color:"white"})
            $(".special-item").css({color:"white", borderColor:"white"})
            $(".fixed-logo").css({display:"none"})
            $(".logo").css({display:"block"})
            $(".minisearch").css({top:"54px"})
            $(".menu-item-child").css({top:"54px"})
            $(".bars-icon, .times-menu-icon").css({color:"white"})
            // $(".mobile-menu .menu-item-parent a").css({color:"black"})
            $(".menu-open").css({top:"94px"})
        }
    })  

});