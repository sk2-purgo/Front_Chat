import React from "react";

const IPhoneMockup = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-screen px-2" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            <div className="relative w-full max-w-[430px]" style={{ height: 'calc(100vh - 2rem)' }}>
                <svg
                    viewBox="0 0 427 858"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <g clipPath="url(#clip0)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M424 197H425C426.105 197 427 197.895 427 199V295C427 296.105 426.105 297 425 297H424V197Z" fill="#121515"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 257C0 255.895 0.895431 255 2 255H3V318H2C0.895431 318 0 317.105 0 316V257Z" fill="#121515"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 178C0 176.895 0.895431 176 2 176H3V239H2C0.895431 239 0 238.105 0 237V178Z" fill="#121515"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 117C0 115.895 0.895431 115 2 115H3V148H2C0.895431 148 0 147.105 0 146V117Z" fill="#121515"/>
                        <g filter="url(#filter0)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 63C3 28.2061 31.2061 0 66 0H361C395.794 0 424 28.2061 424 63V795C424 829.794 395.794 858 361 858H66C31.2061 858 3 829.794 3 795V63Z" fill="#3A4245"/>
                        </g>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 63C8 30.9675 33.9675 5 66 5H361C393.033 5 419 30.9675 419 63V795C419 827.033 393.033 853 361 853H66C33.9675 853 8 827.033 8 795V63Z" fill="#121515"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M259 40C263.418 40 267 36.4183 267 32C267 27.5817 263.418 24 259 24C254.582 24 251 27.5817 251 32C251 36.4183 254.582 40 259 40Z" fill="#262C2D"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M259 37C261.761 37 264 34.7614 264 32C264 29.2386 261.761 27 259 27C256.239 27 254 29.2386 254 32C254 34.7614 256.239 37 259 37Z" fill="#121515"/>
                        <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M259 31C259.552 31 260 30.5523 260 30C260 29.4477 259.552 29 259 29C258.448 29 258 29.4477 258 30C258 30.5523 258.448 31 259 31Z" fill="#636F73"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M188 32C188 30.3431 189.343 29 191 29H236C237.657 29 239 30.3431 239 32V32C239 33.6569 237.657 35 236 35H191C189.343 35 188 33.6569 188 32V32Z" fill="#262C2D"/>
                        <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="26" y="23" width="375" height="812">
                            <path fillRule="evenodd" clipRule="evenodd" d="M132 53H295C308.255 53 319 42.2548 319 27.75C319.136 25.1862 321.186 23.1357 323.744 23.0065L363 23C383.987 23 401 40.0132 401 61V797C401 817.987 383.987 835 363 835H64C43.0132 835 26 817.987 26 797V61C26 40.0132 43.0132 23 64 23H103.25C105.814 23.1357 107.864 25.1862 107.994 27.7435C108 42.2548 118.745 53 132 53Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <rect x="26" y="23" width="375" height="812" fill="white" />
                            <foreignObject x="26" y="23" width="375" height="812">
                                <div className="w-full h-full flex flex-col">
                                    {children}
                                </div>
                            </foreignObject>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0" x="-1" y="-2" width="429" height="866" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.14 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.05 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                        </filter>
                        <clipPath id="clip0">
                            <rect width="427" height="858" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default IPhoneMockup;