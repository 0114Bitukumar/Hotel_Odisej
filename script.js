var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var scrool=gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
   
  var tl=gsap.timeline()
  
  tl.from("#page1 svg",{
    y:-40,
    opacity:0,
    delay:0.3,
    duration:0.5,
  
  })
  
  tl.from("#page1 img",{
      scale:0.5,
      delay:-0.1,
      duration:0.6,
      ease: Power1.easeOut,
        
    })
  tl.from("#nav",{
      y:-50,
      opacity:0,
      delay:-0.4,
      duration:0.5,
  })
  var h2Data = document.querySelectorAll("#page2 h2");
  h2Data.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to("#page2 h2 span", {
    color: "#E3E3C4",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2 h2 span",
      scroller: "#main",
     
      scrub:3,
    },
  });
  
  gsap.to("#page2 #svg2,#page2 #svg3", {
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page2 #svg2",
      scroller: "#main",
  
      /* markers: true, */
      scrub: 2,
    },
  });
  var h2Data = document.querySelectorAll("#page3 #text h1");
  h2Data.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to("#page3 h1 span", {
    color:"#434B34",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page3 h1 span",
      scroller: "#main",
     
      scrub:3,
    },
  });
  gsap.to("#page3 i",{
    x:-15,
    duration:4,
    delay:2,
  
  })
  gsap.to("#page3 #img1,#page3 #img2,#page3 #img3",{
    y:30,
    duration:3,
    staggers:0.2,
    opacity:1,
    scrollTrigger:{
      trigger:"#page3 #img1,#page3 #img2,#page3 #img3",
      /* markers:true, */
      scroller:"#main",
      scrub:3,
      start:"top 50%",
      end:"top 85%",
  
    }
  
  })
  
  gsap.to("#page6 #svgg1,#page6 #svgg2",{
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page6 #svgg2",
      scroller: "#main",
  
      /* markers: true,*/
      scrub: 2,
    },
  });
  var h2Data = document.querySelectorAll("#page6 #text1 h1");
  h2Data.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to("#page6 h1 span", {
    color:"white",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page6 h1 span",
      scroller: "#main",
     
      scrub:3,
    },
  });

  gsap.to("#page6 img",{
    y:-40,
    duration:1,
    delay:1,
    scrollTrigger:{
      trigger:"#page6",
      scroller:"#main",
      scrub:2,
      start:"top 20%",
      end:"top 90%"
    }

  })
  gsap.to("#page6 #svgg3,#page6 #svgg4",{
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page6 #svgg4",
      scroller: "#main",
  
      /* markers: true,*/
      scrub: 2,
    },
  });
  var h2Data = document.querySelectorAll("#page7 #text2 h1");
  h2Data.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to("#page7 h1 span", {
    color:"#5B6647",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page7 h1 span",
      scroller: "#main",
     
      scrub:3,
    },
  });
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page7-1",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:3
  
    }
  });
  
  tl2.to("#page7-1-left",{
    transform:"translateX(-50%)",
    duration:0.5,
  },"page7-1-anim");
  
  tl2.to("#page7-1-center",{
    transform:"translateY(10%)",
    duration:1,
    // opacity:0,
  
    },"page7-1-anim");
  
  tl2.to("#page7-1-right",{
    transform:"translateX(50%)",
    duration:1,
    
  
    },"page7-1-anim");

gsap.to("#page9 #svggg2,#page9 #svggg3",{
    left: "-100vw",
    scrollTrigger: {
      trigger: "#page9 #svggg3",
      scroller: "#main",
  
      /* markers: true,*/
      scrub: 2,
    },
  });
  var h2Data = document.querySelectorAll("#page9 h1");
  h2Data.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to("#page9 h1 span", {
    color: "#E3E3C4",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page9 h1 span",
      scroller: "#main",
     
      scrub:3,
    },
  });
  gsap.to("#page9 h2",{
    y:-20,
    color:"white",
    opacity:0,
    scrollTrigger:{
      trigger:"#page9 h2",
      scroller:"#main",
      scrub:2,
    }
  })

  var h2Data = document.querySelectorAll("#page10 h1");
  h2Data.forEach(function (elem) {
    var textData = elem.textContent;
    var splitedText = textData.split("");
    var clutter = "";
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to("#page10 h1 span", {
    color: "#434B34",
  
    scrollTrigger: {
      trigger: "#page10 h1 span",
      scroller: "#main",
     
      scrub:3,
    },
  }); 
  gsap.to("#page9 h2",{
    y:-40,
    color:"white",
    opacity:0,
    scrollTrigger:{
      trigger:"#page9 h2",
      scroller:"#main",
      scrub:5,
    }
  })