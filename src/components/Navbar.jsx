import { ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于我' },
  { href: '#projects', label: '精选项目' },
  { href: '#portfolio', label: '作品展示' },
  { href: '#contact', label: '联系我' },
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand-mark" href="#home" aria-label="回到首页">
        <span>刁</span>
        <strong>USER OPS</strong>
      </a>
      <nav className="nav-links" aria-label="页面导航">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        联系 <ArrowUpRight size={17} strokeWidth={2.5} />
      </a>
    </header>
  );
}

export default Navbar;
