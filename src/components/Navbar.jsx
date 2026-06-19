import { ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于我' },
  { href: '#projects', label: '精选项目' },
  { href: '#portfolio', label: '作品展示' },
  { href: '#contact', label: '联系我' },
];

function scrollToAnchor(event, href) {
  const target = document.querySelector(href);

  if (!target) return;

  event.preventDefault();
  window.history.pushState(null, '', href);

  const top = target.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top, behavior: 'smooth' });

  window.setTimeout(() => {
    const adjustedTop = target.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: adjustedTop, behavior: 'smooth' });
  }, 450);
}

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand-mark" href="#home" aria-label="回到首页" onClick={(event) => scrollToAnchor(event, '#home')}>
        <span>刁</span>
        <strong>USER OPS</strong>
      </a>
      <nav className="nav-links" aria-label="页面导航">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={(event) => scrollToAnchor(event, link.href)}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact" onClick={(event) => scrollToAnchor(event, '#contact')}>
        联系 <ArrowUpRight size={17} strokeWidth={2.5} />
      </a>
    </header>
  );
}

export default Navbar;
