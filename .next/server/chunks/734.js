"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ParticleBackground)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: external "tsparticles"
var external_tsparticles_ = __webpack_require__(47);
;// CONCATENATED MODULE: ./components/config/Particles-config.js
const ParticlesConfig = {
    background: {
        color: {
            value: "#fbbf24"
        }
    },
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#0f172a"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#0f172a"
            },
            polygon: {
                nb_sides: 4
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#0f172a",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};
/* harmony default export */ const Particles_config = (ParticlesConfig);

;// CONCATENATED MODULE: ./components/ParticleBackground.js




const ParticleBackground = ()=>{
    const particlesInit = async (main)=>{
        await (0,external_tsparticles_.loadFull)(main);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
        id: "tsparticles",
        canvasClassName: "-z-50",
        init: particlesInit,
        options: Particles_config
    });
};
/* harmony default export */ const components_ParticleBackground = (ParticleBackground);


/***/ })

};
;