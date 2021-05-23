  $(document).ready(function () {

      $(".menu > ul > li").mouseover(function () {
          $(".menu > ul > li > ul").stop().slideDown(200);
          $(".menu-bg").stop().slideDown(200);
      });
      $(".menu > ul > li").mouseout(function () {
          $(".menu > ul > li > ul").stop().slideUp(100);
          $(".menu-bg").stop().slideUp(200);
      });
  });