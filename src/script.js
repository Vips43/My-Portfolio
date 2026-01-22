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
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else entry.target.classList.remove("show");

    });
  },
  {
    rootMargin: "-80px",
    threshold: 0.12
  }
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

// PROJECTS SECTION
let projectsUl = document.getElementById("projects-ul");

document.addEventListener("DOMContentLoaded", () => {
  addProjects();
});

function addProjects() {

  projectsData.forEach((data) => {
    const li = document.createElement("li");
    li.className =
      "project-li reveal max-w-1/2 bg-white border border-black rounded-xl p-4 text-black transition-all";

    li.innerHTML = `
  <span class="block text-center font-bold mb-2">${data.name}</span>

  <div class="expand-wrapper relative overflow-hidden">
    <ul class="child-ul max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
      
      <li class="child-li py-2 text-sm text-gray-700">${data.desc}</li>

      <li class="child-li img pt-2 w-full">
        <img src="${data.img}" alt="${data.name}" class="w-[80%] mx-auto object-contain rounded-full hover:scale-110 hover:rounded-none " />
      </li>

      <li class="child-li button flex gap-3 justify-center pt-3">
        <button class="px-3 py-1 border border-black rounded hover:bg-black hover:text-white transition">
        <a href="${data.github}" target="_blank">GitHub</a>
      </button>

        ${data.demo !== "not available"
        ? `<button class="px-3 py-1 border border-black rounded hover:bg-black hover:text-white transition">
            <a href="${data.demo}" target="_blank">Live Demo</a>
          </button>`
        : `<button disabled class="px-3 py-1 bg-gray-300 border border-black rounded cursor-not-allowed text-gray-600">
            No Demo
          </button>`
      }
      </li>
    </ul>
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
    div.classList.add( "bg-white/95", "backdrop-blur", "rounded-2xl", "p-5", "w-full", "max-w-[160px]", "flex", "flex-col", "items-center", "gap-3", "shadow-lg", "hover:-translate-y-1", "hover:shadow-xl", "transition-all", "duration-300", "reveal");
    div.setAttribute("data-reveal","");
    div.innerHTML = `
      <img src=${data.img} alt=${data.name} class="w-22 h-22 object-contain" />
      <span class="font-semibold text-sm text-slate-">${data.name}</span>
      <small class="text-xs text-slate-500">${data.skill}</small>
    `;
    fragment.append(div);
    observer.observe(div)
  })
  skillsGrid.replaceChildren(fragment);
}
skillsRender()

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

