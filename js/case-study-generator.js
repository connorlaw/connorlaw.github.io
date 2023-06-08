const testimonials = {
    'laurence': {
        'image': '../images/testimonials/laurence.jpg',
        'name': 'Laurence Boon',
        'title': 'Product Manager, Cyclescheme',
        'content': `Working with Connor is a dream thanks to the fact that he's laid back and relaxed whilst also
            being hugely talented and able to exceed expectations on every brief.`
    },
    'alison': {
        'image': '../images/testimonials/alison.jpg',
        'name': 'Alison Fitzhugh',
        'title': 'Owner, Brewbabu',
        'content': `Connor has absolutely great customer service and technical skills; his integrity and honesty are impeccable.`
    },
    'nick': {
        'image': '../images/testimonials/nick.jpeg',
        'name': 'Nick Nettleton',
        'title': 'Founder & CEO, Loft Digital',
        'content': `Connor has excellent design and technical skills, and is also an excellent organiser, communicator
            and team player - and very good with clients and customers too. I can't recommend him highly enough.`
    },
    'gio': {
        'image': '../images/testimonials/gio.jpeg',
        'name': 'Giovanni de Flora',
        'title': 'Product Leader, Blackhawk Network',
        'content': `Connor is brilliant because he understands your vision and goes above and beyond to realise it, always
            with creative and imaginative solutions. On top of this Connor is also very professional and approachable. I
            couldn't recommend Connor more!`
    }
};

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('js--case-study-generate').addEventListener('submit', (e) => {
        e.preventDefault();
        generate();
    });

    const blocks = document.getElementsByClassName('codeblock');
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].querySelector('.copy-btn').addEventListener('click', (btn) => {
            navigator.clipboard.writeText(btn.target.parentNode.querySelector('input').value);
            btn.target.classList.add('copy-btn-copied');
            btn.target.innerHTML = 'Copied';
            setTimeout(() => {
            btn.target.classList.remove('copy-btn-copied');
            btn.target.innerHTML = 'Copy';
            }, 2000);
        });
        highlight(blocks[i], '#55b6c1', new RegExp('echo', 'g'));
        highlight(blocks[i], '#be4f46', new RegExp('&lt;\\?php', 'g'));
        highlight(blocks[i], '#be4f46', new RegExp('\\?&gt;', 'g'));
        highlight(blocks[i], '#e06b75', /\$[A-Za-z0-9_]+/);
        highlight(blocks[i], '#e5bf7b', new RegExp('log', 'g'));
        highlight(blocks[i], '#e5bf7b', /\@[A-Za-z0-9_]+/);
        highlight(blocks[i], '#be4f46', /&lt;[A-Za-z0-9_]+/);
        highlight(blocks[i], '#be4f46', /&lt;\/[A-Za-z0-9_]+&gt;/);
    }
});

