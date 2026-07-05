/**
 * Ultimate Remake High-Performance UX Engine
 * Orchestrates theater panel splitting routines, slide decks, and precise vector particles.
 */

document.addEventListener("DOMContentLoaded", () => {
    const curtainWrapper = document.getElementById('theater-curtain');
    const matrixDigit = document.getElementById('countdown-matrix');
    const appViewport = document.getElementById('luxury-app-viewport');
    const slides = document.querySelectorAll('.exhibition-slide');
    const stepIndicators = document.querySelectorAll('.dynamic-progress-tracker .step-dot');
    const navTriggers = document.querySelectorAll('.slide-next-trigger');
    const ignitionTriggerBtn = document.getElementById('ignition-core-trigger');

    let runningIndex = 0;
    let initialCount = 3;

    // --- 1. THE CINEMATIC THEATER PRELOAD CONTROLLER ---
    const globalPreloader = setInterval(() => {
        initialCount--;

        if (initialCount > 0) {
            matrixDigit.textContent = initialCount;
        } else if (initialCount === 0) {
            // Apply fluid structural text updates to match the climax frame
            matrixDigit.style.fontSize = "2.2rem";
            matrixDigit.style.letterSpacing = "4px";
            matrixDigit.style.fontFamily = "system-ui, sans-serif";
            matrixDigit.innerHTML = "HAPPY BIRTHDAY<br>MY LOVE";
            
            triggerMassiveTheaterBlast();
        } else {
            clearInterval(globalPreloader);
            
            // Unlatch the luxury panel wings outward
            curtainWrapper.classList.add('open');
            
            setTimeout(() => {
                curtainWrapper.style.display = 'none';
                
                // Transition the Core Showcase layout beautifully onto the screen
                appViewport.style.opacity = "1";
                appViewport.style.transform = "scale(1) translateY(0)";
                
                // Continuous low-velocity premium particles falling ambiently
                setInterval(triggerAmbientGoldDrizzle, 4500);
            }, 900);
        }
    }, 1200);

    // --- 2. PRESENTATION DECK STEP-STATE MANAGEMENT ---
    function stepDeckForward() {
        if (runningIndex < slides.length - 1) {
            const currentSlideNode = slides[runningIndex];
            currentSlideNode.classList.remove('active');
            currentSlideNode.classList.add('passed');

            stepIndicators[runningIndex].classList.remove('active');
            
            runningIndex++;
            slides[runningIndex].classList.add('active');
            stepIndicators[runningIndex].classList.add('active');
            
            // Soft precision pop on step advancement
            confetti({
                particleCount: 12,
                spread: 35,
                colors: ['#dfba73', '#ffffff'],
                origin: { y: 0.85 }
            });
        }
    }

    navTriggers.forEach(triggerElement => {
        triggerElement.addEventListener('click', stepDeckForward);
    });

    // --- 3. HIGH-END CANVAS PHYSICS PARTICLE METHODS ---
    function triggerMassiveTheaterBlast() {
        const runtimeEnd = Date.now() + 3000;

        (function renderingFrame() {
            confetti({
                particleCount: 5,
                angle: 55,
                spread: 45,
                origin: { x: 0, y: 0.85 },
                colors: ['#dfba73', '#fceecb', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 125,
                spread: 45,
                origin: { x: 1, y: 0.85 },
                colors: ['#dfba73', '#fceecb', '#ffffff']
            });

            if (Date.now() < runtimeEnd) {
                requestAnimationFrame(renderingFrame);
            }
        }());
    }

    function triggerAmbientGoldDrizzle() {
        confetti({
            particleCount: 10,
            spread: 70,
            scalar: 0.8,
            origin: { y: 0.55 },
            colors: ['#dfba73', '#ffffff'],
            disableForReducedMotion: true
        });
    }

    // --- 4. ALTAR/CLIMAX EXECUTIONS ---
    if (ignitionTriggerBtn) {
        ignitionTriggerBtn.addEventListener('click', () => {
            const cakeNode = document.getElementById('cake-node');
            const altarTitle = document.getElementById('altar-title');
            const altarBody = document.getElementById('altar-body');

            if (ignitionTriggerBtn.textContent === "MANIFESTED 👑") return;

            // Mutate layout state values cleanly
            cakeNode.textContent = "🍰✨👑";
            altarTitle.innerHTML = "Your Wish is Manifested.";
            altarBody.innerHTML = "<strong>My devotion to you is infinite, absolute, and timeless. Let's make this your greatest year yet.</strong>";
            
            ignitionTriggerBtn.textContent = "MANIFESTED 👑";
            ignitionTriggerBtn.style.background = "transparent";
            ignitionTriggerBtn.style.border = "1px solid var(--gold-champagne)";
            ignitionTriggerBtn.style.color = "var(--gold-champagne)";
            ignitionTriggerBtn.style.boxShadow = "none";

            // Deploy an ultimate radial high density luxury splash
            confetti({
                particleCount: 150,
                scalar: 1.3,
                spread: 110,
                origin: { y: 0.65 },
                colors: ['#dfba73', '#fceecb', '#ffffff']
            });
        });
    }
});
      
