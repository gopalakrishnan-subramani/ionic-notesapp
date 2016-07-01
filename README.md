# ionic-notesapp
Ionic 2, Angular 2 HTML5, JavaScript Hybrid Application for Workshop

Clone or Download this repo. Do this instruction one by one.

CD to the folder ionic-notesapp

    npm install


    ionic platform add android

    ionic plugin add org.apache.cordova.camera
    ionic plugin add org.apache.cordova.vibration
    cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
    ionic plugin add cordova-plugin-geolocation
    cordova plugin add cordova-plugin-contacts

Use below commands to run


launch server, I advise to use Chrome, chrome has support for SQLite

    ionic serve 

Your app should run on port 3000.

This shall launch your app in emulator

    ionic emulate android

to run on your phone or 
to run on your genymotion

    ionic run android

We still have bugs, yet to implement Pull to Refresh, back navigation refresh to update the
content. I shall be fixing till night 11:00 PM, take latest code at early morning,
make sure that it works for to do handson.    