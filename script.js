/* =========================================
   ELEMENTS
========================================= */

const loadingScreen =
    document.getElementById("loadingScreen");

const headphonesScreen =
    document.getElementById("headphonesScreen");

const prologue =
    document.getElementById("prologue");

const kickoff =
    document.getElementById("kickoff");

const messi =
    document.getElementById("messi");

const spiderman =
    document.getElementById("spiderman");

const wolverine =
    document.getElementById("wolverine");

const beginButton =
    document.getElementById("beginButton");
const introAudio =
    document.getElementById("introAudio");


/* =========================================
   LOADING → HEADPHONES
========================================= */

setTimeout(() => {

    loadingScreen.classList.add("hidden");

    headphonesScreen.classList.remove("hidden");
        /* START INTRO AUDIO */

    

}, 3500);


/* =========================================
   BEGIN BUTTON
========================================= */

beginButton.addEventListener("click", () => {

    headphonesScreen.classList.add("hidden");

    prologue.classList.remove("hidden");
        /* START INTRO AUDIO */

    if (introAudio) {

        introAudio.currentTime = 0;

        introAudio.play().catch((error) => {

            console.log(
                "Intro audio could not play:",
                error
            );

        });

    }


    /* =====================================
       PROLOGUE → KICK OFF
    ===================================== */

    setTimeout(() => {

        prologue.classList.add("fade-out");


        setTimeout(() => {

            prologue.classList.add("hidden");
            prologue.classList.remove("fade-out");

            kickoff.classList.remove("hidden");
            kickoff.classList.add("fade-in");


            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    kickoff.classList.remove("fade-in");

                });

            });


            /* =================================
               KICK OFF → MESSI
            ================================= */

            setTimeout(() => {

                kickoff.classList.add("fade-out");


                setTimeout(() => {

                    kickoff.classList.add("hidden");
                    kickoff.classList.remove("fade-out");
                                        /* STOP INTRO AUDIO */

                    if (introAudio) {

                        introAudio.pause();
                        introAudio.currentTime = 0;

                    }

                    messi.classList.remove("hidden");
                    messi.classList.add("fade-in");


                    requestAnimationFrame(() => {

                        requestAnimationFrame(() => {

                            messi.classList.remove("fade-in");

                            startMessiStory();

                        });

                    });

                }, 1500);

            }, 8500);


        }, 1500);

    }, 12000);

});


/* =========================================
   MESSI STORY
========================================= */

function startMessiStory() {

    const messiVisual =
        document.getElementById("messiVisual");

    const messiStory =
        document.getElementById("messiStory");

    const friendReveal =
        document.getElementById("friendReveal");

    const texts =
        document.querySelectorAll(".messi-text");


    /* RESET */

    messiVisual.classList.remove("fade-away");

    messiStory.classList.remove("story-visible");

    friendReveal.classList.remove("show");


    texts.forEach((text) => {

        text.classList.remove("show");

    });

const messiAudio = document.getElementById("messiAudio");

if (messiAudio) {
    messiAudio.currentTime = 0;

    messiAudio.play().catch((error) => {
        console.log("Messi audio blocked:", error);
    });
}
    /* =====================================
       MESSI PHOTO
    ===================================== */

    setTimeout(() => {

        messiVisual.classList.add("fade-away");


        /* =================================
           SHOW MESSI STORY
        ================================= */

        setTimeout(() => {

            messiStory.classList.add("story-visible");

            startMessiTextAnimation();

        }, 2200);

    }, 5000);

}


/* =========================================
   MESSI TEXT ANIMATION
========================================= */

