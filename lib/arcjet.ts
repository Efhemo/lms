import "server-only";


import arcjet, { detectBot, fixedWindow, 
    protectSignup, sensitiveInfo, shield, 
    slidingWindow } from "@arcjet/next";
import { env } from "./env";

export {
    detectBot, fixedWindow, protectSignup,
     sensitiveInfo, shield, slidingWindow
}

export default arcjet({
    key: env.ARCJET_KEY,
    characteristics: ["fingerprint"], // don't depend soley on ip address (default)

    // base rule
    rules: [
        shield({
            mode: 'LIVE'
        })
    ]
})