const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 400
});

const material = document.querySelectorAll('.materialboxed')
M.Materialbox.init(material)