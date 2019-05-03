// function handleOrientation(event) {
//     console.log(event.beta.toFixed(2)+" "+event.gamma.toFixed(2)+" "+event.alpha.toFixed(2))
//     // camera.rotation.z = (event.beta-180) * Math.PI/180;
//     camera.rotation.x = (event.gamma+90) * Math.PI/180;
//     camera.rotation.y = (event.alpha+90) * Math.PI/180;
// }
// window.addEventListener('deviceorientation', handleOrientation);
alert("VR v0.4.1");
// function setOrientationControls(e) {
//     if (!e.alpha) {
//         return;
//     }
//     controls.connect();
//     controls.update();
//     // element.addEventListener(‘click’, fullscreen, false);
//     window.removeEventListener("deviceorientation", setOrientationControls, true);
// }
// window.addEventListener("deviceorientation", setOrientationControls, true);
// "use strict";
//
// Object.defineProperty(exports, "__esModule", {
//     value: true
// });
// exports.default = void 0;

// var THREE = require("three");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 * @author halvves / https://github.com/halvves (i only es6 moduled it)
 */
var VRControls =
    /*#__PURE__*/
    function () {
        function VRControls(camera, onError) {
            var _this = this;

            _classCallCheck(this, VRControls);

            this.camera = camera;
            this.vrDisplay;
            this.vrDisplays;
            this.standingMatrix = new THREE.Matrix4();
            this.frameData = null;

            if ('VRFrameData' in window) {
                this.frameData = new VRFrameData();
            }

            if (navigator.getVRDisplays) {
                navigator.getVRDisplays().then(function (displays) {
                    _this.vrDisplays = displays;

                    if (displays.length > 0) {
                        _this.vrDisplay = displays[0];
                    } else {
                        if (onError) onError('VR input not available.');
                    }
                }).catch(function () {
                    console.warn('VRControls: Unable to get VR Displays');
                });
            } // the Rift SDK returns the position in meters
            // this scale factor allows the user to define how meters
            // are converted to scene units.


            this.scale = 1; // If true will use "standing space" coordinate system where y=0 is the
            // floor and x=0, z=0 is the center of the room.

            this.standing = false; // Distance from the users eyes to the floor in meters. Used when
            // standing=true but the VRDisplay doesn't provide stageParameters.

            this.userHeight = 1.6;
        }

        _createClass(VRControls, [{
            key: "getVRDisplay",
            value: function getVRDisplay() {
                return this.vrDisplay;
            }
        }, {
            key: "setVRDisplay",
            value: function setVRDisplay(value) {
                this.vrDisplay = value;
            }
        }, {
            key: "getVRDisplays",
            value: function getVRDisplays() {
                console.warn('VRControls: getVRDisplays() is being deprecated.');
                return this.vrDisplays;
            }
        }, {
            key: "getStandingMatrix",
            value: function getStandingMatrix() {
                return this.standingMatrix;
            }
        }, {
            key: "update",
            value: function update() {
                var camera = this.camera;

                if (this.vrDisplay) {
                    var pose;

                    if (this.vrDisplay.getFrameData) {
                        this.vrDisplay.getFrameData(this.frameData);
                        pose = this.frameData.pose;
                    } else if (this.vrDisplay.getPose) {
                        pose = this.vrDisplay.getPose();
                    }

                    if (pose.orientation !== null) {
                        camera.quaternion.fromArray(pose.orientation);
                    }

                    if (pose.position !== null) {
                        camera.position.fromArray(pose.position);
                    } else {
                        camera.position.set(0, 0, 0);
                    }

                    if (this.standing) {
                        if (this.vrDisplay.stageParameters) {
                            camera.updateMatrix();
                            this.standingMatrix.fromArray(this.vrDisplay.stageParameters.sittingToStandingTransform);
                            camera.applyMatrix(this.standingMatrix);
                        } else {
                            camera.position.setY(camera.position.y + this.userHeight);
                        }
                    }

                    camera.position.multiplyScalar(this.scale);
                }
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this.vrDisplay = null;
            }
        }]);

        return VRControls;
    }();

// exports.default = VRControls;
const controls = new VRControls(camera);