function highlight(block, color, regex) {
    let code = block.querySelector('code');
    const match = code.innerHTML.match(regex);
    if (match) {
        const newCode = code.innerHTML.replace(regex, `<span style="color:${color}">${match[0]}</span>`);
        code.innerHTML = newCode;
    }
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generate() {
    let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>
      Connor Law - Case Study - ${document.querySelector('[data-id="meta-title"]').value}
    </title>
    <meta name="author" content="Connor Law">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Discover how I, as a designer & developer, collaborated with Loft Digital for 3 years to improve and enhance various Cyclescheme platforms. By working closely with the client team, I identified pain points, designed new features, and streamlined the user experience, resulting in significant improvements in user engagement and satisfaction. My work with Loft Digital helped to build a strong working relationship with the Cyclescheme team, and I gained valuable experience in designing and developing effective solutions in a complex and ever-changing technological landscape.">
    <link rel="apple-touch-icon" href="../images/logos/logo.svg">
    <link rel="stylesheet" href="../style.css">
    <link rel="icon" href="../images/logos/logo.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  </head>
  <body>
    <nav class="nav">
      <div class="nav__inner">
        <a href="/"><img alt="Connor Law's logo" src="../images/logos/logo.svg"></a>
        <div class="nav__links">
          <ul>
            <li>
              <a class="nav__mob-item" href="/#about">About</a>
            </li>
            <li>
              <a class="nav__mob-item" href="/#services">Services</a>
            </li>
            <li>
              <a class="nav__mob-item" href="/case-studies">Case studies</a>
            </li>
            <li>
              <a class="nav__mob-item" href="/#contact">Contact</a>
            </li>
            <li>
              <div class="nav__links--btn"></div>
            </li>
          </ul>
        </div>
        <div class="nav__mob-btn"></div>
        <div class="nav__mob">
          <div class="nav__mob-close"></div>
          <ul>
            <li>
              <a class="nav__mob-item" href="/#about">About</a>
            </li>
            <li>
              <a class="nav__mob-item" href="/#services">Services</a>
            </li>
            <li>
              <a class="nav__mob-item" href="/case-studies">Case studies</a>
            </li>
            <li>
              <a class="nav__mob-item" href="/#contact">Contact</a>
            </li>
            <li>
              <div class="nav__links--btn"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="section">
      <div class="section__inner">
        <p class="section__inner--subtitle section--center">
          Case study
        </p>
        <h1 class="section__inner--title section--center">
          ${document.querySelector('[data-id="title-first"]').value}<br class="desktop-only">
          ${document.querySelector('[data-id="title-last"]').value}
        </h1><img alt="Case study mockups" class="case-study--hero" src="${document.querySelector('[data-id="image"]').value}"/>
        <div class="case-study">
          <div class="case-study--main">
            <h2>
              Introduction
            </h2>
            <p>
              Over the span of 3 years, I worked alongside the team at <a class="link" href="https://loftdigital.com" target="_blank">Loft Digital</a> to improve, maintain and enhance many of the the <a class="link" href="https://cyclescheme.com" target="_blank">Cyclescheme</a> platforms. These platforms include Angular apps to allow them to rent or buy a bike, a back-end system for managing applications and certificates, a public-facing Smarty (PHP) marketing website, and more. My role in the team as designer & developer was to design new features and enhance old ones, as well as implement my own designs at a code level across many systems, languages and processes.
            </p><br>
            <h2>
              Solution
            </h2>
            <p>
              As the designer and developer on the Loft Digital team, I was responsible for finding solutions to a wide range of challenges in improving and maintaining the Cyclescheme platforms. One of the main challenges we faced was the need to create a seamless user experience across all of the different systems and processes involved in the platforms.
            </p>
            <p>
              To achieve this, I worked closely with the client team to identify pain points and areas for improvement. I then designed and developed new features and enhancements that addressed these issues and streamlined the user experience. This involved working with a variety of languages and technologies, from Angular to Smarty (PHP), as well as managing my work and liaising with the client team to ensure that everyone was on the same page.
            </p><br>
            <h2>
              Outcome
            </h2>
            <p>
              Thanks to our efforts, the Cyclescheme platforms saw a significant improvement in user engagement and satisfaction. The new features and enhancements that we designed and developed made it easier for users to rent or buy a bike and manage their applications and certificates.
            </p>
            <p>
              In addition to these tangible results, our work also helped to strengthen the relationship between Loft Digital and the Cyclescheme team. By working closely with the client team and providing effective solutions to their challenges, we were able to build trust and establish a strong working relationship.
            </p>
            <p>
              Overall, my experience working with Loft Digital on the Cyclescheme platforms was a challenging and rewarding one. I learned a great deal about how to design and develop effective solutions in a complex and ever-changing technological landscape, and I am proud to have played a part in improving the user experience for so many people.
            </p>
          </div>
          <div class="case-study--info case-study--info-cover" onclick="this.classList.remove('case-study--info-cover')">
            <span class="case-study-tile--title">Details</span>
            <p>
              ${document.querySelector('[data-id="image"]').value}
            </p><br>
            <span class="case-study-tile--title">Skills</span>
            <div class="case-study--tags">
              <div class="case-study--tag">
                Angular
              </div>
              <div class="case-study--tag">
                UI/UX
              </div>
              <div class="case-study--tag">
                CSS
              </div>
              <div class="case-study--tag">
                JavaScript
              </div>
            </div><br>
            <span class="case-study-tile--title">Tools</span>
            <div class="case-study--tools">
              <img alt="Angular logo" class="tooltip" data-tooltip="Angular" src="../images/logos/angular.svg" height="32" width="32"> <img alt="Github logo" class="tooltip" data-tooltip="Github" src="../images/logos/github.svg" height="32" width="32"> <img alt="HTML logo" class="tooltip" data-tooltip="HTML" src="../images/logos/html.svg" height="32" width="32"> <img alt="Illustrator logo" class="tooltip" data-tooltip="Illustrator" src="../images/logos/illustrator.svg" height="32" width="32"> <img alt="CSS logo" class="tooltip" data-tooltip="CSS" src="../images/logos/css.svg" height="32" width="32"> <img alt="JavaScript logo" class="tooltip" data-tooltip="JavaScript" src="../images/logos/js.svg" height="32" width="32"> <img alt="Adobe XD logo" class="tooltip" data-tooltip="Adobe XD" src="../images/logos/xd.svg" height="32" width="32"> <img alt="SASS logo" class="tooltip" data-tooltip="SASS" src="../images/logos/sass.svg" height="32" width="32"> <img alt="Photoshop logo" class="tooltip" data-tooltip="Photoshop" src="../images/logos/photoshop.svg" height="32" width="32">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="case-studies" class="section">
      <div class="section__inner">
        <p class="section__inner--subtitle">
          Case studies
        </p>
        <h1 class="section__inner--title">
          More of my latest work
        </h1>
        <div class="case-study-tiles">
          <div class="case-study-tile-wrap">
            <a href="/case-studies/techscheme" class="case-study-tile"><img alt="Case study mockup" src="../images/case-studies/ts.jpg"> <span class="case-study-tile--title">Techscheme</span></a>
            <p>
              Redesign & modernisation of an existing website.
            </p>
            <div class="case-study--tags">
              <div class="case-study--tag">
                UI/UX
              </div>
              <div class="case-study--tag">
                HTML
              </div>
              <div class="case-study--tag">
                CSS
              </div>
              <div class="case-study--tag">
                JS
              </div>
            </div>
          </div>
          <div class="case-study-tile-wrap">
            <a href="/case-studies/brewbabu" class="case-study-tile"><img alt="Case study mockup" src="../images/case-studies/brew.jpg"> <span class="case-study-tile--title">Brewbabu</span></a>
            <p>
              Brand new website featuring full e-commerce and CMS functionality.
            </p>
            <div class="case-study--tags">
              <div class="case-study--tag">
                Squarespace
              </div>
              <div class="case-study--tag">
                UI/UX
              </div>
              <div class="case-study--tag">
                E-commerce
              </div>
            </div>
          </div>
          <div class="case-study-tile-wrap case-study-tile-wrap--coming-soon">
            <a class="case-study-tile"><img alt="Case study mockup" src="../images/case-studies/ba.jpg"> <span class="case-study-tile--title">Bicycle Association</span></a>
            <p>
              Continuous design and development for the leading UK cycling body.
            </p>
            <div class="case-study--tags">
              <div class="case-study--tag">
                Wordpress
              </div>
              <div class="case-study--tag">
                PHP
              </div>
              <div class="case-study--tag">
                UI/UX
              </div>
            </div>
          </div>
        </div><br>
        <a class="button" href="/case-studies">Show all</a>
        <div id="contact" class="callout left-aligned">
          <div class="callout--inner">
            <h1 class="section__inner--title">
              Let's grow your business,<br>
              together
            </h1>
            <div class="callout--inner-content">
              <div>
                Whether you're after a new design, fresh development or just have a great business idea you want to get the ball rolling on, I'm here to help. I'm just a click away. Let's get started, today.
              </div><a class="button" href="mailto:connorlaw96@hotmail.com?subject=Website%20enquiry">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <section class="section">
        <div class="section__inner">
          <div class="socials">
            <a target="_blank" href="https://codepen.io/connorlaw" rel="noopener noreferrer"><img height="32" width="32" class="social" src="../images/logos/logo_codepen.svg" alt="Codepen logo"></a> <a target="_blank" href="https://uk.linkedin.com/in/connor-law-77b176159" rel="noopener noreferrer"><img height="32" width="32" class="social" src="../images/logos/logo_linkedin.svg" alt="Linkedin logo"></a>
          </div>
          <p>
            &copy; 2023 &middot; Connor Law
          </p>
        </div>
      </section>
    </footer>
    <script type="text/javascript" src="../script.js"></script>
  </body>
</html>`;
    document.getElementById('output').innerText = html;
    document.getElementById('output').style.display = 'block';
    document.getElementById('output-val').value = html;
}