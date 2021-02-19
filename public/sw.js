let cacheData = "quizApp-7b";

this.addEventListener('activated',()=>{
    console.log('SW Activated')
})

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {
            return data.addAll([
                "/",
                "index.html",
                "App.tsx",
                "App.css",
                "service_questions.tsx",
                "quiz_types.ts",
                "index.tsx",
                "swReg.js",
                "QuestionDisplay.tsx",
                "manifest.json",
                "sw.js",
                "firebase-messaging-sw.js"
            ]).catch((err)=>{
                console.log(err)
            });
        }).catch((err) => {
            console.log("err", err)
        })
    )
})

this.addEventListener("fetch", (event) => {
    //if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                console.log("results:", result);
                if (result) {
                    return result||fetch(event.request);
                }
            })
        )
    //}
})