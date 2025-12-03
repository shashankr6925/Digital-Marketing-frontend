function page1Animation() {
    var t1 = gsap.timeline()

    t1.from("nav h1 , nav h4 , nav button", {
        y: -30,
        duration: 0.7,
        delay: 0.4,
        opacity: 0,
        stagger: 0.14
    })

    t1.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    }, "-=0.3")

    t1.from(".center-part1 p", {
        x: -500,
        opacity: 0,
        duration: 0.4,
    })

    t1.from(".center-part1 button", {
        x: -100,
        opacity: 0,
        duration: 0.4
    })

    t1.from(".img1", {
        opacity: 0,
        y: -200,
        duration: 0.5
    }, "-=0.7")

    t1.from(".section1bottom img", {
        opacity: 0,
        y: 34,
        stagger: 0.19,
        duration: 0.4
    })


}
function page2Animation() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 0",
            scrub: 2
        }
    })

    t2.from(".services", {
        y: 50,
        opacity: 0,
        duration: 0.5
    })

    t2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim1")

    t2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim1")

    t2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim2")

    t2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim2")
}
function page3Animation() {
    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 0%",
            scrub: 2
        }
    })

    t3.from(".section3 .container2", {
        scale: 0.1,
        opacity: 0,
        duration: 2,
        delay: 3,
        ease: "power1.out",
    })

    t3.from(".container2 h3", {
        scale: 0.9,
        opacity: 0.2,
        duration: 1,
        delay: 1
    })

    t3.from(".container2 p", {
        scale: 0.9,
        opacity: 0.2,
        duration: 0.5
    })

    t3.from(".container2 img", {
        scale: 0.9,
        opacity: 0.2,
        duration: 0.5
    })

    t3.from(".container2 button", {
        scale: 0.2,
        rotate: 360,
        opacity: 0,
        duration: 5,
        delay: 0.8
    })

    t3.from(".container3", {
        x: -300,
        opacity: 0,
        duration: 1,
        delay: 1
    })

    // t3.from(".container3 h3",{
    //     opacity:0,
    //     duration:0.9,
    //     y:-100
    // })

    t3.from(".container3 p", {
        opacity: 0,
        duration: 0.9,
        y: -50
    })

    t3.from(".container4", {
        y: 600,
        opacity: 0,
        duration: 7,
        delay: 0.5,
        ease: "back.out",


    })

    t3.from(".container4 .cont4-p", {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "back.out",
        delay: 1
    })
}
page1Animation()
page2Animation()
page3Animation()