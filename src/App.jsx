import { useEffect, useState } from 'react'
import heroImage from './assets/mimi-moment-mimi-nation.gif'
import aboutLeft from './assets/96c0f-af8c0b2a8e991ffa4978ce96bec083f51348333c_hq.gif'
import aboutRight from './assets/b32fd2ff3a18f76a34f9cbd4bce64c00.gif'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [entered, setEntered] = useState(false)
  const [view, setView] = useState('main')
  const [activeSection, setActiveSection] = useState('resuming')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
  }

  const handleEnter = () => {
    setEntered(true)
  }

  const handleOpenAbout = () => {
    setView('about')
  }

  const handleBack = () => {
    setView('main')
  }

  const handleOpenConnection = () => {
    setView('main')
    setTimeout(() => {
      const section = document.getElementById('connect')
      section?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  const handleNavClick = (targetId) => {
    setView('main')
    setTimeout(() => {
      const section = document.getElementById(targetId)
      section?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  useEffect(() => {
    if (!entered || view !== 'main') return

    const sectionIds = ['resuming', 'lore', 'achievements', 'quest-log', 'connect']
    const handleScroll = () => {
      const offset = 160
      const current = sectionIds.findLast((id) => {
        const element = document.getElementById(id)
        if (!element) return false
        return element.getBoundingClientRect().top <= offset
      })
      if (current) setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [entered, view])

  return (
    <div className="app" data-theme={theme}>
      {!entered ? (
        <section className="intro">
          <div className="intro__hi">HI!</div>
          <div className="intro__copy">
            <p>WELCOME TO MY PERSONAL WEBSITE.</p>
            <p>
              I have created this website to feel like a game/sci-fi interface. All text inside
              tries to reflect this.
            </p>
            <p>
              You will find “achievements” or “quests” that show the progress in my professional
              life and are related to what I am working on.
            </p>
            <button type="button" onClick={handleEnter}>
              ENTER THE SYSTEM
            </button>
          </div>
        </section>
      ) : view === 'about' ? (
        <section className="about">
          <div className="about__header">
            <div>
              <span className="about__level">48 LEVEL</span>
              <span className="about__coins">1,425 COINS AWARDED</span>
            </div>
            <button type="button" className="ghost" onClick={handleBack}>
              BACK TO SYSTEM
            </button>
          </div>
          <div className="about__grid">
            <aside className="about__profile">
              <div className="about__avatar">
                <img src={aboutLeft} alt="About profile" />
              </div>
              <div>
                <span>NAME</span>
                <strong>ANKHBAYR ZOPLOK</strong>
              </div>
              <div>
                <span>OCCUPATION</span>
                <strong>WEB DEVELOPER</strong>
              </div>
              <div>
                <span>CORPORATION</span>
                <strong>LEGACY.AI</strong>
              </div>
              <div>
                <span>AVAILABILITY</span>
                <strong className="accent">OPEN FOR HIRE</strong>
              </div>
              <button type="button" onClick={handleOpenConnection}>
                OPEN CONNECTION
              </button>
            </aside>
            <div className="about__story">
              <h2>WHO IS ANKHBAYR?</h2>
              <p>
                I have always been fascinated by the endless possibilities of the internet and
                the ways it can be leveraged to make our lives better. I craft web experiences
                that solve complex problems and make a difference in people’s lives.
              </p>
              <p>
                Throughout my career, I have worked with a wide range of technologies, from front-
                end frameworks like React and Node.js to back-end services and deployment pipelines.
              </p>
              <p>
                As a web engineer, I aim to prioritize usability, scalability, and security. I
                enjoy collaborating with teams and clients to deliver the best possible solutions.
              </p>
            </div>
            <div className="about__model">
              <img src={aboutRight} alt="About model" />
            </div>
          </div>
        </section>
      ) : (
        <>
          <header className="hero" id="resuming">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__content">
          <div className="theme-toggle">
            <span>{theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE'}</span>
            <button type="button" onClick={toggleTheme}>
              TOGGLE
            </button>
          </div>
          <div className="hero__meta">
            <span>40 LVL</span>
            <span>1,425 XP</span>
            <span>87 QUESTS</span>
          </div>
          <h1 className="glitch" data-text="FULLSTACK DEV">
            FULLSTACK DEV
          </h1>
          <p className="hero__tagline">
            Crafting digital experiences &amp; vast networks of interconnected systems.
            Spreading code, innovation, and solutions across the globe.
          </p>
          <div className="hero__profile">
            <div>
              <span>NAME</span>
              <strong>ANKHBAYR ZOPLOK</strong>
            </div>
            <div>
              <span>ROLE</span>
              <strong>FULL STACK DEVELOPER</strong>
            </div>
            <div>
              <span>SPECIALIZATION</span>
              <strong>WEB APPLICATIONS</strong>
            </div>
            <div>
              <span>LOCATION</span>
              <strong>REMOTE</strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong className="accent">OPEN FOR HIRE</strong>
            </div>
          </div>
        </div>
        <div className="hero__media" role="button" tabIndex={0} onClick={handleOpenAbout}>
          <img src={heroImage} alt="Hero" />
        </div>
        <aside className="hero__panel">
          <h3>ACTIVE QUEST</h3>
          <p className="panel__title">VISIT PORTFOLIO</p>
          <div className="panel__divider" />
          <p className="panel__label">OBJECTIVES</p>
          <ul>
            <li>VIEW PROJECTS</li>
            <li>CHECK SKILLS</li>
            <li>SEND MESSAGE</li>
          </ul>
          <p className="panel__reward">
            REWARD: <span className="accent">NEW CONNECTION</span>
          </p>
        </aside>
      </header>

      <section className="section lore" id="lore">
        <div className="section__header">
          <h2>LORE</h2>
          <p>PROFILE · BACKSTORY</p>
        </div>
        <div className="lore__grid">
          <div className="lore__media">
            <div className="lore__image">
              <div className="image__overlay" />
              <span className="image__label">SIGNAL FEED</span>
            </div>
            <p className="lore__below">
              With years of experience across startups and enterprise environments, I bring a
              battle-tested approach to solving complex technical challenges. Every project is an
              adventure — every line of code, a step forward.
            </p>
          </div>
          <div className="lore__text">
            <p>
              A seasoned fullstack developer navigating the vast digital ocean. Specializing in
              building scalable web applications, architecting databases, and crafting seamless
              user experiences from front to back.
            </p>
          </div>
          <div className="lore__stats">
            <h3>CHARACTER STATS</h3>
            <div className="stats__grid">
              <div>
                <span>STRENGTH</span>
                <strong>Problem Solving</strong>
              </div>
              <div>
                <span>AGILITY</span>
                <strong>Fast Learner</strong>
              </div>
              <div>
                <span>INTELLECT</span>
                <strong>System Design</strong>
              </div>
              <div>
                <span>WISDOM</span>
                <strong>Clean Code</strong>
              </div>
              <div>
                <span>CHARISMA</span>
                <strong>Team Player</strong>
              </div>
              <div>
                <span>ENDURANCE</span>
                <strong>Deadline Driven</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section achievements" id="achievements">
        <div className="section__header">
          <h2>ACHIEVEMENTS</h2>
          <p>SKILL TREE · UNLOCKED ABILITIES</p>
        </div>
        <div className="skills">
          {[
            ['REACT / NEXT.JS', 70],
            ['TYPESCRIPT', 70],
            ['NODE.JS', 70],
            ['PYTHON', 70],
            ['DATABASES (SQL/NoSQL)', 70],
            ['DEVOPS / CI-CD', 70],
            ['SYSTEM DESIGN', 70],
            ['UI/UX DESIGN', 70],
          ].map(([label, value]) => (
            <div className="skill" key={label}>
              <div className="skill__row">
                <span>{label}</span>
                <span className="accent">{value}</span>
              </div>
              <div className="skill__bar">
                <span style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="xp">
          <div className="xp__row">
            <span>TOTAL XP</span>
            <span className="accent">1425 / 2000</span>
          </div>
          <div className="xp__bar">
            <span style={{ width: '71%' }} />
          </div>
          <p>575 XP until next level</p>
        </div>
      </section>

      <section className="section quests" id="quest-log">
        <div className="section__header">
          <h2>QUEST LOG</h2>
          <p>DATA LOGS · PROJECT CHRONICLE</p>
        </div>
        <div className="quest__list">
          {[
            {
              title: 'PORTFOLIO',
              desc: 'Personal portfolio site showcasing projects and contact information.',
              tags: ['HTML', 'CSS', 'JavaScript'],
              status: 'COMPLETED',
              date: '2026.02.01',
              link: 'https://github.com/Zoplok/Myweb.git',
            },
            {
              title: 'PIXEL FURY',
              desc: 'Retro-styled game experience with fast-paced action and custom pixel art.',
              tags: ['Game Dev', 'JavaScript', 'Canvas'],
              status: 'COMPLETED',
              date: '2026.01.18',
              link: 'https://github.com/Zoplok/ALT-F4.git',
            },
            {
              title: 'ANIMAL DETECT',
              desc: 'Camera-based animal detection tool leveraging image recognition workflows.',
              tags: ['Computer Vision', 'Camera', 'ML'],
              status: 'COMPLETED',
              date: '2025.12.10',
              link: 'https://github.com/Zoplok/camera.git',
            },
          ].map((quest) => (
            <article className="quest" key={quest.title}>
              <div>
                <h3>{quest.title}</h3>
                <p>{quest.desc}</p>
                <div className="quest__tags">
                  {quest.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  <a href={quest.link} target="_blank" rel="noreferrer">
                    VIEW REPO
                  </a>
                </div>
              </div>
              <div className="quest__meta">
                <span className={`status ${quest.status === 'COMPLETED' ? 'complete' : 'progress'}`}>
                  {quest.status}
                </span>
                <span>{quest.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section connect" id="connect">
        <div className="section__header">
          <h2>OPEN CONNECTION</h2>
          <p>PLEASE APPLY TO OPEN DIRECT COMMUNICATION</p>
        </div>
        <div className="connect__grid">
          <form className="connect__form" onSubmit={handleSubmit}>
            <label>
              HOW SHOULD I CALL YOU?
              <input type="text" placeholder="YOUR NAME" />
            </label>
            <label>
              SENDING FROM
              <input type="email" placeholder="YOUR.NAME@MAIL.COM" />
            </label>
            <label>
              TRANSMITTED DATA
              <textarea placeholder="ALL I HAVE TO SAY IS THAT..." rows={5} />
            </label>
            <div className="connect__actions">
              <button type="submit">SEND MESSAGE [ENTER]</button>
              <button type="reset" className="ghost">
                DISCARD [ESC]
              </button>
            </div>
          </form>
          <aside className="connect__panel">
            <h3>QUICK LINKS</h3>
            <div>
              <span>GITHUB</span>
              <strong>github.com/Zoplok</strong>
            </div>
            <div>
              <span>TELEGRAM</span>
              <strong>telegram.me/Zoplok</strong>
            </div>
            <div>
              <span>EMAIL</span>
              <strong>zoplokr1@gmail.com</strong>
            </div>
            <div>
              <span>DISCORD</span>
              <strong>Zoplokr1#0001</strong>
            </div>
          </aside>
        </div>
      </section>

          <footer className="nav">
            <button
              type="button"
              className={activeSection === 'resuming' ? 'nav__active' : undefined}
              onClick={() => handleNavClick('resuming')}
            >
              RESUMING
            </button>
            <button
              type="button"
              className={activeSection === 'lore' ? 'nav__active' : undefined}
              onClick={() => handleNavClick('lore')}
            >
              LORE
            </button>
            <button
              type="button"
              className={activeSection === 'achievements' ? 'nav__active' : undefined}
              onClick={() => handleNavClick('achievements')}
            >
              ACHIEVEMENTS
            </button>
            <button
              type="button"
              className={activeSection === 'quest-log' ? 'nav__active' : undefined}
              onClick={() => handleNavClick('quest-log')}
            >
              QUEST LOG
            </button>
            <button
              type="button"
              className={activeSection === 'connect' ? 'nav__active' : undefined}
              onClick={() => handleNavClick('connect')}
            >
              CONNECT
            </button>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
