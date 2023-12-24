const container = document.querySelector('#navBar');
const tabs = container.querySelectorAll('a');

function activeLink(li) {
  tabs.forEach((tab) => tab.classList.remove('active'));
  li.classList.add('active');
}

tabs.forEach((tab) => tab.addEventListener('click', function(){
  activeLink(this);
}));

window.onscroll = () => {
  tabs.forEach((tab) => {
    let id = tab.getAttribute('href');
    let section = document.querySelector(id);
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='${id}']`);
      activeLink(target);
    }
  });
};
