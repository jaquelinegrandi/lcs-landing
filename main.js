document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       OFFER DEADLINE
       Change this to your real deadline.
    ===================================================== */

    const offerDeadline = new Date("2026-09-30T23:59:59");


    /* =====================================================
       HERO COUNTDOWN
    ===================================================== */

    const heroDays = document.getElementById("days");
    const heroHours = document.getElementById("hours");
    const heroMinutes = document.getElementById("minutes");
    const heroSeconds = document.getElementById("seconds");


    /* =====================================================
       FINAL COUNTDOWN
    ===================================================== */

    const finalDays = document.querySelector(
        '[data-countdown="days"]'
    );

    const finalHours = document.querySelector(
        '[data-countdown="hours"]'
    );

    const finalMinutes = document.querySelector(
        '[data-countdown="minutes"]'
    );

    const finalSeconds = document.querySelector(
        '[data-countdown="seconds"]'
    );


    /* =====================================================
       CHECK DATE
    ===================================================== */

    if (isNaN(offerDeadline.getTime())) {
        console.error("Invalid countdown date.");
        return;
    }


    /* =====================================================
       FORMAT NUMBER
    ===================================================== */

    function formatNumber(number) {
        return String(number).padStart(2, "0");
    }


    /* =====================================================
       UPDATE COUNTDOWN
    ===================================================== */

    function updateCountdown() {

        const now = new Date();

        const difference =
            offerDeadline.getTime() - now.getTime();


        /*
         * If the offer has expired
         */

        if (difference <= 0) {

            setCountdown(
                0,
                0,
                0,
                0
            );

            return;
        }


        /*
         * Convert milliseconds
         */

        const totalSeconds =
            Math.floor(difference / 1000);


        const days =
            Math.floor(
                totalSeconds / (60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (totalSeconds % (60 * 60 * 24)) / (60 * 60)
            );


        const minutes =
            Math.floor(
                (totalSeconds % (60 * 60)) / 60
            );


        const seconds =
            totalSeconds % 60;


        setCountdown(
            days,
            hours,
            minutes,
            seconds
        );
    }


    /* =====================================================
       SET BOTH COUNTDOWNS
    ===================================================== */

    function setCountdown(
        days,
        hours,
        minutes,
        seconds
    ) {

        const d = formatNumber(days);
        const h = formatNumber(hours);
        const m = formatNumber(minutes);
        const s = formatNumber(seconds);


        /*
         * HERO
         */

        if (heroDays) {
            heroDays.textContent = d;
        }

        if (heroHours) {
            heroHours.textContent = h;
        }

        if (heroMinutes) {
            heroMinutes.textContent = m;
        }

        if (heroSeconds) {
            heroSeconds.textContent = s;
        }


        /*
         * FINAL CTA
         */

        if (finalDays) {
            finalDays.textContent = d;
        }

        if (finalHours) {
            finalHours.textContent = h;
        }

        if (finalMinutes) {
            finalMinutes.textContent = m;
        }

        if (finalSeconds) {
            finalSeconds.textContent = s;
        }
    }


    /* =====================================================
       START COUNTDOWN
    ===================================================== */

    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

});