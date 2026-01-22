import { projectsData, skillData } from "./data.js";


// MOBILE MENU
const mobileBtn = document.getElementById("mobileBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileBtn) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}


// INTERSECTION OBSERVER
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.15,
  }
);


document.querySelectorAll("[data-reveal]").forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${i * 70}ms`;
  observer.observe(el);
});


// PROJECTS SECTION
let projectsUl = document.getElementById("projects-ul");

document.addEventListener("DOMContentLoaded", () => {
  addProjects();
  skillsRender()
});

function addProjects() {

  projectsData?.forEach((data) => {
    const li = document.createElement("li");
    li.className =
      `project-li reveal w-full max-w-sm backdrop-blur rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`;

    li.style.backgroundColor = data.bgColor;

    li.innerHTML = `
 <!-- Project Image -->
 <div class="h-48 bg-black flex items-center justify-center overflow-hidden transition-all">
  <img
   src="${data.img}"
   alt="${data.name}"
   class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
  />
 </div>

 <!-- Card Content -->
 <div class="p-5">
  <h3 class="text-lg font-bold mb-2 text-white text-center hover:underline cursor-pointer">
   ${data.name}
  </h3>

  <p class="text-sm text-slate-300 text-center hover:text-black line-clamp-3 transition-all">
   ${data.desc}
  </p>

  <!-- Buttons -->
  <div class="flex gap-3 justify-center mt-5">
   <a
    href="${data.github}"
    target="_blank"
    class="px-4 py-2 text-sm border border-white/30 rounded-lg hover:bg-white hover:text-black transition"
   >
    GitHub
   </a>

   ${data.demo !== "not available"
        ? `<a
          href="${data.demo}"
          target="_blank"
          class="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition "
        >
          Live Demo
        </a>`
        : `<span
          class="px-4 py-2 text-sm bg-gray-600/50 text-gray-300 rounded-lg cursor-not-allowed"
        >
          No Demo
        </span>`
      }
  </div>
 </div>
`;

    projectsUl.append(li);
    observer.observe(li);
  });
}


/// skills section
let skillsGrid = document.getElementById("skillsGrid")

function skillsRender() {
  skillsGrid.innerHTML = ``
  const fragment = document.createDocumentFragment();

  skillData.forEach(data => {
    const div = document.createElement("div");
    div.classList.add("bg-white/95", "backdrop-blur", "rounded-2xl", "p-5", "w-full", "max-w-[160px]", "flex", "flex-col", "items-center", "gap-3", "shadow-lg", "hover:scale-[1.03]", "hover:shadow-2xl", "transition-all", "duration-300", "reveal", "hover:shadow-2xl", "hover:ring-2", "hover:ring-orange-400/40", ...data.shape.split(" ")
    );

    div.setAttribute("data-reveal", "");
    div.innerHTML = `
      <img src=${data.img} alt=${data.name} class="w-20 h-20 sm:w-22 wm:h-18 object-contain" />
      <span class="font-semibold text-sm text-slate-">${data.name}</span>
      <small class="text-xs text-slate-500">${data.skill}</small>
    `;
    fragment.append(div);
    observer.observe(div)
  })
  skillsGrid.replaceChildren(fragment);
}


// contact me 
const form = document.getElementById('contact_form')
let name = document.getElementById('name'),
  email = document.getElementById('email'),
  msg = document.getElementById('msg')

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!name.value && !email.value && !msg.value) {
    return alert('please fill form')
  }
  window.emailjs
    .sendForm("service_15zdcxt", "template_gu5wagn", form)
    .then(() => {
      alert("Email sent successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("Failed: " + error);
    });
});

