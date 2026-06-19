import { Download, Mail, MessageCircle, Phone } from 'lucide-react';
import { profile } from '../data/profile.js';

function ContactFooter() {
  return (
    <footer id="contact" className="contact-section">
      <div className="shell contact-inner">
        <div className="contact-copy">
          <span className="section-kicker">contact</span>
          <h2>
            <span>让用户关系，</span>
            <span>成为长期资产。</span>
          </h2>
          <p>如果你对我的作品和经历感兴趣，可以通过以下方式联系我。</p>
        </div>

        <div className="contact-cards" aria-label="联系方式">
          <div className="contact-card">
            <MessageCircle size={24} />
            <span>微信</span>
            <strong>{profile.wechat}</strong>
          </div>
          <div className="contact-card">
            <Mail size={24} />
            <span>邮箱</span>
            <strong>{profile.email}</strong>
          </div>
          <div className="contact-card">
            <Phone size={24} />
            <span>电话</span>
            <strong>{profile.phone}</strong>
          </div>
        </div>

        <div className="contact-actions">
          <a className="magnetic-button" href={profile.resumePdf} download>
            <Download size={19} />
            下载简历
          </a>
        </div>

        <div className="footer-line">
          <span>{profile.name} / {profile.role}</span>
          <span>© 2026 USER OPS PORTFOLIO</span>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
