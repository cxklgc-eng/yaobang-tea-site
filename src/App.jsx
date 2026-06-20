import { useEffect, useState } from "react";
import {
  ClockCounterClockwise,
  Drop,
  Leaf,
  Mountains,
  Package,
  SealCheck,
  ThermometerSimple,
  Wine,
} from "@phosphor-icons/react";

const navItems = [
  { label: "茶品", href: "#tea" },
  { label: "古树之源", href: "#origin" },
  { label: "茶礼空间", href: "#space" },
  { label: "品饮指南", href: "#guide" },
  { label: "关于瑶邦", href: "#about" },
];

const tastingProfiles = [
  {
    key: "bright",
    title: "清亮甘润",
    notes: "汤色金黄透亮，入口干净，清甜从舌面缓缓铺开。",
  },
  {
    key: "wild",
    title: "山野气韵",
    notes: "古树叶脉带来明朗木质香，回甘绵长，喉韵深稳。",
  },
  {
    key: "warm",
    title: "蜜香渐生",
    notes: "醒茶后蜜甜与花香浮现，适合慢饮，也适合收藏转化。",
  },
];

const guideItems = [
  {
    icon: Leaf,
    title: "茶器",
    desc: "建议使用盖碗或紫砂壶，保留茶汤层次与山野风味。",
  },
  {
    icon: ThermometerSimple,
    title: "水温",
    desc: "95-100度沸水冲泡，激发茶香与内质。",
  },
  {
    icon: Wine,
    title: "投茶量",
    desc: "建议7-8克，可依口感浓淡微调。",
  },
  {
    icon: ClockCounterClockwise,
    title: "冲泡次数",
    desc: "前段快出汤，尾段适当延长，可冲泡8-12道以上。",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="回到瑶邦茶叶首页">
      <span className="brand-seal">瑶</span>
      <span className="brand-text">瑶邦茶叶</span>
    </a>
  );
}

function SectionTitle({ kicker, title, copy }) {
  return (
    <div className="section-title">
      <span>{kicker}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profile, setProfile] = useState(tastingProfiles[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <BrandMark />
        <nav className={menuOpen ? "is-open" : ""} aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="reserve-link" href="#guide">
          预约品鉴
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img src="/assets/tea-service.png" alt="" />
          </div>
          <div className="hero-content">
            <h1 id="hero-title">瑶邦茶叶</h1>
            <p className="hero-line">一盏古树生茶 · 山野气韵 · 甘润回甘</p>
            <p className="hero-copy">
              源自云雾深山的古树鲜叶，传统工艺精制而成。茶汤清澈明亮，
              香气高扬悠长，入口甘润，回味绵延。
            </p>
            <div className="hero-actions" aria-label="主要操作">
              <a className="button button-primary" href="#guide">
                预约品鉴
              </a>
              <a className="button button-secondary" href="#tea">
                浏览产品
              </a>
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label="品牌宣言">
          <p>山有瑶邦，茶自天成</p>
        </section>

        <section className="split-section light" id="tea">
          <div className="section-copy">
            <SectionTitle
              kicker="茶汤香气"
              title="金汤澄亮，入口甘润"
              copy="冲泡后汤色金黄透亮，花香清扬，蜜香隐现。入口干净饱满，回甘由舌面延展至喉间，茶气沉稳。"
            />
            <div className="profile-tabs" role="tablist" aria-label="品饮特征">
              {tastingProfiles.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={profile.key === item.key ? "is-active" : ""}
                  onClick={() => setProfile(item)}
                  role="tab"
                  aria-selected={profile.key === item.key}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="profile-note" aria-live="polite">
              <strong>{profile.title}</strong>
              <span>{profile.notes}</span>
            </div>
          </div>
          <figure className="image-frame tea-pour">
            <img src="/assets/tea-service.png" alt="盖碗茶叶与深色茶盏的品饮茶席" />
          </figure>
        </section>

        <section className="split-section dark reverse" id="origin">
          <figure className="image-frame leaves">
            <img src="/assets/fresh-leaves.png" alt="鲜采茶叶铺陈在制茶设备中" />
          </figure>
          <div className="section-copy">
            <SectionTitle
              kicker="鲜叶初制"
              title="鲜叶入手，茶香未远"
              copy="甄选古树茶鲜叶，人工采摘，日光萎凋，传统手工杀青与揉捻，保留鲜叶本真活性，为后期转化奠定清晰基础。"
            />
            <div className="detail-row">
              <span>
                <Mountains size={20} weight="light" /> 深山古树
              </span>
              <span>
                <Drop size={20} weight="light" /> 低温慢制
              </span>
              <span>
                <SealCheck size={20} weight="light" /> 匠心精选
              </span>
            </div>
          </div>
        </section>

        <section className="split-section light product-feature">
          <div className="section-copy">
            <SectionTitle
              kicker="古树茶饼"
              title="石磨压制，松紧适度"
              copy="茶饼圆整，条索清晰，内质丰润。时光沉淀后，生茶的山野韵味更显温润，适合日常品饮，也适合长期收藏。"
            />
            <a className="text-link" href="#guide">
              探索茶饼
            </a>
          </div>
          <figure className="image-frame cake">
            <img src="/assets/tea-cake-display.png" alt="瑶邦茶叶普洱生茶茶饼陈列在木质茶托上" />
          </figure>
        </section>

        <section className="space-section" id="space">
          <div className="space-overlay">
            <SectionTitle
              kicker="茶礼空间"
              title="一方茶席，静心相对"
              copy="从茶席到陈列，从收藏到赠礼，瑶邦茶叶以东方礼序承载山野风味，让每一次开汤都有安静的仪式感。"
            />
            <a className="button button-outline" href="#about">
              了解茶礼空间
            </a>
          </div>
          <img src="/assets/tea-room-sign.png" alt="瑶邦茶叶茶室木质陈列空间" />
        </section>

        <section className="guide-section" id="guide">
          <div className="guide-heading">
            <SectionTitle
              kicker="品饮建议"
              title="醒茶有度，水路更清"
              copy="以较高水温激发古树茶的香气和内质，前段快出汤，后段随汤感延长时间。"
            />
          </div>
          <div className="guide-grid">
            {guideItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="guide-item" key={item.title}>
                  <Icon size={32} weight="light" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner">
            <div>
              <span className="round-seal">瑶邦茶叶</span>
            </div>
            <div>
              <h2>源自山林，归于茶席</h2>
              <p>
                瑶邦茶叶以古树普洱为核心，重视原料、工艺、茶汤与茶礼场景的完整呈现。
                我们希望每一饼茶都能留下清楚的山野气韵，也能进入日常生活里的安静片刻。
              </p>
            </div>
            <figure>
              <img src="/assets/ancient-tree.png" alt="山林中的古茶树" />
            </figure>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark />
        <div className="footer-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <p>© 瑶邦茶叶 · 保留所有权利</p>
      </footer>
    </>
  );
}
