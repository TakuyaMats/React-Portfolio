(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{48:function(n,e,t){"use strict";t.r(e);var r,i=t(1),a=t(27),o=t.n(a),c=t(15),s=t(4),l=t(10),d=t(5),m=t(14),b=t(0),p=d.b.nav(r||(r=Object(s.a)(["\n    position: fixed;\n    z-index: 100;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 1rem 0;\n    background: var(--dark-bg);\n    ul {\n        max-width: 1200px;\n        margin: 0 auto;\n        width: 90%;\n        text-align: center;\n        li {\n            display: inline-block;\n            border-radius: 8px;\n            transition: .3s ease background-color;\n            &:hover {\n                background-color: var(--deep-dark);\n            }\n        }\n        a  { \n            display: inline-block;\n            font-family: 'Roboto Mono', monospace;\n            padding: 1rem 2rem;\n            font-size: 2rem;\n            color: var(--gray-1);\n            outline: none;\n        }\n        .active{\n            color: var(--white);\n        }\n    }\n    .mobile-menu-icon{\n        position: absolute;\n        right: 1rem;\n        top: 1rem;\n        width: 4rem;\n        cursor: pointer;\n        display: none;\n        outline: none;\n        * {\n            pointer-events: none;\n        }\n    }\n    .navItems .closeNavIcon{\n        display: none;\n    }\n    @media only screen and (max-width: 768px){\n        padding: 0;\n        .hide-item{\n            transform: translateY(calc(-100% - var(--top)));\n        }\n        .mobile-menu-icon {\n            display: block;\n        }\n        .navItems{\n            --top: 1rem;\n            transition: .3s ease transform;\n            background-color: var(--deep-dark);\n            padding: 2rem;\n            width: 90%;\n            max-width: 300px;\n            border-radius: 12px;\n            position: absolute;\n            right: 1rem;\n            top: var(--top);\n            .closeNavIcon{\n                display: block;\n                width: 3rem;\n                margin: 0 0 0 auto;\n                cursor: pointer;\n                * {\n                    pointer-events: none;\n                }\n            }\n            li{\n                display: block;\n                margin-bottom: 1rem;\n            }\n        }\n    }\n"])));var h,j=function(){var n=Object(i.useState)(!1),e=Object(c.a)(n,2),t=e[0],r=e[1];return Object(b.jsxs)(p,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(b.jsx)(m.d,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(b.jsx)(m.a,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/about",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/projects",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/contact",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Contact"})})]})]})},g=t(8),u=t.p+"static/media/Hero.78b08b99.jpeg",x=d.b.div(h||(h=Object(s.a)(["\n    max-width: 500px;\n    margin: 0 auto;\n    font-size: 1.8rem;\n    line-height: 1.8rem;\n    @media only screen and (max-width: 768px) {\n        font-size: 1.4rem;\n    }\n"])));var f,_=function(n){var e=n.children;return Object(b.jsx)(x,{className:"para",children:Object(b.jsx)("p",{children:e})})},v=d.b.div(f||(f=Object(s.a)(["\n    margin-top: 2rem;\n    .button{\n        font-size: 2.2rem;\n        background-color: ",";\n        padding: 0.7rem 2em;\n        border-radius: 8px;\n        display: inline-block;\n        border: 2px solid var(--gray-1);\n        color: ","\n    }\n    @media only screen and (max-width: 768px) {\n        .button {\n            font-size: 1.8rem;\n        }\n    }\n"])),(function(n){return n.outline?"transparent":"var(--gray-1)"}),(function(n){return n.outline?"var(--gray-1)":"black"}));var O,w=function(n){var e=n.btnLink,t=void 0===e?"test":e,r=n.btnText,i=void 0===r?"Test":r,a=n.outline,o=void 0!==a&&a;return Object(b.jsx)(v,{outline:o,className:"button-wrapper",children:Object(b.jsx)(l.b,{className:"button",to:t,children:i})})},y=t.p+"static/media/social-media-arrow.f5e093ce.svg",k=t.p+"static/media/scroll-down-arrow.b013ca45.svg",N=d.b.div(O||(O=Object(s.a)(['\n    background-color: var(--dark-bg);\n    .hero {\n        height: 100vh;\n        min-height: 1000px;\n        width: 100%;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n    }\n    .hero__heading {\n        font-size: 2rem;\n        margin-bottom: -4rem;\n        position: relative;\n        span {\n            display: inline-block;\n            width: 100%;\n        }\n        .hero__name {\n            font-size: 7rem;\n            font-family: "Montserrat SemiBold";\n            color: var(--white);\n        }\n    }\n    .hero__img {\n        max-width: 900px;\n        width: 100%;\n        height: 800px;\n        margin: 0 auto;\n        border: 2px solid var(--gray-1);\n    }\n    .hero__info {\n        margin-top: -28rem;\n    }\n    .hero__social,\n    .hero__scrollDown {\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n        position: absolute;\n        bottom: 20px;\n        width: 50px;\n    }\n    .hero__social {\n        left: 50px;\n    }\n    .hero__scrollDown {\n        right: 50px;\n    }\n    .hero__social__indicator,\n    .hero__scrollDown {\n        width: 50px;\n        p {\n            font-size: 1.6rem\n            transform: translateY(-70px) rotate(90deg);\n            transform: rotate(-90deg);\n            letter-spacing: 0.7rem;\n            text-transform: uppercase;\n        }\n        img {\n            max-height: 45px;\n            width: 16px;\n            margin: 0 auto;\n            object-fit: contain;\n        }\n    }\n    .hero__scrollDown {\n        img {\n            max-height: 70px;\n        }\n    }\n    .hero__social__text {\n        ul {\n            li {\n                margin-bottom: 1rem;\n            }\n            a {\n                display: inline-block;\n                font-size: 1.6rem;\n                transform: rotate(-90deg);\n                letter-spacing: 5px;\n                margin-bottom: 2rem;\n            }\n        }\n    }\n    @media only screen and (max-width: 768px) {\n        .hero {\n            min-height: 750px;\n        }\n        .hero__heading {\n            font-size: 1.4rem;\n            margin-bottom: -3rem;\n            .hero__name {\n                font-size: 4.5rem;\n            }\n        }\n        .hero__img {\n            height: 300px;\n        }\n        .hero__info {\n            margin-top: 3rem;\n        }\n        .hero__social {\n            left: 0px;\n            bottom: -15%;\n            width: 20px;\n            .hero__social__indicator {\n                width: 20px;\n                p {\n                    font-size: 1.2rem;\n                }\n                img {\n                    max-height: 22px;\n                }\n            }\n            .hero__social__text {\n                ul {\n                    li {\n                        a {\n                            font-size: 1.2rem;\n                            margin-bottom: 1rem;\n                        }\n                    }\n                }\n            }\n        }\n        .hero__scrollDown {\n            right: 0;\n            width: 20px;\n            gap: 1rem;\n            p {\n                font-size: 1.3rem;\n            }\n        }\n    }\n'])));var S,z=function(){return Object(b.jsx)(N,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, This is"}),Object(b.jsx)("span",{className:"hero__name",children:"Takuya Matsumoto"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:u,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(_,{className:"hero__info__text",children:"Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and web development. Strong arts and professional design background with a Certificate in Computer Software Engineering from Rutgers University\u2013New Brunswick. Strengths in creativity, teamwork, and building projects from ideation to execution."}),Object(b.jsx)(w,{btnLink:"/projects",btnText:"see my works"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:y,alt:""})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsx)("ul",{children:Object(b.jsxs)("li",{children:[Object(b.jsx)("a",{href:"https://www.instagram.com/takuyamats/",target:"_blank",rel:"noreferrer",children:"IG"}),Object(b.jsx)("a",{href:"https://github.com/TakuyaMats",target:"_blank",rel:"noreferrer",children:"GH"}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/takuyamatsumoto90/",target:"_blank",rel:"noreferrer",children:"LI"})]})})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll down"}),Object(b.jsx)("img",{src:k,alt:""})]})]})})})},I=t.p+"static/media/about-me-img.3734d48e.jpg",L=d.b.div(S||(S=Object(s.a)(["\n    background-color: var(--dark-bg);\n    text-align: center;\n    p {\n        font-family: 'Roboto Mono', monospace;\n        font-size: 2rem;\n    }\n    h2 {\n        font-family: 'Montserrat', sans-serif;\n        font-size: 6rem;\n        margin-top: 0.5rem;\n        text-transform: uppercase;\n    }\n    @media only screen and (max-width: 768px) {\n        p {\n            font-size: 1.2rem;\n        }\n        h2 {\n            font-size: 3.6rem;\n        }\n    }\n"])));var M,C=function(n){var e=n.subheading,t=void 0===e?"This is subheading":e,r=n.heading,i=void 0===r?"This is heading":r;return Object(b.jsxs)(L,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:i})]})},B=d.b.div(M||(M=Object(s.a)(["\n    padding: 10rem 0;\n    .container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        text-align: left;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n        flex: 1;\n    }\n    .section-title {\n        text-align: left;\n    }\n    .para {\n        margin-top: 2rem;\n        margin-left: 0;\n    }\n    .aboutSection__buttons {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        gap: 2rem;\n        margin-top: 2rem;\n    }\n    @media only screen and (max-width: 950px) {\n        .aboutSection__left {\n            flex: 4;\n        }\n        .aboutSection__right {\n            flex: 3;\n        }\n    }\n    @media only screen and (max-width: 768px) {\n        .container {\n            flex-direction: column;\n            text-align: center;\n        }\n        .aboutSection__left,\n        .aboutSection__right {\n            width: 100%;\n        }\n        .aboutSection__right {\n            margin-top: 3rem;\n        }\n        .section-title {\n            text-align: center;\n        }\n        .para {\n            margin: 0 auto;\n            margin-top: 2rem;\n        }\n        .aboutSection__buttons {\n            flex-direction: column;\n            gap: 0;\n            .button-wrapper,\n            a {\n                width: 100%;\n                text-align: center;\n            }\n        }\n    }\n"])));var T,D=function(){return Object(b.jsx)(B,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(C,{subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(_,{children:"Previously a digital technician with experience in the photography industry, with skills in photoshoots, management, and adobe photoshop. I love music and always love sharing new music with my friends."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(w,{btnLink:"/projects",btnText:"Works"}),Object(b.jsx)(w,{btnLink:"about",btnText:"Read More",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{src:I,alt:"about-me-img"})})]})})},E=t(54),P=t(52),R=t(53),F=t(51),H=t(55),A=t.p+"static/media/Fitness-Tracker.94bdc0cf.png",J=t.p+"static/media/Tech-Blog.09018db9.png",Y=t.p+"static/media/employeeTracker.658d3ff6.png",U=t.p+"static/media/pokemon-deck-builder.ee9eb176.png",K=t.p+"static/media/note-taker.8834cdbd.png",G=[{id:Object(H.a)(),name:"Workout Tracker",desc:"An application to view, create and track your daily workouts.",img:A},{id:Object(H.a)(),name:"Tech Blog",desc:"An CMS-style blog application to publish articles, blog posts, and thoughts and opinions.",img:J},{id:Object(H.a)(),name:"Employee Tracker",desc:"Using this app you can view and manage departments, roles, and employees in your company.",img:Y},{id:Object(H.a)(),name:"Pokemon Deck Builder",desc:"A application to look up and trade pokemon cards with your friends.",img:U},{id:Object(H.a)(),name:"Note Taker",desc:"A note-taking application to write and save text in a list.",img:K}],V=t.p+"static/media/projectImg.771236e1.png",W=d.b.div(T||(T=Object(s.a)(["\n    .projectItem__img {\n        width: 100%;;\n        height: 400px;\n        overflow: hidden;\n        border-radius: 12px;\n        display: inline-block;\n        border: 3px solid var(--gray-2);\n        img {\n            height: 100%;\n        }\n    }\n    .projectItem__Info {\n        margin-top: 1rem;\n        background-color: var(--deep-dark);\n        padding: 1rem;\n        border-radius: 12px;\n    }\n    .projectItem__title {\n        font-size: 2.2rem;\n    }\n    .projectItem__desc {\n        font-size: 1.6rem;\n        font-family: 'Roboto Mono', monospace;\n        margin-top: 1rem;\n    }\n    @media only screen and (max-width: 768px) {\n        .projectItem__img {\n            height: 350px;\n        }\n    }\n"])));var Q,q=function(n){var e=n.img,t=void 0===e?V:e,r=n.title,i=void 0===r?"Project Name":r,a=n.desc,o=void 0===a?"lorem ipsum dolor sit amet, consectetur adip":a;return Object(b.jsxs)(W,{children:[Object(b.jsx)(l.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(l.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:i})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})};t(46);R.a.use([F.a]);var X=d.b.div(Q||(Q=Object(s.a)(["\n    padding: 10rem 0;\n    .project__allItems {\n        display: flex;\n        gap: 3rem;\n        margin-top: 5rem;\n    }\n    .swiper-container {\n        padding-top: 8rem;\n        max-width: 100%;\n    }\n    .swiper-button-prev,\n    .swiper-button-next {\n        position: absolute;\n        height: 50px;\n        width: 50px;\n        background-color: var(--deep-dark);\n        z-index: 10;\n        right: 60px;\n        left: auto;\n        top: 50px;\n        transform: translateY(-50%);\n        color: var(--gray-1);\n        border-radius: 8px;\n    }\n    .swiper-button-next {\n        right: 0;\n    }\n    .swiper-button-prev::after,\n    .swiper-button-next::after {\n        font-size: 2rem;\n    }\n    @media only screen and (max-width: 768px) {\n        .projects__allItems {\n            flex-direction: column;\n            max-width: 400px;\n            margin: 0 auto;\n            margin-top: 7rem;\n            gap: 5rem;\n            .projectItem__img {\n                width: 100%;\n            }\n        }\n    }\n"])));var Z,$=function(){return Object(b.jsx)(X,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(C,{heading:"Projects",subheading:"some of my recent works"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(E.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:G.map((function(n,e){if(!(e>=5))return Object(b.jsx)(P.a,{children:Object(b.jsx)(q,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})},nn=d.b.div(Z||(Z=Object(s.a)(["\n    padding: 10rem 0;\n    .contactBanner__wrapper {\n        background-color: var(--deep-dark);\n        border-radius: 12px;\n        padding: 5rem 0rem;\n        text-align: center;\n    }\n    .contactBanner__heading {\n        font-size: 4rem;\n        margin-bottom: 2rem;\n    }\n    @media only screen and (max-width: 768px) {\n        .contactBanner__heading {\n            font-size: 2.8rem;\n        }\n    }\n"])));var en,tn=function(){return Object(b.jsx)(nn,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(_,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(w,{btnText:"Contact Now",btnLink:"/contact"})]})})})},rn=d.b.div(en||(en=Object(s.a)(["\n    background-color: var(--dark-bg);\n"])));var an,on=function(){return Object(b.jsxs)(rn,{children:[Object(b.jsx)(z,{}),Object(b.jsx)(D,{}),Object(b.jsx)($,{}),Object(b.jsx)(tn,{})]})},cn=d.b.div(an||(an=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n    margin-top: 3rem;\n    .title {\n        font-size: 2.4rem;\n    }\n    .items {\n        display: flex;\n        gap: 1.5rem;\n        position: absolute;\n        left: 18rem;\n    }\n    .item {\n        background-color: var(--deep-dark);\n        padding: 1rem;\n        border-radius: 8px;\n    }\n    @media only screen and (max-width: 768px) {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 1rem;\n        .items {\n        position: initial;\n        gap: 1rem;\n        }\n        .title {\n        font-size: 2rem;\n        }\n    }\n"])));var sn,ln=function(n){var e=n.title,t=void 0===e?"Title":e,r=n.items,i=void 0===r?["HTML","CSS"]:r;return Object(b.jsxs)(cn,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:i.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(_,{children:n})},e)}))})]})},dn=t.p+"static/media/about-page-img.2a0268f4.jpeg",mn=t.p+"static/media/resume.e3aedfbf.pdf",bn=d.b.div(sn||(sn=Object(s.a)(["\n    background-color: var(--dark-bg);\n    padding: 20rem 0 10rem 0;\n    .top-section {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 2rem;\n    }\n    .left {\n        flex: 3;\n    }\n    .right {\n        flex: 2;\n    }\n    .about__subheading {\n        font-size: 2.2rem;\n        margin-bottom: 2rem;\n        span {\n            background-color: var(--deep-dark);\n            padding: 0.5rem;\n            border-radius: 8px;\n        }\n    }\n    .about__heading {\n        font-size: 3.6rem;\n        margin-bottom: 3rem;\n    }\n    .about__info {\n        margin-bottom: 4rem;\n        .para {\n            max-width: 100%;\n        }\n    }\n    .about__info__items {\n        margin-top: 15rem;\n    }\n    .about__info__item {\n        margin-bottom: 10rem;\n    }\n    .about__info__heading {\n        font-size: 3.6rem;\n        text-transform: uppercase;\n    }\n    .resume {\n        margin-top: 2rem;\n        font-size: 2.2rem;\n        background-color: ",";\n        padding: 0.7rem 2em;\n        border-radius: 8px;\n        display: inline-block;\n        border: 2px solid var(--gray-1);\n        color: ","\n    }\n    .resume a {\n        color: var(--black);\n    }\n    @media only screen and (max-width: 768px) {\n        padding: 10rem 0;\n        .resume {\n            font-size: 1.8rem;\n        }\n        .top-section {\n            flex-direction: column;\n            gap: 5rem;\n        }\n        .about__subheading {\n            font-size: 1.8rem;\n        }\n        .about__heading {\n            font-size: 2.8rem;\n        }\n        .about__info__heading {\n            font-size: 3rem;\n        }\n    }\n"])),(function(n){return n.outline?"transparent":"var(--gray-1)"}),(function(n){return n.outline?"var(--gray-1)":"black"}));var pn,hn=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(bn,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(b.jsx)("span",{children:"Takuya Matsumoto"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A fullstack web developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsx)(_,{children:"Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and web development. Strong arts and professional design background with a Certificate in Computer Software Engineering from Rutgers University\u2013New Brunswick. Strengths in creativity, teamwork, and building projects from ideation to execution. Previously a digital technician with experience in the photography industry, with skills in photoshoots, management, and adobe photoshop."})}),Object(b.jsx)("div",{className:"resume",children:Object(b.jsx)("a",{href:mn,target:"_blank",rel:"noreferrer",children:"Download Resume"})})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:dn,alt:"me"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(ln,{title:"School",items:["Fort Lee High School, New Jersey"]}),Object(b.jsx)(ln,{title:"Collage",items:["School of Visual Arts, New York"]}),Object(b.jsx)(ln,{title:"Certificate",items:["Rutgers University, New Jersey"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(ln,{title:"FrontEnd",items:["HTML5","CSS3","JavaScript ES6+","REACT","Handlebars","Materialize","Bootstrap"]}),Object(b.jsx)(ln,{title:"BackEnd",items:["Node","Express","PHP","npm","Mongodb","MySQL","NoSQL"]}),Object(b.jsx)(ln,{title:"Design",items:["Photoshop","Figma","Lightroom"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(b.jsx)(ln,{title:"2018-2019",items:["Studio & Equipment Coordinator at CreativeDrive, New York, NY"]}),Object(b.jsx)(ln,{title:"2019-2021",items:["Digital Technician / Assistant Retoucher at forceMAJEURE design, New York, NY"]}),Object(b.jsx)(ln,{title:"2021",items:["6 Months Full Stack Web Development at Rutgers University, New Brunswick, NJ"]})]})]})]}),Object(b.jsx)(tn,{})]})})},jn=d.b.div(pn||(pn=Object(s.a)(["\n    background-color: var(--dark-bg);\n    padding: 10rem 0;\n    .projects__allItems {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        gap: 5rem;\n        margin-top: 5rem;\n    }\n    .projects__searchBar {\n        position: relative;\n        width: 300px;\n        margin-top: 5rem;\n    }\n    .projects__searchBar input {\n        width: 100%;\n        font-size: 2rem;\n        padding: 0.8rem;\n        color: var(--black);\n        border-radius: 6px;\n        outline: none;\n        border: none;\n    }\n    .projects__searchBar .searchIcon {\n        position: absolute;\n        width: 2rem;\n        right: 1rem;\n    }\n    .projects__searchBar .searchIcon path {\n        color: var(--deep-dark);\n    }\n    @media only screen and (max-width: 768px) {\n        .projects__searchBar,\n        .projects__searchBar form,\n        .projects__searchBar input {\n            width: 100%;\n        }\n    }\n"])));var gn,un=function(){var n=Object(i.useState)(""),e=Object(c.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(G),o=Object(c.a)(a,2),s=o[0],l=o[1];return Object(i.useEffect)((function(){""!==t&&l((function(){return G.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]),Object(b.jsx)(jn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(C,{heading:"Projects",subheading:"some of my recent works"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),r(n.target.value),!n.target.value.length>0&&l(G)},placeholder:"Project Name"}),Object(b.jsx)(m.f,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:s.map((function(n){return Object(b.jsx)(q,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})},xn=d.b.div(gn||(gn=Object(s.a)(["\n    padding: 2rem;\n    background-color: var(--deep-dark);\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    border-radius: 8px;\n    margin-bottom: 2rem;\n    .icon {\n        color: var(--white);\n        background-color: var(--gray-2);\n        padding: 1.3rem;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n    }\n    svg {\n        width: 3.5rem;\n    }\n"])));var fn,_n=function(n){var e=n.icon,t=void 0===e?Object(b.jsx)(m.e,{}):e,r=n.text,i=void 0===r?"this is an info":r;return Object(b.jsxs)(xn,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(_,{children:i})})]})},vn=d.b.form(fn||(fn=Object(s.a)(['\n    width: 100%;\n    .form-group {\n        width: 100%;\n        margin-bottom: 2rem;\n    }\n    label {\n        font-size: 1.8rem;\n    }\n    input, textarea {\n        width: 100%;\n        font-size: 2rem;\n        padding: 1.2rem;\n        color: var(--gray-1);\n        background-color: var(--deep-dark);\n        outline: none;\n        border: none;\n        border-radius: 8px;\n        margin-top: 1rem;\n    }\n    textarea {\n        min-height: 250px;\n        resize: vertical;\n    }\n    button[type="submit"] {\n        background-color: var(--gray-1);\n        color: var(--black);\n        font-size: 2rem;\n        display: inline-block;\n        outline: none;\n        border: none;\n        padding: 1rem 4rem;\n        border-radius: 8px;\n        cursor: pointer;\n    }\n'])));var On,wn=function(){var n=Object(i.useState)(""),e=Object(c.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(""),o=Object(c.a)(a,2),s=o[0],l=o[1],d=Object(i.useState)(""),m=Object(c.a)(d,2),p=m[0],h=m[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(vn,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return r(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your email",Object(b.jsx)("input",{type:"text",id:"email",email:"email",value:s,onChange:function(n){return l(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",message:"message",value:p,onChange:function(n){return h(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})},yn=d.b.div(On||(On=Object(s.a)(["\n    padding: 10rem 0;\n    .contactSection__wrapper {\n        display: flex;\n        gap: 5rem;\n        margin-top: 7rem;\n        justify-content: space-between;\n        position: relative;\n    }\n    .contactSection__wrapper::after {\n        position: absolute;\n        content '';\n        width: 2px;\n        height: 50%;\n        background-color: var(--gray-1);\n        left: 50%;\n        top: 30%;\n        transform: translate(-50%, -50%);\n    }\n    .left {\n        width: 100%;\n        max-width: 500px;\n    }\n    .right {\n        max-width: 500px;\n        width: 100%;\n    }\n    @media only screen and (max-width: 768px) {\n        .contactSection__wrapper {\n            flex-direction: column;\n        }\n        .contactSection__wrapper::after {\n            display: none;\n        }\n        .left, right {\n            max-width: 100%;\n        }\n        .right {\n            padding: 4rem 2rem 2rem 2rem;\n        }\n    }\n"])));var kn,Nn=function(){return Object(b.jsx)(yn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(C,{heading:"Contact",subheading:"Get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(_n,{icon:Object(b.jsx)(m.c,{}),text:"(201)310-3869"}),Object(b.jsx)(_n,{icon:Object(b.jsx)(m.b,{}),text:"tmatsnj@gmail.com"}),Object(b.jsx)(_n,{text:"Fort Lee, New Jersey"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(wn,{})})]})]})})},Sn=t.p+"static/media/map.9d6f58bc.jpg",zn=d.b.div(kn||(kn=Object(s.a)(["\n    background: url(",") no-repeat center / cover;\n    min-height: 400px;\n    .container {\n        position: relative;\n        min-height: 400px;\n    }\n    .map__card {\n        position: absolute;\n        right: 10%;\n        bottom: 10%;\n        padding: 2rem;\n        background-color: var(--deep-dark);\n        max-width: 300px;\n        width: 100%;\n        border-radius: 12px;\n    }\n    .map__card__heading {\n        font-size: 3rem;\n        margin-bottom: 1rem;\n    }\n    .map__card__link {\n        color: var(--gray-1);\n        display: inline-block;\n        font-size: 1.6rem;\n        margin-top: 2rem;\n        text-decoration: underline;\n    }\n    @media only screen and (max-width: 768px) {\n        background-position: 80% center;\n    }\n    @media only screen and (max-width: 400px) {\n        .map__card {\n            max-width: none;\n            right: auto;\n        }\n    }\n"])),Sn);var In,Ln=function(){return Object(b.jsx)(zn,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"map__card",children:[Object(b.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(b.jsx)(_,{children:"Fort Lee, New Jersey"}),Object(b.jsx)("a",{href:"https://www.google.com/maps/place/Fort+Lee,+NJ+07024/@40.8482501,-73.9873645,14z/data=!3m1!4b1!4m5!3m4!1s0x89c2f6e7d866e951:0x8575495bfd782544!8m2!3d40.8509333!4d-73.9701381",target:"_blank",rel:"noreferrer",className:"map__card__link",children:"Open in Google Maps"})]})})})},Mn=d.b.div(In||(In=Object(s.a)(["\n    background-color: var(--dark-bg);\n"])));var Cn,Bn=function(){return Object(b.jsxs)(Mn,{children:[Object(b.jsx)(Nn,{}),Object(b.jsx)(Ln,{})]})},Tn=d.b.div(Cn||(Cn=Object(s.a)(["\n    .heading {\n        font-size: 2.4rem;\n        margin-bottom: 2rem;\n    }\n    li {\n        margin-bottom: 1rem;\n    }\n    a {\n        color: var(--gray-1);\n        font-size: 1.8rem;\n    }\n"])));var Dn,En=function(n){var e=n.heading,t=void 0===e?"col heading":e,r=n.Links,i=void 0===r?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:r;return Object(b.jsxs)(Tn,{children:[Object(b.jsx)("h1",{className:"heading",children:t}),Object(b.jsx)("ul",{children:i.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(l.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})},Pn=d.b.div(Dn||(Dn=Object(s.a)(["\n    padding-top: 10rem;\n    background-color: var(--deep-dark);\n    .container {\n        display: flex;\n        gap: 3rem;\n    }\n    .footer__col1 {\n        flex: 2;\n    }\n    .footer__col2,\n    .footer__col3,\n    .footer__col4 {\n        flex: 1;\n    }\n    .footer__col1__title {\n        font-size: 3.5rem;\n        margin-bottom: 1rem;\n    }\n    @media only screen and (max-width: 768px) {\n        .container {\n            flex-direction: column;\n            gap: 0rem;\n            & > div {\n                margin-top: 5rem;\n            }\n        }\n        .footer__col1 .para {\n            max-width: 100%;\n        }\n    }\n"])));var Rn=function(){return Object(b.jsx)(Pn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Takuya Matsumoto"}),Object(b.jsx)(_,{children:"A full stack web developer from Fort Lee, New Jersey. Previously a digital technician with experience in the photography industry, with skills in photoshoots, management, and adobe photoshop."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(En,{heading:"important Links",Links:[{title:"Home",path:"/",type:"Link"},{title:"About",path:"/about",type:"Link"},{title:"Projects",path:"/projects",type:"Link"},{title:"Contact",path:"/contact",type:"Link"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(En,{heading:"Contact Info",Links:[{title:"(201)310-3869",path:"tel:2013103869"},{title:"tmatsnj@gmail.com",path:"mailto:tmatsnj@gmail.com"},{title:"Fort Lee, New Jersey, United States",path:"http://google.com/maps"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(En,{heading:"Social Links",Links:[{title:"Instagram",path:"https://www.instagram.com/takuyamats/"},{title:"GitHub",path:"https://github.com/TakuyaMats"},{title:"Linkedin",path:"https://www.linkedin.com/in/takuyamatsumoto90/"}]})})]})})};var Fn,Hn,An=function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(j,{}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{path:"/about",children:Object(b.jsx)(hn,{})}),Object(b.jsx)(g.a,{path:"/projects",children:Object(b.jsx)(un,{})}),Object(b.jsx)(g.a,{path:"/contact",children:Object(b.jsx)(Bn,{})}),Object(b.jsx)(g.a,{path:"/",children:Object(b.jsx)(on,{})})]}),Object(b.jsx)(Rn,{})]})},Jn=Object(d.a)(Fn||(Fn=Object(s.a)([" * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white: white;\n    --black: black;\n}\n\nhtml {\n    font-size: 10px;\n    font-family: 'Roboto Mono', monospace;\n    background-color: var(--dark-bg);\n}\n\nul,\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\nimg,\nsvg {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\nbutton {\n    outline: none\n}\n\n.container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n}\n\n/* Smooth Scroll  */\n[data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n\n    .scroll-content {\n        background-color: var(--dark-bg);\n    }\n\n    .scrollbar-track.scrollbar-track-y {\n        background: var(--deep-dark);\n\n        .scrollbar-thumb-y {\n            background: var(--gray-1);\n        }\n    }\n}\n\n"]))),Yn=Object(d.a)(Hn||(Hn=Object(s.a)([" @font-face {\n    font-family: 'Roboto Mono', monospace;\n    src: @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat', sans-serif;\n    src: @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat', sans-serif;\n    src: @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');\n    font-style: normal;\n}\n\nhtml {\n    font-family: 'Roboto Mono', monospace;\n    color: var(--gray-1);\n}\n\n* {\n    font-family: 'Roboto Mono', monospace;\n    color: white;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'Montserrat', sans-serif;\n}\n\n"])));t(47);o.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Jn,{}),Object(b.jsx)(Yn,{}),Object(b.jsx)(An,{})]}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1e7359c1.chunk.js.map