function startMessiTextAnimation() {

    const texts =
        document.querySelectorAll(".messi-text");

    const friendReveal =
        document.getElementById("friendReveal");


    const startDelay = 1200;

    const lineGap = 2800;


    /* RESET */

    texts.forEach((text) => {

        text.classList.remove("show");

    });


    /* =====================================
       SHOW MESSI TEXT ONE BY ONE
    ===================================== */

    texts.forEach((text, index) => {

        setTimeout(() => {

            text.classList.add("show");

        }, startDelay + (index * lineGap));

    });


    /* =====================================
       FRIEND PHOTO TIMING
    ===================================== */

    const friendDelay =
        startDelay +
        ((texts.length - 1) * lineGap) +
        3500;


    /* =====================================
       FRIEND PHOTO REVEAL
    ===================================== */

    setTimeout(() => {

        friendReveal.classList.add("show");


        /* AUTO SCROLL TO FRIEND PHOTO */

        setTimeout(() => {

            friendReveal.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 500);

const messiAudio = document.getElementById("messiAudio");

if (messiAudio) {
    messiAudio.pause();
    messiAudio.currentTime = 0;
}
        /* =================================
           FRIEND PHOTO → SPIDER-MAN
        ================================= */

        setTimeout(() => {

            startSpiderManChapter();

        }, 9000);

    }, friendDelay);

}
/* =========================================
   SPIDER-MAN / WOLVERINE AUDIO
========================================= */

const spidermanWolverineAudio =
    document.getElementById("spidermanWolverineAudio");


/* =========================================
   SPIDER-MAN CHAPTER
========================================= */

function startSpiderManChapter() {
        if (spidermanWolverineAudio) {
        spidermanWolverineAudio.loop = true;
        spidermanWolverineAudio.currentTime = 0;

        spidermanWolverineAudio.play().catch(error => {
            console.log("Spider-Man/Wolverine audio blocked:", error);
        });
    }

    console.log(
        "Spider-Man chapter starting..."
    );


    const spidermanVisual =
        document.getElementById(
            "spidermanVisual"
        );

    const spidermanSilhouette =
        document.getElementById(
            "spidermanSilhouette"
        );

    const spidermanStory =
        document.getElementById(
            "spidermanStory"
        );


    const spiderTexts =
        document.querySelectorAll(
            ".spider-text"
        );


    /* =====================================
       CLOSE MESSI
    ===================================== */

    messi.classList.add("hidden");


    /* =====================================
       SHOW SPIDER-MAN
    ===================================== */

    spiderman.classList.remove("hidden");


    /* RESET */

    spidermanVisual.classList.remove(
        "fade-away"
    );

    spidermanSilhouette.classList.remove(
        "show"
    );

    spidermanStory.classList.remove(
        "show"
    );


    spiderTexts.forEach((text) => {

        text.classList.remove("show");

    });


    /* =====================================
       STEP 1
       SPIDER-MAN MAIN IMAGE
    ===================================== */

    setTimeout(() => {

        spidermanVisual.classList.add(
            "fade-away"
        );


        /* =================================
           STEP 2
           SILHOUETTE
        ================================= */

        setTimeout(() => {

            spidermanSilhouette.classList.add(
                "show"
            );


            /* =================================
               SILHOUETTE STAYS
            ================================= */

            setTimeout(() => {

                spidermanSilhouette.classList.remove(
                    "show"
                );


                /* =================================
                   STEP 3
                   STORY
                ================================= */

                setTimeout(() => {

                    spidermanStory.classList.add(
                        "show"
                    );


                    startSpiderManStoryAnimation();

                }, 1500);

            }, 7000);

        }, 2200);

    }, 6000);

}


/* =========================================
   SPIDER-MAN STORY
========================================= */

function startSpiderManStoryAnimation() {

    const spiderTexts =
        document.querySelectorAll(
            ".spider-text"
        );


    let currentIndex = 0;

    const lineGap = 2800;


    /* RESET */

    spiderTexts.forEach((text) => {

        text.classList.remove("show");

    });


    /* =====================================
       AUTO SCROLL FUNCTION
    ===================================== */

    function moveToElement(
        element,
        offset = 0
    ) {

        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            offset;


        window.scrollTo({

            top: top,

            behavior: "smooth"

        });

    }


    /* =====================================
       SHOW NEXT LINE
    ===================================== */

    function showNextLine() {

        /* =================================
           SPIDER-MAN FINISHED
        ================================= */

        if (
            currentIndex >=
            spiderTexts.length
        ) {

            console.log(
                "Spider-Man finished."
            );


            /* =================================
               WAIT THEN WOLVERINE
            ================================= */

            setTimeout(() => {

                startWolverineChapter();

            }, 4500);


            return;
        }


        const currentText =
            spiderTexts[currentIndex];


        /* SHOW */

        currentText.classList.add(
            "show"
        );


        /* AUTO SCROLL */

        setTimeout(() => {

            moveToElement(
                currentText,
                currentIndex === 0
                    ? 30
                    : 80
            );

        }, 300);


        currentIndex++;


        /* NEXT */

        setTimeout(() => {

            showNextLine();

        }, lineGap);

    }


    /* START */

    setTimeout(() => {

        showNextLine();

    }, 1000);

}


/* =========================================
   WOLVERINE CHAPTER
========================================= */

function startWolverineChapter() {

    console.log(
        "Wolverine chapter starting..."
    );


    const wolverineVisual =
        document.getElementById(
            "wolverineVisual"
        );

    const wolverineSilhouette =
        document.getElementById(
            "wolverineSilhouette"
        );

    const wolverineStory =
        document.getElementById(
            "wolverineStory"
        );


    /* =====================================
       CLOSE SPIDER-MAN
    ===================================== */

    spiderman.classList.add("hidden");


    /* =====================================
       SHOW WOLVERINE
    ===================================== */

    wolverine.classList.remove(
        "hidden"
    );


    /* RESET */

    wolverineVisual.classList.remove(
        "fade-away"
    );

    wolverineSilhouette.classList.remove(
        "show"
    );

    wolverineStory.classList.remove(
        "show"
    );


    const wolverineTexts =
        document.querySelectorAll(
            ".wolverine-text"
        );


    wolverineTexts.forEach((text) => {

        text.classList.remove("show");

    });


    /* =====================================
       STEP 1
       WOLVERINE MAIN IMAGE
    ===================================== */

    setTimeout(() => {

        wolverineVisual.classList.add(
            "fade-away"
        );


        /* =================================
           STEP 2
           WOLVERINE SILHOUETTE
        ================================= */

        setTimeout(() => {

            wolverineSilhouette.classList.add(
                "show"
            );


            /* =================================
               SILHOUETTE STAYS
            ================================= */

            setTimeout(() => {

                wolverineSilhouette.classList.remove(
                    "show"
                );


                /* =================================
                   STEP 3
                   WOLVERINE STORY
                ================================= */

                setTimeout(() => {

                    wolverineStory.classList.add(
                        "show"
                    );


                    startWolverineStoryAnimation();

                }, 2200);

            }, 8000);

        }, 2800);

    }, 7000);

}


/* =========================================
   WOLVERINE STORY
========================================= */

function startWolverineStoryAnimation() {

    const wolverineTexts =
        document.querySelectorAll(
            ".wolverine-text"
        );


    let currentIndex = 0;

    const lineGap = 2800;


    /* RESET */

    wolverineTexts.forEach((text) => {

        text.classList.remove("show");

    });


    /* =====================================
       AUTO SCROLL
    ===================================== */

    function moveToElement(
        element,
        offset = 0
    ) {

        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            offset;


        window.scrollTo({

            top: top,

            behavior: "smooth"

        });

    }


    /* =====================================
       SHOW NEXT LINE
    ===================================== */

    function showNextLine() {

        if (
    currentIndex >=
    wolverineTexts.length
) {

    console.log(
        "Wolverine story finished."
    );
    if (spidermanWolverineAudio) {
    spidermanWolverineAudio.pause();
    spidermanWolverineAudio.currentTime = 0;
    spidermanWolverineAudio.loop = false;
}

setTimeout(() => {
    startIronManChapter();
}, 4500);

return;
}


        const currentText =
            wolverineTexts[currentIndex];


        /* SHOW */

        currentText.classList.add(
            "show"
        );


        /* AUTO SCROLL */

        setTimeout(() => {

            moveToElement(
                currentText,
                currentIndex === 0
                    ? 30
                    : 80
            );

        }, 300);


        currentIndex++;


        /* NEXT */

        setTimeout(() => {

            showNextLine();

        }, lineGap);

    }


    /* START */

    setTimeout(() => {

        showNextLine();

    }, 1000);

}
/* =========================================
   IRON MAN CHAPTER
========================================= */

const ironman =
    document.getElementById("ironman");

const ironmanScene1 =
    document.getElementById("ironmanScene1");

const ironmanScene2 =
    document.getElementById("ironmanScene2");

const ironmanScene3 =
    document.getElementById("ironmanScene3");

const ironmanScene4 =
    document.getElementById("ironmanScene4");

const ironmanStory =
    document.getElementById("ironmanStory");
const ironManAudio = document.getElementById("ironManAudio");


/*
   IMPORTANT:
   Only take text elements INSIDE Iron Man story.
   This prevents other chapter text from getting included.
*/
const ironmanTexts =
    ironmanStory
        ? ironmanStory.querySelectorAll(".ironman-text")
        : [];


/* =========================================
   START IRON MAN
========================================= */

function startIronManChapter() {

    console.log(
        "IRON MAN CHAPTER STARTING..."
    );


    /* CHECK */

    if (!ironman) {
        console.error(
            "ERROR: #ironman not found"
        );
        return;
    }

    if (!ironmanScene1) {
        console.error(
            "ERROR: #ironmanScene1 not found"
        );
        return;
    }


    /* =====================================
       CLOSE WOLVERINE
    ===================================== */

    if (wolverine) {
        wolverine.classList.add("hidden");
    }


    /* =====================================
       SHOW IRON MAN
    ===================================== */

    ironman.classList.remove("hidden");
    /* START IRON MAN AUDIO */

if (ironManAudio) {
    ironManAudio.pause();
    ironManAudio.currentTime = 0;

    ironManAudio.play().catch((error) => {
        console.log("Iron Man audio could not play:", error);
    });
}


    /* =====================================
       RESET EVERYTHING
    ===================================== */

    ironmanScene1.classList.remove("show");
    ironmanScene2.classList.remove("show");
    ironmanScene3.classList.remove("show");
    ironmanScene4.classList.remove("show");

    if (ironmanStory) {
        ironmanStory.classList.remove("show");
    }

    ironmanTexts.forEach((text) => {
        text.classList.remove("show");
    });


    /* =====================================
       LOCK SCROLL
    ===================================== */

    document.body.style.overflow = "hidden";


    /* =====================================
       IMAGE 1
    ===================================== */

    setTimeout(() => {

        ironmanScene1.classList.add("show");

    }, 500);


    /* =====================================
       IMAGE 1 → IMAGE 2
    ===================================== */

    setTimeout(() => {

        ironmanScene1.classList.remove("show");

        setTimeout(() => {

            ironmanScene2.classList.add("show");

        }, 1200);

    }, 7000);


    /* =====================================
       IMAGE 2 → IMAGE 3
    ===================================== */

    setTimeout(() => {

        ironmanScene2.classList.remove("show");

        setTimeout(() => {

            ironmanScene3.classList.add("show");

        }, 1200);

    }, 14000);


    /* =====================================
       IMAGE 3 → IMAGE 4
    ===================================== */

    setTimeout(() => {

        ironmanScene3.classList.remove("show");

        setTimeout(() => {

            ironmanScene4.classList.add("show");

        }, 1200);

    }, 21000);


    /* =====================================
       IMAGE 4 → STORY
    ===================================== */

    setTimeout(() => {

        ironmanScene4.classList.remove("show");


        setTimeout(() => {

            document.body.style.overflow = "auto";


            if (ironmanStory) {

                ironmanStory.classList.add("show");


                setTimeout(() => {

                    ironmanStory.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 500);

            }


            /* START STORY */

            startIronManStoryAnimation();


        }, 1800);

    }, 28000);

}


/* =========================================
   IRON MAN STORY ANIMATION
========================================= */

function startIronManStoryAnimation() {

    if (!ironmanStory) {
        console.error(
            "ERROR: #ironmanStory not found"
        );
        return;
    }


    /*
       IMPORTANT:
       Again, ONLY Iron Man text.
    */

    const texts =
        ironmanStory.querySelectorAll(
            ".ironman-text"
        );


    if (!texts.length) {
        console.error(
            "ERROR: No .ironman-text found"
        );
        return;
    }


    let currentIndex = 0;

    const lineGap = 2800;


    /* =====================================
       RESET
    ===================================== */

    texts.forEach((text) => {

        text.classList.remove("show");

    });


    /* =====================================
       AUTO SCROLL
    ===================================== */

    function moveToElement(
        element,
        offset = 0
    ) {

        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            offset;


        window.scrollTo({

            top: top,

            behavior: "smooth"

        });

    }


    /* =====================================
       SHOW NEXT TEXT
    ===================================== */

    function showNextLine() {


        /* =================================
           IRON MAN FINISHED
        ================================= */

        if (
            currentIndex >=
            texts.length
        ) {

            console.log(
                "IRON MAN CHAPTER FINISHED."
            );
            if (ironManAudio) {
        ironManAudio.pause();
        ironManAudio.currentTime = 0;
    }




            /*
               WAIT 4.5 SECONDS
               THEN SMOOTHLY START SMILE
            */

            setTimeout(() => {

                startSmileChapter();

            }, 4500);


            return;
        }


        /* =================================
           CURRENT TEXT
        ================================= */

        const currentText =
            texts[currentIndex];


        /* SHOW */

        currentText.classList.add("show");


        /* =================================
           AUTO SCROLL
        ================================= */

        setTimeout(() => {

            moveToElement(
                currentText,
                currentIndex === 0
                    ? 30
                    : 80
            );

        }, 300);


        currentIndex++;


        /* =================================
           NEXT TEXT
        ================================= */

        setTimeout(() => {

            showNextLine();

        }, lineGap);

    }


    /* =====================================
       START
    ===================================== */

    setTimeout(() => {

        showNextLine();

    }, 1000);

}


/* =========================================
   THE MAN BEHIND THE SMILE
   CINEMATIC STORY
========================================= */

function startSmileChapter() {

    console.log(
        "THE MAN BEHIND THE SMILE STARTING..."
    );
    const smileAudio = document.getElementById("smileAudio");

if (smileAudio) {
    smileAudio.currentTime = 0;

    smileAudio.play().catch((error) => {
        console.log("Smile audio blocked:", error);
    });
}


    /* =====================================
       GET ELEMENTS
    ===================================== */

    const smileChapter =
        document.getElementById(
            "smileChapter"
        );

    const scene1 =
        document.getElementById(
            "smileScene1"
        );

    const scene2 =
        document.getElementById(
            "smileScene2"
        );

    const scene3 =
        document.getElementById(
            "smileScene3"
        );

    const ending =
        document.getElementById(
            "smileEnding"
        );


    /* =====================================
       CHECK
    ===================================== */

    if (
        !smileChapter ||
        !scene1 ||
        !scene2 ||
        !scene3 ||
        !ending
    ) {

        console.error(
            "Smile chapter elements missing."
        );

        return;
    }


    /* =====================================
       CLOSE IRON MAN
    ===================================== */

    if (typeof ironman !== "undefined" && ironman) {

        ironman.classList.add(
            "hidden"
        );

    }


    /* =====================================
       SHOW SMILE CHAPTER
    ===================================== */

    smileChapter.classList.remove(
        "hidden"
    );


    /* =====================================
       RESET SCENES
    ===================================== */

    scene1.classList.remove("show");
    scene2.classList.remove("show");
    scene3.classList.remove("show");

    ending.classList.remove("show");


    /* =====================================
       GET ALL LINES
    ===================================== */

    const allLines =
        smileChapter.querySelectorAll(
            ".smile-line"
        );


    /* =====================================
       RESET ALL LINES
    ===================================== */

    allLines.forEach((line) => {

        line.classList.remove(
            "show-line"
        );

    });


    /* =====================================
       LOCK SCROLL
    ===================================== */

    document.body.style.overflow =
        "hidden";


    /* =====================================
       SCROLL TO SMILE
    ===================================== */

    setTimeout(() => {

        smileChapter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);


    /* =====================================
       LINE-BY-LINE FUNCTION
    ===================================== */

    function showLinesOneByOne(scene) {

        const lines =
            scene.querySelectorAll(
                ".smile-line"
            );


        /* RESET */

        lines.forEach((line) => {

            line.classList.remove(
                "show-line"
            );

        });


        /* SHOW ONE BY ONE */

        lines.forEach((line, index) => {

            setTimeout(() => {

                line.classList.add(
                    "show-line"
                );

            }, 900 + (index * 2000));

        });

    }


    /* =====================================
       PHOTO 1
    ===================================== */

    setTimeout(() => {

        scene1.classList.add(
            "show"
        );

        showLinesOneByOne(
            scene1
        );

    }, 800);


    /* =====================================
       PHOTO 1 → PHOTO 2
    ===================================== */

    setTimeout(() => {

        scene1.classList.remove(
            "show"
        );


        setTimeout(() => {

            scene2.classList.add(
                "show"
            );

            showLinesOneByOne(
                scene2
            );

        }, 1800);

    }, 8500);


    /* =====================================
       PHOTO 2 → PHOTO 3
    ===================================== */

    setTimeout(() => {

        scene2.classList.remove(
            "show"
        );


        setTimeout(() => {

            scene3.classList.add(
                "show"
            );

            showLinesOneByOne(
                scene3
            );

        }, 1800);

    }, 17000);


    /* =====================================
       PHOTO 3 → BLACK
    ===================================== */

    setTimeout(() => {

        scene3.classList.remove(
            "show"
        );


        setTimeout(() => {

            ending.classList.add(
                "show"
            );

        }, 1800);

}, 25500);





/* =====================================
   SMILE → GRANDMA
===================================== */

setTimeout(() => {

    console.log("SMILE CHAPTER FINISHED.");
    /* STOP SMILE AUDIO */

    if (smileAudio) {
        smileAudio.pause();
        smileAudio.currentTime = 0;
    }


    smileChapter.classList.add("hidden");

    document.body.style.overflow = "auto";

    setTimeout(() => {

        console.log("STARTING GRANDMA CHAPTER...");

        if (typeof startGrandmaChapter === "function") {
            startGrandmaChapter();
        } else {
            console.error("startGrandmaChapter() NOT FOUND.");
        }

    }, 1200);

}, 30000);

}   // ← VERY IMPORTANT

/* =========================================
   GRANDMA CHAPTER
========================================= */

function startGrandmaChapter() {

    console.log("GRANDMA CHAPTER STARTING...");

    const grandmaChapter =
        document.getElementById("grandmaChapter");

    const videoStage =
        document.getElementById("grandmaVideoStage");

    const grandmaVideo =
        document.getElementById("grandmaVideo");

    const grandmaAudio =
        document.getElementById("grandmaAudio");

    const videoText =
        document.getElementById("grandmaVideoText");

    const photoStage =
        document.getElementById("grandmaPhotoStage");

    const ending =
        document.getElementById("grandmaEnding");


    /* =========================================
       CHECK ELEMENTS
    ========================================= */

    if (
        !grandmaChapter ||
        !videoStage ||
        !grandmaVideo ||
        !videoText ||
        !photoStage ||
        !ending
    ) {

        console.error(
            "Grandma chapter elements missing."
        );

        return;
    }


    /* =========================================
       SHOW GRANDMA CHAPTER
    ========================================= */

    grandmaChapter.classList.remove("hidden");

    document.body.style.overflow = "hidden";


    /* =========================================
       RESET EVERYTHING
    ========================================= */

    videoStage.classList.remove("hide");

    photoStage.classList.remove("show");

    ending.classList.remove("show");


    /* =========================================
       RESET VIDEO TEXT
    ========================================= */

    const videoLines =
        videoText.querySelectorAll(
            ".grandma-line"
        );

    videoLines.forEach((line) => {

        line.classList.remove("show-line");

    });


    /* =========================================
       RESET PHOTO TEXT
    ========================================= */

    const photoLines =
        photoStage.querySelectorAll(
            ".grandma-photo-line"
        );

    photoLines.forEach((line) => {

        line.classList.remove("show-line");

    });


    /* =========================================
       RESET AUDIO
    ========================================= */

    if (grandmaAudio) {

        grandmaAudio.pause();

        grandmaAudio.currentTime = 0;

    }


    /* =========================================
       SCROLL TO GRANDMA
    ========================================= */

    setTimeout(() => {

        grandmaChapter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);


    /* =========================================
       PLAY VIDEO
    ========================================= */

    grandmaVideo.currentTime = 0;

    grandmaVideo.play().catch((error) => {

        console.log(
            "Grandma video autoplay blocked:",
            error
        );

    });


    /* =========================================
       VIDEO TEXT TIMING
    ========================================= */

    videoLines.forEach((line, index) => {

        setTimeout(() => {

            line.classList.add("show-line");

        }, 1800 + (index * 2200));

    });


    /* =========================================
       VIDEO FINISHED
    ========================================= */

    grandmaVideo.onended = () => {

        console.log(
            "GRANDMA VIDEO FINISHED."
        );


        /* =====================================
           FADE OUT VIDEO
        ===================================== */

        videoStage.classList.add("hide");


        /* =====================================
           HIDE VIDEO TEXT
        ===================================== */

        videoLines.forEach((line) => {

            line.classList.remove("show-line");

        });


        /* =====================================
           WAIT FOR VIDEO FADE
        ===================================== */

        setTimeout(() => {


            /* =================================
               SHOW GRANDMA PHOTO
            ================================= */

            photoStage.classList.add("show");


            console.log(
                "GRANDMA PHOTO STARTED."
            );


            /* =================================
               START AUDIO WITH PHOTO
            ================================= */

            if (grandmaAudio) {

                grandmaAudio.currentTime = 0;

                grandmaAudio.play().catch((error) => {

                    console.log(
                        "Grandma audio autoplay blocked:",
                        error
                    );

                });

            }


            /* =================================
               PHOTO TEXT
            ================================= */

            photoLines.forEach((line, index) => {

                setTimeout(() => {

                    line.classList.add(
                        "show-line"
                    );

                }, 700 + (index * 1600));

            });


            /* =================================
               PHOTO DURATION
               4.5 SECONDS
            ================================= */

            setTimeout(() => {

                console.log(
                    "GRANDMA PHOTO FINISHED."
                );


                /* ==============================
                   FADE OUT PHOTO
                ============================== */

                photoStage.classList.remove(
                    "show"
                );


                /* ==============================
                   WAIT FOR PHOTO FADE
                ============================== */

                setTimeout(() => {


                    /* ==========================
                       SHOW TWO SENTENCES
                    ========================== */

                    ending.classList.add(
                        "show"
                    );


                    console.log(
                        "GRANDMA FINAL MESSAGE STARTED."
                    );


                    /* ==========================
                       KEEP AUDIO PLAYING
                    ========================== */

                    /*
                       IMPORTANT:
                       Audio is NOT stopped here.
                       It continues while the
                       two sentences are displayed.
                    */


                    /* ==========================
                       FINAL MESSAGE DURATION
                    ========================== */

                    setTimeout(() => {


                        /* ======================
                           STOP AUDIO
                        ====================== */

                        if (grandmaAudio) {

                            grandmaAudio.pause();

                            grandmaAudio.currentTime = 0;

                        }


                        /* ======================
                           HIDE GRANDMA CHAPTER
                        ====================== */

                        grandmaChapter.classList.add(
                            "hidden"
                        );

                        document.body.style.overflow = "auto";


                        /* ======================
                           START MATCHES
                        ====================== */

                        console.log(
                            "STARTING THE MATCHES NOBODY SAW..."
                        );


                        if (
                            typeof startMatchesChapter ===
                            "function"
                        ) {

                            startMatchesChapter();

                        } else {

                            console.error(
                                "startMatchesChapter() NOT FOUND."
                            );

                        }

                    }, 6000);


                }, 1800);


            }, 4500);


        }, 1800);

    };


    /* =========================================
       VIDEO ERROR
    ========================================= */

    grandmaVideo.onerror = () => {

        console.error(
            "Grandma video could not load."
        );

    };

}

/* =========================================
   MATCHES + PRAYER SHARED AUDIO
   SAME SONG • CONTINUOUS • LOOP
========================================= */

const matchesPrayerAudio =
    document.getElementById("matchesPrayerAudio");



/* =========================================
   THE MATCHES NOBODY SAW
========================================= */

function startMatchesChapter() {

    console.log("THE MATCHES NOBODY SAW STARTING...");

    const chapter = document.getElementById("matchesChapter");
    const title = document.getElementById("matchesTitle");

    const paragraphs = [
        ...document.querySelectorAll(
            "#matchesChapter .matches-paragraph"
        )
    ];

    const finalMessage = document.getElementById("matchesFinal");


    /* =========================================
       CHECK ELEMENTS
    ========================================= */

    if (!chapter || !title || !paragraphs.length || !finalMessage) {
        console.error("Matches chapter elements missing.");
        return;
    }


    /* =========================================
       START AUDIO
    ========================================= */

    if (
        typeof matchesPrayerAudio !== "undefined" &&
        matchesPrayerAudio
    ) {
        matchesPrayerAudio.loop = true;
        matchesPrayerAudio.currentTime = 0;

        matchesPrayerAudio.play().catch((error) => {
            console.log(
                "Matches/Prayer audio could not play:",
                error
            );
        });
    }


    /* =========================================
       RESET CHAPTER
    ========================================= */

    chapter.classList.remove("hidden");

    title.classList.remove("show");

    paragraphs.forEach((paragraph) => {

        paragraph.classList.remove("show", "hide");

        paragraph.style.opacity = "0";
        paragraph.style.visibility = "hidden";

    });

    finalMessage.classList.remove("show");

    document.body.style.overflow = "hidden";


    /* =========================================
       PREPARE LETTERS
       ONLY ONCE
    ========================================= */

    function prepareLetters(paragraph) {

        const textElement = paragraph.querySelector("p");

        if (!textElement) return;

        /* Already prepared */
        if (textElement.dataset.lettersPrepared === "true") {
            return;
        }

        const originalHTML = textElement.innerHTML;

        textElement.dataset.originalHTML = originalHTML;

        /* Clear original text */
        textElement.innerHTML = "";

        /*
           Split text and <br>
           This keeps line breaks working properly.
        */

        const parts = originalHTML.split(/(<br\s*\/?>)/gi);

        let letterIndex = 0;


        parts.forEach((part) => {

            /* LINE BREAK */

            if (/^<br/i.test(part)) {

                textElement.appendChild(
                    document.createElement("br")
                );

                return;
            }


            /* TEXT */

            [...part].forEach((char) => {

                /* Keep normal spaces */

                if (char === " ") {

                    textElement.appendChild(
                        document.createTextNode(" ")
                    );

                    return;
                }


                /* Create letter */

                const span = document.createElement("span");

                span.className = "matches-letter";

                span.textContent = char;

                span.style.animationDelay =
                    `${letterIndex * 0.035}s`;

                textElement.appendChild(span);

                letterIndex++;

            });

        });


        textElement.dataset.lettersPrepared = "true";
    }


    /* =========================================
       PREPARE ALL PARAGRAPHS
    ========================================= */

    paragraphs.forEach((paragraph) => {
        prepareLetters(paragraph);
    });


    /* =========================================
       SHOW CHAPTER TITLE
    ========================================= */

    setTimeout(() => {

        title.classList.add("show");

    }, 500);


    /* =========================================
       HIDE TITLE
    ========================================= */

    setTimeout(() => {

        title.classList.remove("show");

    }, 4500);


    /* =========================================
       SHOW PARAGRAPH
    ========================================= */

    function showParagraph(index) {

        /* -------------------------------------
           Hide everything first
        ------------------------------------- */

        paragraphs.forEach((paragraph) => {

            paragraph.classList.remove("show", "hide");

            paragraph.style.opacity = "0";
            paragraph.style.visibility = "hidden";

        });


        /* -------------------------------------
           Story finished
        ------------------------------------- */

        if (index >= paragraphs.length) {

            startFinalMessage();

            return;
        }


        const paragraph = paragraphs[index];

        const textElement = paragraph.querySelector("p");


        /* =====================================
           RESET LETTER ANIMATION
        ===================================== */

        if (textElement) {

            const letters =
                textElement.querySelectorAll(
                    ".matches-letter"
                );


            letters.forEach((letter, letterIndex) => {

                /* Reset animation */

                letter.style.animation = "none";

                /* Force browser reflow */

                void letter.offsetWidth;

                /* Start animation again */

                letter.style.animation =
                    `matchesLetterReveal 0.7s ease ${letterIndex * 0.035}s forwards`;

            });

        }


        /* =====================================
           SHOW CURRENT PARAGRAPH
        ===================================== */

        paragraph.style.visibility = "visible";
        paragraph.style.opacity = "1";

        paragraph.classList.add("show");


        /* =====================================
           CALCULATE READING TIME
        ===================================== */

        const textLength =
            paragraph.innerText.length;

        const readingTime =
            Math.max(
                4200,
                Math.min(
                    7200,
                    textLength * 95
                )
            );


        /* =====================================
           FADE OUT
        ===================================== */

        setTimeout(() => {

            paragraph.classList.remove("show");

            paragraph.classList.add("hide");

            paragraph.style.opacity = "0";
            paragraph.style.visibility = "hidden";


            /* ---------------------------------
               Wait for fade
            --------------------------------- */

            setTimeout(() => {

                showParagraph(index + 1);

            }, 1500);

        }, readingTime);

    }


    /* =========================================
       FINAL MESSAGE
    ========================================= */

    function startFinalMessage() {

        console.log("MATCHES STORY FINISHED.");


        /* Hide all paragraphs */

        paragraphs.forEach((paragraph) => {

            paragraph.classList.remove("show", "hide");

            paragraph.style.opacity = "0";
            paragraph.style.visibility = "hidden";

        });


        /* Show final message */

        finalMessage.classList.add("show");


        /* =====================================
           FINAL MESSAGE DURATION
        ===================================== */

        setTimeout(() => {

            finalMessage.classList.remove("show");


            /* Wait for fade */

            setTimeout(() => {

                /* Hide chapter */

                chapter.classList.add("hidden");

                document.body.style.overflow = "auto";


                console.log(
                    "STARTING MY PRAYER CHAPTER..."
                );


                /* Start Prayer */

                if (
                    typeof startPrayerChapter ===
                    "function"
                ) {

                    startPrayerChapter();

                } else {

                    console.error(
                        "startPrayerChapter() NOT FOUND."
                    );

                }

            }, 2500);

        }, 6500);

    }


    /* =========================================
       START STORY AFTER TITLE
    ========================================= */

    setTimeout(() => {

        showParagraph(0);

    }, 5500);

}


/* =========================================
   MY PRAYER
========================================= */

function startPrayerChapter() {

    console.log(
        "MY PRAYER CHAPTER STARTING..."
    );


    const chapter =
        document.getElementById(
            "prayerChapter"
        );


    const title =
        document.getElementById(
            "prayerTitle"
        );


    const pages = [
        ...document.querySelectorAll(
            ".prayer-page"
        )
    ];


    const finalMessage =
        document.getElementById(
            "prayerFinal"
        );


    /* =========================================
       CHECK ELEMENTS
    ========================================= */

    if (
        !chapter ||
        !title ||
        !pages.length ||
        !finalMessage
    ) {

        console.error(
            "Prayer chapter elements missing."
        );

        return;
    }


    /* =========================================
       IMPORTANT:
       DO NOT RESTART AUDIO HERE.

       Matches audio is already playing.
       Same song continues into Prayer.
       loop = true.
    ========================================= */

    if (matchesPrayerAudio) {

        matchesPrayerAudio.loop = true;

        matchesPrayerAudio.play().catch((error) => {

            console.log(
                "Prayer audio could not continue:",
                error
            );

        });

    }


    /* =========================================
       RESET
    ========================================= */

    chapter.classList.remove(
        "hidden"
    );


    title.classList.remove(
        "show"
    );


    pages.forEach((page) => {

        page.classList.remove(
            "show",
            "hide"
        );

    });


    finalMessage.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "hidden";


    /* =========================================
       TITLE
    ========================================= */

    setTimeout(() => {

        title.classList.add(
            "show"
        );

    }, 500);


    /* =========================================
       TITLE → STORY
    ========================================= */

    setTimeout(() => {

        title.classList.remove(
            "show"
        );

    }, 4800);


    /* =========================================
       SHOW PAGE
    ========================================= */

    function showPage(index) {

        if (
            index >= pages.length
        ) {

            showFinalMessage();

            return;
        }


        const page =
            pages[index];


        page.classList.remove(
            "hide"
        );


        page.classList.add(
            "show"
        );


        /* =====================================
           READING TIME
        ===================================== */

        const textLength =
            page.innerText.length;


        const readingTime =
            Math.max(
                5000,
                Math.min(
                    8500,
                    textLength * 105
                )
            );


        /* =====================================
           FADE OUT
        ===================================== */

        setTimeout(() => {

            page.classList.remove(
                "show"
            );


            page.classList.add(
                "hide"
            );


            /* =================================
               NEXT PAGE
            ================================= */

            setTimeout(() => {

                showPage(
                    index + 1
                );

            }, 1600);

        }, readingTime);

    }


    /* =========================================
       FINAL MESSAGE
    ========================================= */

    function showFinalMessage() {

        console.log(
            "PRAYER STORY FINISHED."
        );


        finalMessage.classList.add(
            "show"
        );


        /* =====================================
           HOLD FINAL PRAYER
        ===================================== */

        setTimeout(() => {

            finalMessage.classList.remove(
                "show"
            );


            setTimeout(() => {

                chapter.classList.add(
                    "hidden"
                );


                document.body.style.overflow =
                    "auto";


                /* =================================
                   STOP AUDIO ONLY NOW
                ================================= */

                if (matchesPrayerAudio) {

                    matchesPrayerAudio.pause();

                    matchesPrayerAudio.currentTime =
                        0;

                    matchesPrayerAudio.loop =
                        false;

                }


                console.log(
                    "MY PRAYER CHAPTER FINISHED."
                );


                /* =================================
                   NEXT CHAPTER
                ================================= */

                if (
                    typeof startFutureChapter ===
                    "function"
                ) {

                    startFutureChapter();

                }

            }, 2500);

        }, 8500);

    }


    /* =========================================
       START
    ========================================= */

    setTimeout(() => {

        showPage(0);

    }, 5200);

}
/* =========================================
   THE FUTURE IS STILL UNWRITTEN
========================================= */

function startFutureChapter() {

    console.log(
        "THE FUTURE IS STILL UNWRITTEN STARTING..."
    );

    const chapter =
        document.getElementById(
            "futureChapter"
        );

    const title =
        document.getElementById(
            "futureTitle"
        );

    const pages =
        [
            ...chapter.querySelectorAll(
                ".future-page"
            )
        ];

    const finalMessage =
        document.getElementById(
            "futureFinal"
        );
        const futureAudio =
    document.getElementById("futureAudio");


    /* =========================================
       CHECK ELEMENTS
    ========================================= */

    if (
        !chapter ||
        !title ||
        !pages.length ||
        !finalMessage
    ) {

        console.error(
            "Future chapter elements missing."
        );

        return;
    }
    if (futureAudio) {
    futureAudio.pause();
    futureAudio.currentTime = 0;

    futureAudio.play().catch(error => {
        console.log(
            "Future audio autoplay blocked:",
            error
        );
    });
}


    /* =========================================
       SHOW CHAPTER
    ========================================= */

    chapter.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";


    /* =========================================
       RESET
    ========================================= */

    title.classList.remove(
        "show"
    );

    pages.forEach((page) => {

        page.classList.remove(
            "show",
            "hide"
        );

    });

    finalMessage.classList.remove(
        "show"
    );


    /* =========================================
       TITLE
    ========================================= */

    setTimeout(() => {

        title.classList.add(
            "show"
        );

    }, 600);


    setTimeout(() => {

        title.classList.remove(
            "show"
        );

    }, 4500);


    /* =========================================
       SHOW STORY
    ========================================= */

    function showPage(index) {

        if (
            index >= pages.length
        ) {

            showFinalMessage();

            return;
        }


        const page =
            pages[index];


        page.classList.remove(
            "hide"
        );

        page.classList.add(
            "show"
        );


        const textLength =
            page.innerText.length;


        const readingTime =
            Math.max(
                4500,
                Math.min(
                    7500,
                    textLength * 100
                )
            );


        setTimeout(() => {

            page.classList.remove(
                "show"
            );

            page.classList.add(
                "hide"
            );


            setTimeout(() => {

                showPage(
                    index + 1
                );

            }, 1600);

        }, readingTime);

    }


    /* =========================================
       FINAL MESSAGE
    ========================================= */

    function showFinalMessage() {

        console.log(
            "FUTURE CHAPTER STORY FINISHED."
        );


        finalMessage.classList.add(
            "show"
        );


        setTimeout(() => {

            finalMessage.classList.remove(
                "show"
            );
            if (futureAudio) {
    futureAudio.pause();
    futureAudio.currentTime = 0;
}


            setTimeout(() => {

                chapter.classList.add(
                    "hidden"
                );

                document.body.style.overflow =
                    "auto";


                console.log(
                    "STARTING THE NEXT TROPHY CHAPTER..."
                );


                if (typeof startTrophyChapter === "function") {

    startTrophyChapter();

} else {

    console.error(
        "startTrophyChapter() NOT FOUND."
    );

}
            }, 2500);

        }, 7500);

    }


    /* =========================================
       START STORY
    ========================================= */

    setTimeout(() => {

        showPage(0);

    }, 5200);

}
/* =========================================
   THE NEXT TROPHY
========================================= */

const trophyChapter =
    document.getElementById("trophyChapter");

const trophyAudio =
    document.getElementById("trophyAudio");


function startTrophyChapter() {

    console.log("THE NEXT TROPHY STARTING...");

    if (!trophyChapter) {
        console.error("ERROR: #trophyChapter not found.");
        return;
    }

    /* SHOW CHAPTER */

    trophyChapter.classList.remove("hidden");
    document.body.style.overflow = "hidden";


    /* GET ELEMENTS */

    const lines =
        [...trophyChapter.querySelectorAll(".trophy-line")];

    const finalText =
        trophyChapter.querySelector(".trophy-final");

    const endingText =
        trophyChapter.querySelector(".trophy-end");


    if (!finalText || !endingText) {
        console.error("Trophy elements missing.");
        return;
    }


    /* RESET EVERYTHING */

    lines.forEach(line => {
        line.classList.remove("show");
    });

    finalText.classList.remove("show");
    endingText.classList.remove("show");


    /* STOP + RESET AUDIO */

    if (trophyAudio) {

        trophyAudio.pause();
        trophyAudio.currentTime = 0;

        trophyAudio.play().catch(error => {

            console.log(
                "Trophy audio autoplay blocked:",
                error
            );

        });
    }


    /* =========================================
       SHOW ONE LINE AT A TIME
    ========================================= */

    let currentIndex = 0;

    function showNextLine() {

        /* REMOVE PREVIOUS LINE */

        lines.forEach(line => {
            line.classList.remove("show");
        });


        /* ALL STORY LINES FINISHED */

        if (currentIndex >= lines.length) {

            showFinalTrophy();

            return;
        }


        /* SHOW CURRENT LINE */

        const currentLine =
            lines[currentIndex];

        currentLine.classList.add("show");


        /*
           Each line stays for 4 seconds.
           Then it fades before next line.
        */

        setTimeout(() => {

            currentLine.classList.remove("show");

            setTimeout(() => {

                currentIndex++;

                showNextLine();

            }, 1400);

        }, 4000);
    }


    /* =========================================
       FINAL TROPHY
    ========================================= */

    function showFinalTrophy() {

        console.log("TROPHY STORY FINISHED.");

        finalText.classList.add("show");


        /* FINAL TITLE TIME */

        setTimeout(() => {

            finalText.classList.remove("show");

            setTimeout(() => {

                showEnding();

            }, 1800);

        }, 5000);
    }


    /* =========================================
       ENDING MESSAGE
    ========================================= */

    function showEnding() {

        endingText.classList.add("show");


        setTimeout(() => {

            finishTrophyChapter();

        }, 5500);
    }


    /* =========================================
       FINISH TROPHY
    ========================================= */

    function finishTrophyChapter() {

        console.log(
            "THE NEXT TROPHY CHAPTER FINISHED."
        );


        /* STOP TROPHY AUDIO IMMEDIATELY */

        if (trophyAudio) {

            trophyAudio.pause();
            trophyAudio.currentTime = 0;

        }


        /* HIDE TROPHY */

        trophyChapter.classList.add("hidden");

        document.body.style.overflow = "auto";


        /* START HAPPY BIRTHDAY */

        console.log(
            "STARTING HAPPY BIRTHDAY CHAPTER..."
        );

        if (
            typeof startBirthdayChapter ===
            "function"
        ) {

            startBirthdayChapter();

        } else {

            console.error(
                "startBirthdayChapter() NOT FOUND."
            );
        }
    }


    /* =========================================
       START STORY
    ========================================= */

    setTimeout(() => {

        showNextLine();

    }, 1200);
}
// =========================================
// HAPPY BIRTHDAY CHAPTER
// =========================================

const birthdayChapter =
    document.getElementById("birthdayChapter");

const birthdayAudio =
    document.getElementById("birthdayAudio");


function startBirthdayChapter() {

    console.log("🎂 HAPPY BIRTHDAY CHAPTER STARTING...");


    // -----------------------------------------
    // CHECK CHAPTER
    // -----------------------------------------

    if (!birthdayChapter) {

        console.error(
            "ERROR: #birthdayChapter not found."
        );

        return;
    }


    // -----------------------------------------
    // SHOW CHAPTER
    // -----------------------------------------

    birthdayChapter.classList.remove("hidden");

    document.body.style.overflow = "hidden";


    // -----------------------------------------
    // GET ELEMENTS
    // -----------------------------------------

    const lines = [
        ...birthdayChapter.querySelectorAll(
            ".birthday-line"
        )
    ];

    const title =
        document.getElementById("birthdayTitle");

    const finalMessage =
        document.getElementById("birthdayFinal");


    if (!lines.length) {

        console.error(
            "ERROR: No .birthday-line elements found."
        );

        return;
    }


    // -----------------------------------------
    // RESET EVERYTHING
    // -----------------------------------------

    lines.forEach((line) => {

        line.classList.remove("show");

    });


    if (title) {

        title.classList.remove("show");

    }


    if (finalMessage) {

        finalMessage.classList.remove("show");

    }


    // -----------------------------------------
    // START BIRTHDAY MUSIC
    // -----------------------------------------

    if (birthdayAudio) {

        birthdayAudio.pause();

        birthdayAudio.currentTime = 0;

        birthdayAudio.loop = true;

        birthdayAudio.play().catch((error) => {

            console.log(
                "Birthday audio autoplay blocked:",
                error
            );

        });

    }


    // -----------------------------------------
    // SHOW ONE LINE AT A TIME
    // -----------------------------------------

    let currentIndex = 0;


    function showNextBirthdayLine() {

        // Remove every other line first
        lines.forEach((line) => {

            line.classList.remove("show");

        });


        // -------------------------------------
        // ALL LINES FINISHED
        // -------------------------------------

        if (currentIndex >= lines.length) {

            showBirthdayTitle();

            return;
        }


        // -------------------------------------
        // CURRENT LINE
        // -------------------------------------

        const currentLine =
            lines[currentIndex];


        currentLine.classList.add("show");


        console.log(
            "Birthday line:",
            currentIndex + 1
        );


        // -------------------------------------
        // HOLD LINE
        // -------------------------------------

        setTimeout(() => {

            currentLine.classList.remove("show");


            // Wait for fade-out
            setTimeout(() => {

                currentIndex++;

                showNextBirthdayLine();

            }, 1400);


        }, 4000);

    }


    // -----------------------------------------
    // BIG HAPPY BIRTHDAY
    // -----------------------------------------

    function showBirthdayTitle() {

        console.log(
            "🎂 SHOWING HAPPY BIRTHDAY..."
        );


        if (!title) {

            showBirthdayFinal();

            return;
        }


        title.classList.add("show");


        // Hold big birthday message
        setTimeout(() => {

            title.classList.remove("show");


            setTimeout(() => {

                showBirthdayFinal();

            }, 1800);


        }, 6000);

    }


    // -----------------------------------------
    // FINAL EMOTIONAL MESSAGE
    // -----------------------------------------

    function showBirthdayFinal() {

        console.log(
            "❤️ SHOWING FINAL BIRTHDAY MESSAGE..."
        );


        if (!finalMessage) {

            finishBirthdayChapter();

            return;
        }


        finalMessage.classList.add("show");


        // Hold final message
        setTimeout(() => {

            finalMessage.classList.remove("show");


            setTimeout(() => {

                finishBirthdayChapter();

            }, 2000);


        }, 7000);

    }


    // -----------------------------------------
    // FINISH BIRTHDAY CHAPTER
    // -----------------------------------------

    function finishBirthdayChapter() {

        console.log(
            "🎂 HAPPY BIRTHDAY CHAPTER FINISHED."
        );


        // -------------------------------------
        // STOP MUSIC
        // -------------------------------------

        if (birthdayAudio) {

            birthdayAudio.pause();

            birthdayAudio.currentTime = 0;

            birthdayAudio.loop = false;

        }


        // -------------------------------------
        // HIDE CHAPTER
        // -------------------------------------

        birthdayChapter.classList.add("hidden");

        document.body.style.overflow = "auto";


        // -------------------------------------
        // START SECRET ENDING
        // -------------------------------------

        console.log(
            "🌠 STARTING SECRET ENDING..."
        );


        if (
            typeof startSecretEnding ===
            "function"
        ) {

            startSecretEnding();

        } else {

            console.error(
                "startSecretEnding() NOT FOUND."
            );

        }

    }


    // -----------------------------------------
    // START STORY
    // -----------------------------------------

    setTimeout(() => {

        showNextBirthdayLine();

    }, 1200);

}
// =========================================
// POST CREDIT SCENE
// =========================================

const postCreditChapter =
    document.getElementById("postCreditChapter");

const postCreditAudio =
    document.getElementById("postCreditAudio");



function startSecretEnding() {

    console.log("😂 POST-CREDIT SCENE STARTING...");


    // -----------------------------------------
    // CHECK CHAPTER
    // -----------------------------------------

    if (!postCreditChapter) {

        console.error(
            "ERROR: #postCreditChapter not found."
        );

        return;
    }


    // -----------------------------------------
    // SHOW CHAPTER
    // -----------------------------------------

    postCreditChapter.classList.remove("hidden");

    document.body.style.overflow = "hidden";


    // -----------------------------------------
    // GET ELEMENTS
    // -----------------------------------------

    const lines = [
        ...postCreditChapter.querySelectorAll(
            ".post-credit-line"
        )
    ];

    const reveal =
        postCreditChapter.querySelector(
            ".post-credit-reveal"
        );

    const finalMessage =
        postCreditChapter.querySelector(
            ".post-credit-final"
        );

    const ending =
        postCreditChapter.querySelector(
            ".post-credit-end"
        );


    // -----------------------------------------
    // RESET EVERYTHING
    // -----------------------------------------

    lines.forEach((line) => {

        line.classList.remove("show");

    });


    if (reveal) {

        reveal.classList.remove("show");

    }


    if (finalMessage) {

        finalMessage.classList.remove("show");

    }


    if (ending) {

        ending.classList.remove("show");

    }


    // -----------------------------------------
    // START POST-CREDIT AUDIO
    // -----------------------------------------

    if (postCreditAudio) {

        postCreditAudio.pause();

        postCreditAudio.currentTime = 0;

        postCreditAudio.loop = true;

        postCreditAudio.play().catch((error) => {

            console.log(
                "Post-credit audio autoplay blocked:",
                error
            );

        });

    }


    // -----------------------------------------
    // CURRENT LINE
    // -----------------------------------------

    let currentIndex = 0;


    // =========================================
    // SHOW ONE LINE AT A TIME
    // =========================================

    function showNextLine() {

        // Hide all normal lines first

        lines.forEach((line) => {

            line.classList.remove("show");

        });


        // -------------------------------------
        // NORMAL LINES FINISHED
        // -------------------------------------

        if (currentIndex >= lines.length) {

            showVijayReveal();

            return;
        }


        // -------------------------------------
        // CURRENT LINE
        // -------------------------------------

        const currentLine =
            lines[currentIndex];


        currentLine.classList.add("show");


        console.log(
            "Post-credit line:",
            currentIndex + 1
        );


        // -------------------------------------
        // HOLD LINE
        // -------------------------------------

        setTimeout(() => {

            currentLine.classList.remove("show");


            // Wait for fade-out

            setTimeout(() => {

                currentIndex++;

                showNextLine();

            }, 1400);

        }, 3500);

    }


    // =========================================
    // VIJAY REVEAL 😂
    // =========================================

    function showVijayReveal() {

        console.log(
            "😂 VIJAY REVEAL..."
        );


        if (!reveal) {

            showFinalMessage();

            return;
        }


        reveal.classList.add("show");


        // Hold Vijay reveal

        setTimeout(() => {

            reveal.classList.remove("show");


            setTimeout(() => {

                showRoast();

            }, 1800);

        }, 5000);

    }


    // =========================================
    // VIJAY ROAST
    // =========================================

    function showRoast() {

        console.log(
            "😂 STARTING VIJAY ROAST..."
        );


        /*
           If the 5th normal line is your
           Vijay roast, show it again.
        */

        if (lines[4]) {

            lines[4].classList.add("show");


            setTimeout(() => {

                lines[4].classList.remove("show");


                setTimeout(() => {

                    showFinalMessage();

                }, 1400);

            }, 4500);

        } else {

            showFinalMessage();

        }

    }


    // =========================================
    // MAIN JOKE
    // =========================================

    function showFinalMessage() {

        console.log(
            "🤣 SHOWING MAIN JOKE..."
        );


        if (!finalMessage) {

            showEnding();

            return;
        }


        finalMessage.classList.add("show");


        // Hold joke

        setTimeout(() => {

            finalMessage.classList.remove("show");


            setTimeout(() => {

                showEnding();

            }, 1800);

        }, 6000);

    }


    // =========================================
    // FINAL POST-CREDIT MESSAGE
    // =========================================

    function showEnding() {

        console.log(
            "❤️ SHOWING FINAL POST-CREDIT MESSAGE..."
        );


        if (!ending) {

            finishPostCredit();

            return;
        }


        ending.classList.add("show");


        // Hold final message

        setTimeout(() => {

            ending.classList.remove("show");


            setTimeout(() => {

                finishPostCredit();

            }, 1800);

        }, 5500);

    }


    // =========================================
    // FINISH POST-CREDIT
    // =========================================

    function finishPostCredit() {

        console.log(
            "😂 POST-CREDIT SCENE FINISHED."
        );


        // -------------------------------------
        // STOP AUDIO IMMEDIATELY
        // -------------------------------------

        if (postCreditAudio) {

            postCreditAudio.pause();

            postCreditAudio.currentTime = 0;

            postCreditAudio.loop = false;

        }


        // -------------------------------------
        // HIDE POST-CREDIT CHAPTER
        // -------------------------------------

        postCreditChapter.classList.add("hidden");


        // Keep screen locked while
        // Story End appears

        document.body.style.overflow = "hidden";


        // -------------------------------------
        // START STORY END → RAJINI VIDEO
        // -------------------------------------

        console.log(
            "🎬 STARTING STORY END → RAJINI VIDEO..."
        );


        if (
            typeof startRajiniEnding ===
            "function"
        ) {

            startRajiniEnding();

        } else {

            console.error(
                "❌ startRajiniEnding() NOT FOUND."
            );

        }

    }


    // =========================================
    // START POST-CREDIT STORY
    // =========================================

    setTimeout(() => {

        showNextLine();

    }, 1500);

}



// =========================================
// STORY END → RAJINI VIDEO
// =========================================

function startRajiniEnding() {

    console.log(
        "🎬 STORY END STARTING..."
    );


    const storyEnd =
        document.getElementById("storyEnd");

    const videoScreen =
        document.getElementById(
            "rajiniVideoScreen"
        );

    const video =
        document.getElementById(
            "rajiniVideo"
        );


    // -----------------------------------------
    // CHECK ELEMENTS
    // -----------------------------------------

    if (
        !storyEnd ||
        !videoScreen ||
        !video
    ) {

        console.error(
            "❌ Rajini ending elements missing."
        );

        return;
    }


    // -----------------------------------------
    // RESET
    // -----------------------------------------

    storyEnd.classList.remove("hidden");

    storyEnd.classList.remove("show");


    videoScreen.classList.add("hidden");

    videoScreen.classList.remove("show");


    video.pause();

    video.currentTime = 0;


    document.body.style.overflow = "hidden";


    // =========================================
    // SHOW "THE STORY ENDS HERE"
    // =========================================

    setTimeout(() => {

        storyEnd.classList.add("show");

    }, 300);


    // =========================================
    // MOVE TO RAJINI VIDEO
    // =========================================

    setTimeout(() => {

        storyEnd.classList.remove("show");


        setTimeout(() => {

            storyEnd.classList.add("hidden");


            videoScreen.classList.remove(
                "hidden"
            );

            videoScreen.classList.add(
                "show"
            );


            video.currentTime = 0;


            // ---------------------------------
            // PLAY VIDEO
            // ---------------------------------

            const playPromise =
                video.play();


            if (
                playPromise !== undefined
            ) {

                playPromise.catch((error) => {

                    console.log(
                        "Rajini video autoplay blocked:",
                        error
                    );

                });

            }

        }, 1500);

    }, 4000);


    // =========================================
    // VIDEO ENDED
    // =========================================

    video.onended = () => {

        console.log(
            "🎬 RAJINI VIDEO FINISHED."
        );


        video.pause();

        video.currentTime = 0;


        videoScreen.classList.remove(
            "show"
        );


        setTimeout(() => {

            videoScreen.classList.add(
                "hidden"
            );

            document.body.style.overflow =
                "auto";


            console.log(
                "❤️ WEBSITE STORY COMPLETED."
            );

        }, 1500);

    };


    // =========================================
    // VIDEO ERROR
    // =========================================

    video.onerror = () => {

        console.error(
            "❌ Rajini video could not load."
        );

    };

}