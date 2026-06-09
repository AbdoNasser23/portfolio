const dotEl = document.querySelector("#cur-dot .cur-dot");
const ringEl = document.querySelector("#cur-ring .cur-ring");
let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    document.getElementById("cur-dot").style.cssText = `left:${mx}px;top:${my}px`;
});
(function animRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    document.getElementById("cur-ring").style.cssText =
        `left:${rx}px;top:${ry}px`;
    requestAnimationFrame(animRing);
})();

document
    .querySelectorAll("a, button, .skill-block, .project-featured, .c-link")
    .forEach((el) => {
        el.addEventListener("mouseenter", () => ringEl.classList.add("hovering"));
        el.addEventListener("mouseleave", () =>
            ringEl.classList.remove("hovering"),
        );
    });

const phrases = [
    "Laravel Back-End Developer",
    "Vue.js Enthusiast",
    "RESTful API Builder",
    "Clean Code Advocate",
    "PHP & MySQL Specialist",
];
let pi = 0,
    ci = 0,
    del = false;
const typedEl = document.getElementById("typed");
function type() {
    const cur = phrases[pi];
    if (!del) {
        typedEl.textContent = cur.slice(0, ++ci);
        if (ci === cur.length) {
            del = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        typedEl.textContent = cur.slice(0, --ci);
        if (ci === 0) {
            del = false;
            pi = (pi + 1) % phrases.length;
        }
    }
    setTimeout(type, del ? 45 : 80);
}
type();

const prog = document.getElementById("progress");
const navbar = document.getElementById("navbar");
const btt = document.getElementById("btt");
const navAs = document.querySelectorAll(".nav-links a");
const sects = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (st / dh) * 100 + "%";
    navbar.classList.toggle("stuck", st > 60);
    btt.classList.toggle("show", st > 400);

    let cur = "";
    sects.forEach((s) => {
        if (st >= s.offsetTop - 120) cur = s.id;
    });
    navAs.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + cur),
    );
});

const revEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
);
function checkReveal() {
    revEls.forEach((el) => {
        if (el.getBoundingClientRect().top < innerHeight - 80)
            el.classList.add("in");
    });
}
window.addEventListener("scroll", checkReveal, { passive: true });
setTimeout(checkReveal, 120);

const ham = document.getElementById("ham");
const mobileN = document.getElementById("mobileNav");
ham.addEventListener("click", () => {
    ham.classList.toggle("open");
    mobileN.style.display = ham.classList.contains("open") ? "flex" : "none";
});
mobileN.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
        ham.classList.remove("open");
        mobileN.style.display = "none";
    }),
);

document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
        const t = document.querySelector(a.getAttribute("href"));
        if (t) {
            e.preventDefault();
            t.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const heroRight = document.querySelector(".hero-right");
window.addEventListener("mousemove", (e) => {
    if (!heroRight) return;
    const { innerWidth: W, innerHeight: H } = window;
    const dx = (e.clientX / W - 0.5) * 14;
    const dy = (e.clientY / H - 0.5) * 8;
    const photo = heroRight.querySelector(".hero-photo");
    if (photo)
        photo.style.transform = `scale(1.04) translate(${dx * 0.4}px, ${dy * 0.4}px)`;
});

document.querySelectorAll(".skill-block").forEach((b, i) => {
    b.style.transitionDelay = i * 0.06 + "s";
});

document.querySelectorAll(".btn-cv, .btn-submit").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
    });
